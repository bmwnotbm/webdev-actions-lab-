document.querySelector('#helloBtn').addEventListener('click', () => {
  document.querySelector('#status').textContent = 'Hello from GitHub Pages!';
});
 

const themeBtn = document.querySelector('#themeBtn');
const root = document.documentElement;
 
function applyTheme(theme) {
  if (theme === 'dark') {
    root.setAttribute('data-theme', 'dark');
  } else {
    root.removeAttribute('data-theme');
  }
  themeBtn.textContent = theme === 'dark' ? 'โหมดสว่าง' : 'โหมดมืด';
  themeBtn.setAttribute('aria-pressed', String(theme === 'dark'));
}
 
let saved = null;
try { saved = localStorage.getItem('theme'); } catch (e) {}
applyTheme(saved === 'dark' ? 'dark' : 'light');
 
themeBtn.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});