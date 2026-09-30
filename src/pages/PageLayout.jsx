import { useEffect } from 'react';

// Shared header and content column for the legal, help and FAQ routes.
// Navbar and footer come from App.
const PageLayout = ({ eyebrow, title, subtitle, intro, children }) => {
  useEffect(() => {
    document.title = `${title} | Prep4Ever`;
  }, [title]);

  return (
    <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <header className="max-w-4xl mx-auto mb-12">
        <p className="text-sm font-bold tracking-wide uppercase mb-3" style={{ color: '#0861A8' }}>
          {eyebrow}
        </p>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4" style={{ color: '#064B83' }}>
          {title}
        </h1>
        {subtitle && <p className="text-sm text-gray-500 mb-6">{subtitle}</p>}
        <p className="text-gray-600 leading-relaxed text-lg">{intro}</p>
      </header>

      <div className="max-w-4xl mx-auto">{children}</div>
    </main>
  );
};

export default PageLayout;
