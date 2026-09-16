// TODO(Level 5): lengkapi TIGA function component di bawah ini (komposisi
// komponen — lihat SOAL.md untuk kontrak lengkap tiap fungsi).

// Header menerima { judul: string }, render <header><h1>{judul}</h1></header>
type HeaderProps = {
  judul : string
}
export function Header({judul} : HeaderProps) {
  return (
    <header>
      <h1>{judul}</h1>
    </header>
  )
}

// Footer tidak menerima props, render <footer><p>© 2026 Kelas Frontend</p></footer>
export function Footer() {
  return (
    <footer>
      <p>© 2026 Kelas Frontend</p>
    </footer>
  )
}

// Halaman menerima { judul: string }, render <Header judul={judul} />
// diikuti <Footer /> (pakai Fragment, JANGAN tambah <div> pembungkus baru).
type HalamanProps = {
  judul : string
}

export function Halaman({judul} : HalamanProps) {
  return (
    <>
    <Header judul={judul} />
    <Footer />
    </>
  )
}
