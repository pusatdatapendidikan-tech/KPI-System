'use client';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/reports').then(res => res.json()).then(setData);
  }, []);

  // Dummy Chart Data
  const chartData = {
    labels: ['Strategic Partnership', 'Finance', 'Legal', 'Human Capital'],
    datasets: [{ label: 'Skor Akhir KPI', data: [80, 90, 75, 85], backgroundColor: 'rgba(54, 162, 235, 0.6)' }]
  };

  return (
    <div className="mt-4">
      <h2 className="mb-4">Dashboard KPI Yayasan</h2>
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card text-white bg-success shadow">
            <div className="card-body">
              <h5 className="card-title">Total Laporan</h5>
              <h2>{data.length}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-warning shadow">
            <div className="card-body">
              <h5 className="card-title">Pending Approval</h5>
              <h2>4</h2>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-primary shadow">
            <div className="card-body">
              <h5 className="card-title">Approved</h5>
              <h2>12</h2>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-danger shadow">
            <div className="card-body">
              <h5 className="card-title">Change Request</h5>
              <h2>2</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="card shadow">
        <div className="card-body">
          <h5>Grafik Capaian KPI per Divisi</h5>
          <Bar data={chartData} />
        </div>
      </div>
    </div>
  );
}