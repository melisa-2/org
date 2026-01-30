// SLIDER
(function(){
  const slides = document.getElementById('slides');
  const dots = document.getElementById('dots');
  if(!slides) return;
  let idx = 0;
  const total = slides.children.length;

  function renderDots(){
    if(!dots) return;
    dots.innerHTML = '';
    for(let i=0;i<total;i++){
      const d = document.createElement('div');
      d.className = 'dot' + (i===idx ? ' active' : '');
      d.onclick = ()=> { idx = i; update(); };
      dots.appendChild(d);
    }
  }

  function update(){
    slides.style.transform = `translateX(-${idx*100}%)`;
    renderDots();
  }

  function next(){ idx = (idx+1)%total; update(); }
  renderDots();
  setInterval(next,5000);
  document.addEventListener('keydown', (e)=>{
    if(e.key==='ArrowRight') next();
    if(e.key==='ArrowLeft'){ idx=(idx-1+total)%total; update(); }
  });
})();

// QUICK EXIT
document.querySelectorAll('#quickExit').forEach(btn=>{
  btn.addEventListener('click',()=>{ window.location.href='https://www.google.com'; });
});

// QUIZ LOGIC
const checkBtn = document.getElementById('checkQuiz');
if(checkBtn){
  checkBtn.addEventListener('click',()=>{
    const q1 = document.querySelector('input[name=q1]:checked');
    const q2 = document.querySelector('input[name=q2]:checked');
    const q3 = document.querySelector('input[name=q3]:checked');
    if(!q1 || !q2 || !q3){ alert('Përgjigju të gjitha pyetjeve.'); return; }
    const score = Number(q1.value)+Number(q2.value)+Number(q3.value);
    const el = document.getElementById('quizResult');
    if(score===3) el.textContent='Shumë mirë — niveli i sigurisë është i lartë. Mbaje kështu!';
    else if(score===2) el.textContent='Përmirëso disa gjëra — aktivizo 2FA dhe ndrysho disa fjalëkalime.';
    else el.textContent='Ke nevojë për masa të menjëhershme — ndrysho fjalëkalimet, aktivizo 2FA, dhe kërko ndihmë.';
  });
}

// ===== THEME SWITCHER =====
const themes=[
  {bg:'#fff1f6', card:'#ffe7ef', accent:'#ff7a3d', text:'#222', header:'#ffe0eb'}, // pink
  {bg:'#e0f7f1', card:'#b8f2e6', accent:'#e6805b', text:'#222', header:'#c0f0eb'}, // blue/teal
  {bg:'#fff0e0', card:'#ffe0c6', accent:'#e6805b', text:'#222', header:'#ffdac1'}  // light orange
];

let currentTheme=localStorage.getItem('themeIndex')?parseInt(localStorage.getItem('themeIndex')):0;

function applyTheme(index){
  const theme=themes[index];
  document.documentElement.style.setProperty('--bg',theme.bg);
  document.documentElement.style.setProperty('--card',theme.card);
  document.documentElement.style.setProperty('--accent',theme.accent);
  document.documentElement.style.setProperty('--text',theme.text);
  document.documentElement.style.setProperty('--header',theme.header);
  // --accent-2 nuk preket, mbetet gjithmonë orange
}

applyTheme(currentTheme);

const btn=document.getElementById("themeSwitcher");
if(btn){
  btn.addEventListener("click",()=>{
    currentTheme=(currentTheme+1)%themes.length;
    applyTheme(currentTheme);
    localStorage.setItem('themeIndex',currentTheme);
  });
}

// ACCORDION
document.querySelectorAll('.accordion-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});
// FADE IN ON SCROLL
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
},{threshold:0.15});

faders.forEach(el=>observer.observe(el));
/* SHTIME në script.js */

// ACCORDION
document.querySelectorAll('.accordion-header').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.classList.toggle('active');
  });
});

// TIMELINE ANIMATION (opsionale)
document.querySelectorAll('.step').forEach((step, idx) => {
  setTimeout(() => step.classList.add('active'), idx * 500);
});

// FORM ANONIM (localStorage demo)
document.querySelector('.btn:last-of-type')?.addEventListener('click', () => {
  alert('Mesazhi u ruajt anonimisht (demo).');
});
