(function () {
  // Build overlay elements
  var overlay = document.createElement('div');
  overlay.id = 'lightbox-overlay';

  var img = document.createElement('img');
  img.id = 'lightbox-img';

  overlay.appendChild(img);
  document.body.appendChild(overlay);

  function open(src, alt) {
    img.src = src;
    img.alt = alt || '';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    // Clear src after transition so browser doesn't keep it in memory
    setTimeout(function () { img.src = ''; }, 300);
  }

  overlay.addEventListener('click', close);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });

  // Attach to all images on the page
  document.querySelectorAll('img').forEach(function (el) {
    el.style.cursor = 'zoom-in';
    el.addEventListener('click', function () {
      open(el.src, el.alt);
    });
  });
})();
