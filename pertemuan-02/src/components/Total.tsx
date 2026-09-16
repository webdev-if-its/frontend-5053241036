// TODO(Level 3): beri tipe props yang benar — { qty: number; harga: number }.
// Lalu render satu elemen yang memuat teks "Total: " diikuti HASIL PERKALIAN
// qty * harga (pakai ekspresi { } di JSX, jangan hardcode angkanya). Lihat
// SOAL.md untuk kontrak lengkap.

type TotalProps = {
  qty : number
  harga : number
}
export function Total({qty, harga} : TotalProps) {
  return <p>Total : {qty * harga}</p>
}
