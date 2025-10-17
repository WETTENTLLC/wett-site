import { NextResponse } from 'next/server';
import { createUser } from '@/lib/db';
import bcrypt from 'bcryptjs';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json();
    
    const tempPassword = Math.random().toString(36).slice(-8);
    const hashedPassword = await bcrypt.hash(tempPassword, 10);
    
    await createUser(email, hashedPassword, name, 'wett-girl');
    
    return NextResponse.json({ 
      success: true, 
      email,
      password: tempPassword,
      message: `Account created for ${name}` 
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
