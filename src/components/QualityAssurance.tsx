import { FileCheck2, PenLine, Search, PackageCheck } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: FileCheck2,
    title: 'Annotation Guidelines',
    desc: 'We establish project-specific classes, labeling rules, examples, and edge cases.',
  },
  {
    num: '02',
    icon: PenLine,
    title: 'Human Annotation',
    desc: 'Annotators process the dataset according to the approved guidelines.',
  },
  {
    num: '03',
    icon: Search,
    title: 'Quality Review',
    desc: 'Completed annotations are reviewed for missing labels, incorrect classifications, boundary errors, and consistency.',
  },
  {
    num: '04',
    icon: PackageCheck,
    title: 'Final Validation',
    desc: 'The approved dataset is prepared according to the required delivery format.',
  },
];

export default function QualityAssurance() {
  return (
    <section id="quality" className="py-20 lg:py-28 bg-slate-900 relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-xs font-semibold tracking-wider text-brand-400 uppercase mb-3 block">
            Quality Assurance
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
            Quality Built Into Every Dataset
          </h2>
          <p className="text-lg text-slate-400">
            Consistent annotation requires more than labeling. Our workflow includes structured guidelines
            and quality review before delivery.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="relative reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Node */}
                <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-0">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-brand-600/20 border border-brand-500/30 flex items-center justify-center backdrop-blur-sm">
                      <step.icon className="w-5 h-5 lg:w-6 lg:h-6 text-brand-400" strokeWidth={1.5} />
                    </div>
                    {/* Dot on timeline */}
                    <div className="hidden lg:block absolute top-1/2 left-full w-3 h-3 -translate-y-1/2 translate-x-[-6px] rounded-full bg-brand-500 ring-4 ring-slate-900" />
                  </div>
                  <div className="lg:mt-6">
                    <span className="text-sm font-mono font-semibold text-brand-400">{step.num}</span>
                    <h3 className="text-lg font-semibold text-white mt-1 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
