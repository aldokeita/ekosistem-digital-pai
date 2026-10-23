/* Merender panduan dan bank Q&A dari deck-data.js dan qa-data.js,
   sehingga naskah, nomor slide, dan pembicara selalu sama dengan presentasi. */
(function () {
  'use strict';
  const D = window.DECK || { slides: [], chapters: [] };
  const N = {};
  D.slides.forEach((s, i) => { N[s.id] = i + 1; });
  const $ = (sel, root) => (root || document).querySelector(sel);
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const who = (name) => (/ dan /.test(name) ? 'both' : name);
  const dur = (sec) => Math.floor(sec / 60) + ':' + String(sec % 60).padStart(2, '0');
  const pad = (n) => String(n).padStart(2, '0');

  /* motif jaringan di hero */
  document.querySelectorAll('svg.net').forEach((svg) => {
    let s = 20261009;
    const r = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
    const w = 1600, h = 520, pts = [];
    for (let i = 0; i < 46; i++) pts.push([r() * w, r() * h]);
    let out = '';
    pts.forEach((p, i) => pts.forEach((q, j) => {
      if (j <= i) return;
      const d = Math.hypot(p[0] - q[0], p[1] - q[1]);
      if (d < 170) out += `<line x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}" stroke="rgba(169,212,255,${(0.4 * (1 - d / 170)).toFixed(2)})" stroke-width="1.2"/>`;
    }));
    pts.forEach((p, i) => { out += `<circle cx="${p[0]}" cy="${p[1]}" r="${i % 6 ? 2.5 : 4.5}" fill="${i % 6 ? 'rgba(169,212,255,.7)' : '#5BB8FF'}"/>`; });
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
    svg.innerHTML = out;
  });

  /* ================= PANDUAN ================= */
  const guide = $('#guide-slides');
  if (guide) {
    const total = D.slides.reduce((a, s) => a + s.sec, 0);
    const per = {};
    D.slides.forEach((s) => { per[s.speaker] = (per[s.speaker] || 0) + s.sec; });
    const nCase = D.slides.filter((s) => s.chapter === 4).length;
    const nGen = D.slides.filter((s) => s.chapter >= 1 && s.chapter <= 3).length;

    const facts = $('#facts');
    if (facts) facts.innerHTML = `
      <div><b>${D.slides.length}</b><span>slide, termasuk sampul dan diskusi</span></div>
      <div><b>${dur(total)}</b><span>menit rencana bicara, di luar diskusi</span></div>
      <div><b>${dur(per.Aldo || 0)}</b><span>bagian Aldo</span></div>
      <div><b>${dur(per.Paisal || 0)}</b><span>bagian Paisal</span></div>`;
    const ratio = $('#ratio');
    if (ratio) ratio.textContent = `${nGen} slide membahas ekosistem dan tantangan, ${nCase} slide membahas solusi.`;

    /* blok pembicara berurutan */
    const runs = [];
    D.slides.forEach((s, i) => {
      const last = runs[runs.length - 1];
      if (last && last.speaker === s.speaker) { last.to = i + 1; last.sec += s.sec; last.titles.push(s.title); }
      else runs.push({ speaker: s.speaker, from: i + 1, to: i + 1, sec: s.sec, titles: [s.title] });
    });
    const tb = $('#runs tbody');
    if (tb) tb.innerHTML = runs.map((r) => `<tr>
        <td class="n">${r.from === r.to ? pad(r.from) : pad(r.from) + '–' + pad(r.to)}</td>
        <td><span class="pill ${who(r.speaker)}">${esc(r.speaker)}</span></td>
        <td>${esc(r.titles.length > 3 ? r.titles.slice(0, 2).join(', ') + ', … ' + r.titles[r.titles.length - 1] : r.titles.join(', '))}</td>
        <td class="n">${dur(r.sec)}</td></tr>`).join('');
    const tl = $('#tline');
    if (tl) tl.innerHTML = runs.map((r) => `<span class="${who(r.speaker)}" style="flex:${r.sec}" title="Slide ${r.from}–${r.to} · ${esc(r.speaker)} · ${dur(r.sec)}">${r.sec >= 80 ? pad(r.from) + '–' + pad(r.to) : ''}</span>`).join('');

    /* daftar isi per slide */
    const tocS = $('#toc-slides');
    if (tocS) tocS.innerHTML = D.chapters.map((c, ci) => {
      const first = D.slides.findIndex((s) => s.chapter === ci);
      return first < 0 ? '' : `<a href="#slide-${first + 1}">${c.no} · ${esc(c.name)}</a>`;
    }).join('');

    /* kartu per slide */
    let html = '', ch = -1;
    D.slides.forEach((s, i) => {
      if (s.chapter !== ch) {
        ch = s.chapter;
        const c = D.chapters[ch];
        html += `<h3 class="chapter-h"><span>${c.no}</span>${esc(c.name)}</h3>`;
      }
      const n = i + 1;
      html += `<article class="sc" id="slide-${n}">
        <div class="hd">
          <span class="no">${pad(n)}</span>
          <span class="ti">${esc(s.title)}${s.steps ? ` <span class="ch">· ${s.steps} langkah klik</span>` : ''}</span>
          <span class="pill ${who(s.speaker)}">${esc(s.speaker)}</span>
          <span class="pill dur">${dur(s.sec)}</span>
          <a class="open" href="presentasi.html#${n}" target="_blank" rel="noopener">Buka slide</a>
        </div>
        <div class="bd">
          <div class="script">
            <h4>Contoh ucapan</h4>
            <p>${esc(s.script)}</p>
            <p class="trn"><b>Transisi:</b> ${esc(s.transition)}</p>
          </div>
          <div class="side">
            <h4>Tujuan</h4><p>${esc(s.purpose)}</p>
            <h4>Cue</h4><p>${esc(s.cue)}</p>
            ${s.caution ? `<h4>Hati-hati</h4><p class="warn">${esc(s.caution)}</p>` : ''}
            <h4>Sumber</h4><p class="src">${esc(s.source)}</p>
          </div>
        </div>
      </article>`;
    });
    guide.innerHTML = html;
  }

  /* ================= BANK Q&A ================= */
  const list = $('#qa-list');
  if (list) {
    const Q = window.QA;
    const items = Q.items.map((it, i) => Object.assign({ n: i + 1, nums: it.slides.map((id) => N[id]).filter(Boolean) }, it));

    const tips = $('#tips');
    if (tips) tips.innerHTML = Q.tips.map((t) => `<li>${esc(t)}</li>`).join('');

    const secBar = $('#secs');
    let sec = 'all', person = 'all', term = '';
    secBar.innerHTML = `<button type="button" data-s="all" aria-pressed="true">Semua</button>` +
      Q.sections.map((s) => `<button type="button" data-s="${s.id}" aria-pressed="false">${s.id}. ${esc(s.name)}</button>`).join('');
    secBar.addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return;
      sec = b.dataset.s;
      secBar.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      render();
    });
    $('#who').addEventListener('change', (e) => { person = e.target.value; render(); });
    $('#q').addEventListener('input', (e) => { term = e.target.value.trim(); render(); });
    $('#openAll').addEventListener('click', () => list.querySelectorAll('details').forEach((d) => { d.open = true; }));
    $('#closeAll').addEventListener('click', () => list.querySelectorAll('details').forEach((d) => { d.open = false; }));
    $('#printBtn').addEventListener('click', () => window.print());

    const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    function mark(text) {
      const t = esc(text);
      if (!term || term.length < 2) return t;
      const safe = esc(term).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return t.replace(new RegExp('(' + safe + ')', 'gi'), '<mark>$1</mark>');
    }
    function card(it) {
      const sl = it.nums.length ? 'slide ' + it.nums.join(', ') : '';
      const links = it.nums.map((n) => `<a href="presentasi.html#${n}" target="_blank" rel="noopener">slide ${n}</a>`).join(' · ');
      return `<details class="qa" id="q${it.n}">
        <summary><span class="qn">Q${pad(it.n)}</span><span class="qq">${mark(it.q)}</span>
          <span class="qm"><span class="pill ${who(it.who)}">${esc(it.who)}</span>${sl ? `<span class="sl">${sl}</span>` : ''}</span></summary>
        <div class="ans">
          <h5>Jawaban singkat · sekitar 30 detik</h5><p class="short">${mark(it.short)}</p>
          <h5>Kalau ditanya lebih lanjut</h5><p>${mark(it.more)}</p>
          <h5>Dasar</h5><p class="basis">${esc(it.basis)}${links ? ' · Buka ' + links : ''}</p>
        </div></details>`;
    }
    function render() {
      const t = norm(term);
      const shown = items.filter((it) => (sec === 'all' || it.sec === sec)
        && (person === 'all' || it.who.includes(person))
        && (!t || norm(`${it.q} ${it.short} ${it.more} ${it.basis} slide ${it.nums.join(' slide ')}`).includes(t)));
      let html = '';
      Q.sections.forEach((s) => {
        const group = shown.filter((it) => it.sec === s.id);
        if (!group.length) return;
        html += `<h3 class="qsec"><span>${s.id}</span>${esc(s.name)}</h3>` + group.map(card).join('');
      });
      list.innerHTML = html || '<p class="empty">Tidak ada pertanyaan yang cocok. Coba kata kunci lain.</p>';
      $('#cnt').textContent = `${shown.length} dari ${items.length} pertanyaan`;
      if (t && shown.length <= 6) list.querySelectorAll('details').forEach((d) => { d.open = true; });
    }
    render();
    if (location.hash && /^#q\d+$/.test(location.hash)) {
      const d = document.querySelector(location.hash);
      if (d) { d.open = true; d.scrollIntoView(); }
    }
  }

  /* ================= GLOSARIUM ================= */
  const gl = $('#gl-list');
  if (gl && window.GLOSSARY) {
    const G = window.GLOSSARY;
    const gname = {};
    G.groups.forEach((g) => { gname[g.id] = g.name; });
    const terms = G.terms.slice().sort((a, b) => a.t.localeCompare(b.t, 'id'));
    let grp = 'all', term = '';
    const bar = $('#ggroups');
    bar.innerHTML = `<button type="button" data-g="all" aria-pressed="true">Semua</button>` +
      G.groups.map((g) => `<button type="button" data-g="${g.id}" aria-pressed="false">${esc(g.name)}</button>`).join('');
    bar.addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return;
      grp = b.dataset.g;
      bar.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      renderG();
    });
    $('#gq').addEventListener('input', (e) => { term = e.target.value.trim().toLowerCase(); renderG(); });
    function renderG() {
      const shown = terms.filter((x) => (grp === 'all' || x.g === grp) && (!term || (x.t + ' ' + x.d).toLowerCase().includes(term)));
      let html = '', letter = '';
      shown.forEach((x) => {
        const L = x.t[0].toUpperCase();
        if (L !== letter) { letter = L; html += `<h3 class="gl-l">${L}</h3>`; }
        const links = x.slides.map((id) => N[id]).filter(Boolean).map((n) => `<a href="presentasi.html#${n}" target="_blank" rel="noopener">slide ${n}</a>`).join(' · ');
        html += `<div class="gl-i">
          <div class="gl-h"><b>${esc(x.t)}</b><span class="pill gp">${esc(gname[x.g] || '')}</span>${x.src === 'presentasi' ? '<span class="pill gx">istilah dari presentasi</span>' : ''}</div>
          <p>${esc(x.d)}</p>${links ? `<p class="gl-s">${links}</p>` : ''}</div>`;
      });
      gl.innerHTML = html || '<p class="empty">Tidak ada istilah yang cocok.</p>';
      $('#gcnt').textContent = `${shown.length} dari ${terms.length} istilah · ${terms.filter((x) => x.src === 'makalah').length} dari glosarium makalah`;
    }
    renderG();
    const tb = $('#lafal-t tbody');
    if (tb) tb.innerHTML = G.lafal.map((x) => `<tr><td><b>${esc(x.w)}</b></td><td class="lf">${esc(x.r)}</td><td>${esc(x.k)}</td></tr>`).join('');
  }

  /* ?print: dipakai saat membuat PDF, semua jawaban langsung terbuka */
  if (new URLSearchParams(location.search).has('print')) {
    document.querySelectorAll('details').forEach((d) => { d.open = true; });
  }

  /* buka semua isian saat dicetak */
  addEventListener('beforeprint', () => document.querySelectorAll('details').forEach((d) => { d.dataset.was = d.open ? '1' : ''; d.open = true; }));
  addEventListener('afterprint', () => document.querySelectorAll('details').forEach((d) => { d.open = d.dataset.was === '1'; }));
})();
