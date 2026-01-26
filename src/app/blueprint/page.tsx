import Link from 'next/link';

export default function Blueprint() {
  return (
    <main className="min-h-screen bg-deep-black text-clean-white">
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-5xl font-bold text-wett-gold mb-4 text-center">WETT Courses & Education</h1>
        <p className="text-xl mb-12 text-center max-w-3xl mx-auto">Master the skills to build your empire - from etiquette to group economics.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          {/* Etiquette School */}
          <Link href="/blueprint/etiquette-school" className="bg-gradient-to-br from-wett-gold to-yellow-600 p-8 rounded-lg hover:opacity-90 transition text-black">
            <div className="text-4xl mb-4">👔</div>
            <h2 className="text-2xl font-bold mb-3">WETT Etiquette School</h2>
            <p className="mb-4">The Bag Builder: A Masterclass in Modern Etiquette - Your guaranteed path from the block to the boardroom</p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">6 Lessons</span>
              <span className="text-sm font-bold">Start Course →</span>
            </div>
          </Link>

          {/* Group Economics */}
          <Link href="/blueprint/group-economics-mastery" className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 rounded-lg hover:opacity-90 transition text-white">
            <div className="text-4xl mb-4">💰</div>
            <h2 className="text-2xl font-bold mb-3">Group Economics Mastery</h2>
            <p className="mb-4">Pool resources, build cooperative networks, and harness the power of collective wealth building</p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">16 Weeks</span>
              <span className="text-sm font-bold">Start Course →</span>
            </div>
          </Link>

          {/* WETT Doctrine */}
          <Link href="/blueprint/the-wett-doctrine" className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition border-2 border-wett-gold">
            <div className="text-4xl mb-4">📜</div>
            <h2 className="text-2xl font-bold text-wett-gold mb-3">The WETT Doctrine</h2>
            <p className="text-gray-300 mb-4">&quot;We Thrive Together&quot; - The foundational philosophy that powers the WETT empire</p>
            <div className="text-sm font-semibold text-wett-gold">Read Philosophy →</div>
          </Link>

          {/* Community Wisdom */}
          <Link href="/blueprint/community-wisdom" className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition border-2 border-wett-gold">
            <div className="text-4xl mb-4">📚</div>
            <h2 className="text-2xl font-bold text-wett-gold mb-3">Community Wisdom</h2>
            <p className="text-gray-300 mb-4">Knowledge library, mentorship matching, and elder wisdom sessions</p>
            <div className="text-sm font-semibold text-wett-gold">Explore Resources →</div>
          </Link>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <section className="bg-gray-900 p-8 rounded-lg border-2 border-wett-gold">
            <h2 className="text-3xl font-bold text-wett-gold mb-4">Core Principles</h2>
            <div className="space-y-4 text-lg">
              <div>
                <h3 className="text-xl font-bold text-wett-gold">1. Community First</h3>
                <p className="text-gray-300">We prioritize the collective over the individual.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-wett-gold">2. Group Economics</h3>
                <p className="text-gray-300">Many hands make light work - pool resources and multiply returns.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-wett-gold">3. Excellence & Etiquette</h3>
                <p className="text-gray-300">Deliver quality in everything, from the streets to the boardroom.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-wett-gold">4. Continuous Evolution</h3>
                <p className="text-gray-300">From &quot;We Trap Together&quot; to &quot;We Thrive Together&quot; - constant growth.</p>
              </div>
            </div>
          </section>

          <section className="bg-gray-800 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-wett-gold mb-4">Pay What You Want</h2>
            <p className="text-gray-300 mb-6">All courses use our pay-what-you-want model. Those who pay more help subsidize those who pay less. We thrive together.</p>
            <Link href="/blueprint/etiquette-school" className="inline-block bg-wett-gold text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition">
              Start Learning Today
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
