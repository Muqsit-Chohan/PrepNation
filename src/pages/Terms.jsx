import LegalPage from './LegalPage';

const sections = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    body: [
      'By downloading, accessing or using the PrepNation mobile application, website or any related services (together, the "Services"), you agree to be bound by these Terms & Conditions. If you do not agree, please do not use the Services.',
      'If you are under 18, you may use PrepNation only with the involvement and consent of a parent or legal guardian, who agrees to these Terms on your behalf.',
    ],
  },
  {
    id: 'services',
    title: 'Our Services',
    body: [
      'PrepNation is an exam-preparation platform for students in Pakistan. The Services include study notes, MCQ practice, past papers, mock exams, performance tracking, AI-assisted tutoring and, on some plans, mentorship.',
      'We may add, change or remove features at any time. Content is provided for learning and practice purposes; we do not guarantee any particular exam result or admission outcome.',
    ],
  },
  {
    id: 'accounts',
    title: 'Your Account',
    body: [
      'Some features require an account. You agree to:',
      {
        list: [
          'Provide accurate and up-to-date information when registering.',
          'Keep your login credentials confidential and not share your account with others.',
          'Notify us promptly if you suspect unauthorised use of your account.',
        ],
      },
      'You are responsible for all activity that takes place under your account.',
    ],
  },
  {
    id: 'subscriptions',
    title: 'Subscriptions & Payments',
    body: [
      'PrepNation offers a free plan and paid Premium plans. Prices are shown in Pakistani Rupees (PKR) and may change; any change will apply from your next billing period.',
      {
        list: [
          'Paid plans renew automatically at the end of each billing period unless cancelled before the renewal date.',
          'Purchases made through Google Play or the App Store are also governed by that store\'s payment and refund terms.',
          'Promotional offers, such as a free Premium trial for waitlist members, are subject to the conditions stated at the time of the offer and may be withdrawn at any time.',
          'Except where required by law or the applicable app store policy, payments are non-refundable.',
        ],
      },
    ],
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable Use',
    body: [
      'You agree not to:',
      {
        list: [
          'Copy, resell, redistribute or publicly share PrepNation content without our written permission.',
          'Use bots, scrapers or other automated means to access the Services.',
          'Attempt to interfere with, reverse-engineer or gain unauthorised access to the Services.',
          'Use the Services for cheating in any examination or for any unlawful purpose.',
          'Post or send content that is abusive, offensive, misleading or infringes the rights of others.',
        ],
      },
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    body: [
      'All content on PrepNation, including notes, questions, explanations, graphics, logos and software, is owned by PrepNation or its licensors and is protected by applicable intellectual property laws. We grant you a limited, personal, non-transferable licence to use the Services for your own non-commercial study.',
      'Past papers published by examination boards remain the property of their respective owners and are provided for educational reference.',
    ],
  },
  {
    id: 'ai-features',
    title: 'AI Features',
    body: [
      'AI Tutor answers are generated automatically and may occasionally be incomplete or inaccurate. Always verify important information against your textbooks, teachers or official board material.',
    ],
  },
  {
    id: 'termination',
    title: 'Suspension & Termination',
    body: [
      'We may suspend or terminate your access if you breach these Terms or misuse the Services. You may stop using PrepNation and request deletion of your account at any time by contacting us.',
    ],
  },
  {
    id: 'liability',
    title: 'Disclaimers & Limitation of Liability',
    body: [
      'The Services are provided "as is" and "as available" without warranties of any kind. To the fullest extent permitted by law, PrepNation will not be liable for any indirect, incidental or consequential loss arising from your use of the Services, and our total liability will not exceed the amount you paid us in the three months before the claim.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to These Terms',
    body: [
      'We may update these Terms from time to time. When we do, we will revise the "Last updated" date above and, for significant changes, notify you in the app or by email. Continued use of the Services after changes take effect means you accept the updated Terms.',
    ],
  },
  {
    id: 'governing-law',
    title: 'Governing Law',
    body: [
      'These Terms are governed by the laws of the Islamic Republic of Pakistan. Any dispute will be subject to the exclusive jurisdiction of the courts of Pakistan.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact Us',
    body: [
      'Questions about these Terms? Email us at dreambyte.space@gmail.com or message us on WhatsApp at +92 310 2110584.',
    ],
  },
];

const Terms = () => (
  <LegalPage
    title="Terms & Conditions"
    lastUpdated="September 26, 2026"
    intro="These Terms & Conditions explain the rules for using PrepNation. Please read them carefully — they cover your account, subscriptions, acceptable use and your rights and responsibilities."
    sections={sections}
  />
);

export default Terms;
