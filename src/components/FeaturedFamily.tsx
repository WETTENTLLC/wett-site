import Link from 'next/link';

const familyMembers = [
  {
    name: 'Aura - The Matriarch',
    description: 'The visionary and spiritual heart of the WETT ecosystem. Discover her philosophy and journey.',
    link: '/family/aura',
    image: '/wett-site/Aura Profile photo.png',
  },
  {
    name: 'WETT Girls Collective',
    description: 'A sisterhood of empowered women driving culture and community forward. Meet the members and see their impact.',
    link: '/family/wett-girls-collective',
    image: '/wett-site/The Team Profile Image.png',
  },
];

const FeaturedFamily = () => {
  return (
    <section className="bg-deep-black py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-wett-gold text-center sm:text-4xl mb-12">
          Meet The Family
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {familyMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden mb-6 border-4 border-wett-gold shadow-2xl">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
              <p className="text-gray-400 mt-2 mb-4 max-w-sm mx-auto">{member.description}</p>
              <Link href={member.link}>
                <span className="text-wett-gold font-bold hover:underline">Learn More &rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFamily;
