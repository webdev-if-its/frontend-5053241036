// TODO(Level 8): komponen TANPA props. Render dua input angka berlabel
// "Angka A" dan "Angka B" (type="number") dan teks "Hasil: {A + B}".
// Ingat: e.target.value SELALU string — ubah ke number sebelum dijumlahkan,
// dan input kosong dianggap 0.
// Lihat SOAL.md untuk kontrak lengkap.
import { useState } from "react"
export function KalkulatorMini() {
  const [angkaA, setAngkaA] = useState<number>(0)
  const [angkaB, setAngkaB] = useState<number>(0)

  return (
    <div>
      <label htmlFor="angkaA">Angka A</label>
      <input
        id="angkaA"
        type="number"
        value={angkaA}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAngkaA(Number(e.target.value) || 0)}
      />
      <label htmlFor="angkaB">Angka B</label>
      <input
        id="angkaB"
        type="number"
        value={angkaB}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAngkaB(Number(e.target.value) || 0)}
      />
      <p>Hasil: {angkaA + angkaB}</p>
    </div>
  )
}



