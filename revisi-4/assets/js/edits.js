/* Perubahan teks dari mode edit presentasi (tekan E di presentasi.html).
   File ini ditulis otomatis oleh tombol "Simpan ke file". Isi aslinya
   tetap ada di presentasi.html dan deck-data.js, jadi menghapus file ini
   sama dengan mengembalikan semua teks ke versi awal. */
window.DECK_EDITS = {
  "version": 1,
  "saved": "",
  "slides": {},
  "notes": {}
};

/* Terapkan catatan pembicara yang diubah. Draf di browser yang lebih baru
   dari file dipakai lebih dulu, supaya perubahan yang belum disimpan tidak hilang. */
(function () {
  var F = window.DECK_EDITS, A = F, d = null;
  try { d = JSON.parse(localStorage.getItem('ld4-edits-draft') || 'null'); } catch (e) { d = null; }
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
