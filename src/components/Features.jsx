import { motion } from 'framer-motion';
import { FileText, Brain, BarChart2, BookOpen, ClipboardList, ArrowUpRight } from 'lucide-react';

const benefits = [
  {
    icon: FileText,
    iconColor: '#2204EC',
    bgColor: '#E8E5FF',
    tag: 'Study Anywhere',
    title: 'Notes Online',
    desc: 'Access organized chapter notes, key concepts and quick revision material online whenever you need it—at home or on the go.',
  },
  {
    icon: Brain,
    iconColor: '#8B5CF1',
    bgColor: '#F0E9FF',
    tag: '10 Years Online',
    title: 'Ten-Year Papers',
    desc: 'Practice a decade of board papers in one place, organized by subject, chapter and board so you can spot repeated exam patterns.',
  },
  {
    icon: Brain,
    iconColor: '#159A9C',
    bgColor: '#DDF7F4',
    tag: '24/7 Support',
    title: 'AI Assistant',
    desc: 'Ask questions in simple English or Urdu and get clear, step-by-step explanations whenever a concept feels difficult.',
  },
  {
    icon: BookOpen,
    iconColor: '#0861A8',
    bgColor: '#E0F2FF',
    tag: 'Practice Daily',
    title: 'MCQs',
    desc: 'Build confidence with topic-wise MCQs, instant answers, helpful hints and focused practice for every important chapter.',
  },
  {
    icon: ClipboardList,
    iconColor: '#B76F44',
    bgColor: '#FFF0E8',
    tag: 'Plan Your Prep',
    title: 'Study Sheets',
    desc: 'Use smart study sheets to organize your syllabus, track important topics and keep your daily preparation on course.',
  },
  {
    icon: BarChart2,
    iconColor: '#564B58',
    bgColor: '#EEEAF0',
    tag: 'Know Your Progress',
    title: 'Smart Analysis',
    desc: 'See your strengths, identify weak chapters and understand your progress with clear performance insights and recommendations.',
  },
];

const Features = () => (
  <section className="py-24 bg-amber-50/30 relative overflow-hidden scroll-mt-24" id="features">
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
              className="bg-white rounded-3xl p-7 border border-[#DCE5EF] shadow-sm hover:shadow-[0_20px_44px_rgba(34,4,236,0.14)] hover:border-[#8B5CF1] transition-all duration-300 flex flex-col justify-between group"
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
                  <span className="text-[10px] font-black uppercase tracking-wider bg-[#F0EEF5] text-[#564B58] px-3 py-1 rounded-full group-hover:bg-[#E8E5FF] group-hover:text-[#2204EC] transition-colors">
                    {b.tag}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-black text-xl text-indigo-950 mb-3 group-hover:text-[#2204EC] transition-colors">
                  {b.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {b.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-indigo-950 group-hover:text-[#159A9C]">
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
