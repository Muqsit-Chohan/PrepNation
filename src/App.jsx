import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Companion from './components/Companion';
import TargetAudience from './components/TargetAudience';
import Features from './components/Features';
import Pricing from './components/Pricing';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import AnimatedCursor from './components/AnimatedCursor';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothTouch: false,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-noise bg-gray-50/50">
      <AnimatedCursor />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Companion />
        <TargetAudience />
        <Features />
        <Pricing />
        <WhyChooseUs />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />

      {/* Global Bottom Announcement Bar */}
      <div
        id="announcement"
        className="px-6 py-4 text-center text-white scroll-mt-24"
        style={{ background: '#1E1B4B' }}
      >
        🎉 Launching on Google Play &amp; App Store soon!{' '}
        <a href="#cta" className="underline font-bold transition-all hover:opacity-80" style={{ color: '#FCD34D' }}>
          Join the waitlist &amp; get 30 days Premium FREE
        </a>
      </div>
    </div>
  );
}

export default App;
