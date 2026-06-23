import { NextResponse } from 'next/server';
import { getSheetDoc, HEADERS_KPI } from '@/lib/googleSheets';

export async function GET() {
  try {
    const doc = await getSheetDoc();
    let sheet = doc.sheetsByTitle['Data_Laporan'];
    
    if (!sheet) {
      sheet = await doc.addSheet({ title: 'Data_Laporan', headerValues: HEADERS_KPI });
    } else {
      await sheet.setHeaderRow(HEADERS_KPI);
    }

    return NextResponse.json({ message: "Sheet dan Header berhasil dibuat/diperbarui!" });
  } catch (error) {
    return NextResponse.json({ error: "Gagal setup: " + error }, { status: 500 });
  }
}