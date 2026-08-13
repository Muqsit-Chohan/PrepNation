const stats = [
  { value: '50K+',  label: 'Active Students' },
  { value: '10M+',  label: 'MCQs Solved' },
  { value: '7+',    label: 'Boards Covered' },
  { value: '24/7',  label: 'AI Tutor Access' },
];

const Stats = () => (
  <section className="py-10 px-4" style={{ background: '#FFFBEB' }}>
    <div className="max-w-5xl mx-auto">
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 rounded-[2.5rem] px-8 py-10"
        style={{ background: '#F59E0B', boxShadow: '0 12px 40px rgba(245,158,11,0.3)' }}
      >
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <h3 className="text-4xl font-black text-white">{s.value}</h3>
            <p className="text-amber-900/80 font-semibold text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
