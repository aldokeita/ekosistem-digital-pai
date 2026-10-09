/* Sumber tunggal metadata slide.
   Dipakai oleh presentasi (chrome), presenter view, panduan, dan bank Q&A.
   Angka mengikuti makalah; data LPQ diakses 26 September 2026. */
window.DECK = {
  meta: {
    title: "Ekosistem Digital dan Tantangan Pendidikan Islam",
    subtitle: "Analisis SWOT Gamifikasi Pembelajaran Al-Qur'an di LPQ Al-Fath Maulana",
    course: "Literasi Digital Pendidikan Agama Islam · Pertemuan 3",
    lecturer: "Dr. Muhamad Ali, M.Pd.I",
    authors: [
      { name: "Aldo Pratama Joani", nim: "2686130003" },
      { name: "Paisal", nim: "2686130006" }
    ],
    campus: "Magister PAI · Pascasarjana STAI Baturaja · 2026",
    targetMinutes: 25
  },

  chapters: [
    { no: "00", name: "Pembuka" },
    { no: "01", name: "Ekosistem digital" },
    { no: "02", name: "Tantangan bagi pendidikan Islam" },
    { no: "03", name: "Gamifikasi" },
    { no: "04", name: "Studi kasus LPQ Al-Fath Maulana" },
    { no: "05", name: "Analisis dan strategi" },
    { no: "06", name: "Penutup" }
  ],

  slides: [
    {
      id: "s01", chapter: 0, speaker: "Aldo", sec: 30,
      title: "Sampul",
      purpose: "Membuka presentasi dan menyebut arah pembahasan: dari ekosistem digital secara umum menuju satu contoh lembaga.",
      script: "Assalamu'alaikum warahmatullahi wabarakatuh. Bapak Dr. Muhamad Ali dan teman-teman sekalian. Saya Aldo, dan di sebelah saya ada Paisal. Hari ini kami membawakan makalah tentang ekosistem digital dan tantangannya bagi pendidikan Islam. Supaya pembahasannya tidak mengambang, kami memakai satu contoh nyata: LPQ Al-Fath Maulana, lembaga Al-Qur'an yang mencoba menjawab masalah santrinya dengan sistem digital bergaya game.",
      cue: "Ucapkan salam dengan tenang dan tatap audiens. Identitas di layar tidak perlu dibaca.",
      transition: "Kami mulai dari data yang cukup mengejutkan soal anak dan layar.",
      caution: "LPQ baru dibahas mendalam mulai slide 21. Jangan langsung menjelaskan sistemnya di sini.",
      source: "Sampul dan kata pengantar makalah."
    },
    {
      id: "s02", chapter: 0, speaker: "Aldo", sec: 50,
      title: "Kenal layar sebelum kenal huruf hijaiah",
      purpose: "Menunjukkan dengan data nasional bahwa anak usia TPA sudah hidup di tengah ekosistem digital.",
      script: "Coba kita lihat angka ini dulu. Menurut survei APJII tahun 2025, penetrasi internet di Indonesia sudah 80,66 persen. Yang membuat kami berhenti sejenak justru angka di sebelahnya: pada Generasi Alfa, anak di bawah 12 tahun, angkanya 79,73 persen. Hampir sama dengan rata-rata nasional. Data BPS juga senada. Di kelompok anak usia dini, 39,71 persen sudah memakai HP. Kalau kita ambil anak usia 5 sampai 6 tahun saja, angkanya naik jadi 58,25 persen. Di usia segitu, Bapak, Ibu, banyak anak baru mulai belajar huruf hijaiah. Jadi kami tidak heran kalau sebagian besar santri sudah kenal layar HP lebih dulu.",
      cue: "Beri jeda setelah menyebut 79,73 persen. Tunjuk garis dari 'usia dini' ke 'usia 5–6 tahun'.",
      transition: "Dari kenyataan itu, kami menyusun empat pertanyaan.",
      caution: "Angka APJII dan BPS adalah data nasional, bukan data santri LPQ.",
      source: "Makalah Bab I A, catatan kaki 1–2. APJII, Profil Internet Indonesia 2025 (ANTARA News, 6 Agustus 2025). BPS, Profil Anak Usia Dini 2024 (dikutip GoodStats)."
    },
    {
      id: "s03", chapter: 0, speaker: "Aldo", sec: 35,
      title: "Empat pertanyaan kajian",
      purpose: "Menyampaikan rumusan masalah sekaligus peta perjalanan presentasi.",
      script: "Makalah kami berangkat dari empat pertanyaan. Pertama, apa sebenarnya ekosistem digital itu dan apa saja komponennya. Kedua, tantangan apa yang muncul bagi pendidikan Islam, terutama pembelajaran Al-Qur'an pada anak. Ketiga, bagaimana gamifikasi dilihat dari teori pendidikan dan dari ajaran Islam. Baru yang keempat, bagaimana semua itu diterapkan di LPQ Al-Fath Maulana dan seperti apa hasil analisis SWOT-nya. Urutan presentasi kami mengikuti empat pertanyaan ini.",
      cue: "Tunjuk tiap titik di garis perjalanan. Jangan berhenti lama di sini.",
      transition: "Kita mulai dari pertanyaan pertama: dari mana istilah ekosistem itu datang.",
      caution: "",
      source: "Makalah Bab I B dan C."
    },
    {
      id: "s04", chapter: 1, speaker: "Aldo", sec: 45,
      title: "Dari biologi ke dunia digital",
      purpose: "Memberi pengertian ekosistem digital beserta asal-usul istilahnya.",
      script: "Kata ekosistem sebenarnya dipinjam dari biologi: makhluk hidup dan lingkungannya yang saling bergantung. Tahun 1993, James Moore membawa istilah ini ke dunia bisnis untuk menggambarkan pelaku usaha yang tumbuh, bersaing, sekaligus bekerja sama. Dalam konteks digital, kami memahaminya sebagai jaringan yang menghubungkan manusia, perangkat, platform, data, dan aturan yang mengatur semuanya. Kenapa ini penting buat kita? Karena sebuah aplikasi tidak pernah berdiri sendiri. Ada algoritma yang memilihkan tontonan anak, ada data yang terkumpul tentang anak, dan ada kebiasaan yang terbentuk dari pemakaian sehari-hari. Abuddin Nata menyebut pendidikan Islam perlu membaca perubahan ini secara utuh.",
      cue: "Ikuti tiga tahap dari atas ke bawah. Beri penekanan pada kalimat 'aplikasi tidak berdiri sendiri'.",
      transition: "Lalu, apa saja isi jaringan itu?",
      caution: "Rumusan ekosistem digital adalah rumusan makalah, bukan kutipan langsung dari Moore.",
      source: "Makalah Bab II A.1. Moore (1993), Harvard Business Review 71(3): 75–86. Nata (2020), Pendidikan Islam di Era Digital."
    },
    {
      id: "s05", chapter: 1, speaker: "Aldo", sec: 40,
      title: "Empat komponen yang saling menguatkan",
      purpose: "Mengenalkan empat komponen utama sebelum dibahas satu per satu.",
      script: "Makalah memetakan empat komponen utama dalam ekosistem yang dihadapi peserta didik. Ada Internet of Things, yaitu perangkat yang saling terhubung. Ada platform media sosial, tempat konten dibuat dan dibagikan. Ada algoritma yang menentukan apa yang muncul berikutnya. Lalu ada big data, kumpulan jejak dari aktivitas digital. Keempatnya kami letakkan mengelilingi peserta didik karena di situlah dampaknya terasa. Rinciannya akan dijelaskan Paisal.",
      cue: "Sebut keempat komponen sambil menunjuk orbit. Serahkan ke Paisal dengan menyebut namanya.",
      transition: "Silakan, Paisal.",
      caution: "",
      source: "Makalah Bab II A.2."
    },
    {
      id: "s06", chapter: 1, speaker: "Paisal", sec: 40,
      title: "Internet of Things",
      purpose: "Menjelaskan IoT dengan contoh yang dekat dengan lembaga pendidikan.",
      script: "Terima kasih, Aldo. Komponen pertama, Internet of Things atau IoT. Gampangnya, ini benda fisik yang bisa terhubung dan bertukar data: HP, smart TV, sampai scanner kartu. Di lembaga pendidikan, contoh yang paling dekat adalah absensi dengan kartu RFID. Santri cukup menempelkan kartu, kehadirannya langsung tercatat. Satu catatan kecil: kartunya sendiri tidak punya internet. Yang terhubung adalah scannernya, lalu data diteruskan ke sistem.",
      cue: "Tunjuk kartu RFID di ilustrasi, lalu ikuti garis ke awan.",
      transition: "Data dari perangkat seperti ini kemudian bertemu dengan komponen kedua, yaitu platform.",
      caution: "Jangan mengatakan semua benda elektronik otomatis termasuk IoT, atau bahwa kartu RFID terhubung sendiri ke internet.",
      source: "Makalah Bab II A.2a. Model konektivitas lewat gateway: Internet Society (2015), The Internet of Things: An Overview."
    },
    {
      id: "s07", chapter: 1, speaker: "Paisal", sec: 35,
      title: "Platform media sosial",
      purpose: "Menjelaskan platform sebagai ruang interaksi yang menyita waktu layar anak.",
      script: "Komponen kedua adalah platform media sosial, misalnya YouTube, TikTok, Instagram, dan grup WhatsApp. Di sini orang membuat konten, membagikannya, dan juga menikmatinya. Makalah mencatat bahwa platform seperti ini menjadi tempat anak menghabiskan sebagian besar waktu layarnya. Jadi kalau kita bicara pendidikan anak hari ini, platform sudah menjadi bagian dari lingkungan belajarnya, mau kita suka atau tidak.",
      cue: "Ikuti tiga kata kerja di layar: membuat, membagikan, mengonsumsi.",
      transition: "Nah, di platform itu ada yang menentukan konten mana yang muncul duluan.",
      caution: "Nama platform hanya contoh. Fungsi dan aturan tiap layanan berbeda.",
      source: "Makalah Bab II A.2b."
    },
    {
      id: "s08", chapter: 1, speaker: "Paisal", sec: 40,
      title: "Algoritma",
      purpose: "Menjelaskan algoritma rekomendasi sebagai penentu konten berikutnya.",
      script: "Itulah algoritma, komponen ketiga. Algoritma adalah aturan pemrograman yang menentukan konten apa yang muncul berikutnya. Algoritma rekomendasi dirancang supaya pengguna betah selama mungkin, misalnya dengan menyajikan video pendek terus-menerus seperti yang bergulir di layar ini. Sinyal yang dipakai bisa berupa riwayat tontonan, pencarian, atau respons pengguna. Artinya, tidak semua yang ditonton anak ia pilih sendiri. Sebagian sudah dipilihkan.",
      cue: "Biarkan feed bergulir dua atau tiga detik sebelum mulai bicara.",
      transition: "Supaya bisa memilihkan, algoritma butuh bahan, yaitu data.",
      caution: "Cara kerja dan bobot sinyal berbeda di tiap platform. Jangan mengaku tahu rumus pastinya.",
      source: "Makalah Bab II A.2c. Contoh sinyal rekomendasi: YouTube Help, How YouTube recommendations work."
    },
    {
      id: "s09", chapter: 1, speaker: "Paisal", sec: 35,
      title: "Big data",
      purpose: "Menjelaskan big data dan dua arah pemanfaatannya.",
      script: "Komponen keempat, big data. Setiap klik, tontonan, dan pencarian meninggalkan jejak. Kalau dikumpulkan, jumlahnya sangat besar. Data ini bisa dipakai untuk hal baik, misalnya memantau perkembangan belajar. Bisa juga untuk tujuan komersial, seperti menentukan iklan yang muncul. Arah pemakaiannya tergantung siapa yang mengelola. Satu hal yang kami jaga: rekap data di sebuah lembaga kecil belum tentu layak disebut big data.",
      cue: "Tunjuk percabangan dua arah di ujung diagram.",
      transition: "Empat komponen tadi tidak bekerja sendiri-sendiri.",
      caution: "Rekap data LPQ tidak disebut big data.",
      source: "Makalah Bab II A.2d. Pengertian pendukung: IBM, What is big data?"
    },
    {
      id: "s10", chapter: 1, speaker: "Paisal", sec: 45,
      title: "Siklus yang saling menguatkan",
      purpose: "Menunjukkan hubungan keempat komponen dan dampaknya pada perilaku belajar.",
      script: "Keempatnya membentuk satu siklus. Perangkat mengumpulkan data, data diolah algoritma, algoritma menentukan apa yang disajikan platform, lalu perilaku pengguna menghasilkan data baru. Begitu terus. Siklus ini ikut memengaruhi cara anak belajar. Anak yang terbiasa dengan video beberapa detik bisa jenuh saat harus duduk menyimak bacaan guru setengah jam. Anak yang biasa naik level dan dapat skor instan dari game bisa merasa mengaji itu lambat, seperti tidak ada tanda kemajuannya. Ini bukan vonis untuk semua anak. Ini pola yang perlu diwaspadai guru.",
      cue: "Ikuti titik yang berputar satu kali, lalu pindah ke dua contoh di kanan.",
      transition: "Karena itu, memahami cara kerja ekosistem ini termasuk kecakapan dasar.",
      caution: "Makalah memakai kata 'dapat'. Jangan menyatakan semua anak pasti mengalaminya.",
      source: "Makalah Bab II A.2, paragraf setelah uraian empat komponen."
    },
    {
      id: "s11", chapter: 1, speaker: "Paisal", sec: 40,
      title: "Literasi digital sebagai kecakapan dasar",
      purpose: "Menautkan ekosistem digital dengan kerangka literasi digital.",
      script: "Dalam kerangka literasi digital, Kominfo merumuskan empat pilar: kecakapan digital, budaya digital, etika digital, dan keamanan digital. Belshaw menyebut delapan elemen, dan tiga di antaranya kami sorot, yaitu kognitif, konstruktif, dan kritis. Ketiganya menuntut pengguna paham cara kerja teknologi, selain bisa memakainya. Buat guru agama, pemahaman ini membantu menentukan kapan teknologi perlu dibatasi dan kapan bisa dimanfaatkan.",
      cue: "Tunjuk empat pilar, lalu tiga elemen yang menyala.",
      transition: "Aldo akan masuk ke tantangannya bagi pendidikan Islam.",
      caution: "Makalah hanya menyebut tiga elemen Belshaw secara eksplisit. Lima lainnya tampil redup sebagai pelengkap.",
      source: "Makalah Bab II A.2. Kominfo dan Siberkreasi (2021), Modul Literasi Digital. Belshaw (2014), The Essential Elements of Digital Literacies."
    },
    {
      id: "s12", chapter: 2, speaker: "Aldo", sec: 35, steps: 4,
      title: "Empat tantangan",
      purpose: "Membuka babak tantangan dan memberi gambaran empat pokoknya.",
      script: "Terima kasih, Paisal. Dari gambaran tadi, makalah merangkum empat tantangan ekosistem digital bagi pendidikan Islam. Ada perebutan perhatian, lalu pergeseran otoritas keagamaan, kemudian pembentukan akhlak dan adab. Yang terakhir, tuntutan berinovasi sambil tetap melindungi data anak. Kita bahas satu per satu, tapi singkat saja.",
      cue: "Tekan lanjut untuk memunculkan tantangan satu per satu (4 langkah).",
      transition: "Yang pertama dan paling terasa di kelas: perhatian.",
      caution: "",
      source: "Makalah Bab II B."
    },
    {
      id: "s13", chapter: 2, speaker: "Aldo", sec: 45,
      title: "Perebutan perhatian",
      purpose: "Menjelaskan persaingan waktu dan perhatian antara layar dan kegiatan mengaji.",
      script: "Waktu anak terbatas, sementara pilihan hiburan digital nyaris tidak ada habisnya. Di lembaga, dampaknya kelihatan: ada santri yang datang terlambat, tidak datang, atau datang tapi pikirannya ke mana-mana. Padahal belajar Al-Qur'an dengan talaqqi dan musyafahah butuh ketekunan dan pengulangan. Beberapa penelitian mendukung kekhawatiran ini. Setiadi dan kawan-kawan, misalnya, menemukan penggunaan gadget berlebihan membuat anak mengabaikan kegiatan keagamaan, terutama kalau tidak didampingi orang tua. Apakah cukup dengan melarang? Larangan tetap perlu. Masalahnya, begitu keluar kelas, anak kembali ke gadgetnya. Jadi mengaji perlu punya daya tarik sendiri, tanpa mengorbankan kesungguhan dan adab.",
      cue: "Ajukan pertanyaan 'apakah cukup dengan melarang?' lalu beri jeda dua detik.",
      transition: "Tantangan kedua menyangkut siapa yang didengar anak soal agama.",
      caution: "Penelitian yang dikutip tidak meneliti santri LPQ. Jangan menyebut gadget sebagai satu-satunya penyebab.",
      source: "Makalah Bab I A dan Bab II B.1. Setiadi dkk. (2024), Muaddib 7(1): 1–11. Marsinah dan Nurhasanah (2023), JEMARI 1(1): 1–11. UNESCO (2023), GEM Report."
    },
    {
      id: "s14", chapter: 2, speaker: "Aldo", sec: 45,
      title: "Disrupsi otoritas keagamaan",
      purpose: "Menjelaskan pergeseran sumber pengetahuan agama dan implikasinya bagi guru ngaji.",
      script: "Dulu, pengetahuan agama anak terutama datang dari kiai, ustaz, dan guru ngaji di sekitarnya. Sekarang anak dan orang tuanya bisa mendapat ceramah, tafsir, bahkan fatwa dari figur populer di media sosial, walaupun latar keilmuannya belum tentu jelas. Rifdillah dan kawan-kawan menunjukkan media baru ikut melahirkan suara-suara baru di luar ulama tradisional. Al-Aqsha dan kawan-kawan menambahkan, ukuran otoritas pelan-pelan bergeser dari kedalaman ilmu ke jumlah pengikut. Di tingkat TPA bentuknya lebih sederhana: guru ngaji bersaing dengan tokoh di layar yang lebih menghibur. Makanya guru perlu hadir dengan pendekatan yang dekat dengan dunia anak, tanpa kehilangan kedalaman dan keteladanan.",
      cue: "Tunjuk timbangan ketika menyebut pergeseran ukuran otoritas.",
      transition: "Tantangan ketiga dan keempat berkaitan dengan adab dan data anak.",
      caution: "Jangan menyebut nama figur tertentu. Rujukan Al-Aqsha dkk. dikutip sesuai makalah dan belum diperiksa ulang secara mandiri.",
      source: "Makalah Bab II B.2. Rifdillah dkk. (2024), Kaganga 7(1), doi:10.31539/kaganga.v7i1.8892. Al-Aqsha dkk. (2026), Mozaic 5(1), doi:10.35719/mozaic.v5i01.2616."
    },
    {
      id: "s15", chapter: 2, speaker: "Aldo", sec: 50,
      title: "Adab dan data anak",
      purpose: "Menjelaskan tantangan akhlak serta tanggung jawab lembaga atas data anak.",
      script: "Tantangan ketiga soal akhlak. Konten yang tidak tersaring bisa membentuk kebiasaan yang bertentangan dengan adab, misalnya berbicara kasar atau meniru perilaku agresif dari tontonan. Padahal di TPA, selain lancar membaca, anak dibiasakan mengucapkan salam, berdoa sebelum belajar, menghormati guru, dan menghargai teman. Tantangan keempat datang dari lembaga sendiri. Kita dituntut berinovasi, padahal setiap inovasi digital membawa risiko baru bagi data anak. Laporan UNESCO mencatat hanya 16 persen negara yang menjamin privasi data pendidikan lewat undang-undang, dan 89 persen dari 163 produk teknologi pendidikan yang dikaji berpotensi memantau anak. Indonesia sudah punya UU Pelindungan Data Pribadi dan PP Nomor 17 Tahun 2025. Jadi lembaga yang memakai sistem digital ikut memikul amanah menjaga data santrinya.",
      cue: "Bagi dua bagian: kiri adab, kanan data. Tunjuk titik-titik waffle saat menyebut 89 persen.",
      transition: "Lalu, bisakah ekosistem ini dipakai untuk menjawab tantangannya sendiri? Paisal akan membahas gamifikasi.",
      caution: "Angka UNESCO bersifat global. Slide ini tidak menilai kepatuhan hukum LPQ.",
      source: "Makalah Bab II B.3–B.4. UNESCO (2023), GEM Report. UU No. 27 Tahun 2022 Pasal 25. PP No. 17 Tahun 2025."
    },
    {
      id: "s16", chapter: 3, speaker: "Paisal", sec: 45,
      title: "Apa itu gamifikasi",
      purpose: "Mendefinisikan gamifikasi dan membedakannya dari pembelajaran berbasis game.",
      script: "Terima kasih, Aldo. Gamifikasi adalah penggunaan unsur desain game dalam konteks yang bukan game. Definisi ini dari Deterding dan kawan-kawan. Ini berbeda dengan pembelajaran berbasis game. Kalau berbasis game, siswa memainkan game-nya secara utuh. Kalau gamifikasi, kegiatan belajarnya tetap berjalan seperti biasa, hanya diberi lapisan unsur game. Werbach dan Hunter menyebut tiga unsur yang paling sering dipakai, disingkat PBL. Points atau poin memberi feedback langsung. Badges atau level menandai kemajuan jangka panjang. Leaderboard membuat kemajuan terlihat oleh orang lain.",
      cue: "Tunjuk lapisan paling bawah: kegiatan belajar tetap ada.",
      transition: "Pertanyaannya, apakah ini benar-benar berhasil?",
      caution: "PBL di sini singkatan points, badges, leaderboards, bukan problem-based learning.",
      source: "Makalah Bab II C.1. Deterding dkk. (2011), Proceedings MindTrek, 9–15. Werbach dan Hunter (2012), For the Win."
    },
    {
      id: "s17", chapter: 3, speaker: "Paisal", sec: 55,
      title: "Bukti penelitian dua arah",
      purpose: "Menyajikan hasil penelitian yang mendukung dan yang memperingatkan secara berimbang.",
      script: "Jawabannya: tergantung. Meta-analisis Sailer dan Homner menemukan pengaruh positif gamifikasi terhadap hasil belajar kognitif, motivasi, dan perilaku belajar. Angka 0,49, 0,36, dan 0,25 ini ukuran efek, jadi jangan dibaca sebagai persen. Pengaruhnya lebih kuat kalau gamifikasi memadukan cerita dan interaksi sosial, gabungan kompetisi dan kerja sama. Di Indonesia, Saharani dan Ningsih melaporkan hasil yang baik di kelas tahfiz sebuah MTs di Medan. Tapi ada sisi lain. Hanus dan Fox meneliti kelas yang memakai badge dan leaderboard selama satu semester. Mereka justru menemukan motivasi intrinsik, kepuasan, dan nilai ujian akhir menurun. Ababil dan kawan-kawan juga mengingatkan kompetisi bisa memicu persaingan tidak sehat. Jadi hasilnya sangat bergantung pada rancangan.",
      cue: "Jelaskan arti ukuran efek satu kali, lalu pindah ke sisi kanan.",
      transition: "Kenapa hasilnya bisa berlawanan? Teori motivasi membantu menjelaskan.",
      caution: "Ukuran efek (Hedges g) bukan persentase. Hasil penelitian lain tidak membuktikan keberhasilan LPQ.",
      source: "Makalah Bab II C.2. Sailer dan Homner (2020), Educational Psychology Review 32: 77–112. Saharani dan Ningsih (2025), EDU SOCIETY 5(1). Hanus dan Fox (2015), Computers & Education 80: 152–161. Ababil dkk. (2025), IJoEd 1(4)."
    },
    {
      id: "s18", chapter: 3, speaker: "Paisal", sec: 45,
      title: "Teori motivasi",
      purpose: "Menjelaskan mengapa gamifikasi bisa berhasil sekaligus gagal lewat Self-Determination Theory.",
      script: "Ryan dan Deci, lewat Self-Determination Theory, membedakan dua jenis motivasi. Intrinsik, karena kegiatannya sendiri bermakna atau menyenangkan. Ekstrinsik, karena ada hadiah atau nilai di luar kegiatan. Motivasi yang paling awet tumbuh kalau tiga kebutuhan terpenuhi: otonomi, kompetensi, dan keterhubungan. Poin dan level membantu di sisi kompetensi karena kemajuan jadi terlihat. Masalahnya, meta-analisis Deci, Koestner, dan Ryan menemukan hadiah nyata yang dijanjikan di awal dapat melemahkan motivasi intrinsik, sementara pujian yang tulus justru bisa menguatkannya. Ini disebut efek overjustification. Untuk pembelajaran Al-Qur'an, tujuannya anak mencintai Al-Qur'an. Poin hanya alat bantu menuju ke sana.",
      cue: "Tunjuk sudut 'kompetensi' di segitiga saat menyebut poin dan level.",
      transition: "Lalu bagaimana Islam memandang pemberian ganjaran seperti ini?",
      caution: "Hadiah tidak otomatis merusak motivasi. Temuan itu menyangkut hadiah nyata yang dijanjikan sebelumnya.",
      source: "Makalah Bab II C.3. Ryan dan Deci (2000), American Psychologist 55(1): 68–78. Deci, Koestner, dan Ryan (1999), Psychological Bulletin 125(6): 627–668."
    },
    {
      id: "s19", chapter: 3, speaker: "Paisal", sec: 50,
      title: "Targhib wa tarhib dan fastabiqul khairat",
      purpose: "Menempatkan gamifikasi dalam kerangka metode pendidikan Islam.",
      script: "Dalam pendidikan Islam, ganjaran untuk mendorong kebaikan bukan hal baru. Kita mengenal targhib wa tarhib. Targhib itu dorongan agar tertarik pada kebaikan, tarhib peringatan agar sadar dari kesalahan. An-Nahlawi menekankan bedanya dengan sistem ganjaran dan hukuman dalam pendidikan Barat ada pada orientasinya, yaitu keimanan dan balasan akhirat. Al-Qur'an juga berulang kali mendorong kita berlomba: fastabiqul khairat, berlomba-lombalah dalam kebaikan. Rasulullah bahkan menggambarkan pahala membaca Al-Qur'an dengan ukuran yang sangat konkret: satu huruf satu kebaikan, dan satu kebaikan dilipatgandakan sepuluh. Jadi Islam tidak menolak gagasan menghitung kebaikan sebagai penyemangat.",
      cue: "Bacakan potongan ayat dengan tartil yang wajar. Tunjuk alur 1 huruf, 1 kebaikan, kali sepuluh.",
      transition: "Tapi ada satu bingkai yang membungkus semua dorongan itu.",
      caution: "Poin sistem tidak sama dengan pahala. Hitungan pahala adalah kabar dari hadis, bukan dasar untuk menyamakan keduanya.",
      source: "Makalah Bab II C.4. An-Nahlawi (1995). QS. Al-Baqarah [2]: 148. QS. Al-Muthaffifin [83]: 26. HR. at-Tirmidzi no. 2910."
    },
    {
      id: "s20", chapter: 3, speaker: "Paisal", sec: 40,
      title: "Semua dibingkai niat",
      purpose: "Merumuskan dua syarat agar gamifikasi dapat diterima sebagai targhib modern.",
      script: "Bingkai itu adalah niat. Innamal a'malu bin niyyat, sesungguhnya setiap amal tergantung niatnya. Dari sini makalah menyimpulkan gamifikasi bisa diterima sebagai bentuk targhib modern dengan dua syarat. Pertama, poin dan level diposisikan sebagai sarana. Guru terus mengaitkannya dengan pahala dan kecintaan pada Al-Qur'an. Kedua, kompetisi tetap dalam koridor adab. Al-Qur'an melarang suatu kaum mengolok-olok kaum lain, jadi leaderboard tidak boleh dipakai untuk mempermalukan santri yang tertinggal. Dengan dua syarat ini, kita masuk ke contoh kasusnya. Aldo, silakan.",
      cue: "Beri jeda setelah membaca hadis. Slide ini titik tengah presentasi.",
      transition: "Aldo akan membawa kita ke LPQ Al-Fath Maulana.",
      caution: "Jangan menyampaikan hukum fikih gamifikasi. Makalah hanya merumuskan syarat pendidikan.",
      source: "Makalah Bab II C.4. HR. al-Bukhari no. 1. QS. Al-Hujurat [49]: 11."
    },
    {
      id: "s21", chapter: 4, speaker: "Aldo", sec: 45,
      title: "Profil LPQ Al-Fath Maulana",
      purpose: "Memperkenalkan lembaga, sistemnya, dan keterlibatan penulis secara terbuka.",
      script: "Terima kasih, Paisal. LPQ Al-Fath Maulana adalah lembaga pendidikan Al-Qur'an nonformal untuk santri anak dan dewasa. Per 26 September 2026 ada 186 santri aktif: 184 anak, yaitu 97 laki-laki dan 87 perempuan, ditambah 2 santri dewasa. Pengajarnya 9 orang, dengan 1 pentashih. Bacaan memakai sistem jilid, dan kenaikan jilid lewat ujian. Sistem informasinya dikembangkan sendiri oleh pengelola. Versi yang sekarang dibangun ulang mulai Juli 2026 dengan React dan Supabase. Selain fitur game, sistem ini juga mengelola absensi, penilaian bacaan dan hafalan, karakter, riwayat jilid, pembayaran, dan konten publik. Perlu kami sampaikan terbuka, salah satu dari kami terlibat sebagai pengajar sekaligus pengembang sistem ini.",
      cue: "Sebut tanggal datanya. Akui keterlibatan penulis secara singkat dan wajar.",
      transition: "Kalau dipetakan dengan kerangka tadi, ekosistemnya terlihat seperti ini.",
      caution: "Angka adalah kondisi 26 September 2026, bukan jumlah terbaru pada hari presentasi.",
      source: "Makalah Bab I D dan Bab II D.1. Data sistem LPQ diakses 26 September 2026. Repositori GitHub, riwayat 21 Juli–18 September 2026."
    },
    {
      id: "s22", chapter: 4, speaker: "Aldo", sec: 55, steps: 1,
      title: "Peta ekosistem LPQ",
      purpose: "Memetakan komponen ekosistem LPQ dan menunjukkan keterhubungan datanya.",
      script: "Dengan anatomi yang sama, komponen di LPQ bisa dipetakan. IoT-nya berupa kartu RFID, scanner absensi, dan layar TV di lembaga. Platformnya website dengan dashboard untuk admin, guru, pentashih, dan santri, ditambah grup WhatsApp kelas. Algoritmanya di sini berupa aturan sistem: hitungan poin, penentuan tier, dan urutan leaderboard. Ini berbeda dengan algoritma rekomendasi di media sosial. Datanya mulai dari kehadiran sampai catatan perilaku. Yang membuatnya layak disebut ekosistem: sekali santri menempelkan kartu, catatan itu langsung menjadi data kehadiran, sumber poin, bahan leaderboard, dan bahan rapor.",
      cue: "Tekan lanjut untuk animasi tap kartu, lalu tunjuk empat cabangnya.",
      transition: "Lalu, masalah apa yang sebenarnya ingin dijawab sistem ini?",
      caution: "Aturan poin bukan algoritma rekomendasi. Rekap data LPQ tidak disebut big data.",
      source: "Makalah Bab II D.2, Tabel 1."
    },
    {
      id: "s23", chapter: 4, speaker: "Aldo", sec: 50,
      title: "Tantangan pengajar dan data karakter",
      purpose: "Menunjukkan tantangan nyata di LPQ lewat data penilaian karakter.",
      script: "Pengajar di LPQ menghadapi tiga hal: santri malas datang atau sering terlambat, sebagian berperilaku kurang baik saat belajar, dan keduanya berdampak pada kemajuan bacaan. Tantangan kedua terlihat di data penilaian karakter. Ada 15 butir dengan skala 1 sampai 4. Dua skor terendah adalah mengucapkan salam, 2,08, dan mengendalikan emosi, 2,14. Yang tertinggi justru mandiri, 3,05, dan merapikan sandal, 3,00. Polanya menarik. Kebiasaan yang rutin dan kelihatan ternyata lebih mudah terbentuk daripada adab yang butuh kesadaran dan kendali diri. Hanya saja, penilaian ini baru diisi untuk 18 sampai 26 santri per butir, jadi belum bisa digeneralisasi.",
      cue: "Tunjuk dua batang paling bawah dan dua paling atas. Sebutkan batas jumlah santri di akhir.",
      transition: "Untuk menjawab tantangan itu, sistem menerapkan beberapa mekanisme gamifikasi.",
      caution: "Skor karakter tidak boleh dijadikan label tetap bagi anak. Data belum mewakili seluruh santri.",
      source: "Makalah Bab II D.3, Tabel 2."
    },
    {
      id: "s24", chapter: 4, speaker: "Aldo", sec: 55,
      title: "Enam mekanisme, satu muara",
      purpose: "Menjelaskan rancangan gamifikasi dalam sistem LPQ.",
      script: "Ada enam mekanisme, dan semuanya bermuara ke satu nilai: poin santri. Poin kehadiran dari tap kartu. Tier, 22 tingkat dari Bronze I sampai Grandmaster, bawaannya 30 poin per tingkat. Acak Nama, guru mengacak nama santri lalu menambah poin plus 1, 3, atau 10, atau menguranginya 1, 3, atau 5. Kuis Hafalan dengan roda soal, dan jawabannya tetap dinilai guru. Gatcha Challenge, santri menjawab pertanyaan lisan, kalau benar boleh mengacak hadiah. Terakhir, leaderboard di layar absensi. Dari kacamata targhib wa tarhib, Acak Nama paling lengkap karena ada penambahan dan pengurangan. Tier memberi tanda kemajuan yang lebih sering, karena naik jilid bisa makan waktu berbulan-bulan.",
      cue: "Jelaskan Acak Nama dan tier lebih rinci. Empat lainnya cukup disebut.",
      transition: "Salah satu aturan poin pernah diubah, dan perubahannya cukup jelas terlihat.",
      caution: "Tier bukan jilid. Nama Gatcha mengikuti nama fitur; jangan menyimpulkan status hukumnya dari namanya.",
      source: "Makalah Bab II D.4, Tabel 3."
    },
    {
      id: "s25", chapter: 4, speaker: "Aldo", sec: 40,
      title: "Aturan poin kehadiran berubah",
      purpose: "Menjelaskan perubahan aturan poin beserta urutan perubahan lain di sekitarnya.",
      script: "Sebelum 10 Agustus 2026, setiap kehadiran dapat 1 poin, datang jam berapa pun. Aturan ini tidak memberi alasan untuk datang tepat waktu. Mulai 10 Agustus, poinnya dibedakan: datang lebih awal 2 poin, tepat waktu 1 poin, terlambat setengah poin. Setelah itu ada dua perubahan lain. Leaderboard tampil di layar absensi pada 20 Agustus, dan simbol tier tampil di kartu profil absensi pada 2 September. Ini perlu diingat saat membaca data berikutnya, karena beberapa hal berubah dalam waktu yang berdekatan.",
      cue: "Bandingkan batang 'sebelum' dan 'sesudah', lalu ikuti linimasa dari kiri.",
      transition: "Lalu bagaimana catatan kehadirannya?",
      caution: "10 Agustus adalah awal aturan baru, bukan awal sistem digital.",
      source: "Makalah Bab II D.4."
    },
    {
      id: "s26", chapter: 4, speaker: "Aldo", sec: 55, steps: 1,
      title: "Temuan kehadiran",
      purpose: "Menyajikan data keterlambatan beserta batas tafsirnya.",
      script: "Ini data kehadiran Juli sampai September. Persentase catatan terlambat turun dari 41,7 persen di Juli menjadi 18,5 persen di Agustus dan 17,0 persen di September. Jumlah santri yang pernah terlambat setidaknya sekali dalam sebulan juga turun, dari sekitar 96 persen ke kisaran 58 persen. Penurunan ini terjadi bersamaan dengan aturan poin yang baru. Tapi kami sengaja tidak menyebut aturan poin sebagai penyebabnya. Data ini deskriptif. Juli adalah bulan pertama sistem baru dipakai, jadi sebagian keterlambatan bisa karena santri masih menyesuaikan diri dengan cara absen yang baru. Jadwal dan pendampingan orang tua juga belum dikendalikan. Arahnya sejalan dengan tujuan aturan, dan itu cukup jadi alasan untuk meneliti lebih ketat.",
      cue: "Tunjuk batang terlambat dulu, lalu panel kanan. Tekan lanjut untuk memunculkan catatan kehati-hatian.",
      transition: "Data poin memberi gambaran yang berbeda.",
      caution: "Persentase pertama dihitung dari jumlah catatan kehadiran, bukan jumlah santri. Data September hanya sampai tanggal 26.",
      source: "Makalah Bab II D.5, Tabel 4."
    },
    {
      id: "s27", chapter: 4, speaker: "Aldo", sec: 50,
      title: "Sebaran tier",
      purpose: "Menunjukkan sebaran poin santri dan kelompok yang perlu diperhatikan.",
      script: "Sistem punya 22 tingkat, dari Bronze I sampai Grandmaster, dengan 30 poin per tingkat, seperti di poster ini. Kalau dilihat sebarannya, 98,9 persen santri anak masih berada di Bronze I sampai Silver II. Ini wajar karena sistem baru berjalan sekitar dua bulan. Dari Gold I sampai Grandmaster belum ada santri sama sekali. Yang kami perhatikan, 34 santri atau 18,6 persen masih di tingkat paling bawah, dan leaderboard bisa membuat mereka merasa tertinggal. Satu catatan: di data sistem ada satu akun dummy untuk uji coba, dan akun itu tidak kami hitung. Jadi angka di sini memakai 183 santri anak. Dan sekali lagi, tier menunjukkan akumulasi poin, bukan kualitas bacaan.",
      cue: "Tunjuk poster tier sebentar, lalu batang Bronze I. Sebut penyebut 183 dan alasannya.",
      transition: "Lalu bagaimana dengan kemajuan belajarnya sendiri?",
      caution: "Tabel 5 makalah masih menghitung akun dummy (184 santri, 1 di Grandmaster). Rata-rata 74,98 dan median 71,75 di makalah juga masih memasukkan akun itu, jadi tidak ditampilkan.",
      source: "Makalah Bab II D.5, Tabel 5, tanpa 1 akun dummy. Jumlah 34 + 43 + 40 + 40 + 24 + 2 = 183. Poster tier dari sistem LPQ."
    },
    {
      id: "s28", chapter: 4, speaker: "Aldo", sec: 35,
      title: "Kegiatan belajar berjalan",
      purpose: "Menyajikan data setoran dan kenaikan jilid tanpa mengaitkannya langsung dengan gamifikasi.",
      script: "Dari sisi belajar, Juli sampai September tercatat 742 penilaian setoran bacaan dan hafalan. Tingkat kelulusannya 51,4 persen di Juli, 64,3 persen di Agustus, dan 58,3 persen di September. Pada ujian kenaikan jilid bulan Agustus, 100 santri naik jilid. Kegiatan belajarnya jelas berjalan aktif. Tapi kami tidak mengaitkan angka ini langsung dengan gamifikasi, karena kemajuan bacaan dipengaruhi banyak faktor lain.",
      cue: "Cukup singkat. Tekankan kalimat terakhir.",
      transition: "Dari semua temuan ini, Paisal akan menyusun analisis SWOT.",
      caution: "Kelulusan setoran naik lalu turun lagi. Jangan menyebutnya tren naik.",
      source: "Makalah Bab II D.5."
    },
    {
      id: "s29", chapter: 5, speaker: "Paisal", sec: 55, steps: 4,
      title: "Matriks SWOT",
      purpose: "Memetakan faktor internal dan eksternal LPQ dalam merespons ekosistem digital.",
      script: "Terima kasih, Aldo. Dari temuan tadi, kami susun SWOT. Kekuatan utamanya ada pada data yang terpusat dan saling terhubung. Dulu catatan kehadiran, bacaan, dan perilaku tersebar di buku terpisah atau hanya diingat guru. Kekuatan lainnya, sistem dikembangkan oleh orang yang juga mengajar. Kelemahan yang paling terasa, fitur pembinaan akhlak belum dipakai merata. Catatan perilaku baru terisi satu kali. Poin dari Acak Nama dan Gatcha juga bergantung pada guru, jadi bisa tidak konsisten antarkelas. Peluang terbesar justru datang dari hal yang selama ini dianggap ancaman, yaitu kedekatan anak dengan dunia game. Ancaman paling mendasar adalah niat santri bergeser dari mengaji karena Allah menjadi mengaji karena poin, ditambah risiko keamanan data anak di layanan cloud pihak ketiga.",
      cue: "Tekan lanjut untuk membuka kuadran satu per satu: kekuatan, kelemahan, peluang, ancaman.",
      transition: "SWOT baru memetakan keadaan. Supaya jadi tindakan, kami silangkan lewat matriks TOWS.",
      caution: "Pembatasan akses berdasarkan peran belum berarti seluruh sistem sudah aman.",
      source: "Makalah Bab II E, Tabel 6. Rangkuti (2006), Analisis SWOT."
    },
    {
      id: "s30", chapter: 5, speaker: "Paisal", sec: 50, steps: 1,
      title: "Strategi TOWS",
      purpose: "Menyusun strategi dari persilangan faktor SWOT dan menyebut prioritasnya.",
      script: "Matriks TOWS menyilangkan faktor internal dan eksternal menjadi empat kelompok strategi. Contohnya strategi W-O: membuat jadwal rutin pengisian penilaian karakter tiap akhir bulan, dan menyusun pedoman bersama besaran poin supaya konsisten antarkelas. Dari delapan strategi ini, makalah memprioritaskan strategi S-T yang pertama: guru membiasakan diri menyertakan pesan keimanan setiap kali memberi poin. Alasannya praktis. Tidak butuh biaya dan tidak perlu mengubah sistem. Misalnya guru mengingatkan bahwa setiap huruf yang dibaca bernilai sepuluh kebaikan. Dengan begitu, poin di layar menjadi pengingat akan pahala yang jauh lebih besar.",
      cue: "Tekan lanjut untuk menyorot strategi S-T sebagai prioritas.",
      transition: "Sebelum menutup, ada beberapa catatan kritis.",
      caution: "Strategi TOWS adalah usulan. Jangan menyebutnya sudah berjalan.",
      source: "Makalah Bab II F, Tabel 7. Weihrich (1982), Long Range Planning 15(2): 54–66."
    },
    {
      id: "s31", chapter: 5, speaker: "Paisal", sec: 45,
      title: "Catatan kritis",
      purpose: "Menyampaikan batas dan arah perbaikan pemanfaatan gamifikasi.",
      script: "Ada empat catatan supaya pemanfaatan ini tidak kehilangan arah. Satu, gamifikasi paling efektif untuk perilaku yang mudah diukur, seperti datang tepat waktu. Kekhusyukan, kejujuran, dan kecintaan pada Al-Qur'an sulit dijadikan poin, jadi keteladanan guru dan hubungan yang hangat tetap menjadi inti. Dua, leaderboard perlu dirancang ulang, misalnya per kelas, peringkat kemajuan, atau tantangan kelompok. Tiga, pengurangan poin dipakai dengan bijak. Tujuannya menyadarkan, dan selalu disertai kesempatan memperbaiki diri. Empat, data santri adalah amanah. Pembatasan akses sudah ada, tapi masih perlu persetujuan tertulis dari wali dan kebijakan berapa lama data disimpan.",
      cue: "Sebut nomor tiap catatan dengan jelas, lalu serahkan ke Aldo.",
      transition: "Aldo akan merangkum kesimpulan dan saran.",
      caution: "Persetujuan wali dan masa simpan data belum dipastikan. Sampaikan sebagai kebutuhan, bukan kondisi.",
      source: "Makalah Bab II G."
    },
    {
      id: "s32", chapter: 6, speaker: "Aldo", sec: 40,
      title: "Kesimpulan",
      purpose: "Merangkum jawaban atas empat pertanyaan kajian.",
      script: "Terima kasih, Paisal. Kami simpulkan dalam lima hal. Ekosistem digital adalah jaringan manusia, perangkat, platform, algoritma, dan data yang saling menguatkan. Ia membawa empat tantangan bagi pendidikan Islam, dari perhatian sampai perlindungan data. Gamifikasi bisa diterima sebagai targhib modern selama poin menjadi sarana dan kompetisi tetap beradab. Di LPQ Al-Fath Maulana, keterlambatan turun setelah aturan poin dibedakan, meski temuan ini masih deskriptif. Lalu dari SWOT, kekuatan utamanya keterhubungan data, sementara ancaman terbesarnya pergeseran niat dan keamanan data anak.",
      cue: "Ringkas dengan bahasa sendiri. Jangan membaca semua teks di layar.",
      transition: "Dari kesimpulan ini, ada saran untuk beberapa pihak.",
      caution: "Jangan menyatakan poin terbukti memperbaiki bacaan atau keikhlasan.",
      source: "Makalah Bab III A."
    },
    {
      id: "s33", chapter: 6, speaker: "Aldo", sec: 35,
      title: "Saran",
      purpose: "Menyampaikan saran untuk pengajar, lembaga, wali, dan peneliti.",
      script: "Untuk pengajar, sertakan pesan keimanan setiap memberi poin, dan isi penilaian karakter serta catatan perilaku secara rutin. Untuk lembaga, susun kebijakan perlindungan data dan lengkapi leaderboard dengan bentuk penghargaan lain. Untuk orang tua, pendampingan gadget di rumah tetap perlu, karena sistem di lembaga tidak bisa bekerja sendirian. Untuk peneliti berikutnya, perlu rancangan yang lebih ketat, misalnya membandingkan kelas dengan dan tanpa gamifikasi dalam periode yang lebih panjang.",
      cue: "Satu kalimat untuk tiap pihak.",
      transition: "Rujukan kami tampilkan sekilas.",
      caution: "",
      source: "Makalah Bab III B."
    },
    {
      id: "s34", chapter: 6, speaker: "Paisal", sec: 12,
      title: "Rujukan",
      purpose: "Menunjukkan dasar pustaka yang dipakai.",
      script: "Ini rujukan utama kami. Daftar lengkap dengan DOI ada di makalah dan di dokumen panduan, jadi tidak kami bacakan satu per satu.",
      cue: "Cukup tunjuk. Jangan dibacakan.",
      transition: "Kami buka sesi diskusi.",
      caution: "Data LPQ adalah sumber kasus, sedangkan artikel penelitian menjadi rujukan teori dan pembanding.",
      source: "Daftar pustaka makalah."
    },
    {
      id: "s35", chapter: 6, speaker: "Aldo dan Paisal", sec: 30,
      title: "Diskusi",
      purpose: "Membuka diskusi dengan pertanyaan pemantik.",
      script: "Demikian presentasi dari kami. Terima kasih atas perhatian Bapak dan teman-teman. Kami buka kesempatan untuk bertanya atau memberi masukan. Kalau boleh kami pancing dengan satu pertanyaan: bagaimana caranya memberi penghargaan supaya santri yang poinnya masih rendah tetap merasa berkembang?",
      cue: "Aldo membuka diskusi, Paisal mencatat pertanyaan. Tekan O untuk melompat ke slide yang ditanyakan. Salam penutup diucapkan setelah diskusi selesai.",
      transition: "Jika belum ada yang bertanya, ulangi pertanyaan pemantik tanpa langsung menjawabnya sendiri.",
      caution: "Untuk pertanyaan tentang LPQ, jawab sesuai data yang diketahui. Latihan memakai bank Q&A.",
      source: "Pertanyaan pemantik disusun dari temuan santri di tingkat terendah, makalah Bab II D.5 dan G."
    }
  ]
};
