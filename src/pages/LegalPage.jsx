import PageLayout from './PageLayout';

// Renders a block of section content: plain strings become paragraphs,
// { list: [...] } becomes a bulleted list.
const Block = ({ block }) => {
  if (typeof block === 'string') {
    return <p className="text-gray-600 leading-relaxed">{block}</p>;
  }
  return (
    <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed marker:text-[#0861A8]">
      {block.list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

const LegalPage = ({ title, intro, lastUpdated, sections }) => (
  <PageLayout eyebrow="Legal" title={title} subtitle={`Last updated: ${lastUpdated}`} intro={intro}>
    <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
      {/* Table of contents */}
      <nav aria-label="On this page" className="hidden lg:block">
        <div className="sticky top-28">
          <p className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-3">On this page</p>
          <ol className="space-y-2 text-sm">
            {sections.map((section, i) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="text-gray-600 hover:text-[#0861A8] transition-colors">
                  {i + 1}. {section.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <article className="bg-white rounded-3xl shadow-sm border border-sky-100 p-6 sm:p-10 space-y-10">
        {sections.map((section, i) => (
          <section key={section.id} id={section.id} className="scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#064B83' }}>
              {i + 1}. {section.title}
            </h2>
            <div className="space-y-4">
              {section.body.map((block, j) => (
                <Block key={j} block={block} />
              ))}
            </div>
          </section>
        ))}
      </article>
    </div>
  </PageLayout>
);

export default LegalPage;
