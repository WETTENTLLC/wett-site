import { NextResponse } from 'next/server';
import { approveApplication, createUser } from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    const { id, email, name } = await request.json();
    
    const tempPassword = Math.random().toString(36).slice(-8);
    const hashedPassword = await bcrypt.hash(tempPassword, 10);
    
    await approveApplication(id);
    await createUser(email, hashedPassword, name, 'wett-girl');
    
    await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        _subject: 'WETT Girl Approved - Login Credentials',
        _replyto: email,
        message: `Congratulations ${name}! Your WETT Girls application has been approved.\n\nLogin at: ${process.env.NEXT_PUBLIC_SITE_URL}/login\nEmail: ${email}\nTemporary Password: ${tempPassword}\n\nPlease change your password after first login.`
      })
    });
    
    return NextResponse.json({ success: true, tempPassword });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
