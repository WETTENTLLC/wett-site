'use client'

import { useAuth } from '@/lib/AuthContext'
import { useState } from 'react'
import Link from 'next/link'

export default function MembersPage() {
  const { user } = useAuth()
  const [showNewPost, setShowNewPost] = useState(false)
  const [selectedForum, setSelectedForum] = useState('')
  const [postTitle, setPostTitle] = useState('')
  const [postContent, setPostContent] = useState('')

  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault()
    // Post submission logic here
    alert('Post submitted successfully!')
    setShowNewPost(false)
    setPostTitle('')
    setPostContent('')
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-4xl font-bold text-wett-gold mb-2">Community Forums & Member Directory</h1>
          <p className="text-lg text-gray-300">Connect with other WETT family members and build together.</p>
        </div>
        {user ? (
          <button onClick={() => setShowNewPost(true)} className="bg-wett-gold text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition">
            + New Post
          </button>
        ) : (
          <Link href="/login" className="bg-gray-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-600 transition">
            Login to Post
          </Link>
        )}
      </div>

      {showNewPost && (
        <div className="bg-gray-800 p-6 rounded-lg mb-8 border-2 border-wett-gold">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-wett-gold">Create New Post</h2>
            <button onClick={() => setShowNewPost(false)} className="text-gray-400 hover:text-white">✕</button>
          </div>
          <form onSubmit={handleSubmitPost} className="space-y-4">
            <div>
              <label className="block text-white mb-2">Select Forum</label>
              <select value={selectedForum} onChange={(e) => setSelectedForum(e.target.value)} className="w-full bg-gray-700 text-white p-3 rounded" required>
                <option value="">Choose a forum...</option>
                <option value="general">General Discussion</option>
                <option value="business">Business & Entrepreneurship</option>
                <option value="economics">Group Economics</option>
                <option value="success">Success Stories</option>
                <option value="events">Events & Meetups</option>
              </select>
            </div>
            <div>
              <label className="block text-white mb-2">Title</label>
              <input type="text" value={postTitle} onChange={(e) => setPostTitle(e.target.value)} className="w-full bg-gray-700 text-white p-3 rounded" placeholder="Post title..." required maxLength={100} />
            </div>
            <div>
              <label className="block text-white mb-2">Content</label>
              <textarea value={postContent} onChange={(e) => setPostContent(e.target.value)} className="w-full bg-gray-700 text-white p-3 rounded h-32" placeholder="Share your thoughts..." required maxLength={2000} />
              <p className="text-xs text-gray-400 mt-1">{postContent.length}/2000 characters</p>
            </div>
            <div className="flex gap-3">
              <button type="submit" className="bg-wett-gold text-black px-6 py-2 rounded font-bold hover:bg-yellow-400 transition">Post</button>
              <button type="button" onClick={() => setShowNewPost(false)} className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-600 transition">Cancel</button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold text-wett-gold mb-4">📜 Community Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
          <div>
            <h3 className="font-bold text-white mb-2">✅ Encouraged Topics:</h3>
            <ul className="space-y-1">
              <li>• Group economics & wealth building</li>
              <li>• Business strategies & entrepreneurship</li>
              <li>• Polygyny philosophy & family structure</li>
              <li>• Music, media, and creative ventures</li>
              <li>• WETT empire updates & opportunities</li>
              <li>• Success stories & wins</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">❌ Not Allowed:</h3>
            <ul className="space-y-1">
              <li>• Disrespectful or childish behavior</li>
              <li>• Personal attacks or drama</li>
              <li>• Spam or self-promotion (without value)</li>
              <li>• Off-topic discussions</li>
              <li>• Negativity without constructive feedback</li>
              <li>• Sharing private family business publicly</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-4">Violations may result in post removal or account suspension. We thrive together through respect.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-wett-gold mb-4">💬 Community Forums</h2>
            {!user && (
              <div className="bg-gray-700 p-4 rounded mb-4 text-center">
                <p className="text-gray-300 mb-2">Login to view full discussions and post</p>
                <Link href="/login" className="text-wett-gold hover:underline">Sign in now →</Link>
              </div>
            )}
            <div className="space-y-3">
              <div className="bg-gray-700 p-4 rounded hover:bg-gray-600 transition cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-white">General Discussion</h3>
                  <span className="text-sm text-wett-gold">234 posts</span>
                </div>
                <p className="text-sm text-gray-300 mb-2">Talk about anything WETT related</p>
                {user && (
                  <div className="text-xs text-gray-400">
                    <span>Latest: &quot;New member intro&quot; by Marcus J. - 2h ago</span>
                  </div>
                )}
              </div>
              <div className="bg-gray-700 p-4 rounded hover:bg-gray-600 transition cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-white">Business & Entrepreneurship</h3>
                  <span className="text-sm text-wett-gold">189 posts</span>
                </div>
                <p className="text-sm text-gray-300 mb-2">Share business ideas and get feedback</p>
                {user && (
                  <div className="text-xs text-gray-400">
                    <span>Latest: &quot;Scaling my consulting biz&quot; by Sarah M. - 5h ago</span>
                  </div>
                )}
              </div>
              <div className="bg-gray-700 p-4 rounded hover:bg-gray-600 transition cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-white">Group Economics</h3>
                  <span className="text-sm text-wett-gold">156 posts</span>
                </div>
                <p className="text-sm text-gray-300 mb-2">Discuss collective wealth building strategies</p>
                {user && (
                  <div className="text-xs text-gray-400">
                    <span>Latest: &quot;Investment pool update&quot; by Alex R. - 1d ago</span>
                  </div>
                )}
              </div>
              <div className="bg-gray-700 p-4 rounded hover:bg-gray-600 transition cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-white">Success Stories</h3>
                  <span className="text-sm text-wett-gold">92 posts</span>
                </div>
                <p className="text-sm text-gray-300 mb-2">Celebrate wins and inspire the family</p>
                {user && (
                  <div className="text-xs text-gray-400">
                    <span>Latest: &quot;Hit $10K MRR!&quot; by Jordan L. - 3d ago</span>
                  </div>
                )}
              </div>
              <div className="bg-gray-700 p-4 rounded hover:bg-gray-600 transition cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-white">Events & Meetups</h3>
                  <span className="text-sm text-wett-gold">67 posts</span>
                </div>
                <p className="text-sm text-gray-300 mb-2">Coordinate local gatherings and events</p>
                {user && (
                  <div className="text-xs text-gray-400">
                    <span>Latest: &quot;Oakland meetup Feb 15&quot; by Lisa W. - 1w ago</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-wett-gold mb-4">👥 Member Directory</h2>
            <div className="mb-4">
              <input type="text" placeholder="Search members..." className="w-full bg-gray-700 text-white p-3 rounded" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-700 p-4 rounded">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-wett-gold rounded-full flex items-center justify-center text-black font-bold">JD</div>
                  <div>
                    <h3 className="font-bold text-white">John Doe</h3>
                    <p className="text-sm text-gray-400">Oakland, CA</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300">Entrepreneur | Real Estate</p>
              </div>
              <div className="bg-gray-700 p-4 rounded">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-wett-gold rounded-full flex items-center justify-center text-black font-bold">SM</div>
                  <div>
                    <h3 className="font-bold text-white">Sarah Miller</h3>
                    <p className="text-sm text-gray-400">Reno, NV</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300">Business Coach | Mentor</p>
              </div>
              <div className="bg-gray-700 p-4 rounded">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-wett-gold rounded-full flex items-center justify-center text-black font-bold">MJ</div>
                  <div>
                    <h3 className="font-bold text-white">Marcus Johnson</h3>
                    <p className="text-sm text-gray-400">Los Angeles, CA</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300">Music Producer | Artist</p>
              </div>
              <div className="bg-gray-700 p-4 rounded">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-wett-gold rounded-full flex items-center justify-center text-black font-bold">LW</div>
                  <div>
                    <h3 className="font-bold text-white">Lisa Washington</h3>
                    <p className="text-sm text-gray-400">San Francisco, CA</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300">Tech Founder | Investor</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold text-wett-gold mb-4">📊 Community Stats</h2>
            <div className="space-y-3">
              <div>
                <div className="text-2xl font-bold text-white">1,247</div>
                <div className="text-sm text-gray-400">Total Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">89</div>
                <div className="text-sm text-gray-400">Active Today</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">738</div>
                <div className="text-sm text-gray-400">Forum Posts</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-wett-gold mb-4">⭐ Top Contributors</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-wett-gold rounded-full flex items-center justify-center text-black font-bold text-sm">1</div>
                <div>
                  <div className="font-bold text-white text-sm">Alex Rivera</div>
                  <div className="text-xs text-gray-400">156 posts</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <div className="font-bold text-white text-sm">Jordan Lee</div>
                  <div className="text-xs text-gray-400">142 posts</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <div className="font-bold text-white text-sm">Taylor Brooks</div>
                  <div className="text-xs text-gray-400">128 posts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
