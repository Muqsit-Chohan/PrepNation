import { Globe, MessageCircle, Camera, BriefcaseBusiness, Mail } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const links = {
    Company: [['About Us', '#about-us'], ['Careers', 'mailto:support@prepnation.pk?subject=Careers%20at%20PrepNation'], ['Blog', '#features'], ['Contact', '#announcement']],
    Resources: [['Past Papers', '#for-students'], ['Mock Exams', '#for-students'], ['Study Guides', '#features'], ['Video Library', '#features']],
    Support: [['Help Center', 'mailto:support@prepnation.pk?subject=PrepNation%20Help'], ['Terms of Service', '#announcement'], ['Privacy Policy', '#announcement'], ['FAQ', '#features']],
  };

  return (
    <footer id="contact" className="text-white pt-20 pb-10" style={{ background: '#064B83' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <img src={logo} alt="PrepNation Logo" className="h-8 w-auto rounded-md" />
              <span className="font-bold text-xl">PrepNation</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Pakistan's smartest exam-prep mobile application. Learn, practice and track your progress from one powerful app.
            </p>
            <div className="flex gap-4 text-white">
              {[
                [Globe, 'https://prepnation.pk'],
                [MessageCircle, 'https://wa.me/923001234567'],
                [Camera, 'https://www.instagram.com/'],
                [BriefcaseBusiness, 'https://www.linkedin.com/'],
              ].map(([Icon, href], i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer" aria-label={['Website', 'WhatsApp', 'Instagram', 'LinkedIn'][i]} className="text-white hover:text-[#B9E4FF] transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="font-bold text-white mb-5 text-sm tracking-wide">{heading}</h4>
              <ul className="space-y-3">
              {items.map(([item, href]) => (
                  <li key={item}>
                    <a href={href} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-sm">
            © 2026 PrepNation. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white text-sm">
            <Mail size={14} />
            <a href="mailto:support@prepnation.pk" className="hover:text-white transition-colors">support@prepnation.pk</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
