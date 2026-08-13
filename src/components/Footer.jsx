import { Globe, MessageCircle, Camera, BriefcaseBusiness, Mail } from 'lucide-react';

const Footer = () => {
  const links = {
    Company: ['About Us', 'Careers', 'Blog', 'Contact'],
    Resources: ['Past Papers', 'Mock Exams', 'Study Guides', 'Video Library'],
    Support: ['Help Center', 'Terms of Service', 'Privacy Policy', 'FAQ'],
  };

  return (
    <footer id="contact" className="text-white pt-20 pb-10" style={{ background: '#1E1B4B' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#4F46E5' }}>
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="font-bold text-xl">PrepNation</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Pakistan's smartest way to prep for your exams. Empowering students with modern tools, AI insights, and comprehensive resources.
            </p>
            <div className="flex gap-4">
              {[Globe, MessageCircle, Camera, BriefcaseBusiness].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-500 hover:text-white transition-colors">
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
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} PrepNation. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Mail size={14} />
            <span>support@prepnation.pk</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
