/* eslint-env browser */

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// Flip card sound effect for all cards
const flipCards = document.querySelectorAll('.flip-card');
const flipSound = document.getElementById('flipSound');

flipCards.forEach(flipCard => {
    flipCard.addEventListener('mouseenter', () => {
        flipSound.currentTime = 0;
        flipSound.play().catch(error => {
            console.log('Sound play failed:', error);
        });
    });

    flipCard.addEventListener('mouseleave', () => {
        flipSound.currentTime = 0;
        flipSound.play().catch(error => {
            console.log('Sound play failed:', error);
        });
    });
});