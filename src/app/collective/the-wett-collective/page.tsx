'use client';

import PayWhatYouWant from '@/components/PayWhatYouWant'

const investmentOpportunities = [
  { title: 'Upcoming Show - Oakland', type: 'Event', investment: '$500 - $5,000', roi: '15-25% return', timeline: '30 days' },
  { title: 'New Merch Drop - Summer Collection', type: 'Product', investment: '$1,000 - $10,000', roi: '20-30% return', timeline: '60 days' },
  { title: 'Artist Launch - Trubble EP', type: 'Music', investment: '$2,500 - $25,000', roi: '25-40% return', timeline: '90 days' },
  { title: 'WETT Studios Expansion', type: 'Business', investment: '$5,000 - $50,000', roi: '30-50% return', timeline: '6 months' },
];

export default function TheWettCollectivePage() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-wett-gold text-center mb-8">The WETT Collective</h1>
        <p className="text-lg text-gray-400 text-center mb-6">
          A community of supporters and investors dedicated to funding and scaling the WETT Lifestyle ecosystem through group economics, barter, and trade.
        </p>
        <p className="text-xl text-wett-gold text-center mb-12 italic">&quot;Pay What You Want - Support the Vision&quot;</p>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg mb-12 border-2 border-wett-gold">
          <h2 className="text-3xl font-semibold text-wett-gold mb-6 text-center">Join The Collective</h2>
          <p className="text-lg text-gray-300 mb-6 text-center">Pay what you want to support our vision and get access to exclusive investment opportunities, newsletters, and updates.</p>
          
          <PayWhatYouWant 
            title="WETT Collective Membership"
            description="Basic Supporter: $10-$50 (newsletters, updates, community) | Village Leader: $100+ (priority investments, strategy calls, early access)"
            suggestedAmounts={[25, 50, 100]}
            minAmount={5}
            onSuccess={() => alert('Welcome to The WETT Collective! Check your email for exclusive access.')}
          />
        </div>

        <div className="bg-gray-800 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-semibold text-wett-gold mb-6 text-center">Current Investment Opportunities</h2>
          <p className="text-gray-300 mb-8 text-center">Members get exclusive access to invest in WETT projects with clear ROI projections. Barter, trade, and group economics in action.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {investmentOpportunities.map((opp) => (
              <div key={opp.title} className="bg-gray-700 p-6 rounded-lg border-l-4 border-wett-gold">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1">{opp.title}</h3>
                    <span className="text-xs bg-wett-gold text-black px-2 py-1 rounded">{opp.type}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-wett-gold font-bold">{opp.roi}</div>
                    <div className="text-xs text-gray-400">{opp.timeline}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-300 mb-3">Investment Range: <span className="text-white font-bold">{opp.investment}</span></div>
                <button className="w-full bg-wett-gold text-black py-2 rounded font-bold hover:bg-yellow-400 transition">View Details</button>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-gray-900 p-6 rounded text-center">
            <p className="text-gray-300 mb-4">Members automatically see new investment opportunities in their newsletter with projected returns.</p>
            <p className="text-sm text-gray-400 italic">Past performance: Average 28% ROI across all 2024 investments</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg text-center border-2 border-wett-gold">
          <h2 className="text-3xl font-bold text-wett-gold mb-4">Group Economics in Action</h2>
          <p className="text-xl text-gray-300 mb-6">When many hands contribute, everyone eats. The Collective pools resources to invest in WETT ventures, creating returns for all members.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="text-3xl font-bold text-wett-gold mb-2">$2.3M</div>
              <div className="text-sm text-gray-400">Total invested by Collective</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-wett-gold mb-2">28%</div>
              <div className="text-sm text-gray-400">Average ROI (2024)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-wett-gold mb-2">156</div>
              <div className="text-sm text-gray-400">Active members</div>
            </div>
          </div>
          <p className="text-2xl text-wett-gold italic">&quot;We Thrive Together&quot;</p>
        </div>

      </div>
    </div>
  );
}
