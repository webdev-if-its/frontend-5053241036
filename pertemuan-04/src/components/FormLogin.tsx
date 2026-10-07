// TODO(Level 4): beri tipe props yang benar — { onLogin: (email: string) =>
// void }. Render <form> berisi input berlabel "Email" dan tombol submit
// "Masuk". Saat form dikirim: cegah reload halaman (e.preventDefault()),
// lalu panggil onLogin dengan isi email.
// Lihat SOAL.md untuk kontrak lengkap.
import { useState } from "react"

export function FormLogin(props: { onLogin: (email: string) => void }) {
  const [email, setEmail] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.onLogin(email)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
      <button type="submit">Masuk</button>
    </form>
  )
}
