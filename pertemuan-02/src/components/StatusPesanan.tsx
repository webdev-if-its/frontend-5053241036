// TODO(Level 6): beri tipe props yang benar — { status: Status } (impor
// `Status` dari '../types', jangan tulis ulang union-nya di sini). Lalu
// render teks berbeda sesuai status: pending -> "Menunggu", selesai ->
// "Selesai", batal -> "Dibatalkan". Lihat SOAL.md untuk kontrak lengkap.
import type {Status} from '../types'

type StatusPesananProps = {
  status : Status
}

export function StatusPesanan({status} : StatusPesananProps) {
  if (status === 'pending') {
    return <p>Menunggu</p>
  } if (status === 'selesai') {
    return <p>Selesai</p>
  } else {
    return <p>Dibatalkan</p>
  }
}
