
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Ali Raza',
    board: 'Federal Board, Islamabad',
    text: "PrepNation changed how I study completely. The AI tutor cleared my physics doubts instantly — something my teacher couldn't do in 3 months!",
    initial: 'A',
    bg: '#4F46E5',
  },
  {
    name: 'Fatima Sheikh',
    board: 'Sindh Board, Karachi',
    text: "The past papers are extremely organized and explanations are super detailed. My score went from 72% to 91% in just one month of using PrepNation.",
    initial: 'F',
    bg: '#10B981',
  },
  {
    name: 'Usman Malik',
    board: 'Cambridge O-Levels',
    text: "Best exam prep app in Pakistan, hands down. Topic-wise MCQs, timed tests, and analytics — everything a student needs in one place.",
    initial: 'U',
    bg: '#F59E0B',
  },
];

const Testimonials = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <div className="text-center mb-14">
        <p className="text-xs font-black tracking-[0.2em] uppercase mb-3" style={{ color: '#F59E0B' }}>
          OUR STUDENTS' RESULTS
        </p>
        <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: '#1E1B4B' }}>
          What Our Students Say About Us
        </h2>
        {/* Avatar row */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <div className="flex -space-x-3">
            {['#4F46E5', '#F59E0B', '#EF4444', '#10B981', '#8B5CF6'].map((c, i) => (
              <div key={i} className="w-9 h-9 rounded-full border-2 border-white" style={{ background: c }}></div>
            ))}
          </div>
          <div className="text-left">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />)}
            </div>
            <p className="text-xs text-gray-400">4.9/5 from 3,200+ reviews</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-7">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="rounded-3xl p-7 relative border border-gray-100"
            style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
          >
            <Quote size={36} className="absolute top-5 right-5 opacity-8" style={{ color: '#FDE68A' }} />

            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, si) => <Star key={si} size={14} fill="#F59E0B" color="#F59E0B" />)}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-7">{r.text}</p>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-base flex-shrink-0"
                style={{ background: r.bg }}>
                {r.initial}
              </div>
              <div>
                <h4 className="font-black text-sm" style={{ color: '#1E1B4B' }}>{r.name}</h4>
                <p className="text-xs text-gray-400">{r.board}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
