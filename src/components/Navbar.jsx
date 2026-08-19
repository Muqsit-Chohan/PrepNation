import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'For Students', href: '#for-students' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Contact', href: '#announcement' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none px-4 sm:px-6">
      <nav
        className={`pointer-events-auto w-full transition-all duration-300 ease-out transform-gpu ${
          isScrolled
            ? 'mt-3 max-w-5xl bg-white/95 shadow-lg rounded-[2rem] py-1 border border-gray-200/80'
            : 'mt-0 max-w-7xl bg-transparent py-3 border-transparent'
        }`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <a href="#" className="flex items-center gap-1 flex-shrink-0">
              <img src={logo} alt="PrepNation Logo" className="h-8 w-auto rounded-md" />
              <span className="font-black text-xl tracking-tight" style={{ color: '#064B83' }}>
                Prep<span style={{ color: '#0861A8' }}>Nation</span>
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button className="text-gray-700 px-5 py-2 rounded-full font-semibold text-sm border border-gray-200 hover:bg-gray-50 transition-all cursor-pointer">
                Login
              </button>
              <button
                className="text-white px-5 py-2 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-md cursor-pointer"
                style={{ background: '#0861A8' }}
              >
                Get Started Free
              </button>
            </div>

            {/* Mobile toggle */}
            <button className="md:hidden text-gray-600" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden rounded-b-[2rem]"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-3 text-gray-700 hover:bg-sky-50 rounded-lg font-medium text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-2">
                  <button
                    className="w-full text-white py-3 rounded-full font-bold text-sm"
                    style={{ background: '#0861A8' }}
                  >
                    Get Started Free
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
