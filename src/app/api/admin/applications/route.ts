import { NextResponse } from 'next/server';
import { getPendingApplications } from '@/lib/db';

export async function GET() {
  try {
    const applications = await getPendingApplications();

    return NextResponse.json({
      success: true,
      applications
    });
  } catch (error) {
    console.error('Get applications error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch applications' },
      { status: 500 }
    );
  }
}
