// Loader hide on load
window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.classList.add('hidden');
    setTimeout(()=> loader.style.display='none', 500);
  }
});

// Highlight active nav link
document.addEventListener('DOMContentLoaded', function() {
  const path = window.location.pathname.split('/').pop();
  document.querySelectorAll('nav ul li a').forEach(a=>{
    if (a.getAttribute('href')===path) a.classList.add('active');
  });
});

// Modal handling (if any)
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', e => {
      const id = btn.dataset.modal;
      const modal = document.getElementById(id);
      if (modal) {
        modal.classList.add('show');
        document.body.style.overflow='hidden';
      }
    });
  });
  document.querySelectorAll('.modal .close').forEach(x=> x.addEventListener('click', ()=>{
    const modal = x.closest('.modal');
    modal.classList.remove('show');
    document.body.style.overflow='auto';
  }));
  document.querySelectorAll('.modal').forEach(m=> m.addEventListener('click', e=>{
    if (e.target===m) { m.classList.remove('show'); document.body.style.overflow='auto'; }
  }));
});

// Contact form - submit via Formspree endpoint (placeholder)
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const url = form.action; // set to your Formspree endpoint
    const data = new FormData(form);
    fetch(url, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } })
      .then(res => {
        if (res.ok) return res.json();
        throw new Error('Network response was not ok.');
      })
      .then(() => {
        showToast('✅ Message sent! I will reply soon.');
        form.reset();
      })
      .catch(()=> showToast('❌ Failed to send. Please try again.'));
  });

  function showToast(msg){
    const t = document.createElement('div');
    t.className='toast';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(()=> t.classList.add('show'), 10);
    setTimeout(()=> { t.classList.remove('show'); setTimeout(()=> t.remove(),400); }, 3500);
  }
});
