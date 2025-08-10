// Fade-in on scroll for sections
function handleFadeIn() {
  const fadeEls = document.querySelectorAll('.fade-in');
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    const trigger = window.innerHeight * 0.85; // Show a bit before full visible
    if (rect.top < trigger) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleFadeIn);
window.addEventListener('DOMContentLoaded', handleFadeIn);

// Gentle hover effect for cards (for keyboard accessibility)
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('focusin', () => card.classList.add('hovered'));
  card.addEventListener('focusout', () => card.classList.remove('hovered'));
});

// Simple fake contact form handler (no backend)
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');
  if(form){
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      form.reset();
      form.querySelector('button').textContent = 'Wysłano!';
      setTimeout(() => {
        form.querySelector('button').textContent = 'Wyślij';
      }, 2000);
    });
  }
});