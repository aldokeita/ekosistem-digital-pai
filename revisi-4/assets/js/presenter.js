/* Tampilan presenter: naskah, cue, timer, slide sekarang dan berikutnya.
   Tersambung ke jendela presentasi lewat postMessage (aman di file://),
   dengan BroadcastChannel sebagai cadangan. Tanpa sambungan, jendela ini
   tetap bisa dipakai untuk latihan. */
(function () {
  'use strict';
  const D = window.DECK;
  const S = D.slides;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s || '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const mmss = (sec) => {
    const neg = sec < 0; sec = Math.abs(Math.round(sec));
    return (neg ? '−' : '') + String(Math.floor(sec / 60)).padStart(2, '0') + ':' + String(sec % 60).padStart(2, '0');
  };
  const short = (sec) => Math.floor(sec / 60) + ':' + String(Math.round(sec) % 60).padStart(2, '0');

  const STEPS = {};
  S.forEach((s, i) => { STEPS[i] = s.steps || 0; });

  let index = 0, step = 0, connected = false, lastState = 0;
  let running = false, total = 0, slideT = 0, last = performance.now();

  /* ---------- sambungan ---------- */
  const deck = window.opener && !window.opener.closed ? window.opener : null;
  const bc = ('BroadcastChannel' in window) ? new BroadcastChannel('ld4-deck') : null;
  // Setiap perintah dikirim lewat satu jalur saja: langsung ke jendela presentasi,
  // atau BroadcastChannel bila jendela itu tidak tersedia. ID unik mencegah
  // perintah yang sama dijalankan dua kali.
  let seq = 0;
  function send(cmd, extra) {
    const m = Object.assign({ type: 'cmd', cmd, id: Date.now().toString(36) + '-' + (seq++) }, extra || {});
    let sent = false;
    try { if (deck && !deck.closed) { deck.postMessage(m, '*'); sent = true; } } catch (e) { /* jendela tertutup */ }
    if (!sent) { try { if (bc) { bc.postMessage(m); sent = connected; } } catch (e) { /* abaikan */ } }
    return sent || connected;
  }
  function onState(d) {
    if (!d || d.type !== 'state') return;
    connected = true; lastState = Date.now();
    $('link').textContent = 'Tersambung'; $('link').classList.add('ok');
    $('notice').classList.remove('on');
    if (typeof d.steps === 'number') STEPS[d.index] = d.steps;
    $('blackBtn').textContent = d.black ? 'Tampilkan slide' : 'Layar hitam';
    apply(d.index, d.step);
  }
  window.addEventListener('message', (e) => onState(e.data));
  if (bc) bc.onmessage = (e) => onState(e.data);
  send('hello');
  setTimeout(() => { if (!connected) $('notice').classList.add('on'); }, 1800);
  setInterval(() => {
    if (connected && (deck && deck.closed)) {
      connected = false; $('link').textContent = 'Presentasi ditutup'; $('link').classList.remove('ok');
    }
  }, 2000);

  /* ---------- navigasi ---------- */
  function localNext() {
    if (step < (STEPS[index] || 0)) apply(index, step + 1);
    else if (index < S.length - 1) apply(index + 1, 0);
  }
  function localPrev() {
    if (step > 0) apply(index, step - 1);
    else if (index > 0) apply(index - 1, STEPS[index - 1] || 0);
  }
  function next() { if (!running && total === 0) start(); if (!send('next')) localNext(); }
  function prev() { if (!send('prev')) localPrev(); }

  /* ---------- tampilan ---------- */
  const cur = $('cur'), nxt = $('nxt');
  function mirror(frame, i, k) {
    try { frame.contentWindow.postMessage({ type: 'mirror', index: i, step: k }, '*'); } catch (e) { /* belum siap */ }
  }
  cur.addEventListener('load', () => mirror(cur, index, step));
  nxt.addEventListener('load', () => paintNext());
  function paintNext() {
    const max = STEPS[index] || 0;
    if (step < max) { mirror(nxt, index, step + 1); $('nextlab').textContent = 'Berikutnya: langkah ' + (step + 1); }
    else if (index < S.length - 1) { mirror(nxt, index + 1, 0); $('nextlab').textContent = 'Berikutnya: slide ' + (index + 2); }
    else { mirror(nxt, index, max); $('nextlab').textContent = 'Slide terakhir'; }
  }

  let fs = 1;
  try { fs = parseFloat(localStorage.getItem('ld4-fs')) || 1; } catch (e) { /* abaikan */ }
  function setFs(v) {
    fs = Math.max(0.8, Math.min(1.6, v));
    document.documentElement.style.setProperty('--fs', fs);
    try { localStorage.setItem('ld4-fs', fs); } catch (e) { /* abaikan */ }
  }
  setFs(fs);

  function apply(i, k) {
    const changed = i !== index;
    index = i; step = k || 0;
    if (changed) slideT = 0;
    const s = S[index];
    $('count').innerHTML = String(index + 1).padStart(2, '0') + ' <small>/ ' + S.length + '</small>';
    const who = $('who');
    who.textContent = s.speaker;
    who.classList.toggle('both', /dan/.test(s.speaker));
    const n = S[index + 1];
    const nw = $('nextwho');
    if (n && n.speaker !== s.speaker) { nw.textContent = 'Slide ' + (index + 2) + ' dibawakan ' + n.speaker; nw.classList.remove('hide'); }
    else nw.classList.add('hide');
    $('title').textContent = s.title;
    const max = STEPS[index] || 0;
    $('steps').innerHTML = max ? 'langkah <b>' + step + '</b> / ' + max : '';
    mirror(cur, index, step);
    paintNext();
    renderNotes(s);
    tick(true);
  }

  function renderNotes(s) {
    const box = $('notes');
    const fsz = box.querySelector('.fsz');
    box.innerHTML = '';
    box.appendChild(fsz);
    const add = (h, html, cls) => {
      if (!html) return;
      const t = document.createElement('h3'); t.textContent = h; box.appendChild(t);
      const p = document.createElement('p'); p.className = cls || ''; p.innerHTML = html; box.appendChild(p);
    };
    add('Naskah · contoh ucapan, sesuaikan dengan gaya sendiri', esc(s.script), 'script');
    add('Cue', esc(s.cue));
    add('Transisi ke slide berikutnya', esc(s.transition), 'tr');
    add('Hati-hati', esc(s.caution), 'warn');
    add('Tujuan slide', esc(s.purpose));
    add('Sumber', esc(s.source));
    box.scrollTop = 0;
  }

  /* ---------- timer ---------- */
  const planBefore = (i) => S.slice(0, i).reduce((a, s) => a + s.sec, 0);
  const planTotal = planBefore(S.length);
  function start() { running = true; last = performance.now(); $('startBtn').textContent = 'Jeda'; }
  function pause() { running = false; $('startBtn').textContent = 'Lanjutkan'; }
  function tick(force) {
    const now = performance.now();
    if (running) { const dt = (now - last) / 1000; total += dt; slideT += dt; }
    last = now;
    const s = S[index];
    $('total').textContent = mmss(total);
    const planned = planBefore(index) + Math.min(slideT, s.sec);
    const diff = total - planned;
    const d = $('delta');
    d.textContent = (diff >= 0 ? '+' : '') + mmss(diff) + ' dari rencana';
    d.classList.toggle('late', diff > 20);
    const p = $('prog');
    p.querySelector('i').style.width = Math.min(100, (slideT / s.sec) * 100) + '%';
    p.classList.toggle('over', slideT > s.sec);
    const sl = $('slt');
    sl.textContent = short(slideT) + ' / ' + short(s.sec);
    sl.classList.toggle('over', slideT > s.sec);
    if (!force) $('clock').textContent = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  }
  setInterval(tick, 500);

  /* ---------- input ---------- */
  $('nextBtn').onclick = next;
  $('prevBtn').onclick = prev;
  $('blackBtn').onclick = () => send('black');
  $('startBtn').onclick = () => (running ? pause() : start());
  $('resetBtn').onclick = () => { total = 0; slideT = 0; pause(); $('startBtn').textContent = 'Mulai'; tick(true); };
  $('fsPlus').onclick = () => setFs(fs + 0.1);
  $('fsMinus').onclick = () => setFs(fs - 0.1);
  addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    switch (e.key) {
      case 'ArrowRight': case 'ArrowDown': case 'PageDown': case ' ': e.preventDefault(); next(); break;
      case 'ArrowLeft': case 'ArrowUp': case 'PageUp': e.preventDefault(); prev(); break;
      case 'b': case 'B': case '.': send('black'); break;
      case 't': case 'T': running ? pause() : start(); break;
      case '+': case '=': setFs(fs + 0.1); break;
      case '-': setFs(fs - 0.1); break;
      default:
    }
  });

  /* naskah yang diubah di mode edit presentasi langsung tampil di sini */
  addEventListener('storage', (e) => {
    if (e.key !== 'ld4-edits-draft') return;
    let d = null;
    try { d = JSON.parse(e.newValue || 'null'); } catch (err) { d = null; }
    const base = window.DECK_ORIG || [];
    const notes = (d && d.notes) || (window.DECK_EDITS && window.DECK_EDITS.notes) || {};
    S.forEach((s, i) => { if (base[i]) Object.assign(s, base[i]); if (notes[s.id]) Object.assign(s, notes[s.id]); });
    apply(index, step);
  });

  document.title = 'Presenter · ' + D.meta.title + ' (rencana ' + Math.round(planTotal / 60) + ' menit)';
  apply(0, 0);
})();
