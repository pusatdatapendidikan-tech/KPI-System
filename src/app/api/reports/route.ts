import { NextResponse } from 'next/server';
import { getSheetDoc } from '@/lib/googleSheets';

// GET: Ambil semua data (untuk dashboard, approve, rekap)
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const role = searchParams.get('role');
  
  const doc = await getSheetDoc();
  const sheet = doc.sheetsByTitle['Data_Laporan'];
  const rows = await sheet.getRows();
  
  let data = rows.map(row => row.toObject());
  
  // Filter logic bisa ditambahkan di sini berdasarkan role/hirarki
  return NextResponse.json(data);
}

// POST: Tambah data baru (dari form Input)
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const doc = await getSheetDoc();
    const sheet = doc.sheetsByTitle['Data_Laporan'];
    
    // Hitung Skor Akhir (Skor Atasan * TL Bulan Berjalan)
    const skorAtasan = body.skorKepalaDivisi || body.skorDirektur || 0;
    const tlBulanBerjalan = parseFloat(body.tlBulanBerjalan) || 1; // Asumsi angka
    const skorAkhir = skorAtasan * tlBulanBerjalan;

    const newRow = {
      ...body,
      "Skor Akhir": skorAkhir
    };

    await sheet.addRow(newRow);
    return NextResponse.json({ message: "Laporan berhasil dikirim!" });
  } catch (error) {
    return NextResponse.json({ error: "Gagal menyimpan data" }, { status: 500 });
  }
}