/* Efek khusus per slide. Setiap entri boleh punya enter(slide, tl, ctx),
   step(slide, k, tl, ctx), final(slide, k, ctx), dan leave(slide).
   Animasi berulang hanya dipakai bila menggambarkan proses (aliran data,
   feed, siklus) dan selalu berhenti saat slide ditinggalkan. */
(function () {
  'use strict';
  const FX = {};

  /* Waffle titik dibangun dari atribut: data-n (jumlah) dan data-on (yang menyala). */
  document.querySelectorAll('.waffle[data-n]').forEach((w) => {
    const n = +w.dataset.n, on = +w.dataset.on || 0, on2 = +w.dataset.on2 || 0, rest = w.dataset.rest ? ' class="' + w.dataset.rest + '"' : '';
    let h = '';
    for (let i = 0; i < n; i++) h += i < on ? '<i class="on"></i>' : i < on + on2 ? '<i class="on2"></i>' : '<i' + rest + '></i>';
    w.innerHTML = h;
  });

  function seeded(seed) {
    let s = seed >>> 0;
    return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  }

  /* ---------- s01: jaringan di sampul ---------- */
  function coverNet(slide, ctx, animate) {
    const cv = slide.querySelector('.cover-net');
    const g = cv.getContext('2d');
    const r = seeded(20261009);
    const nodes = [];
    for (let i = 0; i < 58; i++) {
      nodes.push({
        x: 700 + r() * 1200, y: 30 + r() * 1020,
        vx: (r() - 0.5) * 0.28, vy: (r() - 0.5) * 0.28,
        big: i % 7 === 0,
      });
    }
    const pulses = [];
    let raf = 0, t0 = performance.now(), last = t0;
    function draw(now) {
      const fade = animate ? Math.min(1, (now - t0) / 1400) : 1;
      const dt = Math.min(48, now - last); last = now;
      g.clearRect(0, 0, 1920, 1080);
      if (animate) nodes.forEach((n) => {
        n.x += n.vx * dt * 0.06; n.y += n.vy * dt * 0.06;
        if (n.x < 680 || n.x > 1910) n.vx *= -1;
        if (n.y < 20 || n.y > 1060) n.vy *= -1;
      });
      const edges = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 210) {
            edges.push([a, b]);
            g.strokeStyle = `rgba(31,91,255,${(1 - d / 210) * 0.35 * fade})`;
            g.lineWidth = 1.6;
            g.beginPath(); g.moveTo(a.x, a.y); g.lineTo(b.x, b.y); g.stroke();
          }
        }
      }
      if (animate && edges.length && pulses.length < 7 && Math.random() < 0.04) {
        const e = edges[Math.floor(Math.random() * edges.length)];
        pulses.push({ a: e[0], b: e[1], p: 0 });
      }
      for (let k = pulses.length - 1; k >= 0; k--) {
        const q = pulses[k];
        q.p += dt / 900;
        if (q.p >= 1) { pulses.splice(k, 1); continue; }
        const x = q.a.x + (q.b.x - q.a.x) * q.p, y = q.a.y + (q.b.y - q.a.y) * q.p;
        g.fillStyle = `rgba(91,184,255,${0.95 * fade})`;
        g.beginPath(); g.arc(x, y, 5, 0, Math.PI * 2); g.fill();
      }
      nodes.forEach((n) => {
        g.fillStyle = n.big ? `rgba(31,91,255,${fade})` : `rgba(122,160,255,${0.9 * fade})`;
        g.beginPath(); g.arc(n.x, n.y, n.big ? 7 : 4, 0, Math.PI * 2); g.fill();
        if (n.big) {
          g.strokeStyle = `rgba(31,91,255,${0.22 * fade})`; g.lineWidth = 2;
          g.beginPath(); g.arc(n.x, n.y, 16, 0, Math.PI * 2); g.stroke();
        }
      });
      if (animate) raf = requestAnimationFrame(draw);
    }
    if (animate) raf = requestAnimationFrame(draw); else draw(performance.now());
    ctx.cleanup(() => cancelAnimationFrame(raf));
  }
  FX.s01 = {
    enter: (slide, tl, ctx) => coverNet(slide, ctx, true),
    final: (slide, k, ctx) => coverNet(slide, ctx, !ctx.mirror),
  };

  /* ---------- denyut data di sepanjang garis ---------- */
  function pulseAlong(paths, ctx, opt) {
    const tweens = [];
    paths.forEach((p, i) => {
      const L = p.getTotalLength();
      const d = opt.dash || 22;
      gsap.set(p, { strokeDasharray: `${d} ${L + d}`, strokeDashoffset: d, opacity: 1 });
      tweens.push(gsap.to(p, {
        strokeDashoffset: -L, duration: opt.dur || 1.1, ease: 'power1.inOut',
        delay: (opt.delay || 0) + i * (opt.gap || 0.25),
        repeat: opt.repeat == null ? -1 : opt.repeat, repeatDelay: opt.repeatDelay || 1.4,
      }));
      ctx.targets.add(p);
    });
    ctx.cleanup(() => tweens.forEach((t) => t.kill()));
  }

  /* ---------- s06: IoT ---------- */
  FX.s06 = {
    enter(slide, tl, ctx) {
      const ps = Array.from(slide.querySelectorAll('.s06-ill .pulse'));
      tl.add(() => {
        pulseAlong(ps.slice(0, 3), ctx, { delay: 0, gap: 0.3, repeatDelay: 1.6 });
        pulseAlong(ps.slice(3), ctx, { delay: 1.1, repeatDelay: 1.9, dur: 0.6 });
      }, 1.5);
    },
  };

  /* ---------- s08: feed yang terus mengalir ---------- */
  FX.s08 = {
    enter(slide, tl, ctx) {
      const track = slide.querySelector('.feed-track');
      const loop = gsap.timeline({ repeat: -1, delay: 0.9 });
      for (let i = 1; i <= 6; i++) loop.to(track, { y: -274 * i, duration: 0.75, ease: 'power3.inOut' }, '+=1.15');
      loop.set(track, { y: 0 });
      ctx.targets.add(track);
      ctx.cleanup(() => { loop.kill(); gsap.set(track, { clearProps: 'transform' }); });
    },
  };

  /* ---------- s10: titik yang mengitari siklus ---------- */
  FX.s10 = {
    enter(slide, tl, ctx) {
      const c = slide.querySelector('.ring-pulse');
      c.setAttribute('transform', 'rotate(-90 410 410)');
      const L = 2 * Math.PI * 290;
      gsap.set(c, { strokeDasharray: `140 ${L}`, strokeDashoffset: 140, opacity: 0 });
      ctx.targets.add(c);
      const t = gsap.timeline({ delay: 1.7, repeat: -1 });
      t.to(c, { opacity: 1, duration: 0.3 }, 0)
        .fromTo(c, { strokeDashoffset: 140 }, { strokeDashoffset: -L + 140, duration: 6, ease: 'none' }, 0);
      ctx.cleanup(() => t.kill());
    },
  };

  /* ---------- s14: timbangan otoritas condong ke jumlah pengikut ---------- */
  function tilt(slide) {
    return [slide.querySelector('.s14-scale .bar'), slide.querySelector('.s14-scale .panL'), slide.querySelector('.s14-scale .panR')];
  }
  FX.s14 = {
    enter(slide, tl, ctx) {
      const [bar, L, R] = tilt(slide);
      [bar, L, R].forEach((e) => ctx.targets.add(e));
      tl.to(bar, { rotation: 8, svgOrigin: '410 120', duration: 1.6, ease: 'elastic.out(1, 0.5)' }, 1.2)
        .to(L, { y: -37, duration: 1.6, ease: 'elastic.out(1, 0.5)' }, 1.2)
        .to(R, { y: 37, duration: 1.6, ease: 'elastic.out(1, 0.5)' }, 1.2);
    },
    final(slide, k, ctx) {
      const [bar, L, R] = tilt(slide);
      [bar, L, R].forEach((e) => ctx.targets.add(e));
      gsap.set(bar, { rotation: 8, svgOrigin: '410 120' });
      gsap.set(L, { y: -37 }); gsap.set(R, { y: 37 });
    },
  };

  /* ---------- s22: kartu ditempel ke scanner ---------- */
  function tapParts(slide) {
    return { card: slide.querySelector('.s22-tap .card'), hint: slide.querySelector('.s22-tap .hint'), rip: slide.querySelectorAll('.s22-tap .ripples circle') };
  }
  FX.s22 = {
    step(slide, k, tl, ctx) {
      if (k !== 1) return;
      const { card, hint, rip } = tapParts(slide);
      [card, hint, ...rip].forEach((e) => ctx.targets.add(e));
      tl.to(hint, { opacity: 0, duration: 0.2 }, 0)
        .to(card, { y: 212, scale: 0.9, svgOrigin: '165 148', duration: 0.5, ease: 'power2.in' }, 0)
        .fromTo(rip, { opacity: 0.9, scale: 1, svgOrigin: '165 360' }, { opacity: 0, scale: 2.6, svgOrigin: '165 360', duration: 0.9, stagger: 0.18, ease: 'power2.out' }, 0.48);
    },
    unstep(slide, k) {
      if (k >= 1) return;
      const { card, hint } = tapParts(slide);
      gsap.set(card, { clearProps: 'transform' });
      gsap.set(hint, { opacity: 1 });
    },
    final(slide, k, ctx) {
      if (k < 1) return;
      const { card, hint } = tapParts(slide);
      ctx.targets.add(card); ctx.targets.add(hint);
      gsap.set(card, { y: 212, scale: 0.9, svgOrigin: '165 148' });
      gsap.set(hint, { opacity: 0 });
    },
  };

  /* ---------- s24: poin mengalir ke satu muara ---------- */
  FX.s24 = {
    enter(slide, tl, ctx) {
      const ps = Array.from(slide.querySelectorAll('.s24-wires .pulse'));
      tl.add(() => pulseAlong(ps, ctx, { gap: 0.18, repeatDelay: 2.4, dur: 0.9 }), 1.7);
    },
  };

  /* ---------- s30: sorot strategi prioritas S-T ---------- */
  FX.s30 = {
    step(slide, k, tl) {
      if (k !== 1) return;
      const c = slide.querySelector('.tows .cell.st');
      c.classList.add('hl');
      tl.fromTo(c, { scale: 1 }, { scale: 1.03, duration: 0.25, yoyo: true, repeat: 1, ease: 'power2.out' }, 0);
    },
    final(slide, k) { slide.querySelector('.tows .cell.st').classList.toggle('hl', k >= 1); },
    unstep(slide, k) { slide.querySelector('.tows .cell.st').classList.toggle('hl', k >= 1); },
    leave(slide) { slide.querySelector('.tows .cell.st').classList.remove('hl'); },
  };

  window.SLIDE_FX = FX;
})();
