import React, { useState, useEffect } from 'react';
import './ThemeToggle.css';

type Theme = 'light' | 'dark';

interface ThemeToggleProps {
  onThemeChange?: (theme: Theme) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ onThemeChange }) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Apply theme to body
    document.body.setAttribute('data-theme', theme);
    
    // Notify parent component of theme change
    if (onThemeChange) {
      onThemeChange(theme);
    }
  }, [theme, onThemeChange]);

  useEffect(() => {
    // Check for system preference on mount
    try {
      const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches;
      if (prefersDark) {
        setTheme('dark');
      }
    } catch {
      // Ignore if matchMedia is not available (e.g., during testing)
    }
  }, []);

  const toggleTheme = (): void => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleTheme();
    }
  };

  return (
    <button
      className={`theme-toggle ${theme}`}
      onClick={toggleTheme}
      onKeyDown={handleKeyDown}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      aria-pressed={theme === 'dark'}
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        {theme === 'light' ? '🌙' : '☀️'}
      </span>
      <span className="theme-toggle-label">
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </span>
    </button>
  );
};

export default ThemeToggle;
