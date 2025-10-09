'use client'

import { useState } from 'react'
import PayPalButton from '@/components/PayPalButton'

export default function WettLifestyleFlagship() {
  const [showDonation, setShowDonation] = useState(false)
  const [donationAmount, setDonationAmount] = useState('')
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time')

  const goal = 500000
  const raised = 45000
  const percentage = (raised / goal) * 100
  const contributors = 127

  const handleDonationSuccess = () => {
    alert('Thank you for investing in the WETT Lifestyle Flagship! You\'ll receive updates on our progress.')
    setShowDonation(false)
    setDonationAmount('')
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-5xl font-bold text-wett-gold mb-4 text-center">WETT Lifestyle Flagship</h1>
      <p className="text-2xl text-gray-300 mb-4 text-center">15,000 sq ft of Pure Excellence</p>
      <p className="text-xl text-wett-gold mb-12 text-center italic">The Final Destination - Where the Empire Comes Home</p>
      
      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-6 text-center">Building the Dream</h2>
        <p className="text-xl text-gray-300 mb-8 text-center">The WETT Lifestyle Flagship store represents the culmination of our vision - a 15,000 square foot destination for culture, commerce, and community.</p>
        
        <div className="bg-black/50 p-6 rounded-lg mb-6">
          <div className="flex justify-between items-center mb-3">
            <div>
              <span className="text-white font-bold text-lg">Community Investment Progress</span>
              <p className="text-sm text-gray-400">{contributors} contributors and counting</p>
            </div>
            <span className="text-wett-gold font-bold text-2xl">${raised.toLocaleString()} / ${goal.toLocaleString()}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-8 mb-3 relative overflow-hidden">
            <div className="bg-gradient-to-r from-wett-gold to-yellow-500 h-8 rounded-full transition-all duration-500 flex items-center justify-end pr-3" style={{ width: `${percentage}%` }}>
              <span className="text-black font-bold text-sm">{percentage.toFixed(1)}%</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <div className="text-wett-gold font-bold">${(goal - raised).toLocaleString()}</div>
              <div className="text-gray-400">Remaining</div>
            </div>
            <div>
              <div className="text-wett-gold font-bold">{Math.ceil((goal - raised) / 100)}</div>
              <div className="text-gray-400">$100 donations needed</div>
            </div>
            <div>
              <div className="text-wett-gold font-bold">2026</div>
              <div className="text-gray-400">Target opening</div>
            </div>
          </div>
        </div>

        <div className="text-center mb-6">
          {!showDonation ? (
            <div>
              <button onClick={() => setShowDonation(true)} className="bg-wett-gold text-black px-10 py-4 rounded-lg font-bold text-xl hover:bg-yellow-400 transition shadow-lg">
                Invest in the Flagship
              </button>
              <p className="text-sm text-gray-400 mt-3">All contributors receive exclusive updates and early access benefits</p>
            </div>
          ) : (
            <div className="bg-gray-700 p-6 rounded-lg max-w-lg mx-auto border-2 border-wett-gold">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-white text-xl">Invest in the Vision</h3>
                <button onClick={() => setShowDonation(false)} className="text-gray-400 hover:text-white text-2xl">×</button>
              </div>
              
              <div className="mb-4">
                <div className="flex gap-2 mb-4">
                  <button onClick={() => setDonationType('one-time')} className={`flex-1 py-2 rounded ${donationType === 'one-time' ? 'bg-wett-gold text-black' : 'bg-gray-600 text-white'}`}>One-Time</button>
                  <button onClick={() => setDonationType('monthly')} className={`flex-1 py-2 rounded ${donationType === 'monthly' ? 'bg-wett-gold text-black' : 'bg-gray-600 text-white'}`}>Monthly</button>
                </div>
                
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <button onClick={() => setDonationAmount('25')} className="bg-gray-600 hover:bg-gray-500 text-white py-3 rounded font-bold">$25</button>
                  <button onClick={() => setDonationAmount('100')} className="bg-gray-600 hover:bg-gray-500 text-white py-3 rounded font-bold">$100</button>
                  <button onClick={() => setDonationAmount('500')} className="bg-gray-600 hover:bg-gray-500 text-white py-3 rounded font-bold">$500</button>
                </div>
                
                <input 
                  type="number" 
                  value={donationAmount} 
                  onChange={(e) => setDonationAmount(e.target.value)}
                  placeholder="Or enter custom amount"
                  className="w-full bg-gray-600 text-white p-3 rounded mb-2"
                  min="1"
                />
                <p className="text-xs text-gray-400">Suggested: $100 (brings us 0.02% closer to goal)</p>
              </div>
              
              {donationAmount && parseFloat(donationAmount) > 0 && (
                <div>
                  <div className="bg-gray-800 p-3 rounded mb-3 text-sm">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Your contribution:</span>
                      <span className="text-white font-bold">${donationAmount}{donationType === 'monthly' ? '/mo' : ''}</span>
                    </div>
                    {donationType === 'monthly' && (
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Annual impact:</span>
                        <span>${(parseFloat(donationAmount) * 12).toFixed(2)}</span>
                      </div>
                    )}
                  </div>
                  <PayPalButton 
                    amount={donationAmount}
                    description={`WETT Lifestyle Flagship ${donationType === 'monthly' ? 'Monthly ' : ''}Investment`}
                    onSuccess={handleDonationSuccess}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-wett-gold mb-6 text-center">The Journey to 15,000 sq ft</h2>
        <div className="relative">
          <div className="flex justify-between items-center mb-8">
            <div className="text-center flex-1">
              <div className="w-16 h-16 bg-wett-gold rounded-full flex items-center justify-center mx-auto mb-2 text-black font-bold text-xl">1</div>
              <div className="font-bold text-white mb-1">Foundation</div>
              <div className="text-sm text-gray-400">$0 - $100K</div>
              <div className="text-xs text-wett-gold mt-1">✓ Complete</div>
            </div>
            <div className="flex-1 h-1 bg-wett-gold"></div>
            <div className="text-center flex-1">
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold text-xl border-2 border-wett-gold">2</div>
              <div className="font-bold text-white mb-1">Planning</div>
              <div className="text-sm text-gray-400">$100K - $250K</div>
              <div className="text-xs text-gray-500 mt-1">In Progress</div>
            </div>
            <div className="flex-1 h-1 bg-gray-600"></div>
            <div className="text-center flex-1">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold text-xl">3</div>
              <div className="font-bold text-white mb-1">Construction</div>
              <div className="text-sm text-gray-400">$250K - $400K</div>
              <div className="text-xs text-gray-500 mt-1">Upcoming</div>
            </div>
            <div className="flex-1 h-1 bg-gray-600"></div>
            <div className="text-center flex-1">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold text-xl">4</div>
              <div className="font-bold text-white mb-1">Grand Opening</div>
              <div className="text-sm text-gray-400">$400K - $500K</div>
              <div className="text-xs text-gray-500 mt-1">2026</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-wett-gold mb-4">What the Flagship Will Feature</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="font-bold text-white mb-2">👕 WETT Apparel</h3>
            <p className="text-sm text-gray-300">Exclusive clothing and merchandise</p>
          </div>
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="font-bold text-white mb-2">💎 Custom Grills</h3>
            <p className="text-sm text-gray-300">Gold grills and jewelry</p>
          </div>
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="font-bold text-white mb-2">🎵 Music Studio</h3>
            <p className="text-sm text-gray-300">Recording and production space</p>
          </div>
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="font-bold text-white mb-2">🎯 Event Space</h3>
            <p className="text-sm text-gray-300">Community gatherings and showcases</p>
          </div>
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="font-bold text-white mb-2">📚 The Guild</h3>
            <p className="text-sm text-gray-300">Business education center</p>
          </div>
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="font-bold text-white mb-2">🎪 WETT Studios</h3>
            <p className="text-sm text-gray-300">Fitness and dance classes</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-wett-gold mb-4">Investor Benefits - What You Get</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="font-bold text-wett-gold mb-3">All Contributors Receive:</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>✓ Monthly progress updates and behind-the-scenes access</li>
              <li>✓ Name on the Founders Wall (donations $100+)</li>
              <li>✓ Exclusive pre-opening tour invitation</li>
              <li>✓ 10% lifetime discount at the Flagship</li>
            </ul>
          </div>
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="font-bold text-wett-gold mb-3">Major Investors ($1,000+):</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>✓ All standard benefits PLUS</li>
              <li>✓ VIP opening night access with Bay&apos;Hef</li>
              <li>✓ Quarterly investment opportunity briefings</li>
              <li>✓ Priority booking for event space</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg text-center border-2 border-wett-gold">
        <h2 className="text-3xl font-bold text-wett-gold mb-4">This Is More Than a Store</h2>
        <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">It&apos;s the physical embodiment of &quot;We Thrive Together.&quot; A place where the WETT family can gather, create, learn, and build. Where group economics becomes tangible. Where the empire has a home.</p>
        <p className="text-2xl text-wett-gold italic mb-8">&quot;The Final Destination - Where We All Eat&quot;</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button onClick={() => setShowDonation(true)} className="bg-wett-gold text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition">Invest Now</button>
          <a href="/collective" className="border-2 border-wett-gold text-wett-gold px-8 py-4 rounded-lg font-bold text-lg hover:bg-wett-gold hover:text-black transition">Join The Collective</a>
        </div>
      </div>
    </div>
  );
}
