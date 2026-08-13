import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Laptop, ClipboardCheck, ShieldCheck, Award, Sparkles, CheckCircle2 } from 'lucide-react';

const WhyChooseUs = () => (
  <section className="py-24 overflow-hidden bg-white relative">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left: Interactive Feature Cards Grid & Experience Badge */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-5">
            {[
              { 
                Icon: BookOpen, 
                bg: 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%)', 
                tall: true, 
                title: 'Board Matched', 
                desc: '100% FBISE & Provincial' 
              },
              { 
                Icon: GraduationCap, 
                bg: 'linear-gradient(135deg, #818CF8 0%, #4F46E5 100%)', 
                tall: false, 
                title: 'Toppers Choice', 
                desc: '95%+ Average Score' 
              },
              { 
                Icon: ClipboardCheck, 
                bg: 'linear-gradient(135deg, #34D399 0%, #059669 100%)', 
                tall: false, 
                title: 'Smart AI Radar', 
                desc: 'Weakness Tracking' 
              },
              { 
                Icon: Laptop, 
                bg: 'linear-gradient(135deg, #F87171 0%, #DC2626 100%)', 
                tall: true, 
                title: 'Offline Downloads', 
                desc: 'Zero Data Mode' 
              },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.03, y: -4 }}
                className="rounded-3xl p-6 shadow-xl flex flex-col justify-between relative overflow-hidden text-white border border-white/20" 
                style={{ height: item.tall ? '250px' : '190px', background: item.bg }}
              >
                <div className="w-11 h-11 rounded-2xl bg-white/25 backdrop-blur-md flex items-center justify-center shadow-sm">
                  <item.Icon size={22} className="text-white" />
                </div>

                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-black/20 text-white px-3 py-1 rounded-full backdrop-blur-sm inline-block mb-2">
                    {item.desc}
                  </span>
                  <h4 className="font-black text-lg leading-snug">{item.title}</h4>
                </div>
              </motion.div>
            ))}
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
              <div className="w-12 h-12 rounded-2xl bg-amber-500 flex items-center justify-center text-gray-900 font-black shadow-lg">
                <Award size={26} />
              </div>
              <div>
                <p className="font-black text-xl text-amber-400">21+ Years Combined</p>
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
            PrepNation was created to bridge the gap between traditional academy rote-learning and modern exam prep. Every single question in our bank is verified by senior board examiners.
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
            className="px-8 py-4 rounded-full font-black text-gray-900 shadow-[0_8px_24px_rgba(245,158,11,0.4)]"
            style={{ background: '#F59E0B' }}
          >
            Join 50,000+ Students Today
          </motion.button>
        </motion.div>

      </div>
    </div>
  </section>
);

export default WhyChooseUs;
