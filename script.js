document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle')
  const body = document.body

  const applyTheme = (theme) => {
    body.classList.toggle('dark-mode', theme === 'dark-mode');
    themeToggle.textContent = theme === 'dark-mode' ? '☀️' : '🌙';
    localStorage.setItem('theme', theme);
  }

  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  savedTheme ? applyTheme(savedTheme) : prefersDark ? applyTheme('dark-mode') : applyTheme('light-mode');

  themeToggle.addEventListener('click', () => {
    const currentTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    const newTheme = currentTheme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    applyTheme(newTheme);
  })
})