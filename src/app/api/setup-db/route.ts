import { NextResponse } from 'next/server';
import { createTables } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await createTables();
    return NextResponse.json({ message: 'Database tables created successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
