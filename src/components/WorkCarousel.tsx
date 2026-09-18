import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { WorkVideo } from '../types';
import { WorkVideoCard } from './WorkVideoCard';

interface WorkCarouselProps {
  videos: WorkVideo[];
  activeVideoId?: string | number | null;
  onActiveVideoChange?: (id: string | number | null) => void;
}

export const WorkCarousel: React.FC<WorkCarouselProps> = ({
  videos,
  activeVideoId: externalActiveVideoId,
  onActiveVideoChange
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardElementsRef = useRef<Map<string | number, HTMLDivElement>>(new Map());

  // Track active video state internally if not controlled externally
  const [internalActiveVideoId, setInternalActiveVideoId] = useState<string | number | null>(null);
  const activeVideoId = externalActiveVideoId !== undefined ? externalActiveVideoId : internalActiveVideoId;

  // Track visibility per card
  const [visibleCardIds, setVisibleCardIds] = useState<Set<string | number>>(new Set());

  const setActiveVideo = useCallback((id: string | number | null) => {
    if (onActiveVideoChange) {
      onActiveVideoChange(id);
    } else {
      setInternalActiveVideoId(id);
    }
  }, [onActiveVideoChange]);

  // Arrow button navigation state
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  // Measure and update scroll boundary state
  const updateScrollState = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = Math.max(0, scrollWidth - clientWidth);

    setCanScrollPrev(scrollLeft > 6);
    setCanScrollNext(scrollLeft < maxScroll - 6);
  }, []);

  // Set up IntersectionObserver:
  // - Monitors each card's intersection with the viewport.
  // - Uses rootMargin: "100px 0px" so the card can prepare lazily before entering the exact center.
  // - Threshold 0.55 triggers autoplay for the dominant visible card.
  useEffect(() => {
    const ratios = new Map<string | number, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const rawId = entry.target.getAttribute('data-video-id');
          if (!rawId) return;
          const id = Number.isNaN(Number(rawId)) ? rawId : Number(rawId);

          ratios.set(id, entry.intersectionRatio);
        });

        setVisibleCardIds((prev) => {
          const updated = new Set(prev);
          entries.forEach((entry) => {
            const rawId = entry.target.getAttribute('data-video-id');
            if (!rawId) return;
            const id = Number.isNaN(Number(rawId)) ? rawId : Number(rawId);
            if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
              updated.add(id);
            } else if (!entry.isIntersecting || entry.intersectionRatio < 0.15) {
              updated.delete(id);
            }
          });
          return updated;
        });

        // Find the video card with the maximum intersection ratio
        let bestId: string | number | null = null;
        let maxRatio = 0;

        ratios.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            bestId = id;
          }
        });

        // Activation threshold: >= 35% visible triggers dominant video selection on mobile & desktop
        if (maxRatio >= 0.35 && bestId !== null) {
          setActiveVideo(bestId);
        } else if (maxRatio < 0.1) {
          setActiveVideo(null);
        }
      },
      {
        threshold: [0, 0.15, 0.35, 0.55, 0.75, 1.0],
        rootMargin: '100px 0px',
        root: null
      }
    );

    cardElementsRef.current.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [videos, setActiveVideo]);

  // Ensure first video is promptly ready when the user views the carousel
  useEffect(() => {
    if (activeVideoId === null && videos.length > 0) {
      if (visibleCardIds.size === 0 || visibleCardIds.has(videos[0].id)) {
        setActiveVideo(videos[0].id);
      }
    }
  }, [visibleCardIds, activeVideoId, videos, setActiveVideo]);

  // Handle scroll and resize listeners for arrow boundaries
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    updateScrollState();

    const handleScroll = () => {
      updateScrollState();
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateScrollState, { passive: true });

    return () => {
      el.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState, videos.length]);

  const handleArrowScroll = (direction: 'prev' | 'next') => {
    const el = containerRef.current;
    if (!el) return;

    const cardEl = el.querySelector<HTMLElement>('[data-carousel-item]');
    const cardWidth = cardEl ? cardEl.offsetWidth : 280;
    const computedStyle = window.getComputedStyle(el);
    const gap = parseFloat(computedStyle.columnGap || computedStyle.gap) || 16;
    const scrollAmount = (cardWidth + gap) * (direction === 'next' ? 1 : -1);

    el.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative w-full">
      {/* Navigation controls (active on tablet/laptop/desktop where videos overflow; hidden on mobile and on >= 1440px where all 5 fit) */}
      <div className="hidden md:flex items-center justify-end gap-2 mb-4 sm:mb-6 px-4 sm:px-0 min-[1440px]:hidden">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleArrowScroll('prev')}
            disabled={!canScrollPrev}
            aria-label="Previous work video"
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#E5D0A1] ${
              canScrollPrev
                ? 'bg-[#181818] border-[#333333] text-white hover:border-[#E5D0A1] hover:text-[#E5D0A1] hover:scale-105 active:scale-95'
                : 'bg-[#121212]/50 border-[#1E1E1E] text-[#555555] cursor-not-allowed opacity-35'
            }`}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            type="button"
            onClick={() => handleArrowScroll('next')}
            disabled={!canScrollNext}
            aria-label="Next work video"
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#E5D0A1] ${
              canScrollNext
                ? 'bg-[#181818] border-[#333333] text-white hover:border-[#E5D0A1] hover:text-[#E5D0A1] hover:scale-105 active:scale-95'
                : 'bg-[#121212]/50 border-[#1E1E1E] text-[#555555] cursor-not-allowed opacity-35'
            }`}
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* 
        WORK VIDEO TRACK / GRID:
        - Large desktop (>= 1440px): 5 videos in 1 row (grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 16px)
        - Desktop (1200px - 1439px): 4 visible cards, 5th accessible via horizontal scroll (gap: 16px)
        - Laptop (992px - 1199px): 3 visible cards (gap: 16px)
        - Tablet (768px - 991px): 2 visible cards (gap: 16px)
        - Mobile (<= 767px): 1 large card (84vw) + partial next card peek (gap: 14px, padding-inline: 16px)
        - Small phones (<= 390px): 86vw card (gap: 12px, padding-inline: 12px)
      */}
      <div
        ref={containerRef}
        role="region"
        aria-label="Client work videos carousel"
        tabIndex={0}
        className="work-video-track focus-visible:outline-none select-none"
      >
        {videos.map((video) => {
          const isDominant = activeVideoId === video.id;
          const isVisible = visibleCardIds.has(video.id);

          return (
            <div
              key={video.id}
              data-carousel-item
              data-video-id={video.id}
              ref={(node) => {
                if (node) {
                  cardElementsRef.current.set(video.id, node);
                } else {
                  cardElementsRef.current.delete(video.id);
                }
              }}
              className="work-video-card transition-transform duration-200"
            >
              <WorkVideoCard
                video={video}
                isDominant={isDominant}
                isVisible={isVisible}
                onSelectCard={setActiveVideo}
              />
            </div>
          );
        })}
      </div>

      {/* Scoped CSS styling strictly following the requested specifications */}
      <style>{`
        /* ============================================================ */
        /* BASE TRACK & CARD CONFIGURATION                              */
        /* ============================================================ */
        .work-video-track {
          display: flex;
          width: 100%;
          max-width: 100%;
          min-width: 0;
          box-sizing: border-box;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-snap-type: x mandatory;
          overscroll-behavior-x: contain;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          touch-action: pan-x pan-y;
          padding-bottom: 8px;
        }

        .work-video-track::-webkit-scrollbar {
          display: none;
        }

        .work-video-card {
          position: relative;
          flex-shrink: 0;
          scroll-snap-align: start;
          aspect-ratio: 9 / 16;
          border-radius: 14px;
          overflow: hidden;
          box-sizing: border-box;
        }

        .work-video-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          aspect-ratio: inherit;
          border-radius: 14px;
          overflow: hidden;
          box-sizing: border-box;
        }

        .video-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border-radius: 14px;
          overflow: hidden;
        }

        .video-wrapper iframe,
        .video-wrapper video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
          object-fit: cover;
          object-position: center;
        }

        /* ============================================================ */
        /* RESPONSIVE BREAKPOINTS (ALL VIEWPORT WIDTHS: 360px TO 1440px+)*/
        /* ============================================================ */

        /* 1. Large Desktop (1440px and above): All 5 videos in one row */
        @media (min-width: 1440px) {
          .work-video-track {
            display: grid;
            grid-template-columns: repeat(5, minmax(0, 1fr));
            gap: 16px;
            width: 100%;
            overflow-x: visible;
            padding-left: 0;
            padding-right: 0;
          }
          .work-video-card {
            width: 100%;
            flex: none;
            aspect-ratio: 9 / 16;
            height: auto;
          }
        }

        /* 2. Desktop (1200px to 1439.98px): 4 visible cards in carousel view */
        @media (min-width: 1200px) and (max-width: 1439.98px) {
          .work-video-track {
            display: flex;
            gap: 16px;
            width: 100%;
            padding-left: 0;
            padding-right: 0;
          }
          .work-video-card {
            flex: 0 0 calc((100% - (3 * 16px)) / 4);
            aspect-ratio: 9 / 16;
            height: auto;
          }
        }

        /* 3. Laptop / Split-screen (992px to 1199.98px): 3 visible cards */
        @media (min-width: 992px) and (max-width: 1199.98px) {
          .work-video-track {
            display: flex;
            gap: 16px;
            width: 100%;
            padding-left: 0;
            padding-right: 0;
          }
          .work-video-card {
            flex: 0 0 calc((100% - (2 * 16px)) / 3);
            aspect-ratio: 9 / 16;
            height: auto;
          }
        }

        /* 4. Tablet / Narrow Split-screen (768px to 991.98px): 2 visible cards */
        @media (min-width: 768px) and (max-width: 991.98px) {
          .work-video-track {
            display: flex;
            gap: 16px;
            width: 100%;
            padding-left: 0;
            padding-right: 0;
          }
          .work-video-card {
            flex: 0 0 calc((100% - 16px) / 2);
            aspect-ratio: 9 / 16;
            height: auto;
          }
        }

        /* 5. Phablet / Large Phone (540px to 767.98px): 2 visible cards */
        @media (min-width: 540px) and (max-width: 767.98px) {
          .work-video-track {
            display: flex;
            gap: 16px;
            width: 100%;
            padding-left: 16px;
            padding-right: 16px;
          }
          .work-video-card {
            flex: 0 0 calc((100% - 16px) / 2);
            aspect-ratio: 9 / 16;
            height: auto;
          }
        }

        /* 6. Mobile Phones (539.98px and below): Compact portfolio reel cards with peek */
        @media (max-width: 539.98px) {
          .work-video-track {
            display: flex;
            gap: 12px;
            width: 100%;
            padding-left: 16px;
            padding-right: 16px;
          }
          .work-video-card {
            flex: 0 0 72%;
            aspect-ratio: 9 / 16;
            height: auto;
            border-radius: 16px;
          }
        }
      `}</style>
    </div>
  );
};
