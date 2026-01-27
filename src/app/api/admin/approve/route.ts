import { NextResponse } from 'next/server';
import { approveApplication, createUser, enrollUserInCourse } from '@/lib/db';
import bcrypt from 'bcryptjs';

function generatePassword(length = 12): string {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
}

export async function POST(request: Request) {
  try {
    const { id, email, name } = await request.json();

    if (!id || !email || !name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generate password
    const plainPassword = generatePassword();
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    // Create user account
    const user = await createUser(email, hashedPassword, name, 'wett-girl');

    // Enroll in The WETT Doctrine
    await enrollUserInCourse(user.id, 'wett-doctrine');

    // Mark application as approved
    await approveApplication(id);

    return NextResponse.json({
      success: true,
      password: plainPassword,
      message: 'Application approved and user created'
    });
  } catch (error) {
    console.error('Approve application error:', error);
    return NextResponse.json(
      { error: 'Failed to approve application' },
      { status: 500 }
    );
  }
}
