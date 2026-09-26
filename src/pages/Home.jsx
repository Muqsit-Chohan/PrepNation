import { useEffect } from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Companion from '../components/Companion';
import TargetAudience from '../components/TargetAudience';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const Home = () => {
  useEffect(() => {
    document.title = 'PrepNation';
  }, []);

  return (
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
  );
};

export default Home;
