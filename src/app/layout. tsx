import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import LoadingOverlay from '@/components/LoadingOverlay';
import Navbar from '@/components/Navbar';

export const metadata = { title: "Sistem Laporan KPI Yayasan" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
              <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                  <li className="nav-item"><a className="nav-link" href="/dashboard">Dashboard</a></li>
                  <li className="nav-item"><a className="nav-link" href="/input">Input Laporan</a></li>
                  <li className="nav-item"><a className="nav-link" href="/approve">Filter & Approve</a></li>
                  <li className="nav-item"><a className="nav-link" href="/rekapitulasi">Rekapitulasi</a></li>
                </ul>
              </div>
            </nav>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              {children}
            </main>
          </div>
        </div>
        <LoadingOverlay />
      </body>
    </html>
  );
}