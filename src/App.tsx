import React, { useRef } from 'react';
import FlipCard from './components/FlipCard';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const App: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleFlip = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(error => {
        console.log('Sound play failed:', error);
      });
    }
  };

  const cards = [
    { front: '/images/p_gryf.png', back: '/images/gryf.png', alt: 'Gryffindor' },
    { front: '/images/p_rave.png', back: '/images/rave.png', alt: 'Ravenclaw' },
    { front: '/images/p_sly.png', back: '/images/sly.png', alt: 'Slytherin' }
  ];

  return (
    <div className="App">
      <ThemeToggle />
      <div className="cards-container">
        {cards.map((card, index) => (
          <FlipCard
            key={index}
            frontImage={card.front}
            backImage={card.back}
            altText={card.alt}
            onFlip={handleFlip}
          />
        ))}
      </div>
      <audio ref={audioRef} preload="auto">
        <source src="https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default App;
