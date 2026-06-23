import { redirect } from 'next/navigation';

export default function Home() {
  // Otomatis mengarahkan pengguna ke halaman /login saat link dibuka
  redirect('/login');
}