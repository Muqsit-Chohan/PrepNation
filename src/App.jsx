import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

import { Routes, Route, Navigate } from 'react-router';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedCursor from './components/AnimatedCursor';
import ScrollManager from './components/ScrollManager';
import SmartLink from './components/SmartLink';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import HelpCenter from './pages/HelpCenter';
import Faq from './pages/Faq';

function App() {
  useEffect(() => {
    // Lenis is limited to desktop pointer devices; native touch scrolling stays
    // active on mobile for the best performance.
    const isDesktop = window.matchMedia('(min-width: 768px) and (pointer: fine)').matches;
    if (!isDesktop) return undefined;

    const lenis = new Lenis({
      duration: 1.15,
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
    <div className="min-h-screen bg-noise bg-sky-50/40">
      <AnimatedCursor />
      <Navbar />
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />

      {/* Global Bottom Announcement Bar */}
      <div
        id="announcement"
        className="px-6 py-4 text-center text-white scroll-mt-24"
        style={{ background: '#064B83' }}
      >
        🎉 Launching on Google Play &amp; App Store soon!{' '}
        <SmartLink href="#cta" className="underline font-bold transition-all hover:opacity-80" style={{ color: '#B9E4FF' }}>
          Join the waitlist &amp; get 30 days Premium FREE
        </SmartLink>
      </div>
    </div>
  );
}

export default App;
