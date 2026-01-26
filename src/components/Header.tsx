'use client'

import Link from 'next/link';
import { useAuth } from '@/lib/AuthContext';
import { useRouter } from 'next/navigation';

const navigationItems = [
  { href: '/empire', label: 'Empire' },
  { href: '/family', label: 'Community' },
  { href: '/blueprint', label: 'Courses' },
  { href: '/shop', label: 'Shop' },
];

const Header = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <header className="bg-deep-black text-clean-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img src="/wett-site/wett-main-logo1.png" alt="WETT LIFESTYLE" width={120} height={60} />
        </Link>
        <div>
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} className="p-2">
              {item.label}
            </Link>
          ))}
           {user ? (
            <>
              <Link href="/profile" className="p-2">
                Profile
              </Link>
              <button onClick={() => { logout(); router.push('/'); }} className="p-2">
                Sign Out
              </button>
            </>
          ) : (
            <Link href="/login" className="p-2">
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
