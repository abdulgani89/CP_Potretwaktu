# Potret Waktu — Website Company Profile & Portofolio Fotografi

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat&logo=vercel&logoColor=white)
![License](https://img.shields.io/badge/Lisensi-MIT-blue?style=flat)

Website *company profile* dan portofolio fotografi **Potret Waktu** yang dirancang untuk memperkenalkan profil usaha, menampilkan hasil karya fotografi secara visual, serta memudahkan calon klien melihat testimoni dan menghubungi penyedia jasa.

🔗 **Live Demo:** [potretwaktu.vercel.app](https://potretwaktu.vercel.app)

---

## Tampilan Website

| Halaman Beranda | Halaman Galeri Karya |
| :---: | :---: |
| ![Beranda Potret Waktu](docs/preview-home.png) | ![Galeri Potret Waktu](docs/preview-gallery.png) |

> *Simpan tangkapan layar tampilan terbaik (desktop/mobile) di dalam folder `docs/`.*

---

## Tujuan Proyek

Proyek ini dibuat sebagai representasi digital jasa fotografi **Potret Waktu** agar calon klien dapat:
- Memahami identitas merek dan layanan fotografi yang ditawarkan dengan cepat.
- Menjelajahi katalog hasil dokumentasi secara rapi melalui halaman galeri.
- Membangun kepercayaan melalui ulasan dan testimoni klien sebelumnya.
- Menghubungi tim atau melakukan pemesanan dengan mudah melalui halaman kontak.

---

## Halaman & Fitur Utama

- **Beranda (`index.html`):** Bagian *hero*, pengenalan singkat Potret Waktu, ringkasan layanan, dan navigasi utama.
- **Galeri (`gallery.html`):** Etalase visual yang menampilkan koleksi hasil foto secara terstruktur.
- **Testimoni (`testimoni.html`):** Kumpulan ulasan pelanggan untuk memperkuat kredibilitas layanan.
- **Kontak (`contact.html`):** Informasi kontak dan jalur komunikasi bagi calon klien yang ingin bertanya atau memesan layanan.
- **Desain Responsif:** Tampilan menyesuaikan layar desktop, tablet, maupun ponsel.

---

## Teknologi yang Digunakan

| Kategori | Teknologi |
| :--- | :--- |
| **Markup & Styling** | HTML5, CSS3 `[tambahkan jika memakai Bootstrap / Tailwind CSS]` |
| **Interaktivitas** | JavaScript `[tambahkan jika memakai library animasi/ikon, mis. AOS / Font Awesome]` |
| **Hosting & Deployment** | Vercel |

---

## Struktur Proyek

```text
CP_Potretwaktu/
├── assets/               # File CSS, JavaScript, ikon, dan aset gambar
├── docs/                 # Tangkapan layar untuk dokumentasi README
├── index.html            # Halaman utama (Beranda)
├── gallery.html          # Halaman galeri foto (atau galery.html)
├── testimoni.html        # Halaman ulasan klien
├── contact.html          # Halaman kontak & pemesanan
├── .gitignore
└── README.md
```

---

## Cara Menjalankan di Lokal

Karena proyek ini dibangun sebagai website statis, tidak diperlukan konfigurasi server khusus:

1. **Clone repositori**
   ```powershell
   git clone [https://github.com/abdulgani89/CP_Potretwaktu.git](https://github.com/abdulgani89/CP_Potretwaktu.git)
   cd CP_Potretwaktu
   ```

2. **Jalankan di browser**
   - Buka langsung file `index.html` menggunakan browser, **atau**
   - Gunakan ekstensi **Live Server** di VS Code agar perubahan halaman dapat dilihat secara *real-time*.

---

## Rencana Pengembangan

- [ ] Optimasi ukuran gambar (format `.webp` dan *lazy loading*) untuk mempercepat waktu muat halaman galeri.
- [ ] Penambahan fitur filter kategori foto (misalnya *wedding*, wisuda, dan acara).
- [ ] Integrasi tombol pemesanan cepat langsung ke WhatsApp.

---

## Pengembang

**Muhamad Abdul Gani**
- GitHub: [@abdulgani89](https://github.com/abdulgani89)
