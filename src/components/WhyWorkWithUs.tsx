import { Users, Eye, ShieldCheck, Layers, FileText, MessageSquare } from 'lucide-react';

const points = [
  {
    icon: Users,
    title: 'Scalable Workforce',
    desc: 'Project capacity can expand according to workload.',
  },
  {
    icon: Eye,
    title: 'Human Annotation',
    desc: 'Human-reviewed labeling based on defined project instructions.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Control',
    desc: 'Dedicated review process before delivery.',
  },
  {
    icon: Layers,
    title: 'Flexible Projects',
    desc: 'Support for pilots as well as larger annotation workflows.',
  },
  {
    icon: FileText,
    title: 'Custom Guidelines',
    desc: 'Workflows adapted to client-specific annotation instructions.',
  },
  {
    icon: MessageSquare,
    title: 'Direct Communication',
    desc: 'Clear communication throughout the project lifecycle.',
  },
];

export default function WhyWorkWithUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="text-xs font-semibold tracking-wider text-brand-600 uppercase mb-3 block">
            Why Work With Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            A Flexible Partner for AI Data Operations
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {points.map((pt, i) => (
            <div
              key={pt.title}
              className="flex gap-4 p-6 rounded-xl border border-slate-200 hover:border-brand-200 hover:bg-brand-50/30 transition-all reveal"
              style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
            >
              <div className="w-11 h-11 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
                <pt.icon className="w-5 h-5 text-brand-600" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900 mb-1">{pt.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{pt.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
