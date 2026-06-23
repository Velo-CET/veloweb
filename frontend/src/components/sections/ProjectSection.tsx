interface ProjectSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageLabel: string;
  reversed?: boolean;
  tags: string[];
}

export default function ProjectSection({
  id,
  title,
  subtitle,
  description,
  imageLabel,
  reversed = false,
  tags,
}: ProjectSectionProps) {
  return (
    <section id={id} className="min-h-[80vh] flex items-center py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            reversed ? "lg:direction-rtl" : ""
          }`}
        >
          <div className={`${reversed ? "lg:order-2" : ""}`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-xs font-medium mb-4">
              {subtitle}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-6">{description}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="#"
              className="inline-flex items-center px-8 py-3 text-sm font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-full transition-all hover:shadow-lg hover:shadow-cyan-500/25"
            >
              View Project Details
            </a>
          </div>

          <div className={`${reversed ? "lg:order-1" : ""}`}>
            <div className="aspect-[4/5] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-slate-700/50 flex items-center justify-center">
                  <svg className="w-8 h-8 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm text-slate-500 font-medium">{imageLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
