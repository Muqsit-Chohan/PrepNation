import { motion } from 'framer-motion';
import { FileText, Brain, Target, BarChart2, PlayCircle, BookOpen, ArrowUpRight } from 'lucide-react';

const benefits = [
  {
    icon: FileText,
    iconColor: '#F59E0B',
    bgColor: '#FEF3C7',
    tag: '10 Years Solved',
    title: 'Solved Past Papers',
    desc: 'Complete 10-year past paper keys from all major boards (FBISE, Punjab, Sindh, KPK, Cambridge), indexed by chapter and difficulty.',
  },
  {
    icon: Brain,
    iconColor: '#8B5CF6',
    bgColor: '#EDE9FE',
    tag: '24/7 AI Assistance',
    title: 'Instant AI Tutor',
    desc: 'Stuck on a tricky Numerical or Reaction? Get instant step-by-step Urdu/English explanations 24/7 without waiting for tuition hours.',
  },
  {
    icon: Target,
    iconColor: '#EF4444',
    bgColor: '#FEE2E2',
    tag: 'Real Exam Pressure',
    title: 'Timed Mock Exams',
    desc: 'Simulate exact board exam conditions with countdown timers, negative marking options, and automated instant marksheets.',
  },
  {
    icon: BarChart2,
    iconColor: '#10B981',
    bgColor: '#D1FAE5',
    tag: 'Weakness Radar',
    title: 'Smart Learning Analytics',
    desc: 'Intelligent AI insights highlight your weakest chapters and recommend exact practice sets to boost your score efficiently.',
  },
  {
    icon: PlayCircle,
    iconColor: '#3B82F6',
    bgColor: '#DBEAFE',
    tag: 'Bite-sized Videos',
    title: 'Concept Video Lessons',
    desc: 'High-quality 5-minute video explanations focusing on frequently tested board questions and exam secrets.',
  },
  {
    icon: BookOpen,
    iconColor: '#D97706',
    bgColor: '#FEF3C7',
    tag: '10,000+ Questions',
    title: 'Topic-wise MCQ Bank',
    desc: 'Comprehensive chapter-wise question bank with conceptual hints, textbook page references, and memory tricks.',
  },
];

const Features = () => (
  <section className="py-24 bg-amber-50/30 relative overflow-hidden" id="why-us">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-200/80 mb-4">
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span className="text-xs font-black tracking-widest uppercase text-amber-800">
            THE PREPNATION ADVANTAGE
          </span>
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-indigo-950 mb-4 tracking-tight">
          Everything You Need to Outperform in Board Exams
        </h2>
        <p className="text-gray-500 text-base leading-relaxed">
          Designed specifically to eliminate exam fear and give Pakistani students the winning edge.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {benefits.map((b, i) => {
          const IconComp = b.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-7 border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Row */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ background: b.bgColor }}
                  >
                    <IconComp size={24} style={{ color: b.iconColor }} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-gray-100 text-gray-600 px-3 py-1 rounded-full group-hover:bg-amber-100 group-hover:text-amber-800 transition-colors">
                    {b.tag}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-black text-xl text-indigo-950 mb-3 group-hover:text-amber-600 transition-colors">
                  {b.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {b.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-indigo-950 group-hover:text-amber-600">
                <span>Explore Feature</span>
                <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          );
        })}
      </div>

    </div>
  </section>
);

export default Features;
