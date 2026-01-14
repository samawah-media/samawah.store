import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import FeaturedGrid from '@/components/home/FeaturedGrid';
import SubscriptionPackages from '@/components/home/SubscriptionPackages';
import ValueProposition from '@/components/home/ValueProposition';

// Force dynamic rendering to avoid build-time API calls
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustBar />
      <FeaturedGrid />
      <SubscriptionPackages />
      <ValueProposition />
    </div>
  );
}
