import { NextResponse } from 'next/server';
import { createUser, enrollUserInCourse } from '@/lib/db';
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
    const { name, email } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Generate a random password
    const plainPassword = generatePassword();
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    // Create the user
    const user = await createUser(email, hashedPassword, name, 'wett-girl');

    // Automatically enroll in The WETT Doctrine
    await enrollUserInCourse(user.id, 'wett-doctrine');

    return NextResponse.json({
      success: true,
      email: user.email,
      password: plainPassword, // Return plain password to show admin (only time it's visible)
      message: 'User created successfully'
    });
  } catch (error: unknown) {
    console.error('Create user error:', error);
    
    if (error instanceof Error && error.message && error.message.includes('duplicate key')) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
}
