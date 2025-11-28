import React, { useRef } from 'react';
import './FlipCard.css';

interface FlipCardProps {
  frontImage: string;
  backImage: string;
  altText: string;
  onFlip: () => void;
}

const FlipCard: React.FC<FlipCardProps> = ({ frontImage, backImage, altText, onFlip }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    onFlip();
  };

  const handleMouseLeave = () => {
    onFlip();
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
          <img src={frontImage} alt={`${altText} front`} />
        </div>
        <div className="flip-card-back">
          <img src={backImage} alt={`${altText} back`} />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
