import { NextResponse } from 'next/server';
import { saveApplication } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const application = await saveApplication(data);
    return NextResponse.json({ success: true, application });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
