import Hero from '@/components/Hero';
import AboutWett from '@/components/AboutWett';
import CommunityCounters from '@/components/LiveCounters';
import Manifesto from '@/components/Manifesto';
import NewsletterSignup from '@/components/NewsletterSignup';
import QuickNav from '@/components/QuickNav';
import FeaturedFamily from '@/components/FeaturedFamily';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutWett />
      <Manifesto />
      <CommunityCounters />
      <QuickNav />
      <FeaturedFamily />
      <NewsletterSignup />
    </main>
  );
}
