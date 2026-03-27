/* Champagne Fizz — adapted as shared page background (navy theme) */
(function () {
  var canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var width, height, dpr;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  window.addEventListener('resize', resize);
  resize();

  var BUBBLE_RATE = 2.5;
  var RISE_SPEED  = 1.4;

  var bubbles   = [];
  var sparkles  = [];
  var MAX_BUBBLES  = 900;
  var MAX_SPARKLES = 180;

  var nucleationSites = [];
  var NUM_SITES = 10;

  function initNucleationSites() {
    nucleationSites = [];
    for (var i = 0; i < NUM_SITES; i++) {
      nucleationSites.push({
        x: width * 0.1 + (width * 0.8) * (i / (NUM_SITES - 1)) + (Math.random() - 0.5) * 40,
        jitter: Math.random() * 20
      });
    }
  }
  initNucleationSites();
  window.addEventListener('resize', initNucleationSites);

  function spawnBubble() {
    if (bubbles.length >= MAX_BUBBLES) return;
    var x;
    if (Math.random() < 0.7) {
      var site = nucleationSites[Math.floor(Math.random() * nucleationSites.length)];
      x = site.x + (Math.random() - 0.5) * site.jitter;
    } else {
      x = Math.random() * width;
    }

    var sizeRoll = Math.random();
    var radius;
    if      (sizeRoll < 0.55) { radius = 1   + Math.random() * 2; }
    else if (sizeRoll < 0.85) { radius = 2.5 + Math.random() * 3; }
    else if (sizeRoll < 0.96) { radius = 5   + Math.random() * 4; }
    else                      { radius = 8   + Math.random() * 5; }

    bubbles.push({
      x: x, y: height + radius,
      radius: radius, baseRadius: radius,
      wobblePhase: Math.random() * Math.PI * 2,
      wobbleFreq:  1.5 + Math.random() * 1.5,
      wobbleAmp:   (0.3 + Math.random() * 0.7) * radius,
      speedMult:   0.7 + Math.random() * 0.6,
      opacity:     0.25 + Math.random() * 0.35,
      age: 0,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseRate:  2 + Math.random() * 2
    });
  }

  function spawnSparkle(x, y, br) {
    var count = Math.min(Math.floor(3 + br * 0.8), 8);
    for (var i = 0; i < count; i++) {
      if (sparkles.length >= MAX_SPARKLES) return;
      var angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      var speed = 0.5 + Math.random() * 2 + br * 0.15;
      sparkles.push({
        x: x, y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.5,
        life: 1.0,
        decay: 0.02 + Math.random() * 0.03,
        size: 0.5 + Math.random() * 1.5 + br * 0.1
      });
    }
  }

  function getSurfaceY() { return height * 0.04; }

  function updateBubbles(dt) {
    var surfaceY = getSurfaceY();
    var i = bubbles.length;
    while (i--) {
      var b = bubbles[i];
      b.age += dt;
      var sf = 0.6 + 0.4 * Math.min(b.baseRadius / 10, 1);
      b.y -= RISE_SPEED * b.speedMult * sf * dt * 60;
      b.wobblePhase += b.wobbleFreq * dt;
      b.x += Math.sin(b.wobblePhase) * b.wobbleAmp * dt * 2;
      b.radius = b.baseRadius * (1 + 0.05 * Math.sin(b.age * b.pulseRate));
      var hf = 1 - (b.y / height);
      b.radius *= 1 + hf * 0.15;
      if (b.y - b.radius <= surfaceY) {
        spawnSparkle(b.x, surfaceY, b.baseRadius);
        bubbles.splice(i, 1);
        continue;
      }
      if (b.x < -50 || b.x > width + 50) { bubbles.splice(i, 1); }
    }
  }

  function updateSparkles(dt) {
    var i = sparkles.length;
    while (i--) {
      var s = sparkles[i];
      s.x += s.vx * dt * 60;
      s.y += s.vy * dt * 60;
      s.vy += 0.02 * dt * 60;
      s.life -= s.decay * dt * 60;
      if (s.life <= 0) sparkles.splice(i, 1);
    }
  }

  function drawBubble(b) {
    var r = b.radius;
    if (r < 0.5) return;
    var fadeIn = Math.min(b.age * 3, 1);

    // Body
    ctx.beginPath();
    ctx.arc(b.x, b.y, r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(160, 200, 255, ' + (b.opacity * 0.18 * fadeIn) + ')';
    ctx.fill();

    // Rim
    ctx.beginPath();
    ctx.arc(b.x, b.y, r, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(180, 215, 255, ' + (b.opacity * 0.45 * fadeIn) + ')';
    ctx.lineWidth = Math.max(0.5, r * 0.08);
    ctx.stroke();

    // Highlight
    if (r > 1.5) {
      var hlX = b.x - r * 0.25, hlY = b.y - r * 0.25, hlR = r * 0.65;
      var hlAlpha = b.opacity * 0.55 * fadeIn;
      ctx.save();
      ctx.beginPath(); ctx.arc(b.x, b.y, r * 0.92, 0, Math.PI * 2); ctx.clip();
      var g = ctx.createRadialGradient(hlX, hlY, 0, hlX, hlY, hlR);
      g.addColorStop(0,   'rgba(220, 240, 255, ' + (hlAlpha * 0.9) + ')');
      g.addColorStop(0.3, 'rgba(180, 210, 255, ' + (hlAlpha * 0.4) + ')');
      g.addColorStop(1,   'rgba(150, 190, 255, 0)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(hlX, hlY, hlR, 0, Math.PI * 2); ctx.fill();
      ctx.restore();

      if (r > 3) {
        ctx.beginPath();
        ctx.arc(b.x - r * 0.3, b.y - r * 0.35, Math.max(0.8, r * 0.12), 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(240, 250, 255, ' + (b.opacity * 0.8 * fadeIn) + ')';
        ctx.fill();
      }
    }
  }

  function drawSparkles() {
    for (var i = 0; i < sparkles.length; i++) {
      var s = sparkles[i];
      var size = s.size * s.life;
      ctx.save();
      ctx.translate(s.x, s.y);
      ctx.globalAlpha = s.life * 0.8;
      var glow = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 3);
      glow.addColorStop(0,   'rgba(200, 230, 255, 0.8)');
      glow.addColorStop(0.4, 'rgba(140, 190, 255, 0.3)');
      glow.addColorStop(1,   'rgba(100, 160, 240, 0)');
      ctx.fillStyle = glow;
      ctx.beginPath(); ctx.arc(0, 0, size * 3, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = 'rgba(230, 245, 255, 1)';
      ctx.beginPath(); ctx.arc(0, 0, Math.max(0.3, size * 0.4), 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha = 1;
      ctx.restore();
    }
  }

  function drawSurface(time) {
    var sy = getSurfaceY();
    ctx.beginPath();
    ctx.moveTo(0, sy);
    for (var x = 0; x <= width; x += 4) {
      var wave = Math.sin(x * 0.01 + time * 1.2) * 1.5
               + Math.sin(x * 0.025 + time * 0.8) * 0.8
               + Math.sin(x * 0.005 + time * 0.5) * 2;
      ctx.lineTo(x, sy + wave);
    }
    ctx.strokeStyle = 'rgba(140, 190, 255, 0.12)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  function drawVignette() {
    var cx = width / 2, cy = height / 2;
    var md = Math.max(width, height);
    var v = ctx.createRadialGradient(cx, cy, md * 0.2, cx, cy, md * 0.85);
    v.addColorStop(0, 'rgba(7, 16, 31, 0)');
    v.addColorStop(1, 'rgba(7, 16, 31, 0.55)');
    ctx.fillStyle = v;
    ctx.fillRect(0, 0, width, height);
  }

  var lastTime = 0, spawnAcc = 0;

  function render(ts) {
    if (!lastTime) lastTime = ts;
    var dt = Math.min((ts - lastTime) / 1000, 0.05);
    lastTime = ts;
    if (prefersReduced) dt = 0;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#07101f';
    ctx.fillRect(0, 0, width, height);

    var time = ts / 1000;

    spawnAcc += BUBBLE_RATE * dt * 60;
    while (spawnAcc >= 1) { spawnBubble(); spawnAcc -= 1; }

    updateBubbles(dt);
    updateSparkles(dt);

    bubbles.sort(function (a, b) { return b.radius - a.radius; });
    for (var i = 0; i < bubbles.length; i++) drawBubble(bubbles[i]);

    drawSparkles();
    drawSurface(time);
    drawVignette();

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
})();
