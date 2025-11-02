window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.style.display = 'none';
  }, 2000);
});

window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.style.display = 'none';
    }, 2000);
  }

  // Handle Contact Form Submission
  const form = document.getElementById('contactForm');
  const popup = document.getElementById('popupMessage');

  if (form && popup) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
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
