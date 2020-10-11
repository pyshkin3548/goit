const btn = document.querySelector('#theme-switch-toggle');

const currentTheme = localStorage.getItem('theme');
if (currentTheme == 'dark') {
  document.body.classList.add('dark-theme');
  btn.checked = true;
}

btn.addEventListener('change', function () {
  document.body.classList.toggle('dark-theme');

  let theme = 'light';
  if (document.body.classList.contains('dark-theme')) {
    theme = 'dark';
  }
  localStorage.setItem('theme', theme);
});
