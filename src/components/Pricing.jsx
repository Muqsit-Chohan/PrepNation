import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: 'PKR 0',
    period: '',
    tagline: 'Just getting started',
    features: ['100 MCQs per day', 'Limited past papers', 'Basic performance stats'],
    popular: false,
  },
  {
    name: 'Basic',
    price: 'PKR 99',
    period: '/mo',
    tagline: 'Great for regular practice',
    features: ['Unlimited MCQs', 'All past papers (5 yrs)', 'Basic AI Tutor'],
    popular: false,
  },
  {
    name: 'Standard',
    price: 'PKR 149',
    period: '/mo',
    tagline: 'Most popular among toppers',
    features: ['Everything in Basic', 'Advanced AI Tutor', 'Mock Exams', 'Full Analytics'],
    popular: true,
  },
  {
    name: 'Premium',
    price: 'PKR 299',
    period: '/mo',
    tagline: 'Complete success package',
    features: ['All Standard features', '1-on-1 Mentorship', 'Priority Support', 'Offline Downloads'],
    popular: false,
  },
];

const Pricing = () => (
  <section className="py-24 bg-white" id="pricing">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <div className="text-center mb-16">
        <p className="text-xs font-black tracking-[0.2em] uppercase mb-3" style={{ color: '#F59E0B' }}>
          SIMPLE PRICING
        </p>
        <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: '#1E1B4B' }}>
          Pricing That Works for Pakistani Students
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-base">
          Premium exam prep at a fraction of the cost of traditional academies.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="relative rounded-3xl p-7 flex flex-col"
            style={plan.popular
              ? { background: '#1E1B4B', boxShadow: '0 20px 50px rgba(30,27,75,0.3)', transform: 'scale(1.04)', zIndex: 10 }
              : { background: '#FFFBEB', border: '1.5px solid #FDE68A' }
            }
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-black px-4 py-1.5 rounded-full tracking-widest"
                style={{ background: '#F59E0B', color: '#1E1B4B' }}>
                ⭐ MOST POPULAR
              </div>
            )}

            <div className="mb-6">
              <p className="font-bold text-sm mb-1" style={{ color: plan.popular ? '#FCD34D' : '#F59E0B' }}>{plan.name}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black" style={{ color: plan.popular ? '#fff' : '#1E1B4B' }}>{plan.price}</span>
                <span className="text-sm" style={{ color: plan.popular ? '#9CA3AF' : '#6B7280' }}>{plan.period}</span>
              </div>
              <p className="text-xs mt-1" style={{ color: plan.popular ? '#9CA3AF' : '#9CA3AF' }}>{plan.tagline}</p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((f, fi) => (
                <li key={fi} className="flex items-center gap-2.5 text-sm">
                  <Check size={16} style={{ color: plan.popular ? '#F59E0B' : '#F59E0B', flexShrink: 0 }} />
                  <span style={{ color: plan.popular ? '#D1D5DB' : '#4B5563' }}>{f}</span>
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3.5 rounded-xl font-black text-sm transition-all"
              style={plan.popular
                ? { background: '#F59E0B', color: '#1E1B4B', boxShadow: '0 4px 16px rgba(245,158,11,0.5)' }
                : { background: 'white', color: '#1E1B4B', border: '1.5px solid #FDE68A' }
              }
            >
              Choose Plan
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
