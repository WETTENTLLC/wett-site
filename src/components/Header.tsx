'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';

const navigationItems = [
  { href: '/empire', label: 'The Empire' },
  { href: '/family', label: 'The Family' },
  { href: '/blueprint', label: 'The Blueprint' },
  { href: '/collective', label: 'The Collective' },
  { href: '/shop', label: 'Shop' },
  { href: '/events', label: 'Events' },
];

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="bg-deep-black text-clean-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/wett-main-logo1.png" alt="WETT LIFESTYLE" width={120} height={60} priority />
        </Link>
        <div>
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} className="p-2">
              {item.label}
            </Link>
          ))}
           {session ? (
            <>
              <Link href="/profile" className="p-2">
                Profile
              </Link>
              <button onClick={() => signOut()} className="p-2">
                Sign Out
              </button>
            </>
          ) : (
            <button onClick={() => signIn()} className="p-2">
              Sign In
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
