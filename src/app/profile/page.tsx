'use client'

import { useAuth } from '@/lib/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ProfilePage() {
  const { user } = useAuth()
  const router = useRouter()
  const [showPasswordChange, setShowPasswordChange] = useState(false)
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })
  const [passwordMessage, setPasswordMessage] = useState('')
  const [passwordError, setPasswordError] = useState('')

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault()
    setPasswordError('')
    setPasswordMessage('')

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordError('New passwords do not match')
      return
    }

    if (passwordData.newPassword.length < 8) {
      setPasswordError('Password must be at least 8 characters')
      return
    }

    try {
      const response = await fetch('/api/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: user?.email,
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword
        })
      })

      const data = await response.json()

      if (response.ok) {
        setPasswordMessage('✅ Password changed successfully!')
        setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' })
        setTimeout(() => {
          setShowPasswordChange(false)
          setPasswordMessage('')
        }, 2000)
      } else {
        setPasswordError(data.error || 'Failed to change password')
      }
    } catch (error) {
      setPasswordError('Failed to change password. Please try again.')
    }
  }

  if (!user) {
    return <p>Loading...</p>
  }

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-wett-gold">Welcome, {user?.name || 'Member'}!</h1>
            <p className="text-lg text-gray-400">Your personal dashboard.</p>
          </div>
          <button 
            onClick={() => setShowPasswordChange(!showPasswordChange)}
            className="mt-4 sm:mt-0 bg-wett-gold text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
          >
            {showPasswordChange ? 'Cancel' : 'Change Password'}
          </button>
        </div>

        {/* Password Change Form */}
        {showPasswordChange && (
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Change Password</h2>
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Current Password</label>
                <input
                  type="password"
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                  className="w-full p-3 bg-gray-700 text-white rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">New Password</label>
                <input
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                  className="w-full p-3 bg-gray-700 text-white rounded"
                  required
                  minLength={8}
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Confirm New Password</label>
                <input
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                  className="w-full p-3 bg-gray-700 text-white rounded"
                  required
                  minLength={8}
                />
              </div>
              {passwordError && (
                <p className="text-red-500 font-semibold">{passwordError}</p>
              )}
              {passwordMessage && (
                <p className="text-green-500 font-semibold">{passwordMessage}</p>
              )}
              <button 
                type="submit"
                className="bg-wett-gold text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-400 transition duration-300"
              >
                Update Password
              </button>
            </form>
          </div>
        )}

        {/* Profile Information Card */}
        <div className="bg-gray-800 shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Your Information</h2>
          <div className="space-y-2">
            <p><strong>Name:</strong> {user?.name}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Membership Tier:</strong> <span className="font-bold text-wett-gold">Community Tier</span></p>
          </div>
        </div>

        {/* Exclusive Content Card */}
        <div className="bg-gray-800 shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Exclusive Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="/blueprint/group-economics-mastery" className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition duration-300">
              <h3 className="font-bold text-wett-gold">Group Economics Mastery</h3>
              <p className="text-sm text-gray-300">Access your courses and financial templates.</p>
            </a>
            <a href="/family/members" className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition duration-300">
              <h3 className="font-bold text-wett-gold">Community Forums</h3>
              <p className="text-sm text-gray-300">Connect with other WETT family members.</p>
            </a>
            <a href="/blueprint/business-incubation" className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition duration-300">
              <h3 className="font-bold text-wett-gold">Business Incubator</h3>
              <p className="text-sm text-gray-300">Get startup guides and mentorship (Business Tier).</p>
            </a>
          </div>
        </div>
        
        {/* Member Resources Card */}
        <div className="bg-gray-800 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Member Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="/family/members" className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition duration-300">
              <h3 className="font-bold text-wett-gold">Member Directory</h3>
              <p className="text-sm text-gray-300">Find and connect with other members.</p>
            </a>
            <a href="#" className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition duration-300">
              <h3 className="font-bold text-wett-gold">Resource Matchmaking (AI)</h3>
              <p className="text-sm text-gray-300">Coming soon: Get matched with resources you need.</p>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
