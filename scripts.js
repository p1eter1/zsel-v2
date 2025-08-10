
function handleFadeIn() {
  const fadeEls = document.querySelectorAll('.fade-in');
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    const trigger = window.innerHeight * 0.85; 
    if (rect.top < trigger) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleFadeIn);
window.addEventListener('DOMContentLoaded', handleFadeIn);


document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('focusin', () => card.classList.add('hovered'));
  card.addEventListener('focusout', () => card.classList.remove('hovered'));
});


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
