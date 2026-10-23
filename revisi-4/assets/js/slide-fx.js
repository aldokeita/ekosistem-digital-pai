/* Efek khusus per slide. Setiap entri boleh punya enter(slide, tl, ctx),
   step(slide, k, tl, ctx), unstep(slide, k), final(slide, k, ctx), dan leave(slide).
   Gerak berulang selalu dihentikan lewat ctx.cleanup saat slide ditinggalkan. */
(function () {
  'use strict';
  const FX = {};
  const hasMP = !!window.MotionPathPlugin;

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
  const loops = (ctx, arr) => ctx.cleanup(() => arr.forEach((t) => t && t.kill()));

  /* Jaringan partikel pada kanvas (sampul dan penutup). */
  function netCanvas(slide, ctx, animate, opt) {
    const cv = slide.querySelector('canvas');
    const g = cv.getContext('2d');
    const r = seeded(opt.seed || 20261023);
    const nodes = [];
    for (let i = 0; i < (opt.n || 58); i++) {
      nodes.push({ x: opt.x0 + r() * (opt.x1 - opt.x0), y: 30 + r() * 1020, vx: (r() - 0.5) * 0.3, vy: (r() - 0.5) * 0.3, big: i % 7 === 0 });
    }
    const pulses = [];
    const dark = !!opt.dark;
    let raf = 0; const t0 = performance.now(); let last = t0;
    function draw(now) {
      const fade = animate ? Math.min(1, (now - t0) / 1400) : 1;
      const dt = Math.min(48, now - last); last = now;
      g.clearRect(0, 0, 1920, 1080);
      if (animate) nodes.forEach((n) => {
        n.x += n.vx * dt * 0.06; n.y += n.vy * dt * 0.06;
        if (n.x < opt.x0 - 20 || n.x > opt.x1 + 10) n.vx *= -1;
        if (n.y < 20 || n.y > 1060) n.vy *= -1;
      });
      const edges = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 210) {
            edges.push([a, b]);
            g.strokeStyle = dark ? `rgba(169,212,255,${(1 - d / 210) * 0.32 * fade})` : `rgba(31,91,255,${(1 - d / 210) * 0.3 * fade})`;
            g.lineWidth = 1.6;
            g.beginPath(); g.moveTo(a.x, a.y); g.lineTo(b.x, b.y); g.stroke();
          }
        }
      }
      if (animate && edges.length && pulses.length < 8 && Math.random() < 0.05) {
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
        g.fillStyle = n.big ? (dark ? `rgba(91,184,255,${fade})` : `rgba(31,91,255,${fade})`) : (dark ? `rgba(169,212,255,${0.75 * fade})` : `rgba(122,160,255,${0.85 * fade})`);
        g.beginPath(); g.arc(n.x, n.y, n.big ? 7 : 4, 0, Math.PI * 2); g.fill();
      });
      if (animate) raf = requestAnimationFrame(draw);
    }
    if (animate) raf = requestAnimationFrame(draw); else draw(performance.now());
    ctx.cleanup(() => cancelAnimationFrame(raf));
  }

  /* ---------- s01: sampul. Lima ikon mengorbit HP di sepanjang elips ---------- */
  function sats(slide, ctx, animate) {
    const box = slide.querySelector('.cover-phone');
    const els = Array.from(slide.querySelectorAll('.sat'));
    // ubah titik lintasan (koordinat SVG 900x900, digeser -70) ke koordinat .cover-phone
    const ang = -18 * Math.PI / 180;
    const pos = (u) => {
      const t = u * Math.PI * 2;
      const x = 400 * Math.cos(t), y = 150 * Math.sin(t);
      return [450 + x * Math.cos(ang) - y * Math.sin(ang) - 70, 450 + x * Math.sin(ang) + y * Math.cos(ang) - 70];
    };
    const state = els.map((el, i) => ({ el, u: i / els.length }));
    const place = () => state.forEach((s) => {
      const [x, y] = pos(s.u);
      const front = Math.sin(s.u * Math.PI * 2) > 0;
      gsap.set(s.el, { x, y, scale: front ? 1 : 0.78, zIndex: front ? 5 : 0, opacity: front ? 1 : 0.75 });
    });
    place();
    ctx.targets.add(box);
    if (!animate) return;
    const o = { k: 0 };
    const t = gsap.to(o, { k: 1, duration: 26, ease: 'none', repeat: -1, onUpdate: () => { state.forEach((s, i) => { s.u = (i / els.length + o.k) % 1; }); place(); } });
    loops(ctx, [t]);
  }
  FX.s01 = {
    enter(slide, tl, ctx) {
      netCanvas(slide, ctx, true, { x0: 700, x1: 1910, n: 58 });
      sats(slide, ctx, true);
      tl.from(slide.querySelector('.ph'), { y: 160, rotation: 8, opacity: 0, duration: 1.4, ease: 'expo.out' }, 0.2);
      tl.from(slide.querySelectorAll('.sat'), { scale: 0, opacity: 0, duration: 0.8, ease: 'back.out(2)', stagger: 0.1 }, 0.7);
      tl.from(slide.querySelectorAll('.orbit-path'), { drawSVG: '0%', duration: 1.6, ease: 'power2.inOut', stagger: 0.2 }, 0.3);
      slide.querySelectorAll('.ph, .sat, .orbit-path').forEach((e) => ctx.targets.add(e));
    },
    final(slide, k, ctx) { netCanvas(slide, ctx, !ctx.mirror, { x0: 700, x1: 1910, n: 58 }); sats(slide, ctx, !ctx.mirror); },
  };

  /* ---------- denyut data bergerak di sepanjang path ---------- */
  function ride(dots, paths, ctx, opt) {
    const tw = [];
    dots.forEach((d, i) => {
      const p = paths[i % paths.length];
      ctx.targets.add(d);
      if (!hasMP) return;
      tw.push(gsap.fromTo(d, { opacity: 0 }, {
        opacity: 1, duration: 0.2, delay: (opt.delay || 0) + i * (opt.gap || 0.3), repeat: -1, repeatDelay: (opt.dur || 1.6) + (opt.rest || 0.8) - 0.2,
      }));
      tw.push(gsap.to(d, {
        motionPath: { path: p, align: p, alignOrigin: [0.5, 0.5], start: opt.start || 0, end: opt.end == null ? 1 : opt.end },
        duration: opt.dur || 1.6, ease: opt.ease || 'power1.inOut', delay: (opt.delay || 0) + i * (opt.gap || 0.3),
        repeat: -1, repeatDelay: opt.rest || 0.8,
      }));
    });
    loops(ctx, tw);
  }

  /* ---------- s05: denyut dari anak ke empat unsur ---------- */
  FX.s05 = {
    enter(slide, tl, ctx) {
      const paths = Array.from(slide.querySelectorAll('.s05-links .lk path'));
      const dots = Array.from(slide.querySelectorAll('.s05-links .pulses circle'));
      tl.add(() => ride(dots, paths, ctx, { dur: 1.5, gap: 0.35, rest: 1.2 }), 1.8);
    },
  };

  /* ---------- s07: denyut berputar di siklus ---------- */
  FX.s07 = {
    enter(slide, tl, ctx) {
      const path = slide.querySelector('#cycPath');
      const dots = Array.from(slide.querySelectorAll('.cyc-pulse circle'));
      gsap.set(dots, { opacity: 0 });
      tl.add(() => {
        if (!hasMP) return;
        const tw = dots.map((d, i) => gsap.fromTo(d, { opacity: 0 }, { opacity: 1, duration: 0.4, delay: i * 0.25 }));
        dots.forEach((d, i) => tw.push(gsap.to(d, { motionPath: { path, align: path, alignOrigin: [0.5, 0.5] }, duration: 6, ease: 'none', repeat: -1, delay: -i * 0.35 })));
        loops(ctx, tw);
      }, 1.4);
      dots.forEach((d) => ctx.targets.add(d));
    },
    final(slide, k, ctx) {
      const dots = Array.from(slide.querySelectorAll('.cyc-pulse circle'));
      if (!hasMP) return;
      const path = slide.querySelector('#cycPath');
      dots.forEach((d, i) => { ctx.targets.add(d); gsap.set(d, { opacity: 1, motionPath: { path, align: path, alignOrigin: [0.5, 0.5], start: 0.06 + i * 0.03, end: 0.06 + i * 0.03 } }); });
    },
  };

  /* ---------- s08: HP berjalan dari pagi ke malam ---------- */
  FX.s08 = {
    enter(slide, tl, ctx) {
      const tr = slide.querySelector('.traveler');
      const path = slide.querySelector('#dayArc');
      ctx.targets.add(tr);
      if (!hasMP) return;
      gsap.set(tr, { opacity: 0 });
      tl.to(tr, { opacity: 1, duration: 0.3 }, 0.5);
      tl.to(tr, { motionPath: { path, align: path, alignOrigin: [0.5, 0.5], autoRotate: false }, duration: 2.6, ease: 'power1.inOut' }, 0.5);
      tl.add(() => loops(ctx, [gsap.to(tr, { y: '-=10', duration: 1.2, ease: 'sine.inOut', yoyo: true, repeat: -1 })]));
    },
    final(slide, k, ctx) {
      const tr = slide.querySelector('.traveler');
      const path = slide.querySelector('#dayArc');
      ctx.targets.add(tr);
      if (hasMP) gsap.set(tr, { opacity: 1, motionPath: { path, align: path, alignOrigin: [0.5, 0.5], start: 1, end: 1 } });
    },
  };

  /* ---------- s12: 32 titik peringkat, Indonesia di urutan 29 ---------- */
  document.querySelectorAll('.rank32').forEach((r) => {
    let h = '';
    for (let i = 1; i <= 32; i++) h += i === 29 ? '<i class="me"></i>' : '<i></i>';
    r.innerHTML = h;
  });

  /* ---------- s13: foto anak memancar ke banyak layar ---------- */
  FX.s13 = {
    enter(slide, tl, ctx) {
      const rays = slide.querySelectorAll('.burst .rays path');
      const scr = slide.querySelectorAll('.burst .scr rect');
      rays.forEach((e) => ctx.targets.add(e)); scr.forEach((e) => ctx.targets.add(e));
      tl.from(rays, { drawSVG: '0%', duration: 0.7, ease: 'power2.out', stagger: 0.07 }, 0.9);
      tl.from(scr, { scale: 0, opacity: 0, transformOrigin: '50% 50%', duration: 0.6, ease: 'back.out(2.2)', stagger: 0.07 }, 1.2);
      tl.add(() => loops(ctx, [gsap.to(scr, { y: -8, duration: 1.4, ease: 'sine.inOut', yoyo: true, repeat: -1, stagger: { each: 0.2, from: 'random' } })]));
    },
  };

  /* ---------- s23: denyut berputar di segitiga sekolah, rumah, TPQ ---------- */
  FX.s23 = {
    enter(slide, tl, ctx) {
      const paths = Array.from(slide.querySelectorAll('.tri .edges path'));
      const dots = Array.from(slide.querySelectorAll('.tri .pul circle'));
      tl.add(() => ride(dots, paths, ctx, { dur: 1.8, gap: 0.6, rest: 0.6, ease: 'power1.inOut' }), 1.6);
    },
  };

  /* ---------- s25: jaringan gelap di slide penutup ---------- */
  FX.s25 = {
    enter: (slide, tl, ctx) => netCanvas(slide, ctx, true, { x0: 20, x1: 1900, n: 70, dark: true, seed: 77 }),
    final: (slide, k, ctx) => netCanvas(slide, ctx, !ctx.mirror, { x0: 20, x1: 1900, n: 70, dark: true, seed: 77 }),
  };

  /* ---------- s20: titik berputar di lingkaran tanpa ujung ---------- */
  FX.s20 = {
    enter(slide, tl, ctx) {
      const d = slide.querySelector('.lp-dot circle'), path = slide.querySelector('#s20Path');
      ctx.targets.add(d);
      if (!hasMP) return;
      tl.add(() => loops(ctx, [gsap.to(d, { motionPath: { path, align: path, alignOrigin: [0.5, 0.5] }, duration: 2.4, ease: 'none', repeat: -1 })]), 1);
    },
    final(slide, k, ctx) {
      const d = slide.querySelector('.lp-dot circle'), path = slide.querySelector('#s20Path');
      ctx.targets.add(d);
      if (hasMP) gsap.set(d, { motionPath: { path, align: path, alignOrigin: [0.5, 0.5], start: 0.12, end: 0.12 } });
    },
  };

  window.SLIDE_FX = FX;
})();
