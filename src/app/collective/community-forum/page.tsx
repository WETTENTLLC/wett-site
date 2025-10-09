'use client';

import { useState } from 'react';

const categories = [
  { id: 'group-economics', name: 'Group Economics', icon: '💰', description: 'Strategies for collective wealth building' },
  { id: 'business-tips', name: 'Business Tips', icon: '📈', description: 'Entrepreneurship and business growth' },
  { id: 'lifestyle', name: 'Lifestyle & Wellness', icon: '✨', description: 'Health, fitness, and personal development' },
  { id: 'success-stories', name: 'Success Stories', icon: '🏆', description: 'Celebrate wins and share victories' },
  { id: 'questions', name: 'Questions & Support', icon: '❓', description: 'Ask the community for help' },
  { id: 'events', name: 'Events & Meetups', icon: '📅', description: 'Upcoming gatherings and networking' }
];

export default function CommunityForumPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showNewPost, setShowNewPost] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', title: '', content: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        _subject: `Forum Post: ${selectedCategory} - ${formData.title}`,
        category: categories.find(c => c.id === selectedCategory)?.name,
        ...formData
      })
    });

    alert('Post submitted! We\'ll review and add it to the forum.');
    setFormData({ name: '', email: '', title: '', content: '' });
    setShowNewPost(false);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-wett-gold mb-4 text-center">Community Forum</h1>
      <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
        Connect with the WETT community. Share knowledge, ask questions, and build together.
      </p>

      {!selectedCategory ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className="bg-gray-800 p-8 rounded-lg border-2 border-gray-700 hover:border-wett-gold transition text-left"
            >
              <div className="text-5xl mb-4">{cat.icon}</div>
              <h2 className="text-2xl font-bold text-white mb-2">{cat.name}</h2>
              <p className="text-gray-400">{cat.description}</p>
            </button>
          ))}
        </div>
      ) : (
        <div>
          <button
            onClick={() => { setSelectedCategory(null); setShowNewPost(false); }}
            className="mb-6 text-wett-gold hover:underline"
          >
            ← Back to Categories
          </button>

          <div className="bg-gray-800 p-8 rounded-lg mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <span className="text-5xl">{categories.find(c => c.id === selectedCategory)?.icon}</span>
                <div>
                  <h2 className="text-3xl font-bold text-wett-gold">{categories.find(c => c.id === selectedCategory)?.name}</h2>
                  <p className="text-gray-400">{categories.find(c => c.id === selectedCategory)?.description}</p>
                </div>
              </div>
              <button
                onClick={() => setShowNewPost(!showNewPost)}
                className="bg-wett-gold text-black px-6 py-3 rounded font-bold hover:bg-yellow-400 transition"
              >
                {showNewPost ? 'Cancel' : '+ New Post'}
              </button>
            </div>

            {showNewPost && (
              <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Create New Post</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-2 bg-gray-800 text-white rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-2 bg-gray-800 text-white rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Post Title *</label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      className="w-full px-4 py-2 bg-gray-800 text-white rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Content *</label>
                    <textarea
                      required
                      rows={6}
                      value={formData.content}
                      onChange={(e) => setFormData({...formData, content: e.target.value})}
                      className="w-full px-4 py-2 bg-gray-800 text-white rounded"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-wett-gold text-black px-6 py-3 rounded font-bold hover:bg-yellow-400 transition"
                  >
                    Submit Post
                  </button>
                </div>
              </form>
            )}

            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <p className="text-gray-400 mb-4">Forum posts are currently moderated. Submit your post above and we'll add it to the community.</p>
              <p className="text-sm text-gray-500">Coming soon: Real-time discussions and comments</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
