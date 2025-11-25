import { useRef, type RefObject } from 'react';
import './FlipCard.css';

interface FlipCardProps {
  frontImage: string;
  backImage: string;
  frontAlt?: string;
  backAlt?: string;
  audioRef: RefObject<HTMLAudioElement | null>;
}

function FlipCard({ 
  frontImage, 
  backImage, 
  frontAlt = 'Front Image', 
  backAlt = 'Back Image',
  audioRef 
}: FlipCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(error => {
        console.log('Sound play failed:', error);
      });
    }
  };

  const handleMouseEnter = () => {
    playSound();
  };

  const handleMouseLeave = () => {
    playSound();
  };

  return (
    <div 
      className="flip-card" 
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={frontImage} alt={frontAlt} />
        </div>
        <div className="flip-card-back">
          <img src={backImage} alt={backAlt} />
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
