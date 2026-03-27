(function () {
  var images = [];
  var current = 0;

  // Build overlay elements
  var overlay = document.createElement('div');
  overlay.id = 'lightbox-overlay';

  var btnPrev = document.createElement('button');
  btnPrev.id = 'lightbox-prev';
  btnPrev.innerHTML = '&#8592;';
  btnPrev.setAttribute('aria-label', 'Previous image');

  var img = document.createElement('img');
  img.id = 'lightbox-img';

  var btnNext = document.createElement('button');
  btnNext.id = 'lightbox-next';
  btnNext.innerHTML = '&#8594;';
  btnNext.setAttribute('aria-label', 'Next image');

  overlay.appendChild(btnPrev);
  overlay.appendChild(img);
  overlay.appendChild(btnNext);
  document.body.appendChild(overlay);

  function show(index) {
    current = (index + images.length) % images.length;
    img.src = images[current].src;
    img.alt = images[current].alt || '';
    btnPrev.style.visibility = images.length > 1 ? 'visible' : 'hidden';
    btnNext.style.visibility = images.length > 1 ? 'visible' : 'hidden';
  }

  function open(index) {
    show(index);
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(function () { img.src = ''; }, 300);
  }

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });

  btnPrev.addEventListener('click', function (e) {
    e.stopPropagation();
    show(current - 1);
  });

  btnNext.addEventListener('click', function (e) {
    e.stopPropagation();
    show(current + 1);
  });

  document.addEventListener('keydown', function (e) {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape')      close();
    if (e.key === 'ArrowRight')  show(current + 1);
    if (e.key === 'ArrowLeft')   show(current - 1);
  });

  // Collect all images and attach click handlers (skip avatar)
  document.querySelectorAll('img:not(.hero-avatar)').forEach(function (el, i) {
    images.push(el);
    el.style.cursor = 'zoom-in';
    el.addEventListener('click', function () { open(i); });
  });
})();
