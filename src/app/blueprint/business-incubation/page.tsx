export default function BusinessIncubationPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-wett-gold mb-8">Business Incubator</h1>
      <p className="text-lg text-gray-300 mb-12">Get startup guides, mentorship, and resources to launch your venture.</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-wett-gold mb-4">🚀 Startup Guides</h2>
          <div className="space-y-3">
            <a href="#" className="block bg-gray-700 p-4 rounded hover:bg-gray-600 transition">
              <h3 className="font-bold text-white mb-1">Business Plan Template</h3>
              <p className="text-sm text-gray-300">Complete framework for your business plan</p>
            </a>
            <a href="#" className="block bg-gray-700 p-4 rounded hover:bg-gray-600 transition">
              <h3 className="font-bold text-white mb-1">Legal Structure Guide</h3>
              <p className="text-sm text-gray-300">LLC, Corp, Partnership - choose the right one</p>
            </a>
            <a href="#" className="block bg-gray-700 p-4 rounded hover:bg-gray-600 transition">
              <h3 className="font-bold text-white mb-1">Funding Sources</h3>
              <p className="text-sm text-gray-300">Grants, loans, investors, and bootstrapping</p>
            </a>
            <a href="#" className="block bg-gray-700 p-4 rounded hover:bg-gray-600 transition">
              <h3 className="font-bold text-white mb-1">Marketing Playbook</h3>
              <p className="text-sm text-gray-300">Launch and grow your customer base</p>
            </a>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-wett-gold mb-4">👥 Mentorship Program</h2>
          <div className="space-y-4">
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-bold text-white mb-2">1-on-1 Mentorship</h3>
              <p className="text-sm text-gray-300 mb-3">Get paired with experienced entrepreneurs in your industry</p>
              <a href="mailto:wettentertainmentllc@gmail.com?subject=Mentorship Request" className="inline-block bg-wett-gold text-black px-4 py-2 rounded font-bold text-sm hover:bg-yellow-400 transition text-center">Request Mentor</a>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-bold text-white mb-2">Group Coaching</h3>
              <p className="text-sm text-gray-300 mb-3">Weekly sessions with cohorts of fellow founders</p>
              <a href="mailto:wettentertainmentllc@gmail.com?subject=Join Coaching Cohort" className="inline-block bg-wett-gold text-black px-4 py-2 rounded font-bold text-sm hover:bg-yellow-400 transition text-center">Join Cohort</a>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-bold text-white mb-2">Office Hours</h3>
              <p className="text-sm text-gray-300 mb-3">Drop-in sessions every Tuesday & Thursday</p>
              <a href="mailto:wettentertainmentllc@gmail.com?subject=Book Office Hours" className="inline-block bg-wett-gold text-black px-4 py-2 rounded font-bold text-sm hover:bg-yellow-400 transition text-center">Book Session</a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-wett-gold mb-4">📊 Current Incubator Cohort</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-700 p-4 rounded">
            <h3 className="font-bold text-white mb-2">Tech Startups</h3>
            <p className="text-sm text-gray-300 mb-2">8 companies</p>
            <p className="text-xs text-gray-400">SaaS, Apps, AI/ML</p>
          </div>
          <div className="bg-gray-700 p-4 rounded">
            <h3 className="font-bold text-white mb-2">Retail & E-commerce</h3>
            <p className="text-sm text-gray-300 mb-2">12 companies</p>
            <p className="text-xs text-gray-400">Fashion, Beauty, Lifestyle</p>
          </div>
          <div className="bg-gray-700 p-4 rounded">
            <h3 className="font-bold text-white mb-2">Service Businesses</h3>
            <p className="text-sm text-gray-300 mb-2">15 companies</p>
            <p className="text-xs text-gray-400">Consulting, Coaching, Creative</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-wett-gold mb-4">💼 Business Tier Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <span className="text-wett-gold text-xl">✓</span>
            <div>
              <h3 className="font-bold text-white">Priority Mentorship</h3>
              <p className="text-sm text-gray-300">Fast-track access to top mentors</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-wett-gold text-xl">✓</span>
            <div>
              <h3 className="font-bold text-white">Investor Network</h3>
              <p className="text-sm text-gray-300">Connect with WETT Collective investors</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-wett-gold text-xl">✓</span>
            <div>
              <h3 className="font-bold text-white">Co-working Space</h3>
              <p className="text-sm text-gray-300">Access to WETT Studios workspace</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-wett-gold text-xl">✓</span>
            <div>
              <h3 className="font-bold text-white">Legal & Accounting</h3>
              <p className="text-sm text-gray-300">Discounted professional services</p>
            </div>
          </div>
        </div>
        <a href="/collective/the-wett-collective" className="inline-block mt-6 bg-wett-gold text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition">Upgrade to Business Tier</a>
      </div>
    </div>
  );
}
