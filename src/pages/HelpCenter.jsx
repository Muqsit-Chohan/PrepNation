import { Rocket, CreditCard, BookOpen, UserCog, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import PageLayout from './PageLayout';

// Each topic links to the matching group on the FAQ page.
const topics = [
  { icon: Rocket, title: 'Getting Started', text: 'What PrepNation is, launch dates and the waitlist offer.', href: '/faq#general' },
  { icon: CreditCard, title: 'Plans & Payments', text: 'Free vs Premium, pricing, payments and cancelling.', href: '/faq#plans' },
  { icon: BookOpen, title: 'Studying', text: 'Boards covered, past papers and using the AI Tutor.', href: '/faq#study' },
  { icon: UserCog, title: 'Account & Privacy', text: 'Keeping your data safe and deleting your account.', href: '/faq#account' },
];

const contacts = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    text: 'Fastest way to reach us. We usually reply within a few hours.',
    label: '+92 310 2110584',
    href: 'https://wa.me/923102110584',
  },
  {
    icon: Mail,
    title: 'Email',
    text: 'For detailed questions, account requests and feedback.',
    label: 'dreambyte.space@gmail.com',
    href: 'mailto:dreambyte.space@gmail.com?subject=PrepNation%20Help',
  },
];

const HelpCenter = () => (
  <PageLayout
    eyebrow="Support"
    title="Help Center"
    intro="Find answers by topic or get in touch with the PrepNation team. We're here to help you prepare with confidence."
  >
    <section className="mb-14">
      <h2 className="text-xl font-bold mb-5" style={{ color: '#064B83' }}>Browse help topics</h2>
      <div className="grid gap-5 sm:grid-cols-2">
        {topics.map(({ icon: Icon, title, text, href }) => (
          <Link
            key={title}
            to={href}
            className="group bg-white rounded-3xl shadow-sm border border-sky-100 p-6 transition-all hover:shadow-xl hover:-translate-y-1"
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl mb-4" style={{ background: '#EAF5FF', color: '#0861A8' }}>
              <Icon size={22} />
            </div>
            <h3 className="font-bold text-lg mb-1" style={{ color: '#064B83' }}>{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">{text}</p>
            <span className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: '#0861A8' }}>
              View answers <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </section>

    <section className="mb-14">
      <h2 className="text-xl font-bold mb-5" style={{ color: '#064B83' }}>Contact support</h2>
      <div className="grid gap-5 sm:grid-cols-2">
        {contacts.map(({ icon: Icon, title, text, label, href }) => (
          <div key={title} className="bg-white rounded-3xl shadow-sm border border-sky-100 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: '#EAF5FF', color: '#0861A8' }}>
                <Icon size={20} />
              </div>
              <h3 className="font-bold text-lg" style={{ color: '#064B83' }}>{title}</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{text}</p>
            <a
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="inline-block text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-md break-all"
              style={{ background: '#0861A8' }}
            >
              {label}
            </a>
          </div>
        ))}
      </div>
    </section>

    <section className="rounded-3xl p-8 text-center text-white" style={{ background: 'linear-gradient(135deg, #064B83 0%, #0861A8 100%)' }}>
      <h2 className="text-2xl font-black mb-2">Looking for quick answers?</h2>
      <p className="text-white/80 mb-6">Most questions are already answered in our FAQ.</p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link to="/faq" className="px-6 py-3 rounded-full font-bold text-sm" style={{ background: '#8FD3F4', color: '#064B83' }}>
          Read the FAQ
        </Link>
        <Link to="/terms" className="px-6 py-3 rounded-full font-bold text-sm border border-white/40 hover:bg-white/10">
          Terms &amp; Conditions
        </Link>
        <Link to="/privacy" className="px-6 py-3 rounded-full font-bold text-sm border border-white/40 hover:bg-white/10">
          Privacy Policy
        </Link>
      </div>
    </section>
  </PageLayout>
);

export default HelpCenter;
