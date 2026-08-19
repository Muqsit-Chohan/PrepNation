import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Sparkles, CheckCircle2 } from 'lucide-react';
import aiChatVideo from '../assets/Video/aichat.mp4';
import examVideo from '../assets/Video/exam.mp4';
import notesVideo from '../assets/Video/notes.mp4';
import topperVideo from '../assets/Video/topper.mp4';

const WhyChooseUs = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const videos = [examVideo, aiChatVideo, notesVideo, topperVideo];

  useEffect(() => {
    const timer = window.setInterval(() => setActiveVideo((current) => (current + 1) % videos.length), 3200);
    return () => window.clearInterval(timer);
  }, [videos.length]);

  return (
  <section id="about-us" className="py-24 overflow-hidden bg-white relative scroll-mt-24">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left: Animated app phone & experience badge */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative flex min-h-[430px] items-center justify-center">
            <div className="absolute h-72 w-72 rounded-full bg-[#B9E4FF]/70 blur-3xl" />
            <motion.div
              animate={{ y: [0, -9, 0], rotate: [-4, -1, -4] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-0 top-20 z-20 hidden w-40 rounded-2xl border border-white/90 bg-white/90 p-3 shadow-[0_16px_36px_rgba(34,4,236,0.14)] backdrop-blur-md sm:block"
            >
              <p className="text-[9px] font-black uppercase tracking-[.14em] text-[#564B58]">Board match</p>
              <p className="mt-2 text-sm font-bold text-[#06040F]">100% syllabus aligned</p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#E8E5FF]"><div className="h-full w-[92%] rounded-full bg-[#2204EC]" /></div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 9, 0], rotate: [4, 1, 4] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: .5 }}
              className="absolute bottom-20 right-0 z-20 hidden w-44 rounded-2xl bg-[#064B83] p-4 text-white shadow-[0_18px_40px_rgba(6,75,131,0.22)] sm:block"
            >
              <p className="text-[9px] font-bold uppercase tracking-[.16em] text-[#B9E4FF]">AI insights</p>
              <p className="mt-2 text-sm font-bold">Weaknesses found</p>
              <p className="mt-1 text-[10px] text-white/65">3 chapters ready to improve</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, rotate: -1 }}
              className="relative z-10 w-[min(58vw,235px)] rounded-[2.5rem] border-[7px] border-slate-900 bg-slate-900 p-1.5 shadow-[0_25px_60px_rgba(6,4,15,0.22)]"
            >
              <div className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-slate-950" />
              <div className="relative aspect-[9/18.5] overflow-hidden rounded-[2rem] bg-[#E8E5FF]">
                <motion.video
                  key={activeVideo}
                  src={videos[activeVideo]}
                  autoPlay
                  muted
                  loop
                  playsInline
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.55 }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#064B83]/15 via-transparent to-[#06040F]/80" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-[9px] font-bold uppercase tracking-[.18em] text-[#B9E4FF]">PrepNation app</p>
                  <h3 className="mt-1 text-lg font-bold">Learn. Practice. Improve.</h3>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating Experience Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 bg-indigo-950 text-white rounded-3xl p-6 shadow-2xl border border-indigo-900 flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-300 flex items-center justify-center text-gray-900 font-black shadow-lg">
                <Award size={26} />
              </div>
              <div>
                <p className="font-black text-xl text-sky-300">21+ Years Combined</p>
                <p className="text-xs text-indigo-200 font-medium">Educational Curriculum Expertise</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-400">
              <Sparkles size={14} /> 98.4% Success Rate
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Text & Key Highlights */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-xs font-black tracking-widest uppercase text-amber-700">
              OUR EXPERIENCE &amp; TRUST
            </span>
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6 text-indigo-950 tracking-tight">
            Built by Teachers &amp; Engineers Who Understand Pakistani Exams
          </h2>
          
          <p className="text-gray-500 leading-relaxed mb-8 text-base">
            PrepNation is a complete mobile application created to bridge the gap between traditional academy rote-learning and modern exam prep. Every single question in our bank is verified by senior board examiners.
          </p>

          <div className="space-y-4 mb-8">
            {[
              { title: '100% Board-Specific Syllabus Matching', desc: 'Tagged to FBISE, Punjab, Sindh, KPK, and Cambridge syllabi.' },
              { title: 'AI Doubt Solver Trained on Local Context', desc: 'Understands bilingual questions, Urdu notes, and local textbook terms.' },
              { title: 'Offline Mobile Access for Zero Interruption', desc: 'Download past papers & test keys to study without internet data.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-2xl bg-amber-50/50 border border-amber-100/80 hover:bg-amber-50 transition-colors">
                <CheckCircle2 size={22} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-indigo-950 text-base">{item.title}</h4>
                  <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full font-black text-gray-900 shadow-[0_8px_24px_rgba(21,154,156,0.24)]"
            style={{ background: '#8FD3F4' }}
          >
            Download the PrepNation Mobile App
          </motion.button>
        </motion.div>

      </div>
    </div>
  </section>
  );
};

export default WhyChooseUs;
