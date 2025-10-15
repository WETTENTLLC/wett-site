import { NextResponse } from 'next/server';
import { getPendingApplications } from '@/lib/db';

export async function GET() {
  try {
    const applications = await getPendingApplications();
    return NextResponse.json({ applications });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
