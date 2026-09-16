# frontend-5053241036

Repo tugas mata kuliah **Frontend**, dibuat dari template [`webdev-if-its/frontend-template`](https://github.com/webdev-if-its/frontend-template). Ganti judul di atas jadi nama repo kalian sendiri (`frontend-nrp`, contoh: `frontend-5025201012`).

## Aturan Umum

- Tugas tiap pertemuan disimpan di folder `pertemuan-XX/` pada repo ini — masing-masing adalah project Vite + React + TypeScript sendiri (`npm install` terpisah per folder).
- Commit message wajib menyebut level yang dicapai: `pertemuan-XX: level N selesai`.
- Deadline push: sebelum pertemuan berikutnya dimulai.
- Semua level dicek otomatis lewat `npm run levels` (Vitest) — baca `pertemuan-XX/SOAL.md` tiap minggu untuk detail levelnya.

## Mengambil Pertemuan Baru Tiap Minggu

Repo ini **tidak otomatis sinkron** dengan template dosen. Begitu ada pertemuan baru, jalankan (ganti `pertemuan-02` sesuai minggu berjalan):

```bash
git fetch https://github.com/webdev-if-its/frontend-template.git main
git checkout FETCH_HEAD -- pertemuan-02
```

Perintah ini **aman dijalankan kapan pun** — tidak akan menimpa folder pertemuan lain yang sudah kalian kerjakan, karena hanya mengambil folder yang disebutkan. Setelah itu, `cd pertemuan-02 && npm install`, lalu commit folder barunya seperti biasa.

Kalau dosen memperbaiki sesuatu di pertemuan yang sudah dirilis (mis. ada bug di test), biasanya cukup ambil ulang file yang diperbaiki saja, bukan seluruh folder — akan diumumkan file mana yang berubah.

---

Bagian di bawah ini **isi bertahap** sesuai level yang sedang kalian kerjakan (lihat `pertemuan-XX/SOAL.md`) — heading-nya dicek otomatis, jangan diganti namanya.

## Struktur Project
app.tsx adalah keseluruhan kode yang mengatur tampilan, mulai dari struktur, sampai logika tampilan ada di file ini. sedangkan main.tsx yang bertugas memanggil app.tsx untuk di taruh di index.html sehingga bisa dibuka di browser. 

## Identitas
- Nama: Zahra Fidela Ramadhiani T.
- NRP: 5053241036
- Kelas: M (RPL)

## Commit vs Push
Commit adalah kegiatan menyimpan perubahan file, dan Push adalah kegiatan mengupload perubahan tadi ke github. Contoh situasi : ketika sebuah tim teridiri dari 2 orang, satu mengerjakan fitur A, dan satunya lagi mengerjakan fitur B, dimana seharusnya fitur B ini bisa dikerjakan ketika fitur A selesai. Lalu orang fitur A sudah selesai mengerjakan, dia commit dengan message "fitur A done" tepat waktu. namun dia lupa belum push ke github, sehingga orang fitur B yang seharusnya sudah bisa langsung mengerjakan jadi terlambat karna dia belum bisa menerima hasil dari fitur A di repo mereka.

## JSX vs TSX
.jsx adalah file Javascript yang bisa ada JSX didalamnya, dan tidak akan pernah ada pengecekan tipe. sedangkan .tsx juga bisa ada JSX didalamnya, tapi dengan tambahan typescript, jadi pasti ada pengecekan tipe sebelum kode di run.

## Kenapa Union Type untuk Status
union type di sini lebih baik karena membatasi nilai status hanya boleh salah satu dari tiga pilihan yang sudah ditentukan. sedangkan kalau memakai string bebas, typescript akan menerima nilai apa pun, sehingga nilai yang salah (meskipun typo) baru ke detect saat aplikasi dijalankan. tapi dengan union type, kesalahan seperti itu langsung bisa detect di awal saat masi menulis kodenya

## Refleksi
di html biasa mungkin biasanya menulis struktur yang tetap yah, dimana semua isinya sudah diisi dari awal dan pasti. tapi dengan children, ternyata bisa di isi waktu nanti dipakai, jadi masih memberikan tempat kosong gitu, dan bisa dipakai berulang untuk konten yang berbeda. fragment juga, ternyata di JSX hanya bisa ada satu root element, sedangkan di html bisa banyak. dan fragment disini yang akhirnya jadi solusi buat menulis banyak element tanpa div
