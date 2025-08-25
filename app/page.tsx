import dynamic from 'next/dynamic';
import Navbar from '@/app/components/landing/Navbar';

// Import components with SSR disabled for better performance
const Hero = dynamic(() => import('@/app/components/landing/Hero'), { ssr: true });
const HowItWorks = dynamic(() => import('@/app/components/landing/HowItWorks'), { ssr: true });
const Features = dynamic(() => import('@/app/components/landing/Features'), { ssr: true });
const Testimonials = dynamic(() => import('@/app/components/landing/Testimonials'), { 
  ssr: true,
  loading: () => <div className="h-96 flex items-center justify-center">Loading testimonials...</div>
});
const Pricing = dynamic(() => import('@/app/components/landing/Pricing'), { ssr: true });
const Footer = dynamic(() => import('@/app/components/landing/Footer'), { ssr: true });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />
        <HowItWorks />
        <Features />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
