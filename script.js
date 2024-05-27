function createConfetti() {
    const colors = ['#ff00a9', '#00ff00', '#ffcc00', '#00ffff', '#ff6600', '#9900ff']; // Cores alegres
    const container = document.getElementById('confetti-container');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(confetti);
    }
}

createConfetti();
