import { motion } from 'framer-motion';
import { CheckCircle2, Users, MessageSquare, Bot, Trophy, Send, Sparkles } from 'lucide-react';

const Companion = () => (
  <section className="py-24 overflow-hidden bg-amber-50/60">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Interactive Mock UI Showcase */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Card 1: AI Chat Widget Mock */}
            <div className="rounded-3xl p-5 shadow-xl bg-white border border-amber-100/80 relative overflow-hidden flex flex-col justify-between h-72">
              <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center text-white shadow-md">
                  <Bot size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-gray-900 flex items-center gap-1">
                    PrepAI Tutor <Sparkles size={12} className="text-amber-500" />
                  </h4>
                  <p className="text-[10px] text-emerald-600 font-semibold">Online 24/7</p>
                </div>
              </div>

              {/* Chat messages */}
              <div className="space-y-2.5 my-2">
                <div className="bg-gray-100 p-2.5 rounded-2xl rounded-tl-sm text-xs text-gray-700 max-w-[85%]">
                  How do I solve Physics Q#14 from 2023 BISE paper?
                </div>
                <div className="bg-amber-50 border border-amber-200/60 p-2.5 rounded-2xl rounded-tr-sm text-xs text-gray-800 ml-auto max-w-[90%] shadow-sm">
                  <span className="font-bold text-amber-700 block mb-0.5">Formula: F = ma</span>
                  Substitute m = 5kg and a = 9.8m/s² → F = 49 N.
                </div>
              </div>

              {/* Fake Input */}
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-3 py-1.5 text-xs text-gray-400">
                <span>Ask any doubt...</span>
                <Send size={12} className="ml-auto text-amber-500" />
              </div>
            </div>

            {/* Card 2: Leaderboard & Community Mock */}
            <div className="rounded-3xl p-5 shadow-xl bg-indigo-900 text-white relative overflow-hidden flex flex-col justify-between h-72 mt-0 sm:mt-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 bg-white/10 px-3 py-1 rounded-full">
                  Live Board
                </span>
                <Trophy size={20} className="text-amber-400" />
              </div>

              <div>
                <h4 className="font-black text-lg leading-tight mb-3">Top Rankers Pakistan</h4>
                <div className="space-y-2">
                  {[
                    { rank: '#1', name: 'Zainab Fatima', score: '1048/1100', board: 'FBISE' },
                    { rank: '#2', name: 'Hamza Ahmed', score: '1042/1100', board: 'Lahore Board' },
                    { rank: '#3', name: 'Sara Khan', score: '1035/1100', board: 'Karachi Board' },
                  ].map((st, i) => (
                    <div key={i} className="flex items-center justify-between bg-white/10 backdrop-blur-sm p-2 rounded-xl text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-black text-amber-400">{st.rank}</span>
                        <span className="font-semibold text-gray-100">{st.name}</span>
                      </div>
                      <span className="text-[10px] text-indigo-200">{st.score}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[11px] text-indigo-200 text-center font-medium">Updated 5 minutes ago</p>
            </div>

          </div>

          {/* Floating pill badge */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white px-5 py-3 rounded-2xl shadow-xl border border-amber-100 flex items-center gap-3 whitespace-nowrap z-20"
          >
            <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center">
              <Users size={18} className="text-amber-600" />
            </div>
            <div>
              <p className="font-black text-sm text-indigo-950">50,000+ Active Students</p>
              <p className="text-[11px] text-gray-400 font-medium">Studying across all boards in Pakistan</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right text content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-black tracking-[0.2em] uppercase mb-3 text-amber-600">
            STUDENT'S BEST STUDY PARTNER
          </p>
          <h2 className="text-3xl md:text-4xl font-black leading-tight mb-5 text-indigo-950">
            A Smarter, More<br />Collaborative Way to Study
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8 text-base">
            PrepNation isn't just a test-prep tool — it's your complete exam companion.
            Access thousands of topic-wise MCQs, chapter notes, video explanations,
            and a real-time AI tutor to clear every doubt instantly.
          </p>

          {[
            { label: 'AI Tutor for Instant Doubt Clearing',   sub: 'Get step-by-step solutions anytime, for free.' },
            { label: 'Community of 50K+ Pakistani Students',  sub: 'Study with peers, share tips, compete on leaderboards.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 mb-6">
              <CheckCircle2 size={22} className="flex-shrink-0 mt-0.5 text-amber-500" />
              <div>
                <h4 className="font-bold text-gray-900 text-base">{item.label}</h4>
                <p className="text-gray-400 text-sm mt-0.5">{item.sub}</p>
              </div>
            </div>
          ))}

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-8 py-4 rounded-full font-black text-gray-900 shadow-[0_8px_24px_rgba(245,158,11,0.4)]"
            style={{ background: '#F59E0B' }}
          >
            Start Studying Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Companion;
