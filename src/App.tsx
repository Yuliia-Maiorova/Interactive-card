import React, { useState } from 'react';
import FlipCard from './components/FlipCard';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const App: React.FC = () => {
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  const toggleSound = (): void => {
    setSoundEnabled((prev) => !prev);
  };

  return (
    <div className="App">
      <header className="App-header">
        <ThemeToggle />
        <button 
          className="sound-toggle"
          onClick={toggleSound}
          aria-label={soundEnabled ? 'Disable sound effects' : 'Enable sound effects'}
        >
          {soundEnabled ? '🔊 Sound On' : '🔇 Sound Off'}
        </button>
      </header>
      
      <main className="App-main">
        <h1 className="App-title">Interactive Card</h1>
        <p className="App-description">Click or tap the card to flip it</p>
        
        <div className="cards-container">
          <FlipCard
            frontContent={
              <>
                <h2>Front Side</h2>
                <p>Hover to peek, click to flip!</p>
                <span className="card-icon" aria-hidden="true">🎴</span>
              </>
            }
            backContent={
              <>
                <h2>Back Side</h2>
                <p>You discovered the hidden side!</p>
                <span className="card-icon" aria-hidden="true">✨</span>
              </>
            }
            soundEnabled={soundEnabled}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
