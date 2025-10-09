import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';
import AuraChatWidget from '@/components/AuraChatWidget';
import ErrorBoundary from '@/components/ErrorBoundary';
import PayPalProvider from '@/components/PayPalProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WETT LIFESTYLE - The Doctrine',
  description: 'The central nervous system of the entire WETT empire.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-deep-black text-clean-white`}>
        <ErrorBoundary>
          <PayPalProvider>
            <Providers>
              <Header />
              <main>{children}</main>
              <Footer />
              <AuraChatWidget />
            </Providers>
          </PayPalProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}