/* Bank Q&A. Nomor slide diturunkan dari id slide di deck-data.js,
   jadi tetap sinkron bila urutan slide berubah. */
window.QA = {
  sections: [
    { id: "A", name: "Ekosistem digital secara umum" },
    { id: "B", name: "Tantangan bagi pendidikan Islam" },
    { id: "C", name: "Gamifikasi, niat, dan adab" },
    { id: "D", name: "Kasus dan data LPQ" },
    { id: "E", name: "Metode, strategi, dan tata kelola" }
  ],

  tips: [
    "Ulangi pertanyaannya dengan kalimat sendiri sebelum menjawab. Itu memberi waktu berpikir dan memastikan kita menjawab hal yang benar.",
    "Jawab dulu intinya dalam satu atau dua kalimat. Penjelasan tambahan hanya kalau penanya masih mengejar.",
    "Kalau datanya tidak ada di makalah, katakan terus terang: \"Itu belum kami periksa.\" Lalu sebutkan apa yang bisa dicek dan di mana.",
    "Jangan menebak angka, nama santri, atau status hukum. Untuk soal hukum fikih, cukup sampaikan bahwa kajian kami tidak sampai ke sana.",
    "Kalau pertanyaannya mengarah ke slide tertentu, tekan O di presentasi dan lompat ke slide itu.",
    "Penjawab utama sudah ditentukan, tapi pasangan boleh menambahkan setelah penjawab utama selesai."
  ],

  items: [
    /* ---------- A ---------- */
    {
      sec: "A", who: "Aldo", slides: ["s04", "s05"],
      q: "Apa bedanya teknologi digital dengan ekosistem digital?",
      short: "Teknologi itu alatnya, misalnya aplikasi atau HP. Ekosistem melihat hubungannya: siapa yang memakai, perangkat apa, platform mana yang menyajikan, data apa yang terkumpul, dan aturan apa yang berlaku. Waktu anak menonton video, misalnya, ada pembuat konten, ada algoritma yang memilihkan, dan ada data tontonan yang tercatat. Hubungan-hubungan itulah yang kami maksud dengan ekosistem.",
      more: "Makanya makalah memakai kalimat 'aplikasi tidak berdiri sendiri'. Kalau kita hanya melihat alatnya, kita bisa lupa soal data dan kebiasaan yang ikut terbentuk.",
      basis: "Makalah Bab II A.1; Moore (1993); Nata (2020)."
    },
    {
      sec: "A", who: "Aldo", slides: ["s04"],
      q: "Apakah internet dan ekosistem digital itu sama?",
      short: "Tidak persis sama. Internet itu jalurnya, jaringan yang menyambungkan perangkat. Ekosistem digital lebih luas: termasuk orang yang memakai, platform, data, dan aturan. Bisa dibilang internet adalah salah satu syarat supaya ekosistem itu hidup.",
      more: "Contohnya di LPQ: kartu RFID-nya sendiri tidak memakai internet, tapi scanner dan sistemnya terhubung. Jadi kita melihat rangkaiannya, bukan satu perangkat saja.",
      basis: "Makalah Bab II A dan Tabel 1."
    },
    {
      sec: "A", who: "Aldo", slides: ["s05", "s22"],
      q: "Kenapa komponennya empat? Apakah setiap ekosistem harus punya keempatnya?",
      short: "Empat komponen itu peta yang dipakai makalah untuk menjelaskan ekosistem yang dihadapi peserta didik sehari-hari. Itu alat bantu menjelaskan, bukan daftar wajib. Di LPQ, misalnya, kami tidak menyebut rekap datanya sebagai big data, dan 'algoritma'-nya berupa aturan hitung poin, bukan algoritma rekomendasi.",
      more: "Di Tabel 1 makalah, komponen LPQ malah dipetakan jadi enam baris karena aktor dan tata kelola ikut dimasukkan. Jadi bentuknya menyesuaikan konteks.",
      basis: "Makalah Bab II A.2 dan Tabel 1."
    },
    {
      sec: "A", who: "Paisal", slides: ["s06"],
      q: "Apa yang membedakan IoT dengan perangkat elektronik biasa?",
      short: "Kuncinya ada di kemampuan terhubung dan bertukar data. Lampu biasa tidak termasuk, walaupun memakai listrik. Kalau perangkat itu bisa mengirim atau menerima data lewat jaringan, misalnya sensor atau scanner kartu yang tersambung ke sistem, barulah masuk pembahasan IoT.",
      more: "Sebagian perangkat juga tidak tersambung langsung ke internet. Ada yang lewat gateway dulu.",
      basis: "Makalah Bab II A.2a; Internet Society (2015)."
    },
    {
      sec: "A", who: "Paisal", slides: ["s06", "s22"],
      q: "Kartu RFID santri itu terhubung ke internet?",
      short: "Kartunya tidak. Kartu RFID hanya menyimpan identitas yang dibaca lewat gelombang radio. Yang terhubung adalah scannernya. Scanner membaca kartu, lalu meneruskan catatan kehadiran ke sistem. Jadi yang kami sebut IoT di LPQ adalah rangkaiannya: kartu, scanner, dan sistem.",
      more: "Detail teknis perangkatnya tidak kami bahas di makalah. Kami hanya memakai contoh ini untuk menjelaskan keterhubungan data.",
      basis: "Makalah Tabel 1 dan Glosarium (RFID)."
    },
    {
      sec: "A", who: "Paisal", slides: ["s08", "s10"],
      q: "Apakah algoritma benar-benar tahu apa yang dibutuhkan pengguna?",
      short: "Tidak sampai ke situ. Algoritma membaca sinyal, misalnya riwayat tontonan, pencarian, dan respons kita. Dari situ ia menebak konten apa yang kemungkinan membuat kita bertahan. Kebutuhan belajar seorang anak belum tentu sama dengan apa yang membuatnya betah menonton. Di situ peran guru dan orang tua.",
      more: "Cara kerja tiap platform juga berbeda. Kami tidak mengklaim tahu rumus atau bobot sinyalnya.",
      basis: "Makalah Bab II A.2c; YouTube Help, How YouTube recommendations work."
    },
    {
      sec: "A", who: "Paisal", slides: ["s08"],
      q: "Kenapa dua orang bisa mendapat rekomendasi yang berbeda?",
      short: "Karena sinyal yang masuk berbeda. Riwayat tontonan, pencarian, dan respons tiap orang tidak sama, jadi pilihan yang disajikan juga berbeda. Itu sebabnya dua anak bisa punya 'dunia layar' yang jauh berbeda walaupun memakai aplikasi yang sama.",
      more: "Kami tidak bisa menyimpulkan bobot pasti tiap sinyal hanya dari melihat daftar rekomendasi.",
      basis: "YouTube Help; makalah Bab II A.2c."
    },
    {
      sec: "A", who: "Paisal", slides: ["s09", "s22"],
      q: "Apakah data di sistem LPQ sudah bisa disebut big data?",
      short: "Kami sengaja tidak menyebutnya begitu. Big data kami pakai untuk menjelaskan ekosistem digital yang luas, seperti platform media sosial. Data LPQ adalah rekap kegiatan lembaga: kehadiran, setoran, karakter, poin. Jumlahnya ribuan catatan, tapi itu belum cukup untuk disebut big data. Kegunaannya bagi guru juga tidak bergantung pada label itu.",
      more: "Ini juga cara kami menjaga istilah supaya tidak dibesar-besarkan.",
      basis: "Makalah Bab II A.2d dan metode penulisan; IBM, What is big data?"
    },
    {
      sec: "A", who: "Aldo", slides: ["s02"],
      q: "Angka APJII dan BPS itu kan data nasional. Apa hubungannya dengan santri LPQ?",
      short: "Betul, itu data nasional, bukan data santri kami. Kami memakainya sebagai latar: anak usia TPA hari ini tumbuh di tengah layar. Kalau hampir delapan dari sepuluh anak di bawah 12 tahun sudah memakai internet, wajar kalau guru ngaji ikut merasakan dampaknya. Untuk LPQ sendiri, kami memakai data sistem lembaga yang ditampilkan di bagian kasus.",
      more: "Kami tidak punya data kepemilikan gadget santri LPQ. Itu bisa jadi bahan penelitian berikutnya.",
      basis: "Makalah Bab I A, catatan kaki 1–2."
    },
    {
      sec: "A", who: "Paisal", slides: ["s11"],
      q: "Kenapa dari delapan elemen Belshaw hanya tiga yang disorot?",
      short: "Karena tiga itu yang dibahas makalah: kognitif, konstruktif, dan kritis. Ketiganya paling dekat dengan pesan kami, bahwa pengguna perlu paham cara kerja teknologi, tidak cukup hanya bisa memakainya. Lima elemen lainnya kami tampilkan redup supaya kerangkanya tetap utuh.",
      more: "Kalau diminta, lima lainnya adalah kultural, komunikatif, percaya diri, kreatif, dan kewargaan.",
      basis: "Makalah Bab II A.2; Belshaw (2014)."
    },

    /* ---------- B ---------- */
    {
      sec: "B", who: "Aldo", slides: ["s13"],
      q: "Jadi gadget yang membuat santri malas atau sering terlambat?",
      short: "Gadget bisa jadi salah satu faktor, tapi kami tidak menyimpulkan itu satu-satunya penyebab. Penelitian Setiadi dan kawan-kawan menunjukkan pengaruhnya terutama kalau tidak ada pendampingan orang tua. Di LPQ sendiri kami belum mengukur kebiasaan gadget tiap santri. Jadwal keluarga, jarak, dan pendampingan juga bisa berpengaruh.",
      more: "Untuk menyimpulkan pengaruh gadget pada santri tertentu, perlu data kebiasaan pemakaian yang tidak ada di makalah ini.",
      basis: "Makalah Bab I A dan Bab II B.1; Setiadi dkk. (2024)."
    },
    {
      sec: "B", who: "Aldo", slides: ["s13"],
      q: "Kenapa tidak cukup melarang gadget saat mengaji?",
      short: "Larangan tetap perlu, dan kami tidak menolaknya. Tapi larangan hanya berlaku selama anak di kelas. Begitu pulang, anak kembali ke gadgetnya. Makanya makalah mengusulkan agar kegiatan mengaji punya daya tarik sendiri. Gamifikasi salah satu caranya, bersama keteladanan guru dan kerja sama dengan wali.",
      more: "Perlu dicatat, di LPQ teknologi lebih banyak dipakai untuk pencatatan dan kegiatan guru. Kami tidak mengusulkan santri memegang gadget lebih lama.",
      basis: "Makalah Bab II B.1 dan G."
    },
    {
      sec: "B", who: "Aldo", slides: ["s14"],
      q: "Apa hubungan pergeseran otoritas keagamaan dengan anak-anak TPA?",
      short: "Di tingkat TPA bentuknya sederhana. Anak dan orang tua bisa mendengar ceramah atau penjelasan agama dari figur populer di media sosial, yang kadang lebih menghibur daripada guru ngaji. Guru jadi bersaing perhatian. Kami tidak bilang wibawa guru pasti turun. Yang kami tekankan, guru perlu hadir dengan cara yang dekat dengan dunia anak tanpa kehilangan kedalaman.",
      more: "Pengaruh pada santri tertentu tetap perlu diamati langsung. Makalah tidak mengukurnya.",
      basis: "Makalah Bab II B.2; Rifdillah dkk. (2024)."
    },
    {
      sec: "B", who: "Aldo", slides: ["s14"],
      q: "Rujukan Al-Aqsha dan kawan-kawan tahun 2026 itu sudah Anda baca langsung?",
      short: "Rujukan itu kami pakai untuk satu gagasan saja, yaitu ukuran otoritas yang bergeser dari kedalaman ilmu ke jumlah pengikut. DOI-nya tercantum di makalah. Kami jujur saja, untuk presentasi ini kami belum membaca ulang naskah lengkapnya, jadi kami tidak mau mengutip lebih jauh dari kalimat yang ada di makalah.",
      more: "Gagasan yang sama juga didukung Rifdillah dan kawan-kawan, yang halaman penerbitnya bisa diakses.",
      basis: "Makalah Bab II B.2, catatan kaki 12–13."
    },
    {
      sec: "B", who: "Aldo", slides: ["s15"],
      q: "Angka UNESCO 16 persen dan 89 persen itu berlaku untuk Indonesia?",
      short: "Itu angka global dari laporan UNESCO 2023. Enam belas persen adalah negara yang menjamin privasi data pendidikan lewat undang-undang, dan 89 persen adalah produk teknologi pendidikan yang dikaji dan berpotensi memantau anak. Indonesia sendiri sudah punya UU Pelindungan Data Pribadi dan PP 17 Tahun 2025. Angka itu kami pakai untuk menunjukkan bahwa risikonya nyata.",
      more: "Kami tidak memakai angka itu untuk menilai sistem LPQ.",
      basis: "Makalah Bab II B.4; UNESCO (2023)."
    },
    {
      sec: "B", who: "Aldo dan Paisal", slides: ["s15", "s31"],
      q: "Apakah data santri di LPQ sudah aman dan wali sudah memberi persetujuan?",
      short: "Yang tercatat di makalah, akses data sudah dibatasi sesuai peran pengguna. Itu belum cukup untuk menyebut seluruh pengelolaan data aman. Persetujuan tertulis wali dan kebijakan masa simpan justru masuk saran kami, karena belum dipastikan dalam bahan makalah. Jadi kami tidak akan bilang sudah ada kalau belum melihat dokumennya.",
      more: "Makalah sendiri hanya memakai angka rekap, tanpa nama atau identitas santri, untuk menghormati UU PDP.",
      basis: "Makalah Bab I D, Tabel 6–7, dan Bab II G."
    },

    /* ---------- C ---------- */
    {
      sec: "C", who: "Paisal", slides: ["s16"],
      q: "Gamifikasi itu berarti santri belajar sambil main game?",
      short: "Bukan. Kegiatan mengajinya tetap berjalan seperti biasa bersama guru. Yang ditambahkan hanya unsur game, seperti poin, tingkatan, dan leaderboard. Kalau santri memainkan game utuh sebagai media belajar, itu namanya pembelajaran berbasis game, dan itu bukan yang kami kaji.",
      more: "Definisinya dari Deterding dan kawan-kawan: penggunaan unsur desain game dalam konteks yang bukan game.",
      basis: "Makalah Bab II C.1; Deterding dkk. (2011)."
    },
    {
      sec: "C", who: "Paisal", slides: ["s17"],
      q: "Kalau ada penelitian yang hasilnya negatif, kenapa gamifikasi masih dipakai?",
      short: "Karena hasil penelitiannya memang beragam. Meta-analisis Sailer dan Homner menemukan rata-rata pengaruh positif, sementara Hanus dan Fox menemukan penurunan motivasi intrinsik di kelas yang mereka teliti. Bagi kami, itu tanda bahwa rancangannya yang menentukan. Jadi pertanyaannya bukan pakai atau tidak, tapi bagaimana merancang dan mengevaluasinya.",
      more: "Temuan negatif itu juga yang membuat kami mengusulkan evaluasi motivasi santri secara berkala, tidak hanya melihat angka poin.",
      basis: "Makalah Bab II C.2; Sailer dan Homner (2020); Hanus dan Fox (2015)."
    },
    {
      sec: "C", who: "Paisal", slides: ["s17"],
      q: "Angka 0,49 itu berarti hasil belajar naik 49 persen?",
      short: "Bukan. Itu ukuran efek, namanya Hedges g, yang dipakai dalam meta-analisis. Angka itu menunjukkan besarnya perbedaan dalam satuan yang sudah distandardisasi, jadi tidak bisa dibaca sebagai persen. Kami juga tidak memakainya untuk memperkirakan kenaikan nilai santri LPQ.",
      more: "Yang bisa disimpulkan: rata-rata penelitian menemukan pengaruh positif, paling besar pada hasil belajar kognitif, lalu motivasi, lalu perilaku.",
      basis: "Sailer dan Homner (2020), Educational Psychology Review 32."
    },
    {
      sec: "C", who: "Paisal", slides: ["s18"],
      q: "Apa itu efek overjustification, dan apakah poin di LPQ termasuk hadiah yang merusak motivasi?",
      short: "Overjustification itu gejala ketika seseorang diberi imbalan untuk kegiatan yang tadinya ia sukai, lalu ia mulai menganggap imbalan itulah alasannya. Meta-analisis Deci, Koestner, dan Ryan menemukan efek ini terutama pada hadiah nyata yang dijanjikan sebelumnya. Dampak poin LPQ terhadap motivasi intrinsik belum kami ukur. Makanya di SWOT kami mencatat motivasi yang dibangun cenderung ekstrinsik, dan mengusulkan evaluasi motivasi secara berkala.",
      more: "Temuan yang sama menyebut pujian yang tulus justru bisa menguatkan motivasi. Itu sejalan dengan saran agar guru menyertakan pesan dan penjelasan saat memberi poin.",
      basis: "Makalah Bab II C.3; Deci, Koestner, dan Ryan (1999)."
    },
    {
      sec: "C", who: "Paisal dan Aldo", slides: ["s19", "s20"],
      q: "Apakah memberi poin untuk mengaji tidak mengganggu keikhlasan?",
      short: "Risikonya memang ada, dan makalah menyebutnya sebagai ancaman paling mendasar. Tapi kami tidak bisa menilai keikhlasan seseorang dari jumlah poinnya. Yang bisa dilakukan guru adalah terus menjelaskan bahwa poin hanya sarana, dan mengaitkannya dengan pahala dan kecintaan pada Al-Qur'an. Kalau poin mulai jadi tujuan, rancangannya perlu dievaluasi.",
      more: "Poin di sistem tidak sama dengan pahala. Kami memakai hadis tentang niat justru untuk mengingatkan batas itu.",
      basis: "Makalah Bab II C.4 dan G; HR. al-Bukhari no. 1."
    },
    {
      sec: "C", who: "Paisal", slides: ["s19"],
      q: "Apa hubungan targhib wa tarhib dengan pemberian poin?",
      short: "Targhib itu dorongan supaya tertarik pada kebaikan, tarhib itu peringatan supaya sadar dari kesalahan. Penambahan dan pengurangan poin bisa dilihat sebagai bentuk yang kelihatan dari keduanya. Acak Nama, misalnya, punya dua-duanya. Tapi poin saja belum mewakili seluruh makna targhib wa tarhib. Tujuan dan cara guru menyampaikannya tetap yang utama.",
      more: "Kami tidak menganggap setiap sistem hadiah otomatis sesuai dengan pendidikan Islam.",
      basis: "Makalah Bab II C.4 dan Tabel 3; an-Nahlawi (1995)."
    },
    {
      sec: "C", who: "Paisal", slides: ["s19"],
      q: "Apa bedanya targhib wa tarhib dengan reward and punishment?",
      short: "Menurut an-Nahlawi, bedanya ada di orientasi. Targhib wa tarhib dalam Al-Qur'an bersandar pada keimanan dan balasan akhirat, tidak semata-mata imbalan duniawi. Kami tidak bermaksud mengatakan semua pendekatan reward and punishment hanya mengejar hadiah. Kami hanya memakai pembedaan itu untuk mengingatkan arah pemberian poin.",
      more: "Dalam praktik, ini berarti teguran harus mendidik dan pemberian poin perlu disertai penjelasan maknanya.",
      basis: "Makalah Bab II C.4; an-Nahlawi (1995); Ma'rufin (2015)."
    },
    {
      sec: "C", who: "Paisal", slides: ["s19"],
      q: "Hadis tentang satu huruf sepuluh kebaikan, apakah itu dasar untuk menyamakan poin dengan pahala?",
      short: "Tidak. Hadis itu kami pakai untuk menunjukkan bahwa Islam tidak asing dengan gagasan menghitung kebaikan sebagai penyemangat. Tapi pahala itu urusan Allah, sedangkan poin itu catatan buatan sistem. Justru makalah menyarankan guru memakai hadis itu untuk mengingatkan santri bahwa ada nilai yang jauh lebih besar dari poin di layar.",
      more: "Jadi poin menjadi pengingat akan pahala, bukan penggantinya.",
      basis: "Makalah Bab II C.4 dan F; HR. at-Tirmidzi no. 2910."
    },
    {
      sec: "C", who: "Paisal dan Aldo", slides: ["s20", "s27", "s31"],
      q: "Bagaimana menjaga supaya kompetisi tidak membuat santri minder?",
      short: "Ada beberapa usulan di makalah. Leaderboard dibuat per kelas, ada peringkat kemajuan, misalnya siapa yang naik paling banyak bulan ini, dan ada tantangan kelompok. Dengan begitu yang tampil tidak selalu santri yang sudah unggul. Guru juga perlu memperhatikan anak yang mulai menarik diri atau diejek teman.",
      more: "Usulan ini belum kami klaim berhasil. Dasarnya QS. Al-Hujurat ayat 11 dan temuan Sailer dan Homner bahwa gabungan kompetisi dan kerja sama cenderung lebih efektif.",
      basis: "Makalah Bab II F dan G; QS. Al-Hujurat [49]: 11."
    },

    /* ---------- D ---------- */
    {
      sec: "D", who: "Aldo dan Paisal", slides: ["s24"],
      q: "Nama tier seperti Grandmaster dan fitur Gatcha, apakah cocok untuk TPA? Apakah Gatcha tidak mirip judi?",
      short: "Nama-nama itu sengaja memakai bahasa game yang akrab dengan anak. Cocok atau tidak, menurut kami perlu dievaluasi sesuai usia dan tujuan belajar. Soal Gatcha, yang tercatat di makalah: santri menjawab pertanyaan guru, kalau benar ia boleh mengacak hadiah. Tidak ada taruhan yang tercatat di situ. Status hukumnya kami tidak berani menyimpulkan, karena kajian kami tidak sampai ke fikih.",
      more: "Yang bisa kami sarankan, aturan hadiahnya dijelaskan terbuka supaya anak tidak merasa diperlakukan tidak adil.",
      basis: "Makalah Tabel 3 dan Glosarium (Gatcha)."
    },
    {
      sec: "D", who: "Aldo", slides: ["s21", "s27"],
      q: "Kenapa profil lembaga 186 santri, tapi grafik tier hanya 183?",
      short: "Karena cakupannya berbeda. Profil menghitung semua santri aktif, termasuk 2 santri dewasa. Grafik tier hanya memakai santri anak, dan satu akun dummy untuk uji coba sistem tidak kami hitung. Jadi penyebut di grafik tier 183.",
      more: "Data per 26 September 2026. Kalau jumlah santri sekarang berubah, itu di luar periode kajian.",
      basis: "Makalah Bab II D.1 dan Tabel 5, dikoreksi tanpa akun dummy."
    },
    {
      sec: "D", who: "Aldo", slides: ["s26"],
      q: "Persentase keterlambatan itu dihitung dari jumlah santri atau jumlah kehadiran?",
      short: "Dari jumlah catatan kehadiran. Di Juli ada 557 catatan terlambat dari 1.336 catatan, jadi 41,7 persen. Satu santri bisa punya beberapa catatan dalam sebulan. Untuk jumlah santri, kami tampilkan terpisah di panel kanan: santri yang pernah terlambat minimal sekali.",
      more: "Agustus 265 dari 1.432, September 269 dari 1.583.",
      basis: "Makalah Tabel 4."
    },
    {
      sec: "D", who: "Aldo", slides: ["s26"],
      q: "Turunnya keterlambatan itu membuktikan aturan poin berhasil?",
      short: "Belum. Penurunannya memang terjadi bersamaan dengan aturan poin yang baru, dan arahnya sejalan dengan tujuan aturan. Tapi datanya deskriptif. Juli adalah bulan pertama sistem baru dipakai, jadi sebagian keterlambatan bisa karena santri masih menyesuaikan diri. Jadwal dan pendampingan orang tua juga belum dikendalikan. Jadi yang bisa kami katakan: persentase catatan terlambat turun di periode itu.",
      more: "Untuk membuktikan pengaruhnya, perlu rancangan pembanding, misalnya kelas dengan dan tanpa aturan yang sama, dalam periode lebih panjang.",
      basis: "Makalah Bab II D.5 dan Bab III B."
    },
    {
      sec: "D", who: "Aldo", slides: ["s26"],
      q: "Kenapa September dibandingkan, padahal datanya belum satu bulan penuh?",
      short: "Karena data diambil 26 September. Kami beri tanda bintang dan memakai persentase supaya bisa dibandingkan. Tetap saja, itu gambaran sementara. Pola harinya bisa berbeda, jadi kami membacanya sebagai data deskriptif.",
      more: "Untuk evaluasi yang lebih kuat, periode pembandingnya perlu dibuat setara, misalnya jumlah hari belajar yang sama.",
      basis: "Makalah Tabel 4."
    },
    {
      sec: "D", who: "Aldo", slides: ["s26"],
      q: "Apakah waktu tap kartu sama dengan waktu santri benar-benar datang?",
      short: "Belum tentu. Waktu tap adalah waktu pencatatan di sistem. Bisa saja ada anak yang lupa kartu atau baru menempelkan kartu setelah beberapa menit. Seberapa sering itu terjadi belum kami ukur. Jadi kami menyebutnya sebagai hal yang perlu divalidasi, bukan kesalahan yang sudah terbukti.",
      more: "Guru bisa membantu lewat pengamatan langsung dan catatan koreksi kalau data ini mau dipakai untuk menyimpulkan perubahan disiplin.",
      basis: "Makalah Bab II D.5, keterbatasan data."
    },
    {
      sec: "D", who: "Aldo", slides: ["s26"],
      q: "Santri yang pernah terlambat turun di Agustus, tapi naik lagi di September. Bagaimana membacanya?",
      short: "Betul, dari 57,5 persen menjadi 59,2 persen. Perbedaannya kecil, dan jumlah santri yang tercatat juga berbeda: 134 di Agustus, 147 di September. Makalah menyebutnya turun ke kisaran 58 persen. Kami tidak menafsirkan kenaikan kecil itu sebagai tanda aturannya gagal. Yang lebih jelas adalah perbedaan Juli ke dua bulan sesudahnya.",
      more: "Data September juga hanya sampai tanggal 26.",
      basis: "Makalah Tabel 4."
    },
    {
      sec: "D", who: "Aldo", slides: ["s23"],
      q: "Penilaian karakter baru 18 sampai 26 santri. Cukup untuk menyimpulkan kondisi LPQ?",
      short: "Belum cukup. Makalah sendiri menyebut hasilnya belum bisa digeneralisasi. Kami memakainya sebagai petunjuk awal: salam dan pengendalian emosi skornya paling rendah. Angka yang kecil ini justru masuk kelemahan di SWOT, karena fitur penilaian karakter belum dipakai merata.",
      more: "Saran kami, penilaian diisi rutin, misalnya tiap akhir bulan, dengan pedoman yang sama antarguru.",
      basis: "Makalah Tabel 2, Tabel 6, dan Tabel 7."
    },
    {
      sec: "D", who: "Aldo", slides: ["s24", "s27"],
      q: "Kalau tier santri tinggi, apakah bacaannya juga lebih bagus?",
      short: "Tidak otomatis. Tier hanya menunjukkan jumlah poin yang terkumpul dari banyak kegiatan, termasuk kehadiran dan kuis. Kualitas bacaan tetap dinilai guru, dan kenaikan jilid ditentukan lewat ujian. Jadi tier dan jilid dua hal yang berbeda.",
      more: "Fungsi tier di makalah adalah memberi tanda kemajuan yang lebih sering, karena naik jilid bisa makan waktu berbulan-bulan.",
      basis: "Makalah Bab II D.1, D.4, dan Tabel 3."
    },
    {
      sec: "D", who: "Aldo", slides: ["s27"],
      q: "Di makalah ada satu santri Grandmaster dengan 683 poin. Kenapa di slide tidak ada?",
      short: "Setelah dicek, itu bukan santri sungguhan. Itu akun dummy yang dipakai untuk uji coba sistem, jadi poinnya juga hasil pengujian. Karena itu akun tersebut kami keluarkan dari grafik tier, dan penyebutnya menjadi 183 santri anak. Tidak ada santri yang sudah mencapai Gold atau lebih tinggi.",
      more: "Rata-rata dan median poin di makalah masih memasukkan akun itu, jadi tidak kami tampilkan di slide. Tabel 5 dan pembahasannya di makalah akan kami perbaiki.",
      basis: "Makalah Bab II D.5 dan Tabel 5, dikoreksi tanpa akun dummy."
    },
    {
      sec: "D", who: "Aldo", slides: ["s28"],
      q: "Ada 742 setoran dan 100 santri naik jilid. Kenapa tidak dijadikan bukti gamifikasi berhasil?",
      short: "Karena kemajuan bacaan dipengaruhi banyak hal: bimbingan guru, latihan di rumah, kemampuan awal anak. Angka itu menunjukkan kegiatan belajar berjalan aktif, tapi kami tidak punya pembanding untuk mengaitkannya dengan gamifikasi. Kelulusan setoran juga naik di Agustus lalu turun lagi di September.",
      more: "Penelitian berikutnya perlu membandingkan kelas dengan dan tanpa gamifikasi dalam periode lebih panjang.",
      basis: "Makalah Bab II D.5 dan Bab III B."
    },
    {
      sec: "D", who: "Aldo", slides: ["s21", "s29"],
      q: "Datanya disimpan di layanan cloud pihak ketiga. Apa risikonya?",
      short: "Sistemnya memakai Supabase, jadi data santri, foto, dan catatan perilaku tersimpan di layanan cloud pihak ketiga. Makalah memasukkan risiko kebocoran data ini sebagai ancaman. Pembatasan akses per peran sudah ada, tapi itu baru satu lapis. Karena itu kami menyarankan kebijakan perlindungan data: persetujuan wali, masa simpan, dan backup berkala.",
      more: "Kami tidak menilai keamanan teknis layanannya. Itu di luar cakupan makalah.",
      basis: "Makalah Bab II D.1, Tabel 6, dan Tabel 7."
    },

    /* ---------- E ---------- */
    {
      sec: "E", who: "Aldo", slides: ["s21"],
      q: "Salah satu penulis ikut mengembangkan sistemnya. Bagaimana menjaga objektivitas?",
      short: "Itu kami sampaikan terbuka di makalah, dan kami akui bisa memengaruhi objektivitas. Cara kami menjaganya: kelemahan dan ancaman ditulis apa adanya, data hanya dipakai dalam bentuk rekap, dan kami tidak menarik kesimpulan sebab-akibat dari data deskriptif. Tetap saja, pemeriksaan oleh pihak lain akan memperkuat analisis berikutnya.",
      more: "Kalau ada bagian analisis yang Bapak atau teman-teman nilai terlalu menguntungkan sistem, kami terbuka untuk dikoreksi.",
      basis: "Makalah Bab I D."
    },
    {
      sec: "E", who: "Paisal dan Aldo", slides: ["s29", "s30"],
      q: "Apa beda SWOT dengan TOWS, dan kenapa strategi S-T diprioritaskan?",
      short: "SWOT memetakan keadaan: kekuatan dan kelemahan dari dalam, peluang dan ancaman dari luar. TOWS menyilangkan faktor-faktor itu menjadi strategi. S-T diprioritaskan karena paling mudah dimulai: tanpa biaya dan tanpa mengubah sistem. Cukup kebiasaan guru menyertakan pesan keimanan setiap memberi poin, dan itu langsung menjawab ancaman niat yang bergeser.",
      more: "Strategi lain, seperti pedoman poin dan jadwal penilaian karakter, tetap perlu dijalankan. Semuanya masih berupa usulan.",
      basis: "Makalah Bab II E–F, Tabel 6–7; Weihrich (1982)."
    },
    {
      sec: "E", who: "Paisal dan Aldo", slides: ["s16", "s33"],
      q: "Bisakah lembaga yang tidak punya sistem digital memakai pendekatan serupa?",
      short: "Bisa dicoba dengan cara sederhana, misalnya catatan poin di buku atau stiker. Prinsipnya sama: feedback yang jelas dan penghargaan atas usaha. Tapi hasilnya belum tentu sama dengan di LPQ. Usia santri, kebutuhan kelas, dan kesiapan guru tetap menentukan.",
      more: "Sebaiknya mulai dari satu tujuan yang jelas, misalnya ketepatan waktu, dengan aturan yang mudah dipahami dan tidak mempermalukan anak yang tertinggal.",
      basis: "Makalah Bab II C dan Bab III B. Contoh manual adalah usulan, bukan data lembaga lain."
    },
    {
      sec: "E", who: "Paisal", slides: ["s18", "s31"],
      q: "Bagaimana kalau ada santri yang hanya mau ikut karena hadiah?",
      short: "Pertama, guru perlu tahu dulu alasannya, lewat obrolan sederhana atau pengamatan. Lalu penghargaan disertai penjelasan dan pujian atas usahanya, bukan hanya poin. Kalau hadiah mulai membuat anak tertekan atau melupakan tujuan belajar, aturannya perlu ditinjau. Tidak semua anak juga harus melewati pola motivasi yang sama.",
      more: "Ini usulan tindak lanjut. Makalah belum melakukan evaluasi motivasi santri secara langsung.",
      basis: "Makalah Bab II C.3 dan G; Ryan dan Deci (2000)."
    },
    {
      sec: "E", who: "Aldo", slides: ["s33"],
      q: "Kenapa tidak sekalian dibuat penelitian eksperimen?",
      short: "Karena tugas pertemuan ini meminta studi kasus dengan analisis SWOT, dan datanya baru sekitar tiga bulan. Untuk eksperimen, kita butuh kelas pembanding dan periode yang lebih panjang, dan itu justru kami tulis sebagai saran untuk penelitian berikutnya, termasuk mengukur motivasi intrinsik santri secara langsung.",
      more: "Pendekatan makalah ini kualitatif-deskriptif, sesuai metode yang ditetapkan dalam RPS.",
      basis: "Makalah Bab I D dan Bab III B."
    }
  ]
};
