import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders the interactive card title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Interactive Card/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the card description', () => {
    render(<App />);
    const descriptionElement = screen.getByText(/Click or tap the card to flip it/i);
    expect(descriptionElement).toBeInTheDocument();
  });

  test('renders the flip card with front content', () => {
    render(<App />);
    const frontContent = screen.getByText(/Front Side/i);
    expect(frontContent).toBeInTheDocument();
  });

  test('renders theme toggle button', () => {
    render(<App />);
    const themeToggle = screen.getByRole('button', { name: /switch to dark mode/i });
    expect(themeToggle).toBeInTheDocument();
  });

  test('renders sound toggle button', () => {
    render(<App />);
    const soundToggle = screen.getByRole('button', { name: /disable sound effects/i });
    expect(soundToggle).toBeInTheDocument();
  });

  test('toggles sound on/off when clicking sound button', () => {
    render(<App />);
    const soundToggle = screen.getByRole('button', { name: /disable sound effects/i });
    
    fireEvent.click(soundToggle);
    expect(screen.getByText(/Sound Off/i)).toBeInTheDocument();
    
    fireEvent.click(soundToggle);
    expect(screen.getByText(/Sound On/i)).toBeInTheDocument();
  });
});
