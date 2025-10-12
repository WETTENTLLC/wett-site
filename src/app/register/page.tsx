'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/AuthContext'
import Link from 'next/link'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const { register } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (register(name, email, password)) {
      router.push('/login')
    } else {
      setError('Email already registered')
    }
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-wett-gold text-center mb-8">Register</h1>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-clean-white mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 bg-gray-800 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-clean-white mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 bg-gray-800 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-clean-white mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 bg-gray-800 rounded"
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button type="submit" className="bg-wett-gold text-deep-black py-2 px-4 rounded hover:bg-opacity-80">
          Register
        </button>
      </form>
      <p className="text-center mt-4">
        Already have an account?{' '}
        <Link href="/login" className="text-wett-gold hover:underline">
          Login
        </Link>
      </p>
    </div>
  )
}