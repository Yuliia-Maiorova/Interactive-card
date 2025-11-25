import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeToggle from './ThemeToggle';

describe('ThemeToggle', () => {
  beforeEach(() => {
    // Reset body attribute before each test
    document.body.removeAttribute('data-theme');
  });

  test('renders theme toggle button', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('shows dark mode label initially (in light mode)', () => {
    render(<ThemeToggle />);
    expect(screen.getByText('Dark Mode')).toBeInTheDocument();
  });

  test('toggles to dark mode on click', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');
    
    fireEvent.click(button);
    
    expect(screen.getByText('Light Mode')).toBeInTheDocument();
    expect(document.body).toHaveAttribute('data-theme', 'dark');
  });

  test('toggles back to light mode on second click', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');
    
    fireEvent.click(button);
    fireEvent.click(button);
    
    expect(screen.getByText('Dark Mode')).toBeInTheDocument();
    expect(document.body).toHaveAttribute('data-theme', 'light');
  });

  test('calls onThemeChange callback when theme changes', () => {
    const mockOnThemeChange = jest.fn();
    render(<ThemeToggle onThemeChange={mockOnThemeChange} />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(mockOnThemeChange).toHaveBeenCalledWith('dark');
  });

  test('has correct aria-label for light mode', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Switch to dark mode');
  });

  test('has correct aria-label for dark mode', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');
    
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-label', 'Switch to light mode');
  });

  test('has aria-pressed attribute', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');
    
    expect(button).toHaveAttribute('aria-pressed', 'false');
    
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-pressed', 'true');
  });

  test('toggles theme on Enter key press', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');
    
    fireEvent.keyDown(button, { key: 'Enter' });
    expect(screen.getByText('Light Mode')).toBeInTheDocument();
  });
});
