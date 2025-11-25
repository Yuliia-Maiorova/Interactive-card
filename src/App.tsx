import { useRef } from 'react';
import FlipCard from './components/FlipCard';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

// Import card images
import gryffindorFront from '/images/p_gryf.png';
import gryffindorBack from '/images/gryf.png';
import ravenclawFront from '/images/p_rave.png';
import ravenclawBack from '/images/rave.png';
import slytherinFront from '/images/p_sly.png';
import slytherinBack from '/images/sly.png';

interface CardData {
  id: number;
  frontImage: string;
  backImage: string;
  frontAlt: string;
  backAlt: string;
}

const cards: CardData[] = [
  {
    id: 1,
    frontImage: gryffindorFront,
    backImage: gryffindorBack,
    frontAlt: 'Gryffindor Card Front',
    backAlt: 'Gryffindor Card Back'
  },
  {
    id: 2,
    frontImage: ravenclawFront,
    backImage: ravenclawBack,
    frontAlt: 'Ravenclaw Card Front',
    backAlt: 'Ravenclaw Card Back'
  },
  {
    id: 3,
    frontImage: slytherinFront,
    backImage: slytherinBack,
    frontAlt: 'Slytherin Card Front',
    backAlt: 'Slytherin Card Back'
  }
];

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div className="app-container">
      <ThemeToggle />
      
      <div className="cards-container">
        {cards.map((card) => (
          <FlipCard
            key={card.id}
            frontImage={card.frontImage}
            backImage={card.backImage}
            frontAlt={card.frontAlt}
            backAlt={card.backAlt}
            audioRef={audioRef}
          />
        ))}
      </div>

      <audio ref={audioRef} preload="auto">
        <source 
          src="https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3" 
          type="audio/mpeg" 
        />
      </audio>
    </div>
  );
}

export default App;
