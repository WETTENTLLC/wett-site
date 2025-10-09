import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { name, email, password } = await request.json()

  // In a real application, you would save the user to a database.
  // For now, we'll just log the details.
  console.log('New user registered:', { name, email, password })

  return NextResponse.json({ message: 'User registered successfully' })
}
