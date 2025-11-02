// ===== Loader Fade Out =====
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = '0';
      loader.style.transition = 'opacity 0.5s ease';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }, 1500);
  }
});

// ===== Contact Form Popup =====
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const popup = document.getElementById('popupMessage');

  if (form && popup) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Show popup
      popup.classList.add('show');

      // Hide popup after 2.5 seconds
      setTimeout(() => {
        popup.classList.remove('show');
      }, 2500);

      // Reset form fields
      form.reset();
    });
  }
});

// ===== Smooth Scroll for Navigation =====
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('nav ul li a.active')?.classList.remove('active');
    link.classList.add('active');
  });
});

// ===== Button Hover Effects (Optional Aesthetic Touch) =====
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty('--x', `${x}px`);
    btn.style.setProperty('--y', `${y}px`);
  });
});
