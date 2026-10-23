/* Bank Q&A. Nomor slide diturunkan dari id slide di deck-data.js,
   jadi tetap sinkron bila urutan slide berubah. */
window.QA = {
  sections: [
    { id: "A", name: "Ekosistem digital dan data anak" },
    { id: "B", name: "Lima tantangan bersama" },
    { id: "C", name: "Sekolah negeri, swasta, dan TPQ" },
    { id: "D", name: "Solusi, gamifikasi, dan peran orang tua" },
    { id: "E", name: "Metode dan batas kajian" }
  ],

  tips: [
    "Ulangi pertanyaannya dengan kalimat sendiri sebelum menjawab. Itu memberi waktu berpikir dan memastikan kita menjawab hal yang benar.",
    "Sampaikan intinya dulu dalam satu atau dua kalimat. Tambahan hanya kalau penanya masih bertanya lebih jauh.",
    "Kalau datanya tidak ada di makalah, katakan terus terang: \"Itu belum kami periksa.\" Lalu sebutkan apa yang bisa dicek dan di mana.",
    "Jangan menebak angka, nama lembaga, atau status hukum fikih. Untuk soal fikih, cukup sampaikan bahwa kajian kami tidak sampai ke sana.",
    "Banyak peserta kelas sudah lama mengajar. Kalau mereka berbagi pengalaman, dengarkan dan hubungkan dengan slide yang relevan. Pengalaman mereka sering lebih kaya daripada data kita.",
    "Kalau pertanyaannya mengarah ke slide tertentu, tekan O di presentasi lalu klik slide itu.",
    "Penjawab utama sudah ditentukan, tetapi pasangan boleh menambahkan setelah penjawab utama selesai."
  ],

  items: [
    /* ---------- A ---------- */
    {
      sec: "A", who: "Aldo", slides: ["s04", "s05"],
      q: "Apa bedanya teknologi digital dengan ekosistem digital?",
      short: "Teknologi itu alatnya, misalnya HP atau aplikasi. Ekosistem melihat hubungan di sekitarnya: siapa yang memakai, platform apa yang menyajikan, algoritma yang memilihkan, dan data yang terkumpul. Ketika anak menonton satu video, sebenarnya seluruh rangkaian itu sedang bekerja.",
      more: "Karena itu Nata mengingatkan bahwa teknologi tidak bisa dipandang hanya sebagai alat. Kalau hanya melihat alatnya, kita bisa lupa soal data dan kebiasaan yang ikut terbentuk.",
      basis: "Makalah Bab II A.1; Moore (1993); Nata (2020)."
    },
    {
      sec: "A", who: "Aldo", slides: ["s04"],
      q: "Perumpamaan pasar itu dari mana? Apakah ada di teori Moore?",
      short: "Perumpamaan pasar itu dari kami sendiri, untuk memudahkan penjelasan. Moore memakai istilah ekosistem dari biologi untuk dunia bisnis. Kami hanya meminjam gambaran pasar agar mudah dibayangkan oleh semua kalangan.",
      more: "Kalau dosen meminta definisi akademik, pakai kalimat di makalah: jaringan yang saling terhubung antara manusia, perangkat, platform, algoritma, dan data.",
      basis: "Makalah Bab II A.1."
    },
    {
      sec: "A", who: "Aldo", slides: ["s05"],
      q: "Apakah setiap ekosistem digital harus punya keempat unsur itu?",
      short: "Empat unsur itu peta untuk menjelaskan ekosistem yang dihadapi anak sehari-hari, bukan daftar wajib. Di ruang kelas yang hanya memakai proyektor, misalnya, unsur algoritma dan datanya hampir tidak ada. Tetapi di HP anak, keempatnya hadir sekaligus.",
      more: "Istilah Internet of Things kami sebut sebagai nama lain untuk perangkat yang saling terhubung, supaya tidak membingungkan audiens umum.",
      basis: "Makalah Bab II A.2."
    },
    {
      sec: "A", who: "Paisal", slides: ["s06", "s07"],
      q: "Apakah algoritma itu jahat?",
      short: "Tidak. Algoritma hanya aturan yang dijalankan komputer. Yang perlu disadari adalah tujuannya. Algoritma rekomendasi dirancang supaya pengguna bertahan selama mungkin. Itu wajar untuk bisnis, tetapi anak belum punya rem yang kuat, jadi orang dewasa perlu ikut mengatur.",
      more: "Algoritma juga bisa membantu, misalnya merekomendasikan murattal setelah anak mendengarkan satu surah. Yang menentukan adalah apa yang sering ditonton dan siapa yang mendampingi.",
      basis: "Makalah Bab II A.2 butir c."
    },
    {
      sec: "A", who: "Aldo", slides: ["s02"],
      q: "Angka 79,73 persen untuk anak di bawah 12 tahun itu dari mana? Apakah anak-anak diwawancarai?",
      short: "Tidak. Survei APJII 2025 mewawancarai responden berusia minimal 13 tahun. Angka untuk Generasi Alfa diperoleh dari laporan orang tua tentang anaknya. Jadi angka itu perlu dibaca sebagai perkiraan dari orang tua.",
      more: "Yang lebih kuat untuk anak kecil adalah data BPS dari Susenas, yaitu 39,71 persen anak usia dini memakai HP dan 58,25 persen pada usia 5–6 tahun.",
      basis: "Makalah Bab I A; APJII 2025 (GoodStats; ANTARA)."
    },
    {
      sec: "A", who: "Aldo", slides: ["s02"],
      q: "Apakah anak usia 5–6 tahun yang memakai HP itu punya HP sendiri?",
      short: "Datanya tidak membedakan itu. BPS mencatat anak yang menggunakan telepon seluler, bukan yang memilikinya. Bisa jadi HP milik orang tua yang dipinjamkan. Justru itu menunjukkan bahwa orang tua punya peran besar.",
      more: "Ini juga alasan solusi kami untuk orang tua menekankan batasan yang disertai pendampingan dan teladan.",
      basis: "BPS, Profil Anak Usia Dini 2024; makalah Bab I A."
    },
    {
      sec: "A", who: "Paisal", slides: ["s08"],
      q: "Angka 177.938 lembaga pendidikan Al-Qur'an itu masih berlaku?",
      short: "Itu data SIPDAR PQ Kementerian Agama per Juli 2022, sebagaimana diberitakan NU Online. Angka terbarunya kemungkinan berbeda karena pendataan terus berjalan. Kami memakainya untuk menunjukkan bahwa jumlah lembaga ini sangat besar.",
      more: "Ada sumber lain yang menyebut lebih dari 190 ribu, tetapi tahunnya tidak jelas, jadi kami memakai angka yang tanggalnya pasti.",
      basis: "Makalah Bab I A; NU Online, 29 Juli 2022."
    },

    /* ---------- B ---------- */
    {
      sec: "B", who: "Paisal", slides: ["s10"],
      q: "Kalau HP mengganggu konsentrasi, kenapa tidak dilarang saja sepenuhnya?",
      short: "Larangan di kelas memang perlu dan sekarang sudah diatur lewat SE Mendikdasmen Nomor 18 Tahun 2026. Tetapi larangan hanya berlaku beberapa jam. Begitu pulang, anak kembali ke HP-nya. Jadi selain melarang, kita perlu membekali anak supaya bisa memakai HP dengan bijak.",
      more: "Menterinya sendiri menegaskan bahwa kebijakan itu pembatasan, bukan pelarangan.",
      basis: "Makalah Bab II C.1 dan D; RMOL (14 Juli 2026)."
    },
    {
      sec: "B", who: "Paisal", slides: ["s10"],
      q: "Bukti dari 14 negara itu maksudnya apa?",
      short: "UNESCO merangkum penelitian dari 14 negara yang menunjukkan bahwa HP yang berada di dekat siswa saja sudah bisa mengganggu konsentrasi. Angka 14 itu jumlah negara asal buktinya, bukan persentase.",
      more: "Laporannya adalah Global Education Monitoring Report 2023 berjudul Technology in Education: A Tool on Whose Terms?",
      basis: "Makalah Bab II C.1; UNESCO (2023)."
    },
    {
      sec: "B", who: "Paisal", slides: ["s11"],
      q: "Apakah semua ustadz di media sosial tidak bisa dipercaya?",
      short: "Tidak, banyak ulama dan ustadz yang berilmu dan berdakwah lewat media sosial. Yang kami persoalkan adalah anak dan orang tua yang tidak terbiasa memeriksa siapa yang berbicara dan dari mana ilmunya. Masalahnya ada pada cara kita menerima, bukan pada medianya.",
      more: "Karena itu solusi kami untuk guru adalah mengajarkan empat pertanyaan tabayyun, bukan menjauhkan anak dari konten agama.",
      basis: "Makalah Bab II C.2 dan E.1; Rifdillah dkk. (2024)."
    },
    {
      sec: "B", who: "Paisal", slides: ["s11"],
      q: "Bagaimana dengan chatbot AI? Bolehkah anak bertanya agama kepada AI?",
      short: "Makalah kami tidak menilai hukumnya. Yang kami tekankan, jawaban chatbot terdengar meyakinkan tetapi tidak punya sanad keilmuan dan bisa keliru. Kalau dipakai, sebaiknya sebagai bahan awal yang kemudian dicek kepada guru atau rujukan yang jelas.",
      more: "Pesan Muhammad bin Sirin dalam Muqaddimah Shahih Muslim relevan di sini: perhatikan dari siapa kalian mengambil agama kalian.",
      basis: "Makalah Bab II C.2."
    },
    {
      sec: "B", who: "Paisal", slides: ["s12"],
      q: "Survei Microsoft itu bukankah tentang orang dewasa, bukan anak?",
      short: "Betul. Digital Civility Index 2020 mengukur pengalaman warganet usia 18 sampai 74 tahun, dan penurunannya justru datang dari orang dewasa. Kami memakainya untuk menggambarkan suasana dunia maya yang dilihat anak setiap hari. Anak meniru orang dewasa di sekitarnya.",
      more: "Data yang khusus anak muda adalah survei U-Report UNICEF, yaitu 45 persen dari 2.777 responden usia 14–24 tahun pernah mengalami perundungan siber.",
      basis: "Makalah Bab II C.3; CNN Indonesia (2021); The Jakarta Post (2022)."
    },
    {
      sec: "B", who: "Paisal", slides: ["s12"],
      q: "Survei U-Report itu tahun berapa?",
      short: "Media menyebut tahun yang berbeda, ada yang 2019 dan ada yang 2021. Yang konsisten adalah angkanya, yaitu 45 persen dari 2.777 responden usia 14–24 tahun. Kami mengutipnya dari The Jakarta Post.",
      more: "Kalau diminta sumber primernya, kami belum menemukan laporan resmi UNICEF yang bisa dibuka langsung. Itu kami sampaikan apa adanya.",
      basis: "Makalah Bab II C.3."
    },
    {
      sec: "B", who: "Aldo", slides: ["s13"],
      q: "Angka 89 persen aplikasi belajar itu apakah artinya aplikasi itu pasti memata-matai anak?",
      short: "Tidak pasti. Kalimatnya, aplikasi itu dapat memantau atau telah memantau anak di luar jam sekolah. Datanya berasal dari analisis Human Rights Watch terhadap 163 produk yang direkomendasikan pemerintah berbagai negara saat pandemi, lalu dikutip UNESCO.",
      more: "Pesannya untuk kita: sebelum menyuruh siswa memakai aplikasi, cek dulu data apa yang diminta aplikasi itu.",
      basis: "Makalah Bab II C.4; UNESCO (2023)."
    },
    {
      sec: "B", who: "Aldo", slides: ["s13", "s22"],
      q: "Apa isi Pasal 25 UU Pelindungan Data Pribadi?",
      short: "Pasal itu mengatur bahwa pemrosesan data pribadi anak diselenggarakan secara khusus, dan wajib mendapat persetujuan dari orang tua atau wali anak. Jadi foto, nama, dan nilai anak tidak semestinya diunggah tanpa izin orang tua.",
      more: "PP Nomor 17 Tahun 2025 atau PP Tunas menambah kewajiban bagi penyelenggara platform untuk melindungi anak.",
      basis: "Makalah Bab II C.4 dan E.3; UU 27/2022 Pasal 25."
    },
    {
      sec: "B", who: "Aldo", slides: ["s13"],
      q: "Apa itu PP Tunas dan apa hubungannya dengan sekolah?",
      short: "PP Tunas adalah PP Nomor 17 Tahun 2025 tentang perlindungan anak di sistem elektronik. Sejak 28 Maret 2026, platform berisiko tinggi seperti YouTube, TikTok, Instagram, dan Roblox wajib membatasi akun anak di bawah 16 tahun. Aturan ini menyasar platform, bukan sekolah, tetapi sekolah dan orang tua perlu tahu agar bisa ikut mengawasi.",
      more: "Pemberitaan menunjukkan pelaksanaannya belum sepenuhnya mulus, misalnya masih ada platform yang meloloskan pendaftar berusia 14 atau 15 tahun.",
      basis: "Makalah Bab I A; Bisnis.com (26 dan 30 Maret 2026); Katadata (2026)."
    },
    {
      sec: "B", who: "Aldo", slides: ["s14"],
      q: "Apakah kesenjangan kemampuan guru itu berdasarkan survei?",
      short: "Bukan. Itu gambaran umum yang kami tulis dalam makalah, dan kami tandai sebagai pengamatan. Data survei yang kami pakai hanya akses internet dari BPS, yaitu 82,72 persen di perkotaan dan 70,14 persen di perdesaan pada 2025.",
      more: "Kalau ada peserta yang punya data atau pengalaman soal pelatihan digital guru PAI, itu bisa menjadi masukan berharga untuk makalah ini.",
      basis: "Makalah Bab II C.5; BPS (dikutip GoodStats, 2026)."
    },

    /* ---------- C ---------- */
    {
      sec: "C", who: "Aldo", slides: ["s15"],
      q: "Benarkah PAI di SD hanya sekitar 105 menit seminggu?",
      short: "Untuk kelas satu SD dalam Kurikulum Merdeka, alokasi intrakurikulernya 108 jam pelajaran per tahun. Kalau dibagi 36 minggu, itu tiga jam pelajaran per minggu. Satu jam pelajaran di SD 35 menit, jadi sekitar 105 menit. Ada tambahan 36 JP per tahun untuk projek.",
      more: "Di SMP kelas VII dan VIII, intrakurikulernya 72 JP per tahun dengan JP 40 menit, ditambah 36 JP projek. Angka ini bisa berubah bila peraturannya diperbarui.",
      basis: "Makalah Bab I A dan II B.1; Permendikbudristek 12/2024 Lampiran II."
    },
    {
      sec: "C", who: "Aldo", slides: ["s15", "s18"],
      q: "Bukankah madrasah juga lembaga negeri? Kenapa tidak dibahas?",
      short: "Madrasah memang ada yang negeri, tetapi kami membatasi pembahasan pada sekolah umum di bawah Kemendikdasmen, sekolah swasta, dan lembaga pendidikan Al-Qur'an. Madrasah punya jam agama yang jauh lebih banyak dan aturan sendiri dari Kementerian Agama, sehingga layak dibahas terpisah.",
      more: "Itu bisa menjadi saran untuk kajian berikutnya.",
      basis: "Makalah Bab I dan II B."
    },
    {
      sec: "C", who: "Aldo", slides: ["s16"],
      q: "Bagaimana dengan siswa Muslim di sekolah swasta yang berciri agama lain?",
      short: "Undang-Undang Sisdiknas Pasal 12 menjamin hak setiap peserta didik untuk mendapat pendidikan agama sesuai agamanya dan diajarkan oleh pendidik yang seagama. Jadi idealnya sekolah menyediakan guru PAI. Kenyataannya, pemenuhan hak ini bergantung pada kesediaan sekolah.",
      more: "Di sinilah TPQ dan orang tua menjadi semakin penting, karena bisa jadi itu satu-satunya tempat anak belajar agama secara teratur.",
      basis: "Makalah Bab II B.2; UU 20/2003 Pasal 12 ayat (1) huruf a."
    },
    {
      sec: "C", who: "Aldo", slides: ["s16"],
      q: "Bukankah mengirim foto hafalan ke orang tua itu bagus untuk komunikasi?",
      short: "Bagus, selama dikirim ke orang tua anak itu sendiri dan dengan izin. Yang kami waspadai adalah foto dan video yang diunggah ke media sosial publik, apalagi dengan nama lengkap dan nilai. Ada juga risiko halus, yaitu ukuran keberhasilan bergeser ke hal yang bisa difoto saja.",
      more: "Kejujuran dan keikhlasan tidak bisa difoto, tetapi justru itu inti pendidikan agama.",
      basis: "Makalah Bab II D."
    },
    {
      sec: "C", who: "Aldo", slides: ["s17"],
      q: "Apakah TPQ perlu memakai aplikasi atau sistem digital?",
      short: "Tidak harus. TPQ tidak perlu mengejar teknologi secanggih sekolah. Yang penting teknologi sederhana yang sudah ada, misalnya grup WhatsApp dengan orang tua, dipakai dengan tepat dan beradab. Belajar membaca Al-Qur'an tetap membutuhkan pertemuan langsung.",
      more: "Kalau ingin memakai aplikasi, pilih yang jelas pengelolaan datanya dan minta izin orang tua lebih dulu.",
      basis: "Makalah Bab II B.3, D, dan E.3."
    },
    {
      sec: "C", who: "Aldo", slides: ["s17"],
      q: "Bisakah talaqqi dilakukan lewat video call?",
      short: "Dalam keadaan darurat, seperti saat pandemi, video call bisa membantu. Tetapi talaqqi dan musyafahah idealnya bertatap muka, karena anak perlu melihat gerak bibir guru dengan jelas dan guru perlu mendengar bacaan anak tanpa gangguan sinyal.",
      more: "Makalah kami tidak membahas hukum atau keabsahan talaqqi daring. Itu di luar kajian kami.",
      basis: "Makalah Bab II B.3."
    },
    {
      sec: "C", who: "Aldo", slides: ["s17"],
      q: "Data guru TPQ yang sukarela itu dari mana?",
      short: "Itu gambaran umum, bukan data survei nasional. Banyak TPQ dikelola masjid atau warga dengan imbalan yang kecil. Kami tidak punya angka resmi tentang honor guru TPQ, jadi kami tidak menyebut angka.",
      more: "Kalau ada peserta yang mengelola TPQ, pengalamannya bisa melengkapi gambaran ini.",
      basis: "Makalah Bab II B.3 dan D."
    },

    /* ---------- D ---------- */
    {
      sec: "D", who: "Paisal", slides: ["s20"],
      q: "Empat pertanyaan tabayyun itu dari kitab apa?",
      short: "Empat pertanyaan itu rumusan kami dari prinsip tabayyun dalam QS. Al-Hujurat ayat 6, ditambah pesan Muhammad bin Sirin tentang memeriksa sumber ilmu. Tujuannya membuat prinsip itu mudah dipraktikkan di kelas.",
      more: "Guru boleh menyesuaikan bahasanya dengan usia anak. Untuk anak SD, cukup dua pertanyaan: siapa yang berbicara, dan apakah ustadz kita setuju.",
      basis: "Makalah Bab II E.1."
    },
    {
      sec: "D", who: "Paisal", slides: ["s21"],
      q: "Apa bedanya gamifikasi dengan belajar sambil main game?",
      short: "Dalam belajar sambil main game, anak memainkan game yang utuh. Dalam gamifikasi, kegiatan belajarnya tetap seperti biasa, hanya diberi lapisan unsur game seperti poin, level, atau papan peringkat. Mengaji tetap mengaji, hanya ada tanda kemajuannya.",
      more: "Definisi ini dari Deterding dan kawan-kawan tahun 2011.",
      basis: "Makalah Bab II E.2; Deterding dkk. (2011)."
    },
    {
      sec: "D", who: "Paisal", slides: ["s21"],
      q: "Angka 0,49 itu artinya apa? Apakah 49 persen?",
      short: "Bukan persen. Itu ukuran efek, yaitu seberapa besar perbedaan antara kelompok yang memakai gamifikasi dan yang tidak, dalam satuan baku. Nilai 0,49 untuk hasil belajar tergolong sedang. Untuk motivasi 0,36 dan untuk perilaku 0,25, lebih kecil.",
      more: "Sailer dan Homner juga menemukan pengaruhnya lebih kuat bila kompetisi dipadukan dengan kerja sama.",
      basis: "Makalah Bab II E.2; Sailer dan Homner (2020)."
    },
    {
      sec: "D", who: "Paisal", slides: ["s21"],
      q: "Kalau ada penelitian yang menunjukkan gamifikasi menurunkan motivasi, kenapa tetap ditawarkan?",
      short: "Karena hasilnya bergantung pada cara memakainya. Penelitian Hanus dan Fox memakai badge dan leaderboard satu semester pada mahasiswa, dan hasilnya negatif. Itu sebabnya kami menawarkan gamifikasi dengan rambu: poin sebagai sarana, menghargai kemajuan, dan tidak mempermalukan.",
      more: "Penelitian Hanus dan Fox dilakukan di kelas mahasiswa di Amerika Serikat, jadi tidak bisa langsung disamakan dengan anak TPQ. Tetapi peringatannya tetap berguna.",
      basis: "Makalah Bab II E.2; Hanus dan Fox (2015)."
    },
    {
      sec: "D", who: "Paisal", slides: ["s21"],
      q: "Bukankah memberi poin untuk ibadah itu merusak niat?",
      short: "Risikonya memang ada, dan karena itu kami menaruh hadis innamal a'malu binniyat di slide. Islam sendiri mengenal targhib wa tarhib dan mendorong berlomba dalam kebaikan. Rasulullah juga menggambarkan pahala membaca Al-Qur'an dengan hitungan, satu huruf sepuluh kebaikan. Jadi menghitung kebaikan untuk menyemangati tidak ditolak, asalkan niatnya terus diluruskan.",
      more: "Caranya, setiap kali memberi poin, guru mengingatkan pahala yang jauh lebih besar di sisi Allah. Poin di dunia menjadi pengingat, bukan pengganti.",
      basis: "Makalah Bab II E.2; an-Nahlawi (1995); QS. Al-Baqarah [2]: 148; HR. at-Tirmidzi no. 2910; HR. al-Bukhari no. 1."
    },
    {
      sec: "D", who: "Paisal", slides: ["s21"],
      q: "Bagaimana memakai gamifikasi di TPQ yang tidak punya komputer?",
      short: "Bisa dengan cara manual, seperti papan bintang di dinding, kartu prestasi, atau stiker di buku prestasi. Prinsipnya sama: tanda kemajuan yang jelas dan penghargaan atas usaha.",
      more: "Mulailah dari satu tujuan sederhana, misalnya datang tepat waktu atau menyelesaikan target halaman, dengan aturan yang mudah dipahami anak.",
      basis: "Makalah Bab II E.2, rambu kelima."
    },
    {
      sec: "D", who: "Paisal", slides: ["s22"],
      q: "Apa itu prinsip 3S?",
      short: "3S adalah screen time, screen zone, dan screen break. Screen time artinya batas waktu layar. Screen zone artinya tempat yang bebas HP, seperti meja makan dan kamar tidur. Screen break artinya jeda dari layar. Prinsip ini disebut dalam Surat Edaran Mendikdasmen Nomor 18 Tahun 2026 untuk orang tua.",
      more: "Pemberitaannya menyebut penerapannya disesuaikan dengan usia, perkembangan, dan kebutuhan anak. Teks lengkap surat edarannya belum kami baca langsung.",
      basis: "Makalah Bab II E.4; RMOL dan Warta Ekonomi (14 Juli 2026)."
    },
    {
      sec: "D", who: "Paisal", slides: ["s22"],
      q: "Bagaimana kalau orang tua sendiri sibuk dan tidak bisa mendampingi?",
      short: "Pendampingan tidak harus lama. Aturan yang jelas, misalnya batas waktu dan tempat bebas HP, tetap bisa berjalan walaupun orang tua sibuk. Livingstone dan Helsper menunjukkan bahwa pembatasan seperti ini membantu menekan risiko. Waktu yang sempit bisa dipakai untuk sesekali menonton bersama dan membicarakan isinya.",
      more: "Yang paling kuat tetap teladan. Kesepakatan keluarga seperti tidak ada HP setelah magrib akan berjalan kalau berlaku juga untuk orang tua.",
      basis: "Makalah Bab II E.4; Livingstone dan Helsper (2008)."
    },
    {
      sec: "D", who: "Aldo", slides: ["s23"],
      q: "Kerja sama sekolah dan TPQ itu konkretnya seperti apa?",
      short: "Bisa dimulai dari hal kecil. Guru PAI menanyakan di mana anak mengaji dan sampai mana bacaannya. Ustadz TPQ mengabarkan kemajuan bacaan kepada orang tua secara rutin. Orang tua menjadi penghubung di antara keduanya.",
      more: "Grup WhatsApp yang sudah ada cukup untuk memulai, asalkan dipakai dengan adab dan tidak menyebarkan data anak ke luar grup.",
      basis: "Makalah Bab II E.5; Epstein (1995)."
    },
    {
      sec: "D", who: "Aldo", slides: ["s23"],
      q: "Bukankah guru PAI sudah sangat sibuk? Kerja sama ini menambah beban.",
      short: "Benar, guru PAI bebannya berat. Karena itu kami menawarkan langkah yang paling ringan, cukup satu pertanyaan kepada siswa tentang tempat ia mengaji. Informasi itu justru membantu guru, karena ia tahu siswa mana yang sudah lancar dan siapa yang perlu bantuan.",
      more: "Kalau sekolah mau lebih jauh, bisa mengundang pengelola TPQ sekitar dalam pertemuan orang tua sekali setahun.",
      basis: "Makalah Bab II E.5."
    },

    /* ---------- E ---------- */
    {
      sec: "E", who: "Aldo", slides: ["s03", "s19"],
      q: "Apakah solusi-solusi ini sudah diuji?",
      short: "Belum. Makalah ini studi pustaka, dan semua solusi kami tawarkan sebagai bahan diskusi. Itu sebabnya slide terakhir berisi pertanyaan untuk Bapak dan Ibu. Pengujian di lapangan kami tulis sebagai saran untuk penelitian berikutnya.",
      more: "Metodenya deskriptif-analitis: memetakan tantangan, membandingkan tiga lembaga, lalu merumuskan solusi menurut pihak yang melaksanakannya.",
      basis: "Makalah Bab I D dan Bab III B."
    },
    {
      sec: "E", who: "Aldo", slides: ["s02", "s14"],
      q: "Kenapa banyak data diambil dari berita, bukan dari laporan aslinya?",
      short: "Beberapa data terbaru, seperti surat edaran 2026 dan data BPS 2025, kami peroleh dari media nasional yang mengutip sumber resmi. Di makalah, sumber beritanya kami cantumkan apa adanya supaya pembaca bisa memeriksa. Untuk data yang laporan aslinya tersedia, kami merujuk langsung.",
      more: "Ini salah satu keterbatasan makalah kami, dan kami terbuka bila ada masukan sumber primer.",
      basis: "Makalah Bab I D."
    },
    {
      sec: "E", who: "Aldo dan Paisal", slides: ["s24", "s25"],
      q: "Dari semua solusi itu, mana yang paling mudah dimulai besok?",
      short: "Menurut kami, dua hal. Untuk guru, membahas satu konten agama yang sedang ramai dengan empat pertanyaan tabayyun. Untuk orang tua, menyepakati waktu tanpa HP setelah magrib sampai selesai mengaji. Keduanya tidak butuh biaya dan tidak butuh aplikasi.",
      more: "Langkah lembaga, seperti meminta izin orang tua sebelum mengunggah foto anak, juga bisa dimulai minggu ini.",
      basis: "Makalah Bab II E, Tabel 2."
    }
  ]
};
