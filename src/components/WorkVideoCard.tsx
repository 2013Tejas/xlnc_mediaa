import React, { useState, useEffect, useRef, useCallback } from 'react';
import playerjs from 'player.js';
import { WorkVideo } from '../types';

export interface WorkVideoCardProps {
  video: WorkVideo;
  isDominant?: boolean;
  isVisible?: boolean;
  onSelectCard?: (id: string | number) => void;
  // Backwards compatibility props
  isActive?: boolean;
  onPlay?: () => void;
  onClose?: () => void;
}

// Check whether current browser natively supports HLS streaming (.m3u8)
// Returns true for iOS Safari, iOS Chrome, Mac Safari, and HLS-capable Android browsers
const canPlayNativeHLS = (): boolean => {
  if (typeof document === 'undefined') return false;
  const testEl = document.createElement('video');
  return Boolean(
    testEl.canPlayType('application/vnd.apple.mpegurl') ||
    testEl.canPlayType('application/x-mpegURL')
  );
};

export const WorkVideoCard: React.FC<WorkVideoCardProps> = ({
  video,
  isDominant: propIsDominant,
  isVisible: propIsVisible,
  onSelectCard,
  isActive
}) => {
  const isDominant = propIsDominant ?? isActive ?? false;
  const isVisible = propIsVisible ?? true;

  // Track initialization, playback, audio, hover, and autoplay restriction state
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [hasStartedRendering, setHasStartedRendering] = useState(false);
  const [useNativeVideo, setUseNativeVideo] = useState(() => canPlayNativeHLS());

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<playerjs.Player | null>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);

  // Gumlet HLS manifest and Embed URLs
  const hlsSrc = `https://video.gumlet.io/6aaaf0ad4b9588fb8c42027c/${video.videoId}/main.m3u8`;
  const embedSrc = `https://play.gumlet.io/embed/${video.videoId}?autoplay=true&loop=true&muted=true&playsinline=true&preload=auto`;

  // Lazily load media as soon as the card becomes dominant, visible, or hovered
  useEffect(() => {
    if ((isDominant || isVisible || isHovered) && !isLoaded) {
      setIsLoaded(true);
    }
  }, [isDominant, isVisible, isHovered, isLoaded]);

  // Ensure DOM-level properties for native video comply with browser autoplay policies
  useEffect(() => {
    if (useNativeVideo && videoRef.current) {
      const vid = videoRef.current;
      vid.muted = isMuted;
      vid.defaultMuted = isMuted;
      vid.playsInline = true;
      vid.setAttribute('playsinline', '');
      vid.setAttribute('webkit-playsinline', '');
    }
  }, [useNativeVideo, isMuted]);

  // Safe playback execution with Promise rejection handling (e.g. iOS Low Power Mode or rapid hover moves)
  const safePlayVideo = useCallback(async () => {
    if (useNativeVideo && videoRef.current) {
      const vid = videoRef.current;
      try {
        vid.muted = isMuted;
        const playPromise = vid.play();
        playPromiseRef.current = playPromise;
        if (playPromise !== undefined) {
          await playPromise;
        }
        setIsPlaying(true);
        setAutoplayBlocked(false);
      } catch (error: any) {
        if (error?.name === 'AbortError') {
          // Playback request was safely superseded by a pause request during rapid mouse hover, ignore
          return;
        }
        if (process.env.NODE_ENV !== 'production') {
          console.info(`[Video ${video.id}] Autoplay prevented, awaiting tap:`, error);
        }
        setIsPlaying(false);
        setAutoplayBlocked(true);
      } finally {
        playPromiseRef.current = null;
      }
    } else if (playerRef.current) {
      try {
        playerRef.current.play();
        setIsPlaying(true);
      } catch {
        setAutoplayBlocked(true);
      }
    }
  }, [useNativeVideo, isMuted, video.id]);

  const safePauseVideo = useCallback(() => {
    if (useNativeVideo && videoRef.current) {
      const vid = videoRef.current;
      if (playPromiseRef.current) {
        playPromiseRef.current
          .then(() => {
            if (vid && !vid.paused) {
              vid.pause();
            }
          })
          .catch(() => {});
      } else if (!vid.paused) {
        vid.pause();
      }
      setIsPlaying(false);
    } else if (playerRef.current) {
      try {
        playerRef.current.pause();
        setIsPlaying(false);
      } catch {
        // ignore
      }
    }
  }, [useNativeVideo]);

  // Active playback triggers: plays when dominant or hovered while in view
  const shouldPlay = (isDominant || isHovered) && isVisible;

  useEffect(() => {
    if (!isLoaded) return;

    if (shouldPlay) {
      safePlayVideo();
    } else {
      safePauseVideo();
    }
  }, [shouldPlay, isLoaded, safePlayVideo, safePauseVideo]);

  // Play on hover handlers
  const handleMouseEnter = () => {
    if (!isLoaded) {
      setIsLoaded(true);
    }
    setIsHovered(true);
    onSelectCard?.(video.id);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Attach player.js for embed iframe fallback (desktop Chrome / Edge)
  useEffect(() => {
    if (!isLoaded || useNativeVideo) return;

    let playerInstance: playerjs.Player | null = null;

    const initPlayer = () => {
      if (!iframeRef.current) return;

      try {
        playerInstance = new playerjs.Player(iframeRef.current);
        playerRef.current = playerInstance;

        playerInstance.on('ready', () => {
          playerInstance?.on('play', () => {
            setIsPlaying(true);
            setHasStartedRendering(true);
            setAutoplayBlocked(false);
          });

          playerInstance?.on('timeupdate', () => {
            setIsPlaying(true);
            setHasStartedRendering(true);
          });

          playerInstance?.on('ended', () => {
            try {
              playerInstance?.setCurrentTime(0);
              playerInstance?.play();
            } catch {
              // ignore
            }
          });

          if (isDominant && isVisible) {
            try {
              playerInstance?.play();
            } catch {
              setAutoplayBlocked(true);
            }
          }
        });
      } catch {
        // fallback if player.js fails
      }
    };

    const timer = setTimeout(initPlayer, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [isLoaded, useNativeVideo, isDominant, isVisible]);

  // Window message listener as robust cross-frame fallback for Gumlet/PlayerJS events
  useEffect(() => {
    if (useNativeVideo) return;

    const handleMessage = (event: MessageEvent) => {
      if (!event.data) return;

      let data = event.data;
      if (typeof data === 'string') {
        try {
          data = JSON.parse(data);
        } catch {
          return;
        }
      }

      if (
        data.event === 'play' ||
        data.event === 'timeupdate' ||
        data.event === 'playing' ||
        (data.context === 'player.js' && (data.event === 'play' || data.event === 'timeupdate'))
      ) {
        setIsPlaying(true);
        setHasStartedRendering(true);
        setAutoplayBlocked(false);
      }

      if (
        data.event === 'ended' ||
        data.method === 'ended' ||
        (data.context === 'player.js' && data.event === 'ended')
      ) {
        if (playerRef.current) {
          try {
            playerRef.current.setCurrentTime(0);
            playerRef.current.play();
          } catch {
            // ignore
          }
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [useNativeVideo]);

  // Native video event handlers
  const handleNativePlaying = () => {
    setIsPlaying(true);
    setHasStartedRendering(true);
    setAutoplayBlocked(false);
  };

  const handleNativePause = () => {
    setIsPlaying(false);
  };

  const handleNativeEnded = () => {
    if (videoRef.current) {
      try {
        videoRef.current.currentTime = 0;
        const p = videoRef.current.play();
        if (p !== undefined) {
          p.catch(() => {});
        }
      } catch {
        // ignore
      }
    }
  };

  const handleNativeError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const mediaEl = e.currentTarget;
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[Video ${video.id}] Native playback error, falling back to embed:`, mediaEl.error);
    }
    // Fall back to Gumlet embed player if native HLS fails on unusual browser
    setUseNativeVideo(false);
  };

  // Direct user tap/click on the card
  const handleCardInteraction = async (e: React.MouseEvent) => {
    // If clicking directly on mute button, avoid triggering card click
    const target = e.target as HTMLElement;
    if (target.closest('button[data-audio-toggle]')) {
      return;
    }

    onSelectCard?.(video.id);

    if (useNativeVideo && videoRef.current) {
      const vid = videoRef.current;
      if (vid.paused) {
        try {
          vid.muted = isMuted;
          const p = vid.play();
          if (p !== undefined) {
            await p;
          }
          setIsPlaying(true);
          setAutoplayBlocked(false);
        } catch (err) {
          console.warn('Manual tap play failed:', err);
        }
      } else {
        vid.pause();
        setIsPlaying(false);
      }
    } else if (playerRef.current) {
      try {
        if (isPlaying) {
          playerRef.current.pause();
          setIsPlaying(false);
        } else {
          playerRef.current.play();
          setIsPlaying(true);
          setAutoplayBlocked(false);
        }
      } catch (err) {
        console.warn('PlayerJS tap failed:', err);
      }
    }
  };

  const isPosterHidden = hasStartedRendering && isPlaying;

  return (
    <article
      aria-label={`Portfolio video ${video.id}`}
      onClick={handleCardInteraction}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`work-video-card-inner group relative w-full h-full overflow-hidden bg-[#0A0A0A] border ${
        isHovered || isDominant ? 'border-[#E5D0A1]/60 shadow-[0_12px_40px_rgba(229,208,161,0.12)]' : 'border-[#222222]'
      } hover:border-[#E5D0A1]/60 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.45)] cursor-pointer select-none`}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundColor: '#0A0A0A'
      }}
    >
      {/* 
        POSTER / THUMBNAIL LAYER
        - Stays completely visible until frames actually start rendering.
        - Fades smoothly with 400ms CSS transition.
      */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500 ease-out z-10 ${
          isPosterHidden ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          backgroundImage: `url("${video.thumbnailUrl}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#0A0A0A'
        }}
      />

      {/* 
        VIDEO PLAYER LAYER (Native <video> on iOS/Safari, Gumlet embed iframe on Desktop MSE)
      */}
      {isLoaded && (
        <div
          className="video-wrapper absolute inset-0 w-full h-full bg-[#0A0A0A] z-0 overflow-hidden"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#0A0A0A'
          }}
        >
          {useNativeVideo ? (
            <video
              ref={videoRef}
              src={hlsSrc}
              poster={video.thumbnailUrl}
              autoPlay
              muted
              playsInline
              loop
              preload="auto"
              onPlaying={handleNativePlaying}
              onPause={handleNativePause}
              onEnded={handleNativeEnded}
              onError={handleNativeError}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                border: 0
              }}
            />
          ) : (
            <iframe
              ref={iframeRef}
              title={`Video stream ${video.id}`}
              src={embedSrc}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                border: 0
              }}
              referrerPolicy="origin"
              allow="accelerometer; gyroscope; autoplay *; encrypted-media *; picture-in-picture *; fullscreen *"
              allowFullScreen
            />
          )}
        </div>
      )}
    </article>
  );
};

