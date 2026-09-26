import LegalPage from './LegalPage';

const sections = [
  {
    id: 'overview',
    title: 'Overview',
    body: [
      'PrepNation ("we", "us", "our") respects your privacy. This Privacy Policy explains what information we collect when you use the PrepNation mobile application, website and related services (the "Services"), how we use it, and the choices you have.',
    ],
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    body: [
      'Information you give us:',
      {
        list: [
          'Waitlist and contact details, such as your email address when you join our waitlist.',
          'Account details, such as your name, email, phone number, class or exam you are preparing for.',
          'Messages you send us through email, WhatsApp or in-app support.',
        ],
      },
      'Information collected automatically:',
      {
        list: [
          'Learning activity, such as MCQs attempted, mock test scores, progress and study time.',
          'Device and usage information, such as device type, operating system, app version and crash logs.',
          'Questions you ask the AI Tutor, used to provide answers and improve the feature.',
        ],
      },
      'Payments are processed by Google Play, the App Store or our payment partners. We do not store your full card or bank details.',
    ],
  },
  {
    id: 'how-we-use',
    title: 'How We Use Your Information',
    body: [
      {
        list: [
          'To create and manage your account and provide the Services.',
          'To personalise your practice, track your progress and recommend what to study next.',
          'To process subscriptions and send receipts.',
          'To send launch updates, offers and important service notices (you can opt out of marketing at any time).',
          'To respond to support requests and keep the Services secure.',
          'To analyse usage and improve our content and features.',
        ],
      },
    ],
  },
  {
    id: 'sharing',
    title: 'How We Share Information',
    body: [
      'We do not sell your personal information. We share it only:',
      {
        list: [
          'With service providers that help us run PrepNation, such as hosting, analytics, email and payment providers, under confidentiality obligations.',
          'With AI service providers, limited to the content needed to answer your AI Tutor questions.',
          'When required by law, or to protect the rights, safety and security of our users and PrepNation.',
          'As part of a merger, acquisition or sale of assets, in which case you will be notified.',
        ],
      },
    ],
  },
  {
    id: 'children',
    title: 'Students Under 18',
    body: [
      'Many of our users are school and college students. If you are under 18, please use PrepNation with the consent of a parent or guardian. Parents or guardians who believe their child has provided information without consent can contact us to have it reviewed or deleted.',
    ],
  },
  {
    id: 'retention',
    title: 'Data Retention',
    body: [
      'We keep your information for as long as your account is active or as needed to provide the Services. When you delete your account, we delete or anonymise your personal information within a reasonable period, unless we must keep it to meet legal obligations.',
    ],
  },
  {
    id: 'security',
    title: 'Data Security',
    body: [
      'We use reasonable technical and organisational measures, such as encrypted connections and access controls, to protect your information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.',
    ],
  },
  {
    id: 'your-rights',
    title: 'Your Choices & Rights',
    body: [
      {
        list: [
          'Access or update your account information at any time.',
          'Request a copy of the personal information we hold about you.',
          'Request deletion of your account and associated data.',
          'Unsubscribe from marketing emails using the link in any email.',
        ],
      },
      'To make a request, contact us using the details below.',
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies & Analytics',
    body: [
      'Our website and app may use cookies, local storage and similar technologies to remember your preferences and understand how the Services are used. You can control cookies through your browser settings.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. We will revise the "Last updated" date above and, for significant changes, notify you in the app or by email.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact Us',
    body: [
      'For privacy questions or requests, email us at dreambyte.space@gmail.com or message us on WhatsApp at +92 310 2110584.',
    ],
  },
];

const Privacy = () => (
  <LegalPage
    title="Privacy Policy"
    lastUpdated="September 26, 2026"
    intro="Your trust matters to us. This policy explains what information PrepNation collects, why we collect it, and how you can control it."
    sections={sections}
  />
);

export default Privacy;
