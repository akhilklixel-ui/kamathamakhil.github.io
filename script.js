// Final premium JS
// Splash: show for 1s then fade (works on every page and on nav clicks)
function showSplash(ms=1000){const s=document.getElementById('splash'); if(!s) return; s.classList.remove('hidden'); s.style.display='flex'; setTimeout(()=>{ s.classList.add('hidden'); setTimeout(()=> s.style.display='none', 400); }, ms); }
window.addEventListener('load', ()=> showSplash(1000));

// intercept nav clicks to show splash then navigate
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('.nav-links a').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = a.getAttribute('href');
      if(!href || href.startsWith('http')) return;
      e.preventDefault();
      const s = document.getElementById('splash');
      if(s){ s.style.display='flex'; s.classList.remove('hidden'); }
      setTimeout(()=> window.location = href, 1020);
    });
  });

  // smooth fade-in for main content after splash ends
  const main = document.querySelector('main');
  if(main){
    document.body.style.setProperty('--content-opacity', '0');
    setTimeout(()=>{ main.style.transition='opacity .6s ease'; main.style.opacity = '1'; }, 1100);
  }

  // scroll progress bar
  const progress = document.getElementById('progress');
  function updateProgress(){ const p = Math.min(100, (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100); if(progress) progress.style.width = p + '%'; }
  window.addEventListener('scroll', updateProgress);
  updateProgress();

  // navbar glow on scroll
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', ()=>{ if(window.scrollY>20) nav.classList.add('scrolled'); else nav.classList.remove('scrolled'); });

  // contact form via Formspree
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      fetch(form.action, { method:'POST', body:new FormData(form), headers:{ 'Accept':'application/json' } })
        .then(r=>{ if(r.ok) return r.json(); throw new Error('Network error'); })
        .then(()=> { showToast('✅ Message sent — thanks!'); form.reset(); })
        .catch(()=> showToast('❌ Could not send — try again.'));
    });
  }

  // scroll-top button
  const st = document.getElementById('scrollTop');
  window.addEventListener('scroll', ()=>{ if(window.scrollY > 300) st.classList.add('show'); else st.classList.remove('show'); });
  if(st) st.addEventListener('click', ()=> window.scrollTo({top:0,behavior:'smooth'}));

  // smooth click glow on buttons
  document.querySelectorAll('.btn').forEach(b=>{ b.addEventListener('click', ()=>{ b.classList.add('active'); setTimeout(()=> b.classList.remove('active'), 220); }); });

});

// toast helper
function showToast(msg){ const t = document.createElement('div'); t.className='toast'; t.textContent = msg; document.body.appendChild(t); setTimeout(()=> t.classList.add('show'), 10); setTimeout(()=> { t.classList.remove('show'); setTimeout(()=> t.remove(),400); }, 3500); }
