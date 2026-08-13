import { useState } from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  return (
    <section className="py-20 px-4" id="cta" style={{ background: '#FFFBEB' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto rounded-[3rem] px-10 py-16 text-center text-white relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1E1B4B 0%, #4F46E5 60%, #7C3AED 100%)',
          boxShadow: '0 30px 80px rgba(30,27,75,0.4)',
        }}
      >
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10 pointer-events-none -translate-y-1/2 translate-x-1/2"
          style={{ background: '#F59E0B' }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none translate-y-1/2 -translate-x-1/2"
          style={{ background: '#FCD34D' }} />

        <div className="relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-6"
            style={{ background: '#F59E0B', color: '#1E1B4B' }}>
            🚀 Coming Soon
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-5 leading-tight">
            Launching on Google Play<br className="hidden md:block" /> &amp; App Store Soon!
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Join our waitlist and get an exclusive{' '}
            <strong className="text-yellow-300">30-day Premium pass free</strong> when we launch.
          </p>

          {!done ? (
            <form
              onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}
              className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email" required value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 text-sm"
                style={{ focusRingColor: '#F59E0B' }}
              />
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: ['0px 4px 16px rgba(245,158,11,0.5)', '0px 8px 24px rgba(245,158,11,0.7)', '0px 4px 16px rgba(245,158,11,0.5)']
                }}
                transition={{ boxShadow: { repeat: Infinity, duration: 2, ease: "easeInOut" } }}
                type="submit"
                className="px-8 py-4 rounded-full font-black text-sm flex-shrink-0"
                style={{ background: '#F59E0B', color: '#1E1B4B' }}
              >
                Join Waitlist
              </motion.button>
            </form>
          ) : (
            <div className="inline-block px-8 py-4 rounded-full font-bold text-sm"
              style={{ background: 'rgba(245,158,11,0.2)', border: '1.5px solid #F59E0B', color: '#FCD34D' }}>
              🎉 You're on the list! We'll notify you at launch.
            </div>
          )}
          <p className="text-white/40 text-xs mt-6">No spam. Unsubscribe anytime.</p>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
