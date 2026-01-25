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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Form submission started', formData);
    
    try {
      const response = await fetch('https://formspree.io/f/xanpdbya', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _subject: 'WETT Girls Application',
          ...formData
        })
      });

      console.log('Response received:', response.status);
      
      if (response.ok) {
        setShowSuccess(true);
        setTimeout(() => {
          router.push('/family/wett-girls-collective?application=submitted');
        }, 4000);
      } else {
        console.error('Submission failed with status:', response.status);
        alert('❌ Submission failed. Please try again or email us directly at wettentertainmentllc@gmail.com');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('❌ Submission failed. Please try again or email us directly at wettentertainmentllc@gmail.com');
      setIsSubmitting(false);
    }
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

        {showSuccess && (
          <div className="mb-8 bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-lg shadow-2xl border-2 border-green-400 animate-pulse">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-center mb-4">✅ Application Received!</h2>
            <p className="text-xl text-center mb-2">Thank you for applying to the WETT Girls Collective.</p>
            <p className="text-lg text-center">Your application is now under review. We'll contact you within 3-5 business days.</p>
            <p className="text-sm text-center mt-4 opacity-90">Redirecting you back to the main page...</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-wett-gold font-semibold mb-2">Full Name *</label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              className="w-full px-4 py-3 bg-white text-black rounded border-2 border-gray-300 focus:border-wett-gold focus:outline-none"
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
                className="w-full px-4 py-3 bg-white text-black rounded border-2 border-gray-300 focus:border-wett-gold focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-wett-gold font-semibold mb-2">Phone *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 bg-white text-black rounded border-2 border-gray-300 focus:border-wett-gold focus:outline-none"
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
                className="w-full px-4 py-3 bg-white text-black rounded border-2 border-gray-300 focus:border-wett-gold focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-wett-gold font-semibold mb-2">Location (City, State) *</label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full px-4 py-3 bg-white text-black rounded border-2 border-gray-300 focus:border-wett-gold focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-wett-gold font-semibold mb-2">Instagram Handle</label>
            <input
              type="text"
              value={formData.instagram}
              onChange={(e) => setFormData({...formData, instagram: e.target.value})}
              className="w-full px-4 py-3 bg-white text-black rounded border-2 border-gray-300 focus:border-wett-gold focus:outline-none"
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
              className="w-full px-4 py-3 bg-white text-black rounded border-2 border-gray-300 focus:border-wett-gold focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-wett-gold font-semibold mb-2">Why do you want to join the WETT Girls Collective? *</label>
            <textarea
              required
              rows={4}
              value={formData.why}
              onChange={(e) => setFormData({...formData, why: e.target.value})}
              className="w-full px-4 py-3 bg-white text-black rounded border-2 border-gray-300 focus:border-wett-gold focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-wett-gold font-semibold mb-2">What are your goals for the next 1-3 years? *</label>
            <textarea
              required
              rows={4}
              value={formData.goals}
              onChange={(e) => setFormData({...formData, goals: e.target.value})}
              className="w-full px-4 py-3 bg-white text-black rounded border-2 border-gray-300 focus:border-wett-gold focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-wett-gold font-semibold mb-2">What&apos;s your availability? (full-time, part-time, weekends, etc.) *</label>
            <input
              type="text"
              required
              value={formData.availability}
              onChange={(e) => setFormData({...formData, availability: e.target.value})}
              className="w-full px-4 py-3 bg-white text-black rounded border-2 border-gray-300 focus:border-wett-gold focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 active:scale-95 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-3">
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting Application...
              </span>
            ) : (
              'Submit Application'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
