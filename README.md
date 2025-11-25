# Interactive Card

Interactive flip card project with theme toggle and sound effects, built with React 18+ and TypeScript.

## Features
- Interactive flip cards with hover effect
- Light/Dark theme toggle (with system preference detection)
- Sound effects on card flip
- Responsive design with rounded corners
- Fully accessible with keyboard navigation and ARIA labels

## Technologies
- React 19.x (React 18+ compatible)
- TypeScript 4.x
- CSS3 with CSS Variables for theming
- React Hooks (useState, useEffect, useRef)
- Functional Components

## How to run

### Install dependencies
```bash
npm install
```

### Development server
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Production build
```bash
npm run build
```

### Run tests
```bash
npm test
```

## Project Structure
```
src/
├── components/
│   ├── FlipCard.tsx        # Flip card component with useState, useRef, useEffect
│   ├── FlipCard.css        # Flip card styles with 3D transforms
│   ├── FlipCard.test.tsx   # Unit tests for FlipCard
│   ├── ThemeToggle.tsx     # Theme toggle with useState and useEffect
│   ├── ThemeToggle.css     # Theme toggle styles
│   └── ThemeToggle.test.tsx # Unit tests for ThemeToggle
├── App.tsx                 # Main application component
├── App.css                 # Application styles with CSS variables
├── App.test.tsx            # Application tests
└── index.tsx               # React entry point
```

## React Hooks Used
- **useState**: Managing flip state, theme state, and sound toggle state
- **useEffect**: Applying theme to DOM, detecting system preferences, initializing audio
- **useRef**: Storing reference to audio element for sound effects
