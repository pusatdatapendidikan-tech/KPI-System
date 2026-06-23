import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export async function getSheetDoc() {
  const serviceAccountAuth = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, serviceAccountAuth);
  await doc.loadInfo();
  return doc;
}

// Fungsi untuk Auto Create Header
export const HEADERS_KPI = [
  "Organ", "Periode Laporan", "Kode OKR", "Objectives", "TL Bulan Berjalan",
  "Capaian Kualitatif", "Capaian Kuantitatif", "Waktu Pelaksanaan", "Tempat Pelaksanaan",
  "Identifikasi Masalah", "Rencana Perbaikan", "PIC", "Due Date",
  "Skor Kepala Organ", "Evidence", "Status Pengiriman (Kepala Organ)",
  "Skor Kepala Divisi", "Catatan Kepala Divisi", "Status (Review Divisi)",
  "Skor Direktur", "Catatan Direktur", "Status (Review Direktur)", "Skor Akhir"
];