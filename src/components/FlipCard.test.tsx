import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FlipCard from './FlipCard';

describe('FlipCard', () => {
  const mockFrontContent = <div>Front Content</div>;
  const mockBackContent = <div>Back Content</div>;

  test('renders front content', () => {
    render(
      <FlipCard frontContent={mockFrontContent} backContent={mockBackContent} />
    );
    expect(screen.getByText('Front Content')).toBeInTheDocument();
  });

  test('renders back content', () => {
    render(
      <FlipCard frontContent={mockFrontContent} backContent={mockBackContent} />
    );
    expect(screen.getByText('Back Content')).toBeInTheDocument();
  });

  test('has correct initial aria-label', () => {
    render(
      <FlipCard frontContent={mockFrontContent} backContent={mockBackContent} />
    );
    const card = screen.getByRole('button');
    expect(card).toHaveAttribute('aria-label', 'Card front side - click to flip');
  });

  test('flips card on click', () => {
    render(
      <FlipCard frontContent={mockFrontContent} backContent={mockBackContent} />
    );
    const card = screen.getByRole('button');
    
    fireEvent.click(card);
    expect(card).toHaveClass('flipped');
    expect(card).toHaveAttribute('aria-label', 'Card back side - click to flip');
  });

  test('flips card on Enter key press', () => {
    render(
      <FlipCard frontContent={mockFrontContent} backContent={mockBackContent} />
    );
    const card = screen.getByRole('button');
    
    fireEvent.keyDown(card, { key: 'Enter' });
    expect(card).toHaveClass('flipped');
  });

  test('flips card on Space key press', () => {
    render(
      <FlipCard frontContent={mockFrontContent} backContent={mockBackContent} />
    );
    const card = screen.getByRole('button');
    
    fireEvent.keyDown(card, { key: ' ' });
    expect(card).toHaveClass('flipped');
  });

  test('toggles flip state on multiple clicks', () => {
    render(
      <FlipCard frontContent={mockFrontContent} backContent={mockBackContent} />
    );
    const card = screen.getByRole('button');
    
    fireEvent.click(card);
    expect(card).toHaveClass('flipped');
    
    fireEvent.click(card);
    expect(card).not.toHaveClass('flipped');
  });

  test('is focusable via tabIndex', () => {
    render(
      <FlipCard frontContent={mockFrontContent} backContent={mockBackContent} />
    );
    const card = screen.getByRole('button');
    expect(card).toHaveAttribute('tabIndex', '0');
  });
});
