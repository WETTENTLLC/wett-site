'use client'

import { useAuth } from '@/lib/AuthContext'
import Link from 'next/link'
import PayWhatYouWant from '@/components/PayWhatYouWant'

export default function WettGirlsCollectivePage() {
  const { user } = useAuth()

  const groupGoal = 10000
  const currentProgress = 0
  const percentage = (currentProgress / groupGoal) * 100
  const activeGirls = 1



  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-5xl font-bold text-wett-gold mb-4 text-center">WETT Girls Collective: The Sisterhood of Legacy Builders</h1>
      <p className="text-3xl text-wett-gold mb-4 text-center font-bold">More Than a Collective. Your Dynasty Awaits.</p>
      <p className="text-xl text-gray-300 mb-12 text-center max-w-4xl mx-auto">This isn&apos;t just about representation. This is about ownership. The WETT Girls are the executive architects of our empire—models, CEOs, artists, and visionaries who have chosen to build their security, wealth, and legacy together.</p>
      
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg mb-8 border-2 border-wett-gold">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">💎 The WETT Difference: Your Hustle, Multiplied.</h2>
        <p className="text-xl text-gray-300 mb-6">You&apos;re already a powerhouse—a hustler, a graduate, a creator, a survivor. But going it alone has a ceiling. We shattered that ceiling. Here, your individual drive is amplified by the collective power of your sisters. We don&apos;t just have each other&apos;s backs; we build each other&apos;s foundations.</p>
        
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
        <h2 className="text-3xl font-bold text-wett-gold mb-6 text-center">🌊 WETT TIDES: The Financial Engine of Our Sisterhood</h2>
        <p className="text-xl text-gray-300 mb-6 text-center">WETT TIDES is the heartbeat of our empire. It&apos;s our unified financial system where every sister contributes to and benefits from the collective wealth. This isn&apos;t a fee; it&apos;s an investment in your own future and the future of every woman in this family.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="font-bold text-wett-gold mb-3">How It Works:</h3>
            <p className="text-gray-300">Set your personal contribution goal—daily, weekly, or monthly. When hundreds of sisters do the same, we create a powerful river of capital that funds our businesses, our investments, and our security.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="font-bold text-wett-gold mb-3">Your Return:</h3>
            <p className="text-gray-300">This isn&apos;t a donation. It&apos;s how we generate <span className="text-wett-gold font-bold">residual income for everyone</span>, creating a financial safety net and wealth-building engine that no single one of us could build alone.</p>
          </div>
        </div>
        
        <div className="bg-black/50 p-6 rounded-lg mb-6">
          <div className="flex justify-between items-center mb-3">
            <div>
              <span className="text-white font-bold text-lg">Current Group Goal</span>
              <p className="text-sm text-gray-400">{activeGirls} Active Architects of Legacy</p>
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
              <div className="text-gray-400">Avg Investment per Sister</div>
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

        <div className="text-center">
          <PayWhatYouWant 
            title="WETT TIDES Contribution"
            description="Daily: $10-$25 | Weekly: $25-$100 | Monthly: $50-$200. Set your own contribution amount."
            suggestedAmounts={[10, 50, 100]}
            minAmount={5}
            onSuccess={() => alert('WETT TIDES contribution received! Thank you for building the empire.')}
          />
        </div>
        {!user && (
          <div className="text-center bg-gray-700 p-6 rounded border-2 border-wett-gold">
            <p className="text-gray-300 mb-4">Login to make WETT TIDES contributions</p>
            <Link href="/login" className="bg-wett-gold text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition inline-block">Sign In</Link>
          </div>
        )}
      </div>

      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-wett-gold mb-6">📈 The Math of Empowerment: See Your Power Grow</h2>
        <p className="text-gray-300 mb-6">This is group economics in action. This is the undeniable proof of our collective strength.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="font-bold text-wett-gold mb-3">100 Sisters @ $50/week</h3>
            <div className="text-3xl font-bold text-white mb-2">$260K</div>
            <p className="text-sm text-gray-400">Annual collective power</p>
          </div>
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="font-bold text-wett-gold mb-3">500 Sisters @ $50/week</h3>
            <div className="text-3xl font-bold text-white mb-2">$1.3M</div>
            <p className="text-sm text-gray-400">Annual collective power</p>
          </div>
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="font-bold text-wett-gold mb-3">1000 Sisters @ $50/week</h3>
            <div className="text-3xl font-bold text-white mb-2">$2.6M</div>
            <p className="text-sm text-gray-400">Annual collective power</p>
          </div>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg mt-6">
          <p className="text-lg text-gray-300 text-center italic">This capital doesn&apos;t go to a faceless corporation. It goes into <span className="text-wett-gold font-bold">our</span> businesses, <span className="text-wett-gold font-bold">our</span> brands, and <span className="text-wett-gold font-bold">our</span> futures.</p>
        </div>
      </div>

      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-wett-gold mb-6 text-center">🚀 Your Path to Joining the Sisterhood</h2>
        <p className="text-gray-300 mb-8 text-center max-w-3xl mx-auto">We believe in standards, not barriers. Your past does not define your future here; your ambition and loyalty do. Follow these steps to become a full member of the WETT Girls Collective.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-700 p-6 rounded-lg border-2 border-wett-gold">
            <div className="flex items-center justify-center w-12 h-12 bg-wett-gold text-black rounded-full font-bold text-xl mb-4 mx-auto">1</div>
            <div className="text-4xl mb-3 text-center">📝</div>
            <h3 className="font-bold text-white mb-2 text-center">Submit Application</h3>
            <p className="text-sm text-gray-300 text-center mb-4">Declare your intent. Tell us your story, your vision, and why you want to join.</p>
            <Link href="/family/wett-girls-collective/apply" className="block bg-wett-gold text-black px-4 py-2 rounded font-bold text-center hover:bg-yellow-400 transition">Apply Now</Link>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-600 text-white rounded-full font-bold text-xl mb-4 mx-auto">2</div>
            <div className="text-4xl mb-3 text-center">📜</div>
            <h3 className="font-bold text-white mb-2 text-center">Study The WETT Doctrine</h3>
            <p className="text-sm text-gray-300 text-center mb-4">Learn the &quot;We Thrive Together&quot; philosophy, our business structure, and the principles of the sisterhood.</p>
            <span className="block text-center text-sm text-gray-400 italic">Unlocks after application approval</span>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-600 text-white rounded-full font-bold text-xl mb-4 mx-auto">3</div>
            <div className="text-4xl mb-3 text-center">👔</div>
            <h3 className="font-bold text-white mb-2 text-center">Complete Etiquette School</h3>
            <p className="text-sm text-gray-300 text-center mb-4">Master modern etiquette - your path from the block to the boardroom. 6 lessons required.</p>
            <span className="block text-center text-sm text-gray-400 italic">Unlocks after Doctrine completion</span>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-600 text-white rounded-full font-bold text-xl mb-4 mx-auto">4</div>
            <div className="text-4xl mb-3 text-center">👑</div>
            <h3 className="font-bold text-white mb-2 text-center">Full Membership</h3>
            <p className="text-sm text-gray-300 text-center mb-4">Join the Inner Circle. Access WETT TIDES, private community, and all sister benefits.</p>
            <span className="block text-center text-sm text-gray-400 italic">Welcome to the dynasty!</span>
          </div>
        </div>

        <div className="mt-8 bg-black/50 p-6 rounded-lg border-2 border-wett-gold">
          <h3 className="text-xl font-bold text-wett-gold mb-4 text-center">📋 What You'll Receive</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
            <div className="flex items-start gap-3">
              <span className="text-wett-gold text-xl">✓</span>
              <div>
                <strong className="text-white">After Application Approval:</strong> Access to The WETT Doctrine course + Welcome email with next steps
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-wett-gold text-xl">✓</span>
              <div>
                <strong className="text-white">After Doctrine Completion:</strong> WETT Etiquette School enrollment (6 lessons) + Progress tracker
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-wett-gold text-xl">✓</span>
              <div>
                <strong className="text-white">After Etiquette School:</strong> Certificate of completion + WETT TIDES access + Private community invite
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-wett-gold text-xl">✓</span>
              <div>
                <strong className="text-white">Full Member Benefits:</strong> All sisterhood perks, business opportunities, residual income programs
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg text-center border-2 border-wett-gold">
        <h2 className="text-3xl font-bold text-wett-gold mb-4">🏈 The Final Word: We Win as a Team</h2>
        <p className="text-xl text-gray-300 mb-6">An NFL team has one goal: win the championship. Every player has a role, and the victory belongs to everyone. We operate the same way. Whether you&apos;re a strategist, a creator, or a motivator, your role is vital. Here, there is no &quot;I.&quot; There is only &quot;we.&quot;</p>
        <div className="my-8 border-t border-wett-gold pt-8">
          <p className="text-2xl text-wett-gold italic mb-2">&quot;We don&apos;t just climb the ladder; we own the building. And every sister gets a key.&quot;</p>
          <p className="text-gray-400">— Aura, The WETT Matriarch</p>
        </div>
      </div>
    </div>
  );
}
