const body = document.body;
const themeBtn = document.getElementById('themeBtn');
const langBtn = document.getElementById('langBtn');
const scrollTop = document.getElementById('scrollTop');

let language = localStorage.getItem('ihsanLanguage') || 'bn';
let dark = localStorage.getItem('ihsanTheme') === 'dark';

function applyLanguage() {
  document.documentElement.lang = language;
  document.querySelectorAll('[data-bn][data-en]').forEach(el => {
    const value = el.getAttribute(`data-${language}`);
    if (value !== null) el.innerHTML = value;
  });
  langBtn.textContent = language === 'bn' ? 'EN' : 'BN';
  localStorage.setItem('ihsanLanguage', language);
}

function applyTheme() {
  body.classList.toggle('dark', dark);
  themeBtn.textContent = dark ? '☼' : '☾';
  localStorage.setItem('ihsanTheme', dark ? 'dark' : 'light');
}

langBtn.addEventListener('click', () => {
  language = language === 'bn' ? 'en' : 'bn';
  applyLanguage();
});

themeBtn.addEventListener('click', () => {
  dark = !dark;
  applyTheme();
});

window.addEventListener('scroll', () => {
  scrollTop.classList.toggle('show', window.scrollY > 500);
});

scrollTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

document.querySelector('.search-box button').addEventListener('click', () => {
  const q = document.querySelector('.search-box input').value.trim().toLowerCase();
  if (!q) return;
  const target = [...document.querySelectorAll('.service-card h3')].find(el => el.textContent.toLowerCase().includes(q));
  if (target) target.closest('.service-card').scrollIntoView({behavior:'smooth', block:'center'});
  else document.getElementById('services').scrollIntoView({behavior:'smooth'});
});

document.querySelector('.search-box input').addEventListener('keydown', e => {
  if (e.key === 'Enter') document.querySelector('.search-box button').click();
});

applyTheme();
applyLanguage();
