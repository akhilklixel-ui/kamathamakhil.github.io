// Splash: show on each load/navigation for 500ms
function hideSplashAfter(ms=500){const s=document.getElementById('splash'); if(!s) return; setTimeout(()=>{s.classList.add('hidden'); setTimeout(()=> s.style.display='none', 300); }, ms);}
// show on load
window.addEventListener('load', ()=>{ hideSplashAfter(500); });
// intercept nav clicks to show splash then navigate
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('.nav-links a').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = a.getAttribute('href');
      if(!href || href.startsWith('http')) return;
      e.preventDefault();
      const s = document.getElementById('splash');
      if(s){ s.style.display='flex'; s.classList.remove('hidden'); }
      setTimeout(()=> window.location = href, 520);
    });
  });

  // contact form submit via Formspree
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      fetch(form.action, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } })
        .then(r=>{ if(r.ok) return r.json(); throw new Error('Network error'); })
        .then(()=> { showToast('✅ Message sent — thanks!'); form.reset(); })
        .catch(()=> showToast('❌ Could not send — try again.'));
    });
  }

  // scroll-top button logic
  const st = document.getElementById('scrollTop');
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 300) st.classList.add('show'); else st.classList.remove('show');
  });
  if(st) st.addEventListener('click', ()=> window.scrollTo({top:0,behavior:'smooth'}));
});

function showToast(msg){
  const t = document.createElement('div'); t.className='toast'; t.textContent = msg; document.body.appendChild(t);
  setTimeout(()=> t.classList.add('show'), 10);
  setTimeout(()=> { t.classList.remove('show'); setTimeout(()=> t.remove(),400); }, 3500);
}
