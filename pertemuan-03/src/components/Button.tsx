// TODO(Level 7): beri tipe props yang benar — { variant: 'primary' |
// 'secondary' | 'danger'; children: ReactNode; onClick?: () => void }.
// Render sebuah <button> yang:
// - memuat children di dalamnya,
// - memanggil onClick saat diklik (kalau diberikan),
// - className-nya BERBEDA untuk tiap nilai variant (pakai Tailwind, mis.
//   warna latar berbeda per variant) — ini komponen REUSABLE: satu
//   komponen, tiga tampilan, diatur lewat props.
// Lihat SOAL.md untuk kontrak lengkap.
import type { ReactNode } from "react"

type ButtonProps = {
  variant : "primary" | "secondary" | "danger"
  children : ReactNode
  onClick? : () => void
}

const variantClasses : Record<ButtonProps["variant"], string > = {
  primary : "bg-sky-200 text-sky-900",
  secondary: "bg-amber-200 text-amber-900",
  danger: "bg-rose-200 text-rose-900",
}

export function Button({variant, children, onClick} : ButtonProps) {
  return (
    <button
    className = { `px-3 py-2 rounded-md ${variantClasses[variant]}`}
    onClick={onClick}>
      {children}
    </button>
  )
}