# Interactive Card

Interactive flip card project with theme toggle and sound effects, built with React 18+ and TypeScript.

## 🌐 Live Demo
**[View Live Demo](https://yuliia-maiorova.github.io/Interactive-card/)**

## ✨ Features
- 🎴 Interactive flip cards with hover effect
- 🌓 Light/Dark theme toggle with localStorage persistence
- 🔊 Sound effects on card flip
- 🏰 Three Harry Potter house cards (Gryffindor, Ravenclaw, Slytherin)
- 🎨 Responsive design with rounded corners and smooth animations

## 🛠️ Technologies
- React 18+ with Functional Components
- TypeScript
- React Hooks (useState, useEffect, useRef)
- Vite (Build tool)
- CSS3 (with CSS animations and transitions)

## 🚀 How to run locally
1. Clone the repository
   ```bash
   git clone https://github.com/Yuliia-Maiorova/Interactive-card.git
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Start development server
   ```bash
   npm run dev
   ```
4. Open `http://localhost:5173` in your browser

## 📦 Project Structure
```
Interactive-card/
├── src/
│   ├── components/
│   │   ├── FlipCard.tsx        # Flip card component with TypeScript
│   │   ├── FlipCard.css        # Flip card styles
│   │   ├── ThemeToggle.tsx     # Theme toggle component with useState
│   │   └── ThemeToggle.css     # Theme toggle styles
│   ├── App.tsx                 # Main app component with useRef
│   ├── App.css                 # App container styles
│   ├── main.tsx                # React entry point
│   └── index.css               # Global styles
├── public/
│   └── images/                 # Card images
│       ├── gryf.png
│       ├── p_gryf.png
│       ├── rave.png
│       ├── p_rave.png
│       ├── sly.png
│       └── p_sly.png
├── index.html                  # HTML entry point
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
└── README.md
```

## 🎮 How to use
1. **Hover** over any card to flip it and reveal the back side
2. Click the **theme toggle button** (🌙/☀️) in the top right to switch between light and dark themes
3. Listen to the **flip sound effect** when hovering over cards

## 📝 Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 📝 License
This project is open source and available for educational purposes.
