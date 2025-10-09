import Link from 'next/link';

const opportunities = [
  {
    title: 'Franchise Information',
    description: 'Bring the WETT Lifestyle to your city. Learn more about our franchise model and how to apply.',
    link: '#',
    cta: 'Explore Franchising',
  },
  {
    title: 'Brand Collaborations',
    description: 'Partner with us on unique products, collections, and campaigns that merge our brand identities.',
    link: '#',
    cta: 'Propose a Collaboration',
  },
  {
    title: 'Event Sponsorships',
    description: 'Gain visibility by sponsoring our high-profile events, from music festivals to community workshops.',
    link: '#',
    cta: 'View Sponsorship Tiers',
  },
  {
    title: 'Wholesale Partnerships',
    description: 'Stock WETT Lifestyle products in your retail locations. Access our wholesale catalog and pricing.',
    link: '#',
    cta: 'Become a Stockist',
  },
];

export default function PartnershipOpportunitiesPage() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-wett-gold text-center mb-8">Partnership Opportunities</h1>
        <p className="text-lg text-gray-400 text-center mb-12">
          Join the WETT ecosystem. We are seeking strategic partners to help us expand our reach and impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {opportunities.map((opp) => (
            <div key={opp.title} className="bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col">
              <h2 className="text-2xl font-semibold text-white mb-3">{opp.title}</h2>
              <p className="text-gray-300 mb-6 flex-grow">{opp.description}</p>
              <Link href={opp.link}>
                <span className="inline-block bg-wett-gold text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300">
                  {opp.cta}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
