'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [role, setRole] = useState('Kepala Organ');
  const router = useRouter();

const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
    // Simpan role ke localStorage (Simulasi Auth)
    localStorage.setItem('userRole', role);
    router.push('/dashboard');
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-primary bg-gradient">
      <div className="card shadow-lg p-4" style={{ width: '400px', borderRadius: '15px' }}>
        <div className="text-center mb-4">
          <h3 className="fw-bold text-primary">Sistem Laporan KPI</h3>
          <p className="text-muted">Yayasan [Nama Yayasan]</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Username / Email</label>
            <input type="text" className="form-control" placeholder="Masukkan email" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="******" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Login Sebagai</label>
            <select className="form-select" onChange={(e) => setRole(e.target.value)}>
              <option>Kepala Organ</option>
              <option>Deputi / Kepala Divisi</option>
              <option>Direktur</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100 fw-bold">LOGIN</button>
        </form>
      </div>
    </div>
  );
}