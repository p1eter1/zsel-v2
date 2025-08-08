document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('crafting-btn');
    const example = document.getElementById('crafting-example');
    btn.addEventListener('click', function() {
        if (example.style.display === 'none') {
            example.style.display = 'block';
            btn.textContent = "Ukryj crafting";
        } else {
            example.style.display = 'none';
            btn.textContent = "Pokaż przykładowy crafting";
        }
    });

    // Optional: Randomize position of xp orb and floating heart
    function randomizeSpecialAnimationPositions() {
        const orb = document.querySelector('.xp-orb');
        const heart = document.querySelector('.float-heart');
        if (orb) {
            orb.style.left = (40 + Math.random() * 20) + 'vw';
            orb.style.top = (15 + Math.random() * 15) + 'vh';
        }
        if (heart) {
            heart.style.right = (10 + Math.random() * 10) + 'vw';
        }
        // Falling block randomize
        const fall = document.querySelector('.falling-block');
        if (fall) {
            fall.style.left = (5 + Math.random() * 70) + 'vw';
            fall.style.animationDelay = (Math.random() * 2) + 's';
        }
    }
    setInterval(randomizeSpecialAnimationPositions, 3500);
    randomizeSpecialAnimationPositions();
});