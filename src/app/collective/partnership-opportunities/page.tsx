import Link from 'next/link';

const opportunities = [
  {
    title: 'Investors',
    description: 'Invest in WETT ventures and get returns on shows, events, new artists, merch drops, and more. See clear ROI projections.',
    link: '/collective/the-wett-collective',
    cta: 'View Investment Opportunities',
  },
  {
    title: 'Social Media Creators',
    description: 'Partner with us to create content, grow your audience, and represent the WETT brand across platforms.',
    link: 'mailto:wettentertainmentllc@gmail.com?subject=Social Media Partnership',
    cta: 'Apply as Creator',
  },
  {
    title: 'Potential WETT Girls',
    description: 'Join the collective as a model, dancer, singer, teacher, or influencer. Represent the brand and build with us.',
    link: '/family/wett-girls-collective',
    cta: 'Learn About WETT Girls',
  },
  {
    title: 'Venue Partners',
    description: 'Host our network mixers, showcases, and events. Bring the WETT community to your space.',
    link: 'mailto:wettentertainmentllc@gmail.com?subject=Venue Partnership',
    cta: 'Partner as Venue',
  },
  {
    title: 'Music Artists',
    description: 'Get full artist development, production services, and ecosystem building. We create self-contained platforms for artists.',
    link: '/empire/music-media-division',
    cta: 'Artist Services',
  },
  {
    title: 'Investment Opportunities',
    description: 'Invest in specific WETT projects - upcoming shows, new merch drops, artist launches. Barter, trade, and group economics in action.',
    link: '/collective/the-wett-collective',
    cta: 'Browse Opportunities',
  },
];

export default function PartnershipOpportunitiesPage() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-wett-gold text-center mb-8">Partnership Opportunities</h1>
        <p className="text-lg text-gray-400 text-center mb-6">
          Join the WETT ecosystem. We are seeking investors, creators, artists, venues, and visionaries to help us expand our reach and impact.
        </p>
        <p className="text-xl text-wett-gold text-center mb-12 italic">&quot;Many hands make light work - Barter, Trade, Invest&quot;</p>

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
