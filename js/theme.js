(function () {
  var html = document.documentElement;
  var btn  = document.getElementById('theme-toggle');

  function apply(theme) {
    if (theme === 'light') {
      html.setAttribute('data-theme', 'light');
      if (btn) btn.textContent = '☽';
    } else {
      html.removeAttribute('data-theme');
      if (btn) btn.textContent = '☀';
    }
  }

  // Sync button label with current state (already set by inline head script)
  apply(html.getAttribute('data-theme') === 'light' ? 'light' : 'dark');

  if (btn) {
    btn.addEventListener('click', function () {
      var next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', next);
      apply(next);
    });
  }
})();
