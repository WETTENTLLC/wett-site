'use client';

import Link from 'next/link';

const empireLinks = [
  { href: '/empire/wett-lifestyle-flagship', title: 'WETT Lifestyle Flagship', image: '/wett-site/empire/flagship.svg', gradient: 'from-wett-gold to-yellow-600' },
  { href: '/empire/snack-stop-shawty', title: 'Snack Stop Shawty', image: '/wett-site/empire/snack-stop.svg', gradient: 'from-pink-500 to-purple-600' },
  { href: 'https://bartradia.com', title: 'Bartradia', image: '/wett-site/empire/bartradia.svg', gradient: 'from-blue-500 to-cyan-600' },
  { href: '/empire/wett-studios-guild', title: 'WETT Studios & The Guild', image: '/wett-site/empire/studios.svg', gradient: 'from-red-500 to-orange-600' },
  { href: '/empire/music-media-division', title: 'Music & Media', image: '/wett-site/empire/music-media.svg', gradient: 'from-purple-500 to-indigo-600' },
];

const QuickNav = () => {
  return (
    <div className="bg-deep-black py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-clean-white mb-8">Explore The Empire</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {empireLinks.map((link) => {
            const isExternal = link.href.startsWith('http');
            const commonProps = {
              className: "bg-gray-800 p-6 rounded-lg hover:bg-wett-gold text-clean-white transition-colors",
            };

            const content = (
              <>
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-80`} />
                  <img
                    src={link.image}
                    alt={link.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <h3 className="text-xl font-bold">{link.title}</h3>
              </>
            );

            if (isExternal) {
              return (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" {...commonProps}>
                  {content}
                </a>
              );
            }

            return (
              <Link key={link.href} href={link.href} {...commonProps}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuickNav;
