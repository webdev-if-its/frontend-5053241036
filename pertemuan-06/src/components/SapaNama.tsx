// TODO(Level 2): komponen TANPA props. Dua state: nama (string) dan jumlah
// klik (number). Render:
// - input berlabel "Nama" (controlled),
// - tombol "+1" dan teks "Klik: {jumlah}".
// Pakai useEffect untuk mengubah document.title menjadi "Halo, {nama}"
// (kalau nama kosong: "Halo, Tamu"). Efek HANYA boleh jalan ulang saat nama
// berubah — klik tombol "+1" tidak boleh memicu efek (atur dependency array).
// Lihat SOAL.md untuk kontrak lengkap.
import { useEffect, useState } from "react"

export function SapaNama(props: any) {
  const [nama, setNama] = useState<string>('')
  const [jumlahKlik, setJumlahKlik] = useState<number>(0)

  useEffect(() => {
    document.title = nama ? `Halo, ${nama}` : "Halo, Tamu"
  }, [nama])

  return (
    <div>
      <label htmlFor="nama">Nama</label>
      <input
        id="nama"
        type="text"
        value={nama}
        onChange={(e : React.ChangeEvent<HTMLInputElement>) => setNama(e.target.value)}
      />
      
      <button onClick={() => setJumlahKlik(jumlahKlik + 1)}>
        +1
      </button>
      <p>Klik: {jumlahKlik}</p>
    </div>
  )
}
