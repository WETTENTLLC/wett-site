export default function CommunityWisdomPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-wett-gold mb-8">Community Wisdom</h1>
      <p className="text-lg text-gray-300 mb-12">Learn from the collective knowledge and experiences of the WETT family.</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-wett-gold mb-4">📚 Knowledge Library</h2>
          <div className="space-y-3">
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-bold text-white mb-2">Lessons from the Streets</h3>
              <p className="text-sm text-gray-300">Real-world wisdom from Bay&apos;Hef&apos;s journey</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-bold text-white mb-2">Business Failures & Comebacks</h3>
              <p className="text-sm text-gray-300">Learn from mistakes, celebrate resilience</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-bold text-white mb-2">Family Structure Insights</h3>
              <p className="text-sm text-gray-300">Polygyny philosophy in practice</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-bold text-white mb-2">Financial Literacy Basics</h3>
              <p className="text-sm text-gray-300">Money management for the community</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-wett-gold mb-4">🎙️ Elder Wisdom Sessions</h2>
          <div className="space-y-4">
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-bold text-white mb-2">Monthly Q&A with Bay&apos;Hef</h3>
              <p className="text-sm text-gray-300 mb-3">Ask the King directly about business, life, and building legacy</p>
              <button className="bg-wett-gold text-black px-4 py-2 rounded font-bold text-sm hover:bg-yellow-400 transition">Join Next Session</button>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-bold text-white mb-2">Aura&apos;s Office Hours</h3>
              <p className="text-sm text-gray-300 mb-3">Get guidance on family dynamics and business strategy</p>
              <button className="bg-wett-gold text-black px-4 py-2 rounded font-bold text-sm hover:bg-yellow-400 transition">Book Time</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-wett-gold mb-4">💡 Community Contributions</h2>
        <p className="text-gray-300 mb-4">Members share their expertise and lessons learned</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-700 p-4 rounded">
            <div className="text-wett-gold font-bold mb-2">Real Estate Investing</div>
            <p className="text-sm text-gray-300 mb-2">By Marcus J.</p>
            <p className="text-xs text-gray-400">How I bought my first rental property with $5K</p>
          </div>
          <div className="bg-gray-700 p-4 rounded">
            <div className="text-wett-gold font-bold mb-2">E-commerce Launch</div>
            <p className="text-sm text-gray-300 mb-2">By Sarah M.</p>
            <p className="text-xs text-gray-400">From idea to $10K/month in 6 months</p>
          </div>
          <div className="bg-gray-700 p-4 rounded">
            <div className="text-wett-gold font-bold mb-2">Credit Repair Guide</div>
            <p className="text-sm text-gray-300 mb-2">By Alex R.</p>
            <p className="text-xs text-gray-400">Raised my score 150 points in 12 months</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-wett-gold mb-4">🎓 Mentorship Matching</h2>
        <p className="text-gray-300 mb-4">Connect with experienced members in your field</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-700 p-4 rounded">
            <h3 className="font-bold text-white mb-2">Find a Mentor</h3>
            <p className="text-sm text-gray-300 mb-3">Get guidance from someone who&apos;s been there</p>
            <button className="bg-wett-gold text-black px-4 py-2 rounded font-bold text-sm hover:bg-yellow-400 transition">Request Mentor</button>
          </div>
          <div className="bg-gray-700 p-4 rounded">
            <h3 className="font-bold text-white mb-2">Become a Mentor</h3>
            <p className="text-sm text-gray-300 mb-3">Share your knowledge and lift others up</p>
            <button className="bg-wett-gold text-black px-4 py-2 rounded font-bold text-sm hover:bg-yellow-400 transition">Apply to Mentor</button>
          </div>
        </div>
      </div>
    </div>
  );
}
