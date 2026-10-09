/* Engine presentasi: skala panggung, navigasi, transisi, animasi masuk,
   langkah (data-step), overview, layar hitam, dan sinkronisasi presenter. */
(function () {
  'use strict';

  const params = new URLSearchParams(location.search);
  const MODE = params.get('mode') === 'mirror' ? 'mirror' : 'show';
  const W = 1920, H = 1080;
  // Animasi menyala secara bawaan karena deck ini dirancang untuk layar penuh.
  // Windows dengan "Animation effects" mati ikut memicu prefers-reduced-motion,
  // jadi preferensi itu tidak dipakai otomatis. Tombol M atau ?motion=0 mematikannya.
  let RM = params.get('motion') === '0';
  try { if (params.get('motion') == null && localStorage.getItem('ld3-motion') === 'off') RM = true; } catch (e) { /* penyimpanan tidak tersedia */ }
  gsap.registerPlugin(SplitText, DrawSVGPlugin);

  const stage = document.getElementById('stage');
  const slides = Array.from(stage.querySelectorAll(':scope > .slide'));
  const DATA = window.DECK || { slides: [], chapters: [] };
  const FX = window.SLIDE_FX || {};
  const metaOf = (el) => DATA.slides.find((s) => s.id === el.dataset.id) || {};

  let index = 0;
  let step = 0;
  let trans = null;          // timeline transisi yang sedang berjalan
  const live = new Map();    // slide -> { tl, targets:Set, cleanup:[] }

  /* ---------- util ---------- */
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  function fmt(v, dec) {
    let s = Math.abs(v).toFixed(dec);
    let [i, d] = s.split('.');
    i = i.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return (v < 0 ? '−' : '') + (d ? i + ',' + d : i);
  }
  const maxStep = (slide) => {
    let m = 0;
    slide.querySelectorAll('[data-step]').forEach((el) => { m = Math.max(m, +el.dataset.step || 0); });
    return m;
  };
  function rng(seed) {
    let s = seed >>> 0 || 1;
    return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  }

  /* ---------- skala ---------- */
  // insets: ruang untuk toolbar dan panel catatan saat mode edit
  let insets = { top: 0, bottom: 0 };
  let editing = false;
  function fit() {
    const vw = innerWidth, vh = innerHeight - insets.top - insets.bottom;
    const s = Math.min(vw / W, vh / H);
    stage.style.transform = `translate(${(vw - W * s) / 2}px, ${insets.top + (vh - H * s) / 2}px) scale(${s})`;
  }

  /* ---------- motif jaringan (identitas visual) ---------- */
  function makeNet(svg) {
    const w = +svg.dataset.w || 640, h = +svg.dataset.h || 1080;
    const n = +svg.dataset.nodes || 18;
    const r = rng(+svg.dataset.seed || 7);
    const tone = svg.dataset.tone || 'light';
    const pts = [];
    for (let i = 0; i < n; i++) pts.push([30 + r() * (w - 60), 30 + r() * (h - 60)]);
    const ns = 'http://www.w3.org/2000/svg';
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
    const gL = document.createElementNS(ns, 'g');
    const gN = document.createElementNS(ns, 'g');
    const stroke = tone === 'deep' ? 'rgba(169,212,255,.28)' : '#D6E2FF';
    const fill = tone === 'deep' ? 'rgba(169,212,255,.75)' : '#B9CCFA';
    pts.forEach((p, i) => {
      const near = pts.map((q, j) => [j, Math.hypot(p[0] - q[0], p[1] - q[1])])
        .filter((x) => x[0] > i).sort((a, b) => a[1] - b[1]).slice(0, 2);
      near.forEach(([j, d]) => {
        if (d > w * 0.55) return;
        const l = document.createElementNS(ns, 'line');
        l.setAttribute('x1', p[0]); l.setAttribute('y1', p[1]);
        l.setAttribute('x2', pts[j][0]); l.setAttribute('y2', pts[j][1]);
        l.setAttribute('stroke', stroke); l.setAttribute('stroke-width', '1.5');
        gL.appendChild(l);
      });
    });
    pts.forEach((p, i) => {
      const c = document.createElementNS(ns, 'circle');
      c.setAttribute('cx', p[0]); c.setAttribute('cy', p[1]);
      c.setAttribute('r', i % 5 === 0 ? 6 : 3.5);
      c.setAttribute('fill', i % 5 === 0 ? (tone === 'deep' ? '#5BB8FF' : '#1F5BFF') : fill);
      gN.appendChild(c);
    });
    svg.append(gL, gN);
  }

  /* ---------- animasi elemen ---------- */
  const splits = new WeakMap();
  const splitEls = new Set();
  function getSplit(el, type) {
    let sp = splits.get(el);
    if (!sp) {
      sp = SplitText.create(el, { type: 'lines,words', mask: 'lines', linesClass: 'sl', wordsClass: 'sw' });
      splits.set(el, sp);
      splitEls.add(el);
    }
    return type === 'lines' ? sp.lines : sp.words;
  }
  // Kembalikan teks yang dipecah per kata ke bentuk asli (dipakai sebelum mode edit)
  function revertSplits() {
    splitEls.forEach((el) => { const sp = splits.get(el); if (sp) sp.revert(); splits.delete(el); });
    splitEls.clear();
  }

  function addAnim(el, tl, at, targets) {
    const type = el.dataset.a;
    const dur = parseFloat(el.dataset.dur) || 0;
    const track = (t) => { (t.length !== undefined ? Array.from(t) : [t]).forEach((x) => targets.add(x)); return t; };
    switch (type) {
      case 'words': {
        const w = track(getSplit(el, 'words'));
        tl.from(w, { yPercent: 125, opacity: 0, duration: dur || 0.8, ease: 'power4.out', stagger: 0.028 }, at);
        break;
      }
      case 'lines': {
        const l = track(getSplit(el, 'lines'));
        tl.from(l, { yPercent: 100, opacity: 0, duration: dur || 0.8, ease: 'power3.out', stagger: 0.08 }, at);
        break;
      }
      case 'up':
        track(el);
        tl.from(el, { y: 34, opacity: 0, filter: 'blur(8px)', duration: dur || 0.75, ease: 'power3.out' }, at);
        break;
      case 'left':
        track(el);
        tl.from(el, { x: -60, opacity: 0, filter: 'blur(6px)', duration: dur || 0.8, ease: 'power3.out' }, at);
        break;
      case 'right':
        track(el);
        tl.from(el, { x: 60, opacity: 0, filter: 'blur(6px)', duration: dur || 0.8, ease: 'power3.out' }, at);
        break;
      case 'fade':
        track(el);
        tl.from(el, { opacity: 0, duration: dur || 0.9, ease: 'power1.out' }, at);
        break;
      case 'pop':
        track(el);
        tl.from(el, { scale: 0.4, opacity: 0, transformOrigin: '50% 50%', duration: dur || 0.7, ease: 'back.out(1.8)' }, at);
        break;
      case 'stagger': {
        const kids = track(el.children);
        tl.from(kids, { y: 26, opacity: 0, filter: 'blur(6px)', duration: dur || 0.65, ease: 'power3.out', stagger: parseFloat(el.dataset.st) || 0.09 }, at);
        break;
      }
      case 'pops': {
        const kids = track(el.children);
        tl.from(kids, { scale: 0.3, opacity: 0, transformOrigin: '50% 50%', duration: dur || 0.6, ease: 'back.out(2)', stagger: parseFloat(el.dataset.st) || 0.08 }, at);
        break;
      }
      case 'waffle': {
        const kids = track(el.querySelectorAll('i'));
        tl.from(kids, { scale: 0, opacity: 0, duration: 0.4, ease: 'back.out(2)', stagger: { amount: dur || 1.1, from: el.dataset.from || 'start', grid: 'auto' } }, at);
        break;
      }
      case 'draw': {
        const paths = el.matches('path,line,polyline,polygon,circle,rect,ellipse') ? [el]
          : Array.from(el.querySelectorAll('path,line,polyline,polygon,circle,rect,ellipse'));
        track(paths);
        tl.from(paths, { drawSVG: '0%', duration: dur || 1.1, ease: 'power2.inOut', stagger: parseFloat(el.dataset.st) || 0.1 }, at);
        break;
      }
      case 'grow-x': {
        const t = el.dataset.t ? el.querySelectorAll(el.dataset.t) : [el];
        track(t);
        tl.from(t, { scaleX: 0, transformOrigin: '0% 50%', duration: dur || 1, ease: 'power3.out', stagger: parseFloat(el.dataset.st) || 0.06 }, at);
        break;
      }
      case 'grow-y': {
        const t = el.dataset.t ? el.querySelectorAll(el.dataset.t) : [el];
        track(t);
        tl.from(t, { scaleY: 0, transformOrigin: '50% 100%', duration: dur || 1, ease: 'power3.out', stagger: parseFloat(el.dataset.st) || 0.06 }, at);
        break;
      }
      case 'grow-down': {
        track(el);
        tl.from(el, { scaleY: 0, transformOrigin: '50% 0%', duration: dur || 1, ease: 'power3.inOut' }, at);
        break;
      }
      case 'count': {
        const to = parseFloat(el.dataset.to);
        const dec = +(el.dataset.dec || 0);
        if (!el.dataset.final) el.dataset.final = el.innerHTML;
        const pre = el.dataset.pre || '', suf = el.dataset.suf || '';
        const o = { v: 0 };
        track(el);
        tl.from(el, { opacity: 0, y: 20, duration: 0.5, ease: 'power2.out' }, at);
        tl.to(o, {
          v: to, duration: dur || 1.4, ease: 'power3.out',
          onUpdate: () => { el.innerHTML = pre + fmt(o.v, dec) + suf; },
          onComplete: () => { el.innerHTML = el.dataset.final; },
        }, at);
        break;
      }
      case 'net': {
        const lines = track(el.querySelectorAll('line'));
        const dots = track(el.querySelectorAll('circle'));
        tl.from(lines, { drawSVG: '0%', duration: 1.2, ease: 'power2.out', stagger: { amount: 0.8 } }, at);
        tl.from(dots, { scale: 0, transformOrigin: '50% 50%', duration: 0.5, ease: 'back.out(2)', stagger: { amount: 0.8 } }, at + 0.2);
        break;
      }
      default:
        track(el);
        tl.from(el, { opacity: 0, duration: 0.6 }, at);
    }
  }

  function baseEls(slide) {
    return Array.from(slide.querySelectorAll('[data-a]')).filter((el) => !el.closest('[data-step]'));
  }

  function stateOf(slide) {
    let s = live.get(slide);
    if (!s) { s = { tl: null, stl: null, targets: new Set(), cleanup: [] }; live.set(slide, s); }
    return s;
  }

  function enter(slide) {
    const s = stateOf(slide);
    const tl = gsap.timeline({ paused: true });
    baseEls(slide).forEach((el, i) => {
      const at = el.dataset.at != null ? parseFloat(el.dataset.at)
        : Math.min(0.08 + i * 0.085, 1.3) + (parseFloat(el.dataset.delay) || 0);
      addAnim(el, tl, at, s.targets);
    });
    const stepEls = slide.querySelectorAll('[data-step]');
    gsap.set(stepEls, { autoAlpha: 0 });
    stepEls.forEach((e) => s.targets.add(e));
    const fx = FX[slide.dataset.id];
    if (fx && fx.enter) fx.enter(slide, tl, { cleanup: (f) => s.cleanup.push(f), targets: s.targets, fmt });
    s.tl = tl;
    return tl;
  }

  function revealStep(slide, k) {
    const s = stateOf(slide);
    if (s.stl) s.stl.progress(1);
    const tl = gsap.timeline();
    slide.querySelectorAll(`[data-step="${k}"]`).forEach((box) => {
      gsap.set(box, { autoAlpha: 1 });
      const inner = box.querySelectorAll('[data-a]');
      if (inner.length) inner.forEach((el, i) => addAnim(el, tl, i * 0.09 + (parseFloat(el.dataset.delay) || 0), s.targets));
      else if (box.dataset.a) addAnim(box, tl, 0, s.targets);
      else { s.targets.add(box); tl.from(box, { y: 30, opacity: 0, filter: 'blur(6px)', duration: 0.7, ease: 'power3.out' }, 0); }
    });
    const fx = FX[slide.dataset.id];
    if (fx && fx.step) fx.step(slide, k, tl, { cleanup: (f) => s.cleanup.push(f), targets: s.targets, fmt });
    s.stl = tl;
  }

  function hideStepsAbove(slide, k) {
    slide.querySelectorAll('[data-step]').forEach((el) => {
      if (+el.dataset.step > k) gsap.set(el, { autoAlpha: 0 });
    });
  }

  function reset(slide) {
    const s = live.get(slide);
    if (!s) return;
    if (s.tl) s.tl.kill();
    if (s.stl) s.stl.kill();
    s.cleanup.forEach((f) => { try { f(); } catch (e) { /* abaikan */ } });
    gsap.killTweensOf(Array.from(s.targets));
    gsap.set(Array.from(s.targets), { clearProps: 'transform,opacity,filter,visibility,strokeDasharray,strokeDashoffset' });
    slide.querySelectorAll('[data-final]').forEach((el) => { el.innerHTML = el.dataset.final; });
    const fx = FX[slide.dataset.id];
    if (fx && fx.leave) fx.leave(slide);
    live.delete(slide);
  }

  /* Tampilan akhir tanpa animasi (mundur, mirror, reduced motion) */
  function final(slide, k, dim) {
    reset(slide);
    const s = stateOf(slide);
    slide.querySelectorAll('[data-step]').forEach((el) => {
      s.targets.add(el);
      const on = +el.dataset.step <= k;
      el.classList.toggle('step-dim', !on && !!dim);
      gsap.set(el, { autoAlpha: on ? 1 : (dim ? 0.14 : 0) });
    });
    const fx = FX[slide.dataset.id];
    if (fx && fx.final) fx.final(slide, k, { cleanup: (f) => s.cleanup.push(f), targets: s.targets, fmt, mirror: MODE === 'mirror' });
  }

  /* ---------- chrome ---------- */
  const chrome = document.getElementById('chrome');
  const chapEl = chrome.querySelector('.chap');
  const countEl = chrome.querySelector('.count');
  const barEl = chrome.querySelector('.bar');
  barEl.innerHTML = slides.map(() => '<span></span>').join('');
  function updateChrome() {
    const sl = slides[index];
    const m = metaOf(sl);
    const ch = DATA.chapters[m.chapter] || {};
    chapEl.innerHTML = ch.name ? `<i>${ch.no}</i>${ch.name}` : '';
    countEl.innerHTML = `<b>${String(index + 1).padStart(2, '0')}</b> / ${slides.length}`;
    chrome.className = sl.classList.contains('deep') ? 't-deep' : sl.classList.contains('split') ? 't-split' : '';
    if (sl.dataset.chrome === 'cover') chrome.classList.add('t-cover');
    Array.from(barEl.children).forEach((b, i) => { b.className = i < index ? 'on' : i === index ? 'now' : ''; });
    document.body.classList.toggle('fs-deep', sl.classList.contains('deep'));
    document.title = `${index + 1}. ${m.title || 'Presentasi'} · Ekosistem Digital`;
  }

  /* ---------- navigasi ---------- */
  const edge = document.getElementById('edge');
  const curtain = document.getElementById('curtain');

  function finishTransition() {
    if (trans) { trans.progress(1); trans = null; }
  }

  function go(n, opt = {}) {
    n = clamp(n, 0, slides.length - 1);
    finishTransition();
    const from = slides[index];
    const to = slides[n];
    if (n === index && !opt.force) return;
    const dir = n >= index ? 1 : -1;
    const back = !!opt.back;
    index = n;
    step = back ? maxStep(to) : 0;
    updateChrome();
    broadcast();
    if (MODE === 'show') { try { history.replaceState(null, '', '#' + (index + 1)); } catch (e) { /* bingkai terbatas */ } }

    const instant = opt.instant || RM || MODE === 'mirror' || from === to;
    if (instant) {
      if (from !== to) { from.classList.remove('is-active'); reset(from); }
      to.classList.add('is-active');
      if (MODE === 'mirror') final(to, opt.step != null ? opt.step : step, true);
      else if (back || RM) final(to, step);
      else enter(to).play();
      return;
    }

    from.classList.remove('is-active');
    from.classList.add('is-leaving');
    to.classList.add('is-active');
    let tl = null;
    if (back) final(to, step); else tl = enter(to);

    const done = () => {
      from.classList.remove('is-leaving');
      gsap.set([from, to], { clearProps: 'transform,opacity,filter,clipPath' });
      reset(from);
      trans = null;
    };
    const T = gsap.timeline({ onComplete: done });
    if (to.dataset.tr === 'curtain' && dir > 0) {
      T.fromTo(curtain, { xPercent: 101 }, { xPercent: 0, duration: 0.5, ease: 'power3.in' })
        .add(() => { from.classList.remove('is-leaving'); })
        .to(curtain, { xPercent: -101, duration: 0.7, ease: 'power3.out' })
        .set(curtain, { xPercent: 101 });
      if (tl) T.add(() => tl.play(), 0.62);
    } else {
      T.fromTo(to, { clipPath: dir > 0 ? 'inset(0% 0% 0% 100%)' : 'inset(0% 100% 0% 0%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.85, ease: 'expo.inOut' }, 0)
        .fromTo(edge, { x: dir > 0 ? W : -6, opacity: 1 }, { x: dir > 0 ? -6 : W, duration: 0.85, ease: 'expo.inOut' }, 0)
        .set(edge, { opacity: 0 })
        .to(from, { x: -140 * dir, opacity: 0.25, filter: 'blur(4px)', duration: 0.85, ease: 'expo.inOut' }, 0);
      if (tl) T.add(() => tl.play(), 0.34);
    }
    trans = T;
  }

  function next() {
    const sl = slides[index];
    const s = live.get(sl);
    if (trans) finishTransition();
    if (s && s.tl && s.tl.progress() < 1 && s.tl.progress() > 0) s.tl.progress(1);
    if (step < maxStep(sl)) {
      step++;
      revealStep(sl, step);
      broadcast();
    } else if (index < slides.length - 1) go(index + 1);
  }
  function prev() {
    const sl = slides[index];
    if (trans) finishTransition();
    if (step > 0) {
      const s = live.get(sl);
      if (s && s.stl) s.stl.progress(1);
      step--;
      hideStepsAbove(sl, step);
      const fx = FX[sl.dataset.id];
      if (fx && fx.unstep) fx.unstep(sl, step);
      broadcast();
    } else if (index > 0) go(index - 1, { back: true });
  }

  /* ---------- presenter ---------- */
  let pres = null;
  const bc = ('BroadcastChannel' in window) ? new BroadcastChannel('ld3-deck') : null;
  function stateMsg() {
    return { type: 'state', index, step, steps: maxStep(slides[index]), total: slides.length, id: slides[index].dataset.id, black: blackout.classList.contains('on') };
  }
  function broadcast() {
    if (MODE !== 'show') return;
    const m = stateMsg();
    try { if (pres && !pres.closed) pres.postMessage(m, '*'); } catch (e) { /* jendela tertutup */ }
    try { if (bc) bc.postMessage(m); } catch (e) { /* abaikan */ }
  }
  const seenCmd = new Set();
  function onCmd(d, src) {
    if (!d) return;
    if (MODE === 'mirror' && d.type === 'mirror') {
      const n = clamp(d.index, 0, slides.length - 1);
      slides.forEach((s, i) => { if (i !== n) { s.classList.remove('is-active'); } });
      index = n; slides[n].classList.add('is-active');
      updateChrome();
      final(slides[n], d.step || 0, true);
      return;
    }
    if (d.type !== 'cmd' || MODE !== 'show') return;
    if (d.id) {
      if (seenCmd.has(d.id)) return; // perintah yang sama tiba lewat dua jalur
      seenCmd.add(d.id);
      if (seenCmd.size > 200) seenCmd.delete(seenCmd.values().next().value);
    }
    if (src && src !== window && (!pres || pres.closed)) pres = src;
    if (d.cmd === 'next') next();
    else if (d.cmd === 'prev') prev();
    else if (d.cmd === 'goto') go(d.index);
    else if (d.cmd === 'black') toggleBlack();
    else if (d.cmd === 'hello') broadcast();
  }
  window.addEventListener('message', (e) => onCmd(e.data, e.source));
  if (bc) bc.onmessage = (e) => onCmd(e.data, null);
  function openPresenter() {
    pres = window.open('presenter.html', 'ld3-presenter', 'width=1440,height=900');
    setTimeout(broadcast, 600);
  }

  /* ---------- overlay ---------- */
  const blackout = document.getElementById('blackout');
  function toggleBlack() { blackout.classList.toggle('on'); broadcast(); }

  const ov = document.getElementById('overview');
  let ovBuilt = false;
  function buildOverview() {
    const grid = ov.querySelector('.ov-grid');
    slides.forEach((sl, i) => {
      const tile = document.createElement('div');
      tile.className = 'tile'; tile.tabIndex = 0; tile.dataset.i = i;
      const inner = document.createElement('div');
      inner.className = 'inner static';
      const c = sl.cloneNode(true);
      c.classList.add('is-active'); c.classList.remove('is-leaving');
      c.removeAttribute('style');
      c.querySelectorAll('[style]').forEach((e) => {
        ['opacity', 'transform', 'filter', 'visibility', 'clip-path', 'stroke-dasharray', 'stroke-dashoffset', 'translate', 'rotate', 'scale']
          .forEach((p) => e.style.removeProperty(p));
      });
      c.querySelectorAll('[data-final]').forEach((e) => { e.innerHTML = e.dataset.final; });
      inner.appendChild(c);
      const m = metaOf(sl);
      tile.innerHTML = `<span class="tn">${String(i + 1).padStart(2, '0')}</span><span class="tsp">${m.speaker || ''}</span>`;
      tile.prepend(inner);
      tile.addEventListener('click', () => { closeOverview(); go(i); });
      tile.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.stopPropagation(); closeOverview(); go(i); } });
      grid.appendChild(tile);
    });
    ovBuilt = true;
  }
  function scaleTiles() {
    ov.querySelectorAll('.tile').forEach((t) => {
      const s = t.clientWidth / W;
      t.querySelector('.inner').style.transform = `scale(${s})`;
      t.classList.toggle('cur', +t.dataset.i === index);
    });
  }
  function openOverview() {
    if (!ovBuilt) buildOverview();
    ov.classList.add('on');
    scaleTiles();
    const cur = ov.querySelector('.tile.cur');
    if (cur) { cur.scrollIntoView({ block: 'center' }); cur.focus(); }
  }
  function closeOverview() { ov.classList.remove('on'); }

  const help = document.getElementById('help');
  let helpT = 0;
  function showHelp(ms) {
    help.classList.add('on');
    clearTimeout(helpT);
    helpT = setTimeout(() => help.classList.remove('on'), ms || 4000);
  }

  /* ---------- input ---------- */
  const jump = document.getElementById('jump');
  let buf = '';
  let bufT = 0;
  function setBuf(v) {
    buf = v; jump.textContent = 'Ke slide ' + buf; jump.classList.toggle('on', !!buf);
    clearTimeout(bufT); if (buf) bufT = setTimeout(() => setBuf(''), 2500);
  }

  function onKey(e) {
    if (editing) return; // saat mode edit, keyboard diurus editor.js
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const k = e.key;
    if (ov.classList.contains('on')) {
      if (k === 'Escape' || k === 'o' || k === 'O') { closeOverview(); e.preventDefault(); }
      return;
    }
    if (/^[0-9]$/.test(k)) { setBuf(buf + k); return; }
    if (k === 'Enter' && buf) { const n = parseInt(buf, 10); setBuf(''); if (n >= 1) go(n - 1); e.preventDefault(); return; }
    if (blackout.classList.contains('on') && !['b', 'B', '.'].includes(k)) { toggleBlack(); e.preventDefault(); return; }
    switch (k) {
      case 'ArrowRight': case 'ArrowDown': case 'PageDown': case ' ': case 'Enter': case 'n': case 'N':
        e.preventDefault(); next(); break;
      case 'ArrowLeft': case 'ArrowUp': case 'PageUp': case 'Backspace':
        e.preventDefault(); prev(); break;
      case 'Home': e.preventDefault(); go(0); break;
      case 'End': e.preventDefault(); go(slides.length - 1); break;
      case 'f': case 'F':
        if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen().catch(() => {});
        break;
      case 'o': case 'O': case 'Escape':
        if (k !== 'Escape') openOverview(); break;
      case 'p': case 'P': openPresenter(); break;
      case 'b': case 'B': case '.': toggleBlack(); break;
      case 'h': case 'H': case '?': showHelp(6000); break;
      case 'm': case 'M':
        RM = !RM;
        try { localStorage.setItem('ld3-motion', RM ? 'off' : 'on'); } catch (err) { /* abaikan */ }
        jump.textContent = RM ? 'Animasi dimatikan' : 'Animasi menyala';
        jump.classList.add('on');
        clearTimeout(bufT);
        bufT = setTimeout(() => jump.classList.remove('on'), 1600);
        break;
      default:
    }
  }

  function initInput() {
    addEventListener('keydown', onKey);
    stage.addEventListener('click', (e) => { if (e.button === 0 && !editing) next(); });
    stage.addEventListener('contextmenu', (e) => { if (editing) return; e.preventDefault(); prev(); });
    let tx = 0;
    stage.addEventListener('touchstart', (e) => { tx = e.touches[0].clientX; }, { passive: true });
    stage.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - tx;
      if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    });
    let idleT = 0;
    addEventListener('mousemove', () => {
      document.body.classList.remove('idle');
      clearTimeout(idleT);
      if (!editing) idleT = setTimeout(() => document.body.classList.add('idle'), 2200);
    });
    addEventListener('resize', () => { fit(); if (ov.classList.contains('on')) scaleTiles(); });
  }

  /* ---------- mulai ---------- */
  function start() {
    fit();
    document.querySelectorAll('svg.net').forEach(makeNet);
    if (MODE === 'mirror') {
      document.body.classList.add('mode-mirror');
      stage.classList.add('static');
    }
    const h = parseInt((location.hash || '').slice(1), 10);
    index = clamp(isNaN(h) ? 0 : h - 1, 0, slides.length - 1);
    slides[index].classList.add('is-active');
    updateChrome();
    if (MODE === 'mirror') {
      final(slides[index], +(params.get('step') || 0), true);
    } else {
      initInput();
      if (RM) final(slides[index], 0); else enter(slides[index]).play();
      showHelp(4500);
      broadcast();
    }
    window.DeckAPI = {
      go, next, prev, slides, final, maxStep, fit, revertSplits,
      get index() { return index; },
      get step() { return step; },
      get editing() { return editing; },
      setEditing(v, ins) {
        editing = !!v;
        insets = ins || { top: 0, bottom: 0 };
        document.body.classList.remove('idle');
        fit();
      },
      refreshOverview() {
        ovBuilt = false;
        ov.querySelector('.ov-grid').innerHTML = '';
      },
    };
    document.dispatchEvent(new CustomEvent('deck:ready'));
  }

  const ready = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
  Promise.race([ready, new Promise((r) => setTimeout(r, 2000))]).then(start);
})();
