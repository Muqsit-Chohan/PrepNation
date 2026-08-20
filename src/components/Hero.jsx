import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
import LazyVideo from './LazyVideo';

import aiChatVideo from '../assets/Video/aichat.mp4';
import mcqsVideo from '../assets/Video/mcqs.mp4';
import mockExamsVideo from '../assets/Video/mockexmas.mp4';
import pastPapersVideo from '../assets/Video/pastpapers.mp4';

/* ── SVG Doodles ── */
const Wave = ({ className, color = '#0861A8', size = 70 }) => (
  <svg className={className} width={size} height={size * 0.4} viewBox="0 0 80 30" fill="none">
    <path d="M2 15 Q20 2 38 15 Q56 28 74 15" stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none" />
  </svg>
);
const Bookmark = ({ className, color = '#EF4444', size = 26 }) => (
  <svg className={className} width={size} height={size * 1.4} viewBox="0 0 26 36" fill="none">
    <path d="M3 2 H23 V34 L13 26 L3 34 Z" stroke={color} strokeWidth="2.5" fill={color + '25'} strokeLinejoin="round" />
  </svg>
);
const Sparkle = ({ className, color = '#59A9D8', size = 26 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 26 26" fill="none">
    <path d="M13 2 L15 10.5 L23.5 8 L17 13 L23.5 18 L15 15.5 L13 24 L11 15.5 L2.5 18 L9 13 L2.5 8 L11 10.5 Z"
      stroke={color} strokeWidth="1.8" fill={color + '30'} strokeLinejoin="round" />
  </svg>
);
const Blob = ({ className, color }) => (
  <svg className={className} width="120" height="120" viewBox="0 0 100 100">
    <ellipse cx="50" cy="50" rx="48" ry="44" fill={color} />
  </svg>
);

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    { video: mcqsVideo, label: 'Chapter-wise MCQs', caption: 'Practice smarter, score higher' },
    { video: aiChatVideo, label: 'PrepAI Tutor', caption: 'Your doubts, solved instantly' },
    { video: pastPapersVideo, label: 'Past Papers', caption: 'Train with real board exams' },
    { video: mockExamsVideo, label: 'Mock Exams', caption: 'Feel ready before exam day' },
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#F6F4F8] pt-28 sm:pt-32 lg:pt-8 pb-24">
      {/* Background blobs */}
      <Blob className="absolute -top-8 right-48 opacity-10 -z-0" color="#8B5CF1" />
      <Blob className="absolute bottom-16 left-12 opacity-10 -z-0" color="#B9E4FF" />
      <div className="pointer-events-none absolute -right-20 top-20 text-[clamp(7rem,21vw,19rem)] font-black leading-none tracking-[-.12em] text-[#06040F]/[.035]">ACE</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-lg"
          >
            {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 mb-5">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-black tracking-wider uppercase text-amber-700">
                Pakistan's #1 Exam Prep Platform
              </span>
            </div> */}

            <div className="relative mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight" style={{ color: '#064B83' }}>
                Pakistan's Smartest Way to{' '}
                <span className="relative inline-block">
                  Ace Exams
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 230 12" fill="none" preserveAspectRatio="none">
                    <path d="M2 6 Q30 1 58 6 Q88 11 116 6 Q146 1 172 6 Q200 11 228 6"
                      stroke="#F59E0B" strokeWidth="4.5" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <Sparkle className="absolute -right-4 top-4 hidden lg:block" color="#159A9C" size={30} />
            </div>

            <p className="text-gray-500 text-md leading-relaxed mb-10 max-w-md">
              PrepNation is a complete mobile application for notes, MCQs, past papers, mock tests and AI support—built specifically for Matric, Inter, O-Level &amp; A-Level students across Pakistan.
            </p>

            <div className="flex items-center gap-5 -mt-7  flex-wrap">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-bold text-white text-base shadow-[0_8px_28px_rgba(8,97,168,0.22)] hover:shadow-[0_12px_36px_rgba(8,97,168,0.34)] transition-shadow cursor-pointer"
                style={{ background: '#0861A8' }}
              >
                Get Started Free
              </motion.button>

              <motion.button 
                  whileHover={{ scale: 1.05, color: '#159A9C' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 font-semibold text-gray-700 transition-colors group cursor-pointer"
              >
                <span
                  className="w-12 h-12 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform"
                  style={{ background: '#064B83' }}
                >
                  <Play size={15} fill="white" color="white" className="ml-0.5" />
                </span>
                See How It Works
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column — cinematic mobile slider */}
          <div className="relative flex min-h-[500px] items-center justify-center lg:min-h-[560px]">
            <div className="absolute h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />
            <div className="absolute -right-2 top-16 h-24 w-24 rounded-full bg-teal-200/70 blur-2xl" />
            <Sparkle className="absolute left-8 top-16 z-20" color="#159A9C" size={22} />

            <motion.div
              animate={{ y: [0, -12, 0], rotate: [-5, -2, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-0 top-24 z-20 w-28 rounded-2xl border border-white/90 bg-white/80 p-2 shadow-[0_18px_40px_rgba(6,4,15,0.12)] backdrop-blur-md sm:w-40 sm:p-3"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[9px] font-black uppercase tracking-wider text-[#564B58]">Daily streak</span>
                <span className="text-lg">🔥</span>
              </div>
              <div className="flex items-end gap-1.5">
                {[35, 52, 44, 68, 58, 86, 74].map((height, index) => (
                  <span key={index} className="w-2 rounded-full bg-[#2204EC]" style={{ height: `${height / 3}px`, opacity: .35 + index * .09 }} />
                ))}
              </div>
              <p className="mt-2 text-xs font-black text-[#06040F]">7 days on track</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0], rotate: [4, 1, 4] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: .6 }}
              className="absolute bottom-28 right-0 z-20 w-32 rounded-2xl border border-white/90 bg-[#06040F] p-2.5 text-white shadow-[0_20px_44px_rgba(6,4,15,0.2)] sm:w-44 sm:p-4"
            >
              <p className="text-[9px] font-bold uppercase tracking-[.18em] text-[#B9E4FF]">Your progress</p>
              <div className="mt-3 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full border-4 border-[#8B5CF1] text-xs font-black">82%</div>
                <div><p className="text-xs font-bold">Exam ready</p><p className="mt-1 text-[10px] text-white/55">Keep going!</p></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              whileHover={{ y: -8, rotate: -1 }}
              className="relative z-10 w-[min(54vw,218px)] rounded-[2.5rem] border-[6px] border-slate-900 bg-slate-900 p-1.5 shadow-[0_22px_54px_rgba(8,75,131,0.25)]"
            >
              <div className="absolute -left-[9px] top-24 h-10 w-1 rounded-l-full bg-slate-800" />
              <div className="absolute -right-[9px] top-28 h-16 w-1 rounded-r-full bg-slate-800" />
              <div className="absolute left-1/2 top-2 z-30 flex h-5 w-24 -translate-x-1/2 items-center justify-end gap-2 rounded-full bg-slate-950 px-3">
                <span className="h-1 w-6 rounded-full bg-slate-700" />
                <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
              </div>
              <div className="relative aspect-[9/19] overflow-hidden rounded-[2.05rem] bg-sky-50">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, scale: 1.08, x: 24 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.98, x: -24 }}
                    transition={{ duration: 0.65, ease: 'easeInOut' }}
                    className="absolute inset-0"
                  >
                    <LazyVideo
                      src={slides[activeSlide].video}
                      aria-label={slides[activeSlide].label}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-transparent to-slate-950/80" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-sky-200">PrepNation</p>
                  <h3 className="text-xl font-black leading-tight">{slides[activeSlide].label}</h3>
                  <p className="mt-1 text-xs text-white/75">{slides[activeSlide].caption}</p>
                </div>
                <div className="absolute left-4 right-4 top-5 flex gap-1">
                  {slides.map((slide, index) => (
                    <button
                      key={slide.label}
                      type="button"
                      aria-label={`Show ${slide.label}`}
                      onClick={() => setActiveSlide(index)}
                      className={`h-1 flex-1 rounded-full transition-colors ${index === activeSlide ? 'bg-white' : 'bg-white/35'}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="absolute bottom-3 left-1/2 z-20 w-48 -translate-x-1/2 rounded-2xl border border-white/80 bg-white/85 px-3 py-2.5 text-center shadow-[0_10px_24px_rgba(22,78,112,0.14)] backdrop-blur-md">
              <p className="text-xs font-black text-[#064B83]">One app. Every advantage.</p>
              <p className="mt-1 text-[10px] font-medium text-slate-500">Built for Pakistan's board exams</p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Giant ghost background text ── */}
      <div
        className="hero-giant-text absolute left-1/2 pb-10 -translate-x-1/2  z-[1]"
        aria-hidden="true"
      >
        PREPNATION
      </div>
    </section>
  );
};

export default Hero;
