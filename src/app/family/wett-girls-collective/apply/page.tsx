'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function WETTGirlsApplication() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    location: '',
    instagram: '',
    experience: '',
    why: '',
    goals: '',
    availability: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    await fetch('/api/applications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        _subject: 'WETT Girls Application',
        ...formData
      })
    });

    router.push('/family/wett-girls-collective?application=submitted');
  };

  return (
    <div className="min-h-screen bg-deep-black text-clean-white py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-wett-gold mb-4">
          WETT Girls Application
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Declare your intent. Tell us your story and your vision.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-wett-gold font-semibold mb-2">Full Name *</label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              className="w-full px-4 py-3 bg-clean-white text-deep-black rounded"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-wett-gold font-semibold mb-2">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-clean-white text-deep-black rounded"
              />
            </div>
            <div>
              <label className="block text-wett-gold font-semibold mb-2">Phone *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 bg-clean-white text-deep-black rounded"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-wett-gold font-semibold mb-2">Age *</label>
              <input
                type="number"
                required
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: e.target.value})}
                className="w-full px-4 py-3 bg-clean-white text-deep-black rounded"
              />
            </div>
            <div>
              <label className="block text-wett-gold font-semibold mb-2">Location (City, State) *</label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full px-4 py-3 bg-clean-white text-deep-black rounded"
              />
            </div>
          </div>

          <div>
            <label className="block text-wett-gold font-semibold mb-2">Instagram Handle</label>
            <input
              type="text"
              value={formData.instagram}
              onChange={(e) => setFormData({...formData, instagram: e.target.value})}
              className="w-full px-4 py-3 bg-clean-white text-deep-black rounded"
              placeholder="@yourusername"
            />
          </div>

          <div>
            <label className="block text-wett-gold font-semibold mb-2">What&apos;s your experience? (modeling, dancing, content creation, business, etc.) *</label>
            <textarea
              required
              rows={4}
              value={formData.experience}
              onChange={(e) => setFormData({...formData, experience: e.target.value})}
              className="w-full px-4 py-3 bg-clean-white text-deep-black rounded"
            />
          </div>

          <div>
            <label className="block text-wett-gold font-semibold mb-2">Why do you want to join the WETT Girls Collective? *</label>
            <textarea
              required
              rows={4}
              value={formData.why}
              onChange={(e) => setFormData({...formData, why: e.target.value})}
              className="w-full px-4 py-3 bg-clean-white text-deep-black rounded"
            />
          </div>

          <div>
            <label className="block text-wett-gold font-semibold mb-2">What are your goals for the next 1-3 years? *</label>
            <textarea
              required
              rows={4}
              value={formData.goals}
              onChange={(e) => setFormData({...formData, goals: e.target.value})}
              className="w-full px-4 py-3 bg-clean-white text-deep-black rounded"
            />
          </div>

          <div>
            <label className="block text-wett-gold font-semibold mb-2">What&apos;s your availability? (full-time, part-time, weekends, etc.) *</label>
            <input
              type="text"
              required
              value={formData.availability}
              onChange={(e) => setFormData({...formData, availability: e.target.value})}
              className="w-full px-4 py-3 bg-clean-white text-deep-black rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-wett-gold text-deep-black px-8 py-4 rounded font-bold text-lg hover:bg-opacity-90 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
