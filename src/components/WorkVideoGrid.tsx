import React, { useState } from 'react';
import { WorkVideo } from '../types';
import { WorkVideoCard } from './WorkVideoCard';

interface WorkVideoGridProps {
  videos: WorkVideo[];
}

export const WorkVideoGrid: React.FC<WorkVideoGridProps> = ({ videos }) => {
  const [activeVideoId, setActiveVideoId] = useState<string | number | null>(() => videos[0]?.id ?? null);

  const handlePlay = (id: string | number) => {
    setActiveVideoId(id);
  };

  const handleClose = () => {
    setActiveVideoId(null);
  };

  return (
    <div className="w-full">
      {/* 
        Responsive Grid Layout:
        - Mobile (< 640px): 1 column for maximum visual clarity & quality
        - Tablet (>= 640px): 2 columns
        - Desktop (>= 1024px): 4 columns (cards 1-4 on row 1, card 5+ on row 2)
        - Zero horizontal overflow
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">
        {videos.map((video) => (
          <WorkVideoCard
            key={video.id}
            video={video}
            isActive={activeVideoId === video.id}
            isDominant={activeVideoId === video.id}
            onSelectCard={setActiveVideoId}
            onPlay={() => handlePlay(video.id)}
            onClose={handleClose}
          />
        ))}
      </div>
    </div>
  );
};
