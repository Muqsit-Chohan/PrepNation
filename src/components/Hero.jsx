import { motion } from 'framer-motion';
import { Play, BookOpen, GraduationCap, BookText, Sparkles, CheckCircle, Clock, Award } from 'lucide-react';

import mcqsImg from '../assets/mcqs.jpg';
import aiImg from '../assets/ai.jpg';
import pastpaperImg from '../assets/pastpaper.jpg';
import mocktest from '../assets/mocktest.avif';

/* ── SVG Doodles ── */
const Wave = ({ className, color = '#4F46E5', size = 70 }) => (
  <svg className={className} width={size} height={size * 0.4} viewBox="0 0 80 30" fill="none">
    <path d="M2 15 Q20 2 38 15 Q56 28 74 15" stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none" />
  </svg>
);
const Bookmark = ({ className, color = '#EF4444', size = 26 }) => (
  <svg className={className} width={size} height={size * 1.4} viewBox="0 0 26 36" fill="none">
    <path d="M3 2 H23 V34 L13 26 L3 34 Z" stroke={color} strokeWidth="2.5" fill={color + '25'} strokeLinejoin="round" />
  </svg>
);
const Sparkle = ({ className, color = '#F59E0B', size = 26 }) => (
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
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-34">
      {/* Background blobs */}
      <Blob className="absolute -top-8 right-48 opacity-10 -z-0" color="#FCD34D" />
      <Blob className="absolute bottom-16 left-12 opacity-10 -z-0" color="#A5B4FC" />

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
              <h1 className="text-5xl lg:text-6xl font-black leading-[1.07] tracking-tight" style={{ color: '#1E1B4B' }}>
                Pakistan's Smartest Way to{' '}
                <span className="relative inline-block">
                  Ace Exams
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 230 12" fill="none" preserveAspectRatio="none">
                    <path d="M2 6 Q30 1 58 6 Q88 11 116 6 Q146 1 172 6 Q200 11 228 6"
                      stroke="#F59E0B" strokeWidth="4.5" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <Sparkle className="absolute -right-4 top-4 hidden lg:block" color="#F59E0B" size={30} />
            </div>

            <p className="text-gray-500 text-md leading-relaxed mb-10 max-w-md">
              Unlimited MCQs, past papers, mock tests &amp; an AI tutor - all in one place.
              Built specifically for Matric, Inter, O-Level &amp; A-Level students across Pakistan.
            </p>

            <div className="flex items-center gap-5 -mt-7  flex-wrap">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-black text-gray-900 text-base shadow-[0_8px_28px_rgba(245,158,11,0.45)] hover:shadow-[0_12px_36px_rgba(245,158,11,0.6)] transition-shadow cursor-pointer"
                style={{ background: '#F59E0B' }}
              >
                Get Started Free
              </motion.button>

              <motion.button 
                whileHover={{ scale: 1.05, color: '#F59E0B' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 font-semibold text-gray-700 transition-colors group cursor-pointer"
              >
                <span
                  className="w-12 h-12 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform"
                  style={{ background: '#1E1B4B' }}
                >
                  <Play size={15} fill="white" color="white" className="ml-0.5" />
                </span>
                See How It Works
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column — 2×2 Animated Grid with Background Images from assets */}
          <div className="relative">
            {/* Doodles */}
            {/* <Bookmark className="absolute -top-6 left-1/2 -translate-x-16 z-20" color="#EF4444" size={26} /> */}
            <Sparkle  className="absolute top-2 right-4 z-20"   color="#F59E0B" size={28} />
            {/* <Wave     className="absolute -bottom-6 left-2 z-20" color="#4F46E5" size={72} /> */}
            <Sparkle  className="absolute top-1/2 -left-5 z-20"  color="#10B981" size={20} />

            {/* Custom Interactive 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Card 1: MCQ Bank (mcqs.jpg) */}
              <motion.div
                initial={{ opacity: 0, y: 25, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.15 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="relative overflow-hidden p-5 flex flex-col justify-between h-40 text-white shadow-xl group border-2 border-emerald-400/30 transform-gpu will-change-transform"
                style={{ borderRadius: '28px 12px 28px 16px' }}
              >
                {/* Background Image with Zoom Animation */}
                <motion.img 
                  src={mcqsImg} 
                  alt="MCQs Prep" 
                  className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 ease-out group-hover:scale-110 transform-gpu will-change-transform"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-900/60 to-emerald-800/40 z-10" />

                {/* Content */}
                <div className="relative z-20 flex justify-between items-start">
                  <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center border border-white/30">
                    <BookOpen size={22} className="text-white" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-600/90 text-white px-2.5 py-1 rounded-full border border-white/20">
                    10M+ Solved
                  </span>
                </div>
                
                <div className="relative z-20">
                  <div className="flex items-center gap-1.5 text-emerald-200 text-xs font-semibold mb-1">
                    <CheckCircle size={13} className="text-emerald-400" /> Topic-wise MCQs
                  </div>
                  <h3 className="font-black text-lg leading-snug text-white">Chapter MCQ Bank</h3>
                  <p className="text-xs text-emerald-100/85 mt-0.5">Detailed step-by-step keys</p>
                </div>
              </motion.div>

              {/* Card 2: AI Doubt Solver (ai.jpg) */}
              <motion.div
                initial={{ opacity: 0, y: 25, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.3 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="relative overflow-hidden p-5 flex flex-col justify-between h-40 text-white shadow-xl group border-2 border-amber-400/30 transform-gpu will-change-transform"
                style={{ borderRadius: '14px 28px 16px 28px' }}
              >
                {/* Background Image with Zoom Animation */}
                <motion.img 
                  src={aiImg} 
                  alt="AI Tutor" 
                  className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 ease-out group-hover:scale-110 transform-gpu will-change-transform"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950/95 via-amber-900/60 to-amber-800/40 z-10" />

                {/* Content */}
                <div className="relative z-20 flex justify-between items-start">
                  <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center border border-white/30">
                    <Sparkles size={22} className="text-amber-300 animate-pulse" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-amber-600/90 text-white px-2.5 py-1 rounded-full border border-white/20">
                    24/7 Instant
                  </span>
                </div>

                <div className="relative z-20">
                  <div className="flex items-center gap-1.5 text-amber-200 text-xs font-semibold mb-1">
                    <Sparkles size={13} className="text-amber-300" /> Smart Assistant
                  </div>
                  <h3 className="font-black text-lg leading-snug text-white">AI Study Partner</h3>
                  <p className="text-xs text-amber-100/85 mt-0.5">Ask Physics &amp; Math doubts</p>
                </div>
              </motion.div>

              {/* Card 3: Past Papers (pastpaper.jpg) */}
              <motion.div
                initial={{ opacity: 0, y: 25, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.45 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="relative overflow-hidden p-5 flex flex-col justify-between h-40 text-white shadow-xl group border-2 border-blue-400/30 transform-gpu will-change-transform"
                style={{ borderRadius: '16px 28px 24px 14px' }}
              >
                {/* Background Image with Zoom Animation */}
                <motion.img 
                  src={pastpaperImg} 
                  alt="Past Papers" 
                  className="absolute inset-0 w-full h-full object-cover object-[center_top] z-0 transition-transform duration-500 ease-out group-hover:scale-110 transform-gpu will-change-transform"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-900/60 to-blue-800/40 z-10" />

                {/* Content */}
                <div className="relative z-20 flex justify-between items-start">
                  <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center border border-white/30">
                    <BookText size={22} className="text-white" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-blue-600/90 text-white px-2.5 py-1 rounded-full border border-white/20">
                    10 Years
                  </span>
                </div>

                <div className="relative z-20">
                  <div className="flex items-center gap-1.5 text-blue-200 text-xs font-semibold mb-1">
                    <Award size={13} className="text-blue-300" /> FBISE &amp; BISE
                  </div>
                  <h3 className="font-black text-lg leading-snug text-white">Solved Past Papers</h3>
                  <p className="text-xs text-blue-100/85 mt-0.5">Filter by Board &amp; Year</p>
                </div>
              </motion.div>

              {/* Card 4: Timed Mock Exam (exam.jpg) */}
              <motion.div
                initial={{ opacity: 0, y: 25, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.6 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="relative overflow-hidden p-5 flex flex-col justify-between h-40 text-white shadow-xl group border-2 border-rose-400/30 transform-gpu will-change-transform"
                style={{ borderRadius: '28px 16px 14px 28px' }}
              >
                {/* Background Image with Zoom Animation */}
                <motion.img 
                  src={mocktest} 
                  alt="Mock Exam" 
                  className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 ease-out group-hover:scale-110 transform-gpu will-change-transform"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-rose-950/95 via-rose-900/60 to-rose-800/40 z-10" />

                {/* Content */}
                <div className="relative z-20 flex justify-between items-start">
                  <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center border border-white/30">
                    <Clock size={22} className="text-white" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-rose-600/90 text-white px-2.5 py-1 rounded-full border border-white/20">
                    Real Exam
                  </span>
                </div>

                <div className="relative z-20">
                  <div className="flex items-center gap-1.5 text-rose-200 text-xs font-semibold mb-1">
                    <GraduationCap size={13} className="text-rose-300" /> Exam Simulator
                  </div>
                  <h3 className="font-black text-lg leading-snug text-white">Board Mock Tests</h3>
                  <p className="text-xs text-rose-100/85 mt-0.5">Instant scoring &amp; rank</p>
                </div>
              </motion.div>

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
