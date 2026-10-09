/* Mode edit ala PowerPoint.
   Tekan E (atau tombol "Edit teks"), klik teks di slide, ketik, lalu Simpan.
   Perubahan disimpan sebagai daftar penggantian di assets/js/edits.js,
   sehingga presentasi.html dan deck-data.js asli tidak pernah tertimpa.
   Selama belum disimpan ke file, draf aman di localStorage browser ini. */
(function () {
  'use strict';

  const params = new URLSearchParams(location.search);
  const MODE = params.get('mode') === 'mirror' ? 'mirror' : 'show';
  const DRAFT = 'ld3-edits-draft';
  const stage = document.getElementById('stage');
  const slides = Array.from(stage.querySelectorAll(':scope > .slide'));
  const DECK = window.DECK || { slides: [] };
  const ORIG = window.DECK_ORIG || JSON.parse(JSON.stringify(DECK.slides));
  const FILE = window.DECK_EDITS || { version: 1, saved: '', slides: {}, notes: {} };
  const E = JSON.parse(JSON.stringify(window.DECK_EDITS_ACTIVE || FILE));
  E.slides = E.slides || {};
  E.notes = E.notes || {};

  const norm = (s) => String(s || '').replace(/\s+/g, ' ').trim();

  /* ---------- 1. Daftarkan setiap teks yang bisa diedit ---------- */
  const TEXT_TAGS = new Set(['H1', 'H2', 'H3', 'H4', 'P', 'LI', 'DT', 'DD', 'BLOCKQUOTE', 'TD', 'TH']);
  const INLINE = new Set(['B', 'STRONG', 'I', 'EM', 'SMALL', 'SPAN', 'BR', 'SUB', 'SUP', 'MARK', 'KBD', 'CODE', 'A', 'svg', 'use', 'path']);
  const hasDirectText = (el) => Array.from(el.childNodes).some((n) => n.nodeType === 3 && n.textContent.trim());
  const allInline = (el) => Array.from(el.querySelectorAll('*')).every((d) => INLINE.has(d.tagName));
  const reg = new Map();

  slides.forEach((s) => {
    const sid = s.dataset.id;
    let n = 0, t = 0;
    s.querySelectorAll('*').forEach((el) => {
      if (el.closest('svg')) return;
      if (el.parentElement && el.parentElement.closest('[data-ek]')) return;
      if (!(TEXT_TAGS.has(el.tagName) || hasDirectText(el))) return;
      if (!el.textContent.trim() || !allInline(el)) return;
      const key = sid + ':' + (n++);
      el.dataset.ek = key;
      reg.set(key, { el, sid, svg: false, orig: el.innerHTML, text: norm(el.textContent) });
    });
    s.querySelectorAll('svg:not(.net) text').forEach((el) => {
      if (!el.textContent.trim()) return;
      const key = sid + ':t' + (t++);
      el.dataset.ek = key;
      reg.set(key, { el, sid, svg: true, orig: el.textContent, text: norm(el.textContent) });
    });
  });

  /* Teks yang dikosongkan disembunyikan saat presentasi (tidak menyisakan bullet kosong) */
  function syncEmpty(el) {
    el.classList.toggle('ek-empty', !el.textContent.replace(/ /g, ' ').trim());
  }

  /* Angka beranimasi (count-up) mengikuti angka yang diketik */
  function syncCount(el) {
    syncEmpty(el);
    const list = el.matches('[data-a="count"]') ? [el] : Array.from(el.querySelectorAll('[data-a="count"]'));
    list.forEach((c) => {
      delete c.dataset.final;
      const m = c.textContent.match(/\d[\d.]*(?:,\d+)?/);
      if (!m) { c.removeAttribute('data-a'); return; }
      c.dataset.to = parseFloat(m[0].replace(/\./g, '').replace(',', '.'));
      c.dataset.dec = (m[0].split(',')[1] || '').length;
    });
  }

  /* ---------- 2. Terapkan perubahan yang tersimpan ---------- */
  Object.keys(E.slides).forEach((key) => {
    const v = E.slides[key];
    let r = reg.get(key);
    if (!r || r.text !== norm(v.o)) {
      const sid = key.split(':')[0], isSvg = key.includes(':t');
      r = Array.from(reg.values()).find((x) => x.sid === sid && x.svg === isSvg && x.text === norm(v.o));
      if (r && r.el.dataset.ek !== key) { delete E.slides[key]; E.slides[r.el.dataset.ek] = v; }
    }
    if (!r) { console.warn('[edit] teks asli tidak ditemukan, perubahan dilewati:', key, v.o); return; }
    if (r.svg) r.el.textContent = v.h; else r.el.innerHTML = v.h;
    syncCount(r.el);
  });

  /* Versi online (link pribadi) hanya menampilkan hasil edit, tanpa mode edit */
  // Di situs online (https), mode edit dimatikan: menyimpan hanya bisa ke folder di laptop.
  if (window.LD3_READONLY || location.protocol === 'https:') return;

  /* Jendela mirror (di presenter) memuat ulang saat draf berubah */
  if (MODE === 'mirror') {
    let t = 0;
    addEventListener('storage', (e) => { if (e.key === DRAFT) { clearTimeout(t); t = setTimeout(() => location.reload(), 700); } });
    return;
  }

  /* ---------- 3. Antarmuka mode edit ---------- */
  const BAR_H = 58, NOTES_H = 268, NOTES_MIN = 46;
  let on = false, dirty = !!window.DECK_EDITS_FROM_DRAFT, notesOpen = true, draftT = 0;

  const fab = document.createElement('button');
  fab.id = 'editFab';
  fab.type = 'button';
  fab.innerHTML = '<svg viewBox="0 0 24 24"><path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13.5 6.5 4 4"/></svg><span>Edit teks</span><kbd>E</kbd>';
  fab.title = 'Mode edit: ubah teks slide dan catatan pembicara';
  document.body.appendChild(fab);
  if (dirty) fab.classList.add('draft');

  const bar = document.createElement('div');
  bar.id = 'edbar';
  bar.innerHTML = `
    <span class="tag"><i></i>Mode edit</span>
    <div class="nav">
      <button type="button" data-act="prev" title="Slide sebelumnya (PageUp)">‹</button>
      <span class="where"><b class="no"></b><span class="ti"></span></span>
      <button type="button" data-act="next" title="Slide berikutnya (PageDown)">›</button>
    </div>
    <div class="fmt">
      <button type="button" data-act="bold" title="Tebal (Ctrl+B)"><b>B</b></button>
      <button type="button" data-act="hl" title="Warnai biru (seperti kata yang disorot di judul)"><span class="hl">Biru</span></button>
      <button type="button" data-act="clear" title="Hapus format pada teks terpilih">Hapus format</button>
    </div>
    <span class="status" aria-live="polite"></span>
    <div class="act">
      <button type="button" data-act="reset" class="ghost" title="Kembalikan teks slide ini ke versi awal">Kembalikan slide ini</button>
      <button type="button" data-act="save" class="primary" title="Simpan ke assets/js/edits.js (Ctrl+S)">Simpan ke file</button>
      <button type="button" data-act="done" class="ghost" title="Keluar dari mode edit (Esc)">Selesai</button>
    </div>`;
  document.body.appendChild(bar);

  const notes = document.createElement('div');
  notes.id = 'ednotes';
  notes.innerHTML = `
    <button type="button" class="nh" data-act="notes"><span>Catatan pembicara</span><span class="nsl"></span><i>▾</i></button>
    <div class="nb">
      <label class="f-script"><span>Naskah (contoh ucapan)</span><textarea data-f="script" rows="6"></textarea></label>
      <div class="col">
        <label><span>Judul di presenter dan panduan</span><input data-f="title" type="text"></label>
        <div class="two">
          <label><span>Pembicara</span><select data-f="speaker"><option>Aldo</option><option>Paisal</option><option>Aldo dan Paisal</option></select></label>
          <label><span>Durasi (detik)</span><input data-f="sec" type="number" min="5" max="600" step="5"></label>
        </div>
        <label><span>Cue (gerakan, jeda, tunjuk)</span><textarea data-f="cue" rows="2"></textarea></label>
      </div>
      <div class="col">
        <label><span>Transisi ke slide berikutnya</span><textarea data-f="transition" rows="2"></textarea></label>
        <label><span>Hati-hati</span><textarea data-f="caution" rows="2"></textarea></label>
      </div>
    </div>`;
  document.body.appendChild(notes);

  const svgInput = document.createElement('input');
  svgInput.id = 'edsvg';
  svgInput.type = 'text';
  document.body.appendChild(svgInput);

  const modal = document.createElement('div');
  modal.id = 'edmodal';
  document.body.appendChild(modal);

  const $ = (sel) => bar.querySelector(sel);
  const statusEl = $('.status');
  function status(msg, kind) { statusEl.textContent = msg; statusEl.className = 'status ' + (kind || ''); }
  function stamp() { return new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }); }

  function insets() { return { top: BAR_H, bottom: notesOpen ? NOTES_H : NOTES_MIN }; }
  const cur = () => (window.DeckAPI ? window.DeckAPI.index : 0);

  function setEditable(v) {
    stage.querySelectorAll('[data-ek]').forEach((el) => {
      if (el.closest('svg')) return;
      if (v) { el.setAttribute('contenteditable', 'true'); el.spellcheck = false; }
      else el.removeAttribute('contenteditable');
    });
  }

  function show(i) {
    window.DeckAPI.go(i, { back: true, instant: true, force: true });
    const s = DECK.slides[cur()];
    $('.no').textContent = String(cur() + 1).padStart(2, '0') + ' / ' + slides.length;
    $('.ti').textContent = s ? s.title : '';
    fillNotes();
  }

  function fillNotes() {
    const s = DECK.slides[cur()];
    if (!s) return;
    notes.querySelector('.nsl').textContent = 'slide ' + (cur() + 1) + ' · ' + s.speaker;
    notes.querySelectorAll('[data-f]').forEach((f) => { f.value = s[f.dataset.f] == null ? '' : s[f.dataset.f]; });
  }

  function enter() {
    if (!window.DeckAPI || on) return;
    on = true;
    document.body.classList.add('editing');
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    window.DeckAPI.revertSplits();
    window.DeckAPI.setEditing(true, insets());
    setEditable(true);
    show(cur());
    status(dirty ? 'Ada perubahan yang belum disimpan ke file' : 'Klik teks di slide untuk mengubahnya', dirty ? 'warn' : '');
  }

  async function exit() {
    if (!on) return;
    if (dirty) {
      const c = await ask('Simpan perubahan ke file?', 'Perubahan sudah aman sebagai draf di browser ini, tapi belum masuk ke file. Kalau folder presentasi dipindah ke laptop lain, draf tidak ikut terbawa.', ['Simpan dulu', 'Nanti saja']);
      if (c === 0) await save();
    }
    on = false;
    commitSvg();
    setEditable(false);
    document.body.classList.remove('editing');
    window.DeckAPI.setEditing(false);
    window.DeckAPI.refreshOverview();
    window.DeckAPI.go(cur(), { back: true, instant: true, force: true });
    fab.classList.toggle('draft', dirty);
  }

  /* ---------- 4. Mencatat perubahan ---------- */
  function markDirty() {
    dirty = true;
    E.saved = new Date().toISOString();
    status('Belum disimpan ke file · draf aman di browser ini', 'warn');
    clearTimeout(draftT);
    draftT = setTimeout(() => {
      try { localStorage.setItem(DRAFT, JSON.stringify(E)); } catch (e) { status('Draf tidak bisa disimpan di browser. Segera simpan ke file.', 'err'); }
    }, 350);
  }

  function record(el) {
    const key = el.dataset.ek, r = reg.get(key);
    if (!r) return;
    const h = r.svg ? el.textContent : el.innerHTML;
    if (h === r.orig) delete E.slides[key]; else E.slides[key] = { o: r.text, h };
    syncCount(el);
    markDirty();
  }

  stage.addEventListener('input', (e) => {
    if (!on) return;
    const el = e.target.closest && e.target.closest('[data-ek]');
    if (el) record(el);
  });
  stage.addEventListener('paste', (e) => {
    if (!on || !e.target.closest('[contenteditable]')) return;
    e.preventDefault();
    const t = (e.clipboardData || window.clipboardData).getData('text/plain').replace(/\s*\n\s*/g, ' ');
    document.execCommand('insertText', false, t);
  });
  stage.addEventListener('keydown', (e) => {
    if (!on || !e.target.closest('[contenteditable]')) return;
    if (e.key === 'Enter') { e.preventDefault(); document.execCommand('insertLineBreak'); }
  });
  stage.addEventListener('drop', (e) => { if (on) e.preventDefault(); });

  /* teks di dalam grafik (SVG): kotak isian kecil */
  let svgEl = null;
  stage.addEventListener('click', (e) => {
    if (!on) return;
    const t = e.target.closest && e.target.closest('text[data-ek]');
    if (!t) return;
    commitSvg();
    svgEl = t;
    const b = t.getBoundingClientRect();
    Object.assign(svgInput.style, { left: Math.max(8, b.left - 8) + 'px', top: Math.max(BAR_H + 4, b.top - 6) + 'px', width: Math.max(160, b.width + 60) + 'px', display: 'block' });
    svgInput.value = t.textContent;
    svgInput.focus();
    svgInput.select();
  });
  function commitSvg(cancel) {
    if (!svgEl) return;
    if (!cancel && svgInput.value !== svgEl.textContent) { svgEl.textContent = svgInput.value; record(svgEl); }
    svgEl = null;
    svgInput.style.display = 'none';
  }
  svgInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); commitSvg(); }
    if (e.key === 'Escape') { e.preventDefault(); commitSvg(true); }
  });
  svgInput.addEventListener('blur', () => commitSvg());

  /* catatan pembicara */
  notes.addEventListener('input', (e) => {
    const f = e.target.dataset && e.target.dataset.f;
    if (!f) return;
    const i = cur(), s = DECK.slides[i], o = ORIG[i];
    let v = e.target.value;
    if (f === 'sec') v = Math.max(5, parseInt(v, 10) || 0);
    s[f] = v;
    const bag = E.notes[s.id] || (E.notes[s.id] = {});
    if (v === o[f]) delete bag[f]; else bag[f] = v;
    if (!Object.keys(bag).length) delete E.notes[s.id];
    if (f === 'title') $('.ti').textContent = v;
    if (f === 'speaker') notes.querySelector('.nsl').textContent = 'slide ' + (i + 1) + ' · ' + v;
    markDirty();
  });

  /* ---------- 5. Format teks ---------- */
  function activeEditable() {
    const sel = getSelection();
    if (!sel.rangeCount) return null;
    const n = sel.getRangeAt(0).commonAncestorContainer;
    const el = n.nodeType === 1 ? n : n.parentElement;
    return el && el.closest('[data-ek][contenteditable]');
  }
  function highlight() {
    const ed = activeEditable();
    if (!ed) return status('Pilih dulu teks yang ingin diwarnai', 'warn');
    const sel = getSelection(), r = sel.getRangeAt(0);
    const n = r.commonAncestorContainer;
    const em = (n.nodeType === 1 ? n : n.parentElement).closest('em');
    if (em && ed.contains(em)) {
      em.replaceWith(...em.childNodes);
    } else if (!r.collapsed) {
      const w = document.createElement('em');
      w.appendChild(r.extractContents());
      r.insertNode(w);
      sel.removeAllRanges();
    }
    record(ed);
  }

  /* ---------- 6. Simpan ke file ---------- */
  const APPLIER = `
/* Terapkan catatan pembicara yang diubah. Draf di browser yang lebih baru
   dari file dipakai lebih dulu, supaya perubahan yang belum disimpan tidak hilang. */
(function () {
  var F = window.DECK_EDITS, A = F, d = null;
  try { d = JSON.parse(localStorage.getItem('ld3-edits-draft') || 'null'); } catch (e) { d = null; }
  if (d && d.saved && (!F.saved || d.saved > F.saved)) A = d;
  window.DECK_EDITS_ACTIVE = A;
  window.DECK_EDITS_FROM_DRAFT = A === d;
  if (!window.DECK) return;
  window.DECK_ORIG = JSON.parse(JSON.stringify(window.DECK.slides));
  var n = A.notes || {};
  window.DECK.slides.forEach(function (s) {
    var o = n[s.id];
    if (!o) return;
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) s[k] = o[k];
  });
})();
`;
  function buildFile() {
    const data = { version: 1, saved: E.saved || new Date().toISOString(), slides: E.slides, notes: E.notes };
    return '/* Perubahan teks dari mode edit presentasi (tekan E di presentasi.html).\n' +
      '   File ini ditulis otomatis oleh tombol "Simpan ke file". Isi aslinya\n' +
      '   tetap ada di presentasi.html dan deck-data.js, jadi menghapus file ini\n' +
      '   sama dengan mengembalikan semua teks ke versi awal. */\n' +
      'window.DECK_EDITS = ' + JSON.stringify(data, null, 2) + ';\n' + APPLIER;
  }

  /* menyimpan izin folder supaya Simpan berikutnya cukup satu klik */
  function idb(mode, val) {
    return new Promise((res) => {
      try {
        const rq = indexedDB.open('ld3-editor', 1);
        rq.onupgradeneeded = () => rq.result.createObjectStore('h');
        rq.onerror = () => res(null);
        rq.onsuccess = () => {
          try {
            const tx = rq.result.transaction('h', mode === 'get' ? 'readonly' : 'readwrite');
            const st = tx.objectStore('h');
            const op = mode === 'get' ? st.get('dir') : mode === 'del' ? st.delete('dir') : st.put(val, 'dir');
            op.onsuccess = () => res(op.result || null);
            op.onerror = () => res(null);
          } catch (e) { res(null); }
        };
      } catch (e) { res(null); }
    });
  }

  let saving = false;
  async function save() {
    if (saving) return;
    saving = true;
    commitSvg();
    if (!E.saved) E.saved = new Date().toISOString();
    const text = buildFile();
    try {
      if (window.showDirectoryPicker) {
        let dir = await idb('get');
        if (dir) {
          let p = await dir.queryPermission({ mode: 'readwrite' });
          if (p !== 'granted') p = await dir.requestPermission({ mode: 'readwrite' });
          if (p !== 'granted') dir = null;
        }
        if (!dir) {
          await ask('Pilih folder presentasi', 'Di jendela berikutnya, pilih folder "Revisi 3 HTML" (folder yang berisi presentasi.html), lalu izinkan browser menyimpan perubahan. Ini cukup sekali.', ['Pilih folder']);
          dir = await window.showDirectoryPicker({ id: 'ld3-folder', mode: 'readwrite' });
        }
        try { await dir.getFileHandle('presentasi.html'); }
        catch (e) {
          await idb('del');
          await ask('Folder kurang tepat', 'Folder yang dipilih tidak berisi presentasi.html. Coba Simpan lagi dan pilih folder "Revisi 3 HTML".', ['Oke']);
          return;
        }
        const js = await (await dir.getDirectoryHandle('assets')).getDirectoryHandle('js');
        try {
          const old = await (await (await js.getFileHandle('edits.js')).getFile()).text();
          const bk = await (await js.getFileHandle('edits.prev.js', { create: true })).createWritable();
          await bk.write(old); await bk.close();
        } catch (e) { /* belum ada versi sebelumnya */ }
        const w = await (await js.getFileHandle('edits.js', { create: true })).createWritable();
        await w.write(text);
        await w.close();
        done('Tersimpan ke file pukul ' + stamp());
        idb('put', dir);
        return;
      }
    } catch (e) {
      if (e && e.name === 'AbortError') { status('Penyimpanan dibatalkan', 'warn'); return; }
      console.warn('[edit] simpan langsung gagal, memakai unduhan:', e);
    } finally { saving = false; }

    /* cadangan: unduh edits.js lalu pindahkan manual */
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([text], { type: 'text/javascript' }));
    a.download = 'edits.js';
    document.body.appendChild(a); a.click(); a.remove();
    done('edits.js diunduh pukul ' + stamp());
    await ask('Satu langkah lagi', 'Browser ini tidak bisa menyimpan langsung ke folder. File edits.js sudah diunduh. Pindahkan file itu ke folder "Revisi 3 HTML/assets/js" dan timpa file lama. Selama belum dipindah, perubahan tetap aman sebagai draf di browser ini.', ['Mengerti']);
  }
  function done(msg) {
    dirty = false;
    try { localStorage.removeItem(DRAFT); } catch (e) { /* abaikan */ }
    window.DECK_EDITS = JSON.parse(JSON.stringify(E));
    status(msg, 'ok');
    fab.classList.remove('draft');
  }

  /* dialog kecil */
  function ask(title, body, buttons) {
    return new Promise((res) => {
      modal.innerHTML = `<div class="box" role="dialog" aria-modal="true"><p class="t"></p><p class="b"></p><div class="bt"></div></div>`;
      modal.querySelector('.t').textContent = title;
      modal.querySelector('.b').textContent = body;
      const bt = modal.querySelector('.bt');
      buttons.forEach((label, i) => {
        const b = document.createElement('button');
        b.type = 'button'; b.textContent = label; b.className = i === 0 ? 'primary' : 'ghost';
        b.onclick = () => { modal.classList.remove('on'); res(i); };
        bt.appendChild(b);
      });
      modal.classList.add('on');
      bt.querySelector('button').focus();
    });
  }

  async function resetSlide() {
    const i = cur(), sid = DECK.slides[i].id;
    const c = await ask('Kembalikan slide ' + (i + 1) + '?', 'Semua teks dan catatan pembicara di slide ini kembali ke versi awal.', ['Kembalikan', 'Batal']);
    if (c !== 0) return;
    reg.forEach((r, key) => {
      if (r.sid !== sid) return;
      if (r.svg) r.el.textContent = r.orig; else r.el.innerHTML = r.orig;
      syncCount(r.el);
      delete E.slides[key];
    });
    delete E.notes[sid];
    Object.assign(DECK.slides[i], ORIG[i]);
    fillNotes();
    $('.ti').textContent = DECK.slides[i].title;
    markDirty();
  }

  /* ---------- 7. Tombol dan keyboard ---------- */
  fab.addEventListener('click', enter);
  bar.addEventListener('mousedown', (e) => { if (e.target.closest('button')) e.preventDefault(); });
  bar.addEventListener('click', (e) => {
    const b = e.target.closest('button[data-act]');
    if (!b) return;
    const a = b.dataset.act;
    if (a === 'prev') show(Math.max(0, cur() - 1));
    else if (a === 'next') show(Math.min(slides.length - 1, cur() + 1));
    else if (a === 'bold') { document.execCommand('bold'); const ed = activeEditable(); if (ed) record(ed); }
    else if (a === 'hl') highlight();
    else if (a === 'clear') { document.execCommand('removeFormat'); const ed = activeEditable(); if (ed) { ed.querySelectorAll('em').forEach((m) => { if (getSelection().containsNode(m, true)) m.replaceWith(...m.childNodes); }); record(ed); } }
    else if (a === 'reset') resetSlide();
    else if (a === 'save') save();
    else if (a === 'done') exit();
  });
  notes.querySelector('[data-act="notes"]').addEventListener('click', () => {
    notesOpen = !notesOpen;
    notes.classList.toggle('closed', !notesOpen);
    window.DeckAPI.setEditing(true, insets());
  });

  const typing = (t) => t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName));
  addEventListener('keydown', (e) => {
    if (modal.classList.contains('on')) return;
    if (!on) {
      if ((e.key === 'e' || e.key === 'E') && !e.ctrlKey && !e.metaKey && !e.altKey && !typing(e.target)) { e.preventDefault(); enter(); }
      return;
    }
    if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) { e.preventDefault(); save(); return; }
    if (typing(e.target)) {
      if (e.key === 'Escape') { e.preventDefault(); e.target.blur(); }
      return;
    }
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    switch (e.key) {
      case 'ArrowRight': case 'ArrowDown': case 'PageDown': e.preventDefault(); show(Math.min(slides.length - 1, cur() + 1)); break;
      case 'ArrowLeft': case 'ArrowUp': case 'PageUp': e.preventDefault(); show(Math.max(0, cur() - 1)); break;
      case 'Home': e.preventDefault(); show(0); break;
      case 'End': e.preventDefault(); show(slides.length - 1); break;
      case 'Escape': case 'e': case 'E': e.preventDefault(); exit(); break;
      default:
    }
  });
  addEventListener('beforeunload', (e) => {
    if (on && dirty) { try { localStorage.setItem(DRAFT, JSON.stringify(E)); } catch (err) { /* abaikan */ } }
  });

  /* buka langsung dalam mode edit lewat presentasi.html?edit */
  if (params.has('edit')) document.addEventListener('deck:ready', () => setTimeout(enter, 50), { once: true });
})();
