'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import PayWhatYouWant from '@/components/PayWhatYouWant'

export default function WettGirlsCollectivePage() {
  const { data: session } = useSession()

  const groupGoal = 10000
  const currentProgress = 3450
  const percentage = (currentProgress / groupGoal) * 100
  const activeGirls = 23



  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-5xl font-bold text-wett-gold mb-4 text-center">WETT Girls Collective</h1>
      <p className="text-2xl text-gray-300 mb-12 text-center">The Engine of the Empire - Models, Dancers, Singers, Teachers, Influencers</p>
      
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg mb-8 border-2 border-wett-gold">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">Who We Are</h2>
        <p className="text-xl text-gray-300 mb-6">The WETT Girls are the sisters who signed up to represent the brand, have each other&apos;s backs, and drive the engine of WETT. These are the women who help build the empire - putting hard-earned money back into the collective to create residual income and a security blanket for all WETT Girls.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-700 p-6 rounded text-center">
            <div className="text-4xl mb-2">💃</div>
            <h3 className="font-bold text-white">Dancers</h3>
          </div>
          <div className="bg-gray-700 p-6 rounded text-center">
            <div className="text-4xl mb-2">📸</div>
            <h3 className="font-bold text-white">Models</h3>
          </div>
          <div className="bg-gray-700 p-6 rounded text-center">
            <div className="text-4xl mb-2">🎤</div>
            <h3 className="font-bold text-white">Singers</h3>
          </div>
          <div className="bg-gray-700 p-6 rounded text-center">
            <div className="text-4xl mb-2">💪</div>
            <h3 className="font-bold text-white">Influencers</h3>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-6 text-center">🌊 WETT TIDES - Collective Contributions</h2>
        <p className="text-lg text-gray-300 mb-6 text-center">WETT TIDES is our in-house contribution system. Every WETT Girl sets daily, weekly, or monthly goals to contribute to the collective. When 100s or 1000s of WETT Girls do the same thing, the brand becomes wealthy and creates residual income for everyone.</p>
        
        <div className="bg-black/50 p-6 rounded-lg mb-6">
          <div className="flex justify-between items-center mb-3">
            <div>
              <span className="text-white font-bold text-lg">Current Group Goal</span>
              <p className="text-sm text-gray-400">{activeGirls} active contributors</p>
            </div>
            <span className="text-wett-gold font-bold text-2xl">${currentProgress.toLocaleString()} / ${groupGoal.toLocaleString()}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-8 mb-3">
            <div className="bg-gradient-to-r from-wett-gold to-yellow-500 h-8 rounded-full transition-all duration-500 flex items-center justify-end pr-3" style={{ width: `${percentage}%` }}>
              <span className="text-black font-bold text-sm">{percentage.toFixed(1)}%</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <div className="text-wett-gold font-bold">${(currentProgress / activeGirls).toFixed(2)}</div>
              <div className="text-gray-400">Avg per girl</div>
            </div>
            <div>
              <div className="text-wett-gold font-bold">${(groupGoal - currentProgress).toLocaleString()}</div>
              <div className="text-gray-400">To goal</div>
            </div>
            <div>
              <div className="text-wett-gold font-bold">This Month</div>
              <div className="text-gray-400">Goal period</div>
            </div>
          </div>
        </div>

        {session ? (
          <div className="text-center">
            <PayWhatYouWant 
              title="WETT TIDES Contribution"
              description="Daily: $10-$25 | Weekly: $25-$100 | Monthly: $50-$200. Set your own contribution amount."
              suggestedAmounts={[10, 50, 100]}
              minAmount={5}
              onSuccess={() => alert('WETT TIDES contribution received! Thank you for building the empire.')}
            />
          </div>
        ) : (
          <div className="text-center bg-gray-700 p-6 rounded border-2 border-wett-gold">
            <p className="text-gray-300 mb-4">Login to make WETT TIDES contributions</p>
            <Link href="/login" className="bg-wett-gold text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition inline-block">Sign In</Link>
          </div>
        )}
      </div>

      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-wett-gold mb-6">The Power of Group Economics</h2>
        <p className="text-gray-300 mb-6">When everyone contributes, the collective becomes unstoppable. This is how we build wealth, security, and legacy together.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="font-bold text-wett-gold mb-3">100 Girls @ $50/week</h3>
            <div className="text-3xl font-bold text-white mb-2">$260K</div>
            <p className="text-sm text-gray-400">Annual collective power</p>
          </div>
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="font-bold text-wett-gold mb-3">500 Girls @ $50/week</h3>
            <div className="text-3xl font-bold text-white mb-2">$1.3M</div>
            <p className="text-sm text-gray-400">Annual collective power</p>
          </div>
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="font-bold text-wett-gold mb-3">1000 Girls @ $50/week</h3>
            <div className="text-3xl font-bold text-white mb-2">$2.6M</div>
            <p className="text-sm text-gray-400">Annual collective power</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-wett-gold mb-6">Become a WETT Girl</h2>
        <p className="text-gray-300 mb-6">Ready to join the collective? Complete our course, learn about WETT, and connect with your sisters.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-6 rounded">
            <div className="text-4xl mb-3 text-center">📝</div>
            <h3 className="font-bold text-white mb-2 text-center">Step 1: Apply</h3>
            <p className="text-sm text-gray-300 text-center mb-4">Fill out the application form</p>
            <a href="mailto:wettentertainmentllc@gmail.com?subject=WETT GIRL APPLICATION" className="block bg-wett-gold text-black px-4 py-2 rounded font-bold text-center hover:bg-yellow-400 transition">Apply Now</a>
          </div>
          <div className="bg-gray-700 p-6 rounded">
            <div className="text-4xl mb-3 text-center">🎓</div>
            <h3 className="font-bold text-white mb-2 text-center">Step 2: Learn</h3>
            <p className="text-sm text-gray-300 text-center mb-4">Complete the WETT Girl course</p>
            <button className="w-full bg-gray-600 text-white px-4 py-2 rounded font-bold hover:bg-gray-500 transition">Start Course</button>
          </div>
          <div className="bg-gray-700 p-6 rounded">
            <div className="text-4xl mb-3 text-center">🤝</div>
            <h3 className="font-bold text-white mb-2 text-center">Step 3: Connect</h3>
            <p className="text-sm text-gray-300 text-center mb-4">Join the collective community</p>
            <Link href="/family/members" className="block bg-gray-600 text-white px-4 py-2 rounded font-bold text-center hover:bg-gray-500 transition">Community</Link>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg text-center border-2 border-wett-gold">
        <h2 className="text-3xl font-bold text-wett-gold mb-4">It&apos;s Never About I - It&apos;s About the Team</h2>
        <p className="text-xl text-gray-300 mb-6">Like an NFL team, we win together. WETT Girls work around the clock to improve the brand, come up with new ways to show it, and pull resources together to do bigger things.</p>
        <p className="text-2xl text-wett-gold italic">&quot;We Thrive Together&quot;</p>
      </div>
    </div>
  );
}
