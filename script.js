// Smooth scroll for anchor links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Lightbox gallery
window.showImage = function(img) {
    document.getElementById('lightbox-img').src = img.src;
    document.getElementById('lightbox').style.display = 'flex';
}

window.hideLightbox = function() {
    document.getElementById('lightbox').style.display = 'none';
    document.getElementById('lightbox-img').src = '';
}

// ESC closes lightbox
document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') {
        window.hideLightbox();
    }
});

// Subtle fade-in on page load for main elements (for animation polish)
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('header, main, footer, section').forEach(el => {
        el.style.opacity = 0;
        setTimeout(() => {
            el.style.transition = "opacity 1.1s cubic-bezier(.45,.28,.65,1.18)";
            el.style.opacity = 1;
        }, 150);
    });
});