// Smooth scroll for anchor links w/ improved performance
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }, { passive: true });
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

// Fade-in on page load for header/footer and intersection observer for sections
window.addEventListener('DOMContentLoaded', () => {
    // Header/footer fade-in
    ['header', 'footer'].forEach(sel => {
        const el = document.querySelector(sel);
        if(el) {
            el.style.opacity = 0;
            setTimeout(() => {
                el.style.transition = "opacity 1.15s cubic-bezier(.45,.28,.65,1.18)";
                el.style.opacity = 1;
            }, 175);
        }
    });

    // Intersection observer for sections (performance: only animate when in viewport)
    const observer = new window.IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.18 });

    document.querySelectorAll('main section').forEach(section => {
        observer.observe(section);
    });

    // Animate gallery images with staggered delay
    document.querySelectorAll('.gallery img').forEach((img, idx) => {
        img.style.opacity = 0;
        img.style.transform = "scale(0.92) rotate(-4deg)";
        setTimeout(() => {
            img.style.transition = "opacity 0.6s, transform 0.7s cubic-bezier(.49,.18,.39,1.31)";
            img.style.opacity = 0.94;
            img.style.transform = "none";
        }, 400 + idx * 130);
    });
});

// Minimal throttling for scroll-based effects (future-proofing, no heavy listeners)
let ticking = false;
window.addEventListener("scroll", function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });
