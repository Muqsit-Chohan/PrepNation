import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router';
import PageLayout from './PageLayout';

const faqGroups = [
  {
    id: 'general',
    title: 'General',
    items: [
      ['What is PrepNation?', 'PrepNation is an exam-preparation app for students in Pakistan. It brings notes, MCQ practice, past papers, mock tests, progress tracking and an AI Tutor together in one place.'],
      ['Who is PrepNation for?', 'Matric and Intermediate students across Pakistan (FBISE, Punjab, Sindh and other boards) who want structured, focused practice for their board exams.'],
      ['When will the app launch?', 'PrepNation is launching soon on Google Play and the App Store. Join the waitlist on our home page and we will email you the moment it goes live.'],
      ['Does PrepNation work offline?', 'Offline downloads of notes and past papers are included in the Premium plan (PKR 299/month). Other features need an internet connection.'],
    ],
  },
  {
    id: 'waitlist',
    title: 'Waitlist & Launch Offer',
    items: [
      ['How do I join the waitlist?', 'Enter your email in the "Join Waitlist" form on the home page. You will get launch updates and your free Premium pass by email.'],
      ['What do waitlist members get?', 'Everyone who joins the waitlist before launch gets a 30-day Premium pass free when the app goes live.'],
      ['Will you spam my inbox?', 'No. We only email launch news and important updates, and you can unsubscribe at any time.'],
    ],
  },
  {
    id: 'plans',
    title: 'Plans & Payments',
    items: [
      ['Is there a free plan?', 'Yes. The Free plan includes 100 MCQs per day, a selection of past papers and basic performance stats, at no cost.'],
      ['How much do Premium plans cost?', 'Paid plans start from PKR 99 per month. See the Pricing section on our home page for the full comparison.'],
      ['How do I pay?', 'Subscriptions are purchased securely through Google Play or the App Store, using any payment method those stores support in Pakistan.'],
      ['Can I cancel anytime?', 'Yes. You can cancel from your Google Play or App Store subscription settings. You keep Premium access until the end of the billing period you have paid for.'],
    ],
  },
  {
    id: 'study',
    title: 'Studying with PrepNation',
    items: [
      ['Which boards and exams are covered?', 'We are starting with the major Pakistani boards and entry tests, and adding more subjects and boards regularly. Tell us which one you need and we will prioritise it.'],
      ['How does the AI Tutor work?', 'Ask any question about a topic or an MCQ and the AI Tutor explains it step by step. AI answers can occasionally be wrong, so double-check important points with your textbook or teacher.'],
      ['Are the past papers official?', 'Past papers are collected from board exams for practice and reference, along with solutions prepared by our team.'],
    ],
  },
  {
    id: 'account',
    title: 'Account & Privacy',
    items: [
      ['Is my data safe?', 'Yes. We never sell your personal information. Read our Privacy Policy for details on what we collect and how it is protected.'],
      ['How do I delete my account?', 'Email us at dreambyte.space@gmail.com from your registered email and we will delete your account and data.'],
    ],
  },
];

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-sky-100 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
      >
        <span className="font-semibold" style={{ color: '#064B83' }}>{question}</span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          style={{ color: '#0861A8' }}
        />
      </button>
      {open && <p className="pb-5 -mt-1 text-gray-600 leading-relaxed">{answer}</p>}
    </div>
  );
};

const Faq = () => (
  <PageLayout
    eyebrow="Support"
    title="Frequently Asked Questions"
    intro="Quick answers about PrepNation, the launch waitlist, plans and your account. Can't find what you need? Visit the Help Center."
  >
    <div className="space-y-8">
      {faqGroups.map((group) => (
        <section key={group.id} id={group.id} className="scroll-mt-28">
          <h2 className="text-xl font-bold mb-3" style={{ color: '#064B83' }}>{group.title}</h2>
          <div className="bg-white rounded-3xl shadow-sm border border-sky-100 px-6 sm:px-8">
            {group.items.map(([q, a]) => (
              <FaqItem key={q} question={q} answer={a} />
            ))}
          </div>
        </section>
      ))}

      <div className="text-center pt-4">
        <p className="text-gray-600 mb-4">Still have a question?</p>
        <Link
          to="/help"
          className="inline-block text-white px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-md"
          style={{ background: '#0861A8' }}
        >
          Go to Help Center
        </Link>
      </div>
    </div>
  </PageLayout>
);

export default Faq;
