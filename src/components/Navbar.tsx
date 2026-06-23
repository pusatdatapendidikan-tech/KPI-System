'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary shadow-sm sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-white" href="/dashboard">
          KPI Yayasan System
        </Link>
        <div className="d-flex">
          <Link href="/login" className="btn btn-outline-light btn-sm">Logout</Link>
        </div>
      </div>
    </nav>
  );
}