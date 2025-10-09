import Link from 'next/link';

const foundingMembers = [
  { name: 'Aura - The Matriarch', role: 'Visionary & Community Leader' },
  { name: "Bay'Hef - The Architect", role: 'Strategy & Operations' },
  { name: 'Mac Wayne', role: 'Music & Media Mogul' },
];

const investmentTiers = [
    { tier: 'Bronze', amount: '$5,000', benefits: 'Access to quarterly reports and community events.' },
    { tier: 'Silver', amount: '$25,000', benefits: 'Bronze benefits + direct line to a portfolio manager.' },
    { tier: 'Gold', amount: '$100,000', benefits: 'Silver benefits + annual investor summit invitation.' },
    { tier: 'Platinum', amount: '$500,000+', benefits: 'Gold benefits + seat on the advisory board.' },
];

export default function TheWettCollectivePage() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-wett-gold text-center mb-8">The WETT Collective</h1>
        <p className="text-lg text-gray-400 text-center mb-12">
          A private investment group dedicated to funding and scaling the WETT Lifestyle ecosystem. We are architects of the future.
        </p>

        {/* Founding Members */}
        <div className="bg-gray-800 shadow-lg rounded-lg p-6 mb-12">
          <h2 className="text-3xl font-semibold text-white mb-6 text-center">Founding Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {foundingMembers.map((member) => (
              <div key={member.name}>
                <h3 className="text-xl font-bold text-wett-gold">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Tiers */}
        <div className="mb-12">
            <h2 className="text-3xl font-semibold text-white mb-6 text-center">Investment Tiers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {investmentTiers.map(tier => (
                    <div key={tier.tier} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                        <h3 className="text-2xl font-bold text-wett-gold mb-2">{tier.tier}</h3>
                        <p className="text-3xl font-semibold text-white mb-3">{tier.amount}</p>
                        <p className="text-gray-400">{tier.benefits}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Success Stories & Application */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">Success Stories</h2>
                <p className="text-gray-300 mb-4">See how our investments have fueled growth and innovation across the ecosystem.</p>
                {/* Placeholder for stories */}
                <div className="border-t border-gray-700 pt-4">
                    <p className="text-wett-gold font-semibold">Snack Stop Shawty: 300% Growth in 12 Months</p>
                    <p className="text-gray-400 text-sm">From a local favorite to a regional powerhouse.</p>
                </div>
            </div>
            <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-center flex flex-col justify-center items-center">
                <h2 className="text-2xl font-semibold text-white mb-4">Application Portal</h2>
                <p className="text-gray-300 mb-6">Ready to build with us? Apply for membership in The WETT Collective.</p>
                <Link href="#">
                    <span className="bg-wett-gold text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition duration-300">
                        Apply Now
                    </span>
                </Link>
            </div>
        </div>

      </div>
    </div>
  );
}
