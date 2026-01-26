'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Collective() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to consolidated Community page
    router.replace('/family');
  }, [router]);

  return (
    <main className="min-h-screen bg-deep-black text-clean-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-wett-gold mb-4">Redirecting to Community...</h1>
        <p className="text-gray-300">We've consolidated our community pages for easier navigation.</p>
      </div>
    </main>
  );
}
