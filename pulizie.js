(function () {
  // Year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Liquid hero canvas
  const canvas = document.getElementById('liquidHero');
  if (!canvas) return;
  const ctx = canvas.getContext('2d', { alpha: false });

  let w = 0, h = 0, dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
  let t0 = performance.now();

  const isSmall = () => window.matchMedia('(max-width: 768px)').matches;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    w = Math.max(1, rect.width);
    h = Math.max(1, rect.height);

    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);

    // Important: reset transform in px, then scale
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Prevent edge artifacts: ensure clean draw
    ctx.imageSmoothingEnabled = true;
  }

  window.addEventListener('resize', resize, { passive: true });
  resize();

  function lerp(a, b, k) { return a + (b - a) * k; }

  function draw(now) {
    const dt = Math.min(0.033, (now - t0) / 1000);
    t0 = now;

    // Base background
    const bg = ctx.createLinearGradient(0, 0, w, h);
    bg.addColorStop(0, '#021526');
    bg.addColorStop(0.45, '#043467');
    bg.addColorStop(1, '#020712');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    // Liquid layers (soft waves)
    const time = now * 0.00035;

    // Reduce complexity on mobile
    const step = isSmall() ? 10 : 6;
    const amp1 = isSmall() ? 14 : 18;
    const amp2 = isSmall() ? 10 : 14;

    // Layer 1
    ctx.globalAlpha = 0.22;
    ctx.beginPath();
    ctx.moveTo(0, h);
    for (let x = 0; x <= w; x += step) {
      const y = h * 0.58
        + Math.sin(x * 0.012 + time * 4.0) * amp1
        + Math.sin(x * 0.006 - time * 2.5) * (amp1 * 0.55);
      ctx.lineTo(x, y);
    }
    ctx.lineTo(w, h);
    ctx.closePath();
    const g1 = ctx.createLinearGradient(0, h * 0.35, 0, h);
    g1.addColorStop(0, 'rgba(0,194,255,0.10)');
    g1.addColorStop(0.55, 'rgba(13,110,253,0.16)');
    g1.addColorStop(1, 'rgba(2,7,18,0.0)');
    ctx.fillStyle = g1;
    ctx.fill();

    // Layer 2
    ctx.globalAlpha = 0.20;
    ctx.beginPath();
    ctx.moveTo(0, h);
    for (let x = 0; x <= w; x += step) {
      const y = h * 0.70
        + Math.sin(x * 0.010 - time * 3.2) * amp2
        + Math.sin(x * 0.004 + time * 2.1) * (amp2 * 0.7);
      ctx.lineTo(x, y);
    }
    ctx.lineTo(w, h);
    ctx.closePath();
    const g2 = ctx.createLinearGradient(0, h * 0.45, 0, h);
    g2.addColorStop(0, 'rgba(96,165,250,0.10)');
    g2.addColorStop(0.7, 'rgba(0,194,255,0.10)');
    g2.addColorStop(1, 'rgba(2,7,18,0.0)');
    ctx.fillStyle = g2;
    ctx.fill();

    // Soft highlights (no edge glow)
    ctx.globalAlpha = 0.12;
    for (let i = 0; i < (isSmall() ? 6 : 10); i++) {
      const px = (Math.sin(time * (1.2 + i * 0.09)) * 0.5 + 0.5) * w;
      const py = (Math.cos(time * (1.0 + i * 0.08)) * 0.35 + 0.35) * h;
      const r = lerp(60, 140, i / 10);

      const rg = ctx.createRadialGradient(px, py, 0, px, py, r);
      rg.addColorStop(0, 'rgba(0,194,255,0.16)');
      rg.addColorStop(1, 'rgba(0,194,255,0)');
      ctx.fillStyle = rg;
      ctx.beginPath();
      ctx.arc(px, py, r, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
})();