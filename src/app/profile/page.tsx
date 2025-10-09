'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function ProfilePage() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  if (status === 'unauthenticated') {
    redirect('/login')
  }

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-wett-gold">Welcome, {session?.user?.name || 'Member'}!</h1>
            <p className="text-lg text-gray-400">Your personal dashboard.</p>
          </div>
          <button className="mt-4 sm:mt-0 bg-wett-gold text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300">
            Edit Profile
          </button>
        </div>

        {/* Profile Information Card */}
        <div className="bg-gray-800 shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Your Information</h2>
          <div className="space-y-2">
            <p><strong>Name:</strong> {session?.user?.name}</p>
            <p><strong>Email:</strong> {session?.user?.email}</p>
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
