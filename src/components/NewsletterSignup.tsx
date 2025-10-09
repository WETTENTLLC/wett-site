'use client';

import { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [lastSubmit, setLastSubmit] = useState<number>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Rate limiting: prevent spam (60 second cooldown)
    const now = Date.now();
    if (now - lastSubmit < 60000) {
      setStatus('error');
      return;
    }
    
    setStatus('loading');
    setLastSubmit(now);
    
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'xanpdbya';
    
    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="bg-wett-gold py-16 text-deep-black">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Join The Family</h2>
        <p className="mt-2">Get exclusive updates, insights, and offers delivered to your inbox.</p>
        <form className="mt-8 max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="flex items-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full p-3 rounded-l-md text-deep-black" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit" 
              className="bg-deep-black text-clean-white p-3 rounded-r-md hover:bg-gray-800 disabled:opacity-50"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
          {status === 'success' && <p className="mt-2 text-green-600">Successfully subscribed!</p>}
          {status === 'error' && <p className="mt-2 text-red-600">Failed to subscribe. Please wait a moment and try again.</p>}
        </form>
        <p className="text-sm text-center mt-4">Want to support the mission? <a href="/collective/the-wett-collective" className="text-deep-black underline font-bold">Become a Collective member</a> (pay what you want)</p>
      </div>
    </div>
  );
};

export default NewsletterSignup;
