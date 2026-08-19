import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, FlaskConical, Zap, Dna, Monitor, BookOpen, Moon, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Subjects' },
  { id: 'science', label: 'Sciences' },
  { id: 'comp', label: 'Tech & Math' },
  { id: 'arts', label: 'General & Humanities' },
];

const subjects = [
  { 
    id: 1, 
    cat: 'comp', 
    icon: Calculator, 
    name: 'Mathematics', 
    boards: 'Matric / FSc / Cambridge', 
    count: '3,200+ MCQs', 
    color: '#F59E0B', 
    bg: '#FEF3C7' 
  },
  { 
    id: 2, 
    cat: 'science', 
    icon: FlaskConical, 
    name: 'Chemistry', 
    boards: 'FBISE, Punjab & Sindh', 
    count: '2,800+ MCQs', 
    color: '#8B5CF6', 
    bg: '#EDE9FE' 
  },
  { 
    id: 3, 
    cat: 'science', 
    icon: Zap, 
    name: 'Physics', 
    boards: 'Pre-Engineering / A-Level', 
    count: '3,100+ MCQs', 
    color: '#3B82F6', 
    bg: '#DBEAFE' 
  },
  { 
    id: 4, 
    cat: 'science', 
    icon: Dna, 
    name: 'Biology', 
    boards: 'Pre-Medical / MDCAT', 
    count: '2,900+ MCQs', 
    color: '#10B981', 
    bg: '#D1FAE5' 
  },
  { 
    id: 5, 
    cat: 'comp', 
    icon: Monitor, 
    name: 'Computer Science', 
    boards: 'ICS / O-Level Computer', 
    count: '2,100+ MCQs', 
    color: '#6366F1', 
    bg: '#E0E7FF' 
  },
  { 
    id: 6, 
    cat: 'arts', 
    icon: BookOpen, 
    name: 'English Grammar & Lit', 
    boards: 'Compulsory All Boards', 
    count: '1,800+ MCQs', 
    color: '#EC4899', 
    bg: '#FCE7F3' 
  },
  { 
    id: 7, 
    cat: 'arts', 
    icon: Moon, 
    name: 'Islamiat Elective/Comp', 
    boards: 'Matric & Intermediate', 
    count: '1,400+ MCQs', 
    color: '#059669', 
    bg: '#D1FAE5' 
  },
  { 
    id: 8, 
    cat: 'arts', 
    icon: Globe, 
    name: 'Pakistan Studies', 
    boards: 'All Boards Syllabi', 
    count: '1,600+ MCQs', 
    color: '#D97706', 
    bg: '#FEF3C7' 
  },
];

const TargetAudience = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = activeTab === 'all' 
    ? subjects 
    : subjects.filter(s => s.cat === activeTab);

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="for-students">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-xs font-black tracking-widest uppercase text-amber-700">
              PREP FOR ALL SUBJECTS
            </span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-indigo-950 mb-4 tracking-tight">
            Master Any Board Subject with Confidence
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Chapter-wise MCQs, 10-year solved past papers, and instant AI doubt explanations tailored to your exact board syllabus.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full font-bold text-xs transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-indigo-950 text-white shadow-md scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Subjects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filtered.map((sub) => {
              const IconComp = sub.icon;
              return (
                <motion.div
                  layout
                  key={sub.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -6 }}
                  className="bg-white border border-[#DCE5EF] rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-[0_18px_40px_rgba(21,154,156,0.16)] hover:border-[#159A9C] hover:bg-[#FBFCFF] transition-all duration-300 group"
                >
                  <div>
                    {/* Top Row: Icon + MCQ badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{ background: sub.bg }}
                      >
                        <IconComp size={24} style={{ color: sub.color }} />
                      </div>
                      <span className="text-[11px] font-black text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full group-hover:bg-[#DDF7F4] group-hover:text-[#064B83] transition-colors">
                        {sub.count}
                      </span>
                    </div>

                    {/* Subject info */}
                    <h3 className="font-black text-lg text-indigo-950 group-hover:text-[#2204EC] transition-colors mb-1">
                      {sub.name}
                    </h3>
                    <p className="text-xs text-gray-400 font-medium leading-relaxed">
                      {sub.boards}
                    </p>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="pt-5 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-indigo-950 group-hover:text-[#159A9C] transition-colors">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 size={13} className="text-emerald-500" /> Syllabus Ready
                    </span>
                    <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default TargetAudience;
