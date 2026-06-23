'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function InputLaporan() {
  const router = useRouter();
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({
    periode: '', kodeOKR: 'OKR-001', objectives: 'Auto-Filled', tlBulanBerjalan: '1',
    capaianKualitatif: '', capaianKuantitatif: '', waktuPelaksanaan: '', tempat: '',
    masalah: '', rencana: '', pic: '', dueDate: '', evidence: '', skorKepalaOrgan: ''
  });

  useEffect(() => {
    const r = localStorage.getItem('userRole') || 'Kepala Organ';
    setRole(r);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => 
    setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Kirim ke API
    await fetch('/api/reports', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, "Status Pengiriman (Kepala Organ)": "Terkirim" })
    });
    alert('Laporan berhasil dikirim!');
    router.push('/approve'); // Arahkan ke halaman approve/rekap
  };

  return (
    <div className="mt-4">
      <h2>Input Laporan Bulanan KPI</h2>
      <p className="text-muted">Role Anda: <strong>{role}</strong></p>
      
      <form onSubmit={handleSubmit} className="card shadow p-4">
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Periode Laporan (Bulan/Tahun)</label>
            <input type="month" name="periode" className="form-control" onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label>TL Bulan Berjalan</label>
            <input type="number" name="tlBulanBerjalan" className="form-control" onChange={handleChange} required />
          </div>
        </div>
        
        <div className="mb-3">
          <label>Capaian Kualitatif</label>
          <textarea name="capaianKualitatif" className="form-control" rows={2} onChange={handleChange} required></textarea>
        </div>
        <div className="mb-3">
          <label>Capaian Kuantitatif</label>
          <textarea name="capaianKuantitatif" className="form-control" rows={2} onChange={handleChange} required></textarea>
        </div>

        {/* Field lainnya bisa disesuaikan */}
        
        {role === 'Kepala Organ' && (
          <div className="mb-3">
            <label>Skor Kepala Organ</label>
            <input type="number" name="skorKepalaOrgan" className="form-control" onChange={handleChange} required />
          </div>
        )}

        <button type="submit" className="btn btn-success w-100 mt-3">KIRIM LAPORAN</button>
      </form>
    </div>
  );
}