import React, { useState, useRef, useEffect } from 'react';
import './FlipCard.css';

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  soundEnabled?: boolean;
}

const FlipCard: React.FC<FlipCardProps> = ({
  frontContent,
  backContent,
  soundEnabled = true,
}) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio element
    audioRef.current = new Audio();
    // Use a simple click sound (data URI for a short click sound)
    audioRef.current.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2teleQkAHI7W0qRjBQAkk9XRoVwAACS8zdnIhmAAABqz0N+odCsAABOoyc+9klUAAQ+gxsi2kV4ADQ+dxMW2lWEAEg2fxcW3lGEAFQubw8K2lWMGGg2fxsW3lGEAFQubw8K2lWMGGg2fxsW3lGEAFQubw8K2lWM=';
    
    return () => {
      if (audioRef.current) {
        audioRef.current = null;
      }
    };
  }, []);

  const handleCardClick = (): void => {
    setIsFlipped(!isFlipped);
    
    if (soundEnabled && audioRef.current) {
      audioRef.current.currentTime = 0;
      const playPromise = audioRef.current.play();
      // Handle both promise-based and non-promise (legacy) play() behavior
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Ignore audio play errors (e.g., user hasn't interacted with page yet)
        });
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCardClick();
    }
  };

  return (
    <div
      className={`flip-card ${isFlipped ? 'flipped' : ''}`}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={isFlipped ? 'Card back side - click to flip' : 'Card front side - click to flip'}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {frontContent}
        </div>
        <div className="flip-card-back">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
