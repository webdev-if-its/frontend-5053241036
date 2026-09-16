// TODO(Level 10, bonus): beri tipe props yang benar — { judul: string;
// catatan?: string; children: ReactNode } (catatan OPSIONAL). Render:
// - judul (selalu tampil)
// - catatan (HANYA tampil kalau diberikan — jangan sampai teks "undefined"
//   ikut muncul kalau catatan tidak diisi)
// - children (selalu tampil)
// Lihat SOAL.md untuk kontrak lengkap.
import type { ReactNode } from "react"

type KartuInfoProps = {
  judul : string
  catatan? : string
  children : ReactNode
}

export function KartuInfo({judul, catatan, children} : KartuInfoProps) {
  return (
    <div>
      <h3>{judul}</h3>
      {catatan && <p>{catatan}</p>}
      {children}
    </div>
  )

}
