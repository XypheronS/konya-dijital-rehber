// ============================================================
// PARTICLE SYSTEM — 3 Mod: idle | location | card
// window.ParticleSystem.setMode('idle'|'location'|'card')
// ============================================================

window.ParticleSystem = (function () {
  'use strict';

  var canvas, ctx, W, H;
  var pts = [];
  var animId = null;
  var mode = 'idle';

  // ─── MOD KONFİGÜRASYONLARI ───────────────────────────────
  var CFG = {

    // Sayfa ilk açıldığında — orta yoğunluk, hep görünsün
    idle: {
      count    : 120,
      colors   : [
        [34, 197, 94], [16, 185, 129], [74, 222, 128],
        [134, 239, 172], [20, 184, 166], [52, 211, 153]
      ],
      minR     : 2.5,  maxR  : 6,
      minVY    : -0.7, maxVY : -0.18,
      minVX    : -0.4, maxVX :  0.4,
      minA     : 0.40, maxA  :  0.72,
      pulseSpd : [0.012, 0.030],
      glow     : true,
      glowMult : 2.2
    },

    // Konum bulundu — hızlı, parlak, enerjik
    location: {
      count    : 200,
      colors   : [
        [34, 197, 94], [22, 163, 74], [74, 222, 128],
        [52, 211, 153], [163, 230, 53], [167, 243, 208],
        [20, 184, 166], [250, 204, 21]  // altın sarısı aksan
      ],
      minR     : 3,    maxR  : 8,
      minVY    : -1.3, maxVY : -0.35,
      minVX    : -0.6, maxVX :  0.6,
      minA     : 0.55, maxA  :  0.90,
      pulseSpd : [0.020, 0.045],
      glow     : true,
      glowMult : 3.0
    },

    // Kart açıldı — DAHA FAZLA, hızlı, mavi-yeşil karışık, çarpıcı
    card: {
      count    : 260,
      colors   : [
        [14, 165, 233], [6, 182, 212], [56, 189, 248],
        [103, 232, 249],[34, 197, 94], [74, 222, 128],
        [99, 102, 241], [167, 243, 208], [250, 204, 21]
      ],
      minR     : 2.5,  maxR  : 9,
      minVY    : -1.6, maxVY : -0.30,
      minVX    : -0.8, maxVX :  0.8,
      minA     : 0.55, maxA  :  0.92,
      pulseSpd : [0.025, 0.055],
      glow     : true,
      glowMult : 3.5
    }
  };

  // ─── YARDIMCI ────────────────────────────────────────────
  function rnd(a, b) { return Math.random() * (b - a) + a; }
  function pick(arr)  { return arr[Math.floor(Math.random() * arr.length)]; }
  function lerp(a, b, t) { return a + (b - a) * t; }

  function setSize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  // ─── PARTİKÜL OLUŞTUR ────────────────────────────────────
  function makePt(cfg, fromBottom) {
    var rgb = pick(cfg.colors).slice();
    return {
      x      : rnd(0, W),
      y      : fromBottom ? H + rnd(5, 100) : rnd(0, H),
      rad    : rnd(cfg.minR, cfg.maxR),
      tRad   : rnd(cfg.minR, cfg.maxR),
      vx     : rnd(cfg.minVX, cfg.maxVX),
      vy     : rnd(cfg.minVY, cfg.maxVY),
      tVY    : rnd(cfg.minVY, cfg.maxVY),
      tVX    : rnd(cfg.minVX, cfg.maxVX),
      a      : rnd(cfg.minA, cfg.maxA),
      tA     : rnd(cfg.minA, cfg.maxA),
      ph     : rnd(0, Math.PI * 2),
      phSpd  : rnd(cfg.pulseSpd[0], cfg.pulseSpd[1]),
      rgb    : rgb,
      tRgb   : rgb.slice()
    };
  }

  // ─── İLK SPAWN ───────────────────────────────────────────
  function spawn() {
    var cfg = CFG[mode];
    pts = [];
    for (var i = 0; i < cfg.count; i++) pts.push(makePt(cfg, false));
  }

  // ─── MOD GEÇİŞİ ─────────────────────────────────────────
  function transitionTo(newMode) {
    if (!CFG[newMode] || newMode === mode) return;
    mode = newMode;
    var cfg = CFG[mode];

    // Eksik partikülleri alttan ekle
    var need = cfg.count - pts.length;
    for (var i = 0; i < need; i++) pts.push(makePt(cfg, true));

    // Fazlaları at
    if (pts.length > cfg.count) pts.length = cfg.count;

    // Mevcut partikülleri yeni moda yönlendir
    for (var j = 0; j < pts.length; j++) {
      var p = pts[j];
      p.tRgb = pick(cfg.colors).slice();
      p.tA   = rnd(cfg.minA,  cfg.maxA);
      p.tVY  = rnd(cfg.minVY, cfg.maxVY);
      p.tVX  = rnd(cfg.minVX, cfg.maxVX);
      p.tRad = rnd(cfg.minR,  cfg.maxR);
    }
  }

  // ─── ÇİZİM DÖNGÜSÜ ──────────────────────────────────────
  function loop() {
    ctx.clearRect(0, 0, W, H);
    var cfg = CFG[mode];
    var T = 0.030; // lerp hızı

    for (var i = 0; i < pts.length; i++) {
      var p = pts[i];

      // Yumuşak geçiş
      p.rad    = lerp(p.rad,    p.tRad, T);
      p.a      = lerp(p.a,      p.tA,   T);
      p.vy     = lerp(p.vy,     p.tVY,  T);
      p.vx     = lerp(p.vx,     p.tVX,  T);
      p.rgb[0] = lerp(p.rgb[0], p.tRgb[0], T);
      p.rgb[1] = lerp(p.rgb[1], p.tRgb[1], T);
      p.rgb[2] = lerp(p.rgb[2], p.tRgb[2], T);

      // Nabız
      p.ph += p.phSpd;
      var pulse = 0.50 + 0.50 * Math.sin(p.ph);
      var alpha = Math.min(0.95, p.a * pulse);

      var r0 = Math.round(p.rgb[0]);
      var g0 = Math.round(p.rgb[1]);
      var b0 = Math.round(p.rgb[2]);
      var rad = Math.max(0.8, p.rad);

      // Glow — dış halka
      if (cfg.glow) {
        var gRad = rad * cfg.glowMult;
        var grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, gRad);
        grad.addColorStop(0,   'rgba(' + r0 + ',' + g0 + ',' + b0 + ',' + (alpha * 0.6).toFixed(3) + ')');
        grad.addColorStop(0.4, 'rgba(' + r0 + ',' + g0 + ',' + b0 + ',' + (alpha * 0.2).toFixed(3) + ')');
        grad.addColorStop(1,   'rgba(' + r0 + ',' + g0 + ',' + b0 + ',0)');
        ctx.beginPath();
        ctx.arc(p.x, p.y, gRad, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      // Merkez nokta
      ctx.beginPath();
      ctx.arc(p.x, p.y, rad, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + r0 + ',' + g0 + ',' + b0 + ',' + alpha.toFixed(3) + ')';
      ctx.fill();

      // Hareket
      p.x += p.vx;
      p.y += p.vy;

      // Sınır kontrol
      if (p.y < -rad - 10) {
        pts[i] = makePt(cfg, true);
      }
      if (p.x < -rad)        p.x = W + rad;
      if (p.x > W + rad)     p.x = -rad;
    }

    animId = requestAnimationFrame(loop);
  }

  // ─── BAŞLAT ──────────────────────────────────────────────
  function init() {
    canvas = document.getElementById('bgCanvas');
    if (!canvas) { console.warn('[ParticleSystem] #bgCanvas bulunamadı'); return; }
    ctx = canvas.getContext('2d');
    setSize();
    window.addEventListener('resize', function () { setSize(); });
    spawn();
    loop();
    console.log('[ParticleSystem] Hazır — mod: ' + mode + ' | ' + pts.length + ' partikül');
  }

  // ─── PUBLIC ──────────────────────────────────────────────
  return {
    init   : init,
    setMode: function (m) {
      if (!CFG[m] || m === mode) return;
      console.log('[ParticleSystem] ' + mode + ' → ' + m);
      transitionTo(m);
    },
    getMode: function () { return mode; }
  };
})();

// DOM hazır olunca başlat
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () { window.ParticleSystem.init(); });
} else {
  window.ParticleSystem.init();
}
