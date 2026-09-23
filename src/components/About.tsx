import { Users, Gauge, Workflow, Target } from 'lucide-react';

const highlights = [
  { icon: Users, label: 'Scalable Workforce' },
  { icon: Gauge, label: '5–50+ Project Capacity' },
];

const features = [
  {
    icon: Workflow,
    title: 'Structured Quality Workflows',
    desc: 'Every project follows a defined annotation guideline, review, and validation process.',
  },
  {
    icon: Target,
    title: 'Client-Specific Approach',
    desc: 'Workflows are adapted to your dataset, classes, instructions, and output requirements.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="reveal">
            <span className="text-xs font-semibold tracking-wider text-brand-600 uppercase mb-3 block">
              About Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-5 leading-tight">
              A Scalable Team Focused on AI Data
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              We provide human-powered image annotation and data labeling services for organizations
              developing AI and computer vision systems. Our approach combines a dedicated core team,
              structured quality workflows, and scalable project capacity to support different dataset
              sizes and annotation requirements.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 mb-8">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-50 border border-brand-100 rounded-lg"
                >
                  <h.icon className="w-4 h-4 text-brand-600" strokeWidth={1.5} />
                  <span className="text-sm font-semibold text-brand-700">{h.label}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-slate-400 mb-8">
              Workforce capacity is project-based and scalable — not permanent headcount.
            </p>

            {/* MSME Registration */}
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold text-slate-700 mb-1">MSME Registered</p>
              <p className="text-xs font-mono text-slate-500">UDYAM-WB-14-0202932</p>
              <p className="text-xs text-slate-400 mt-1">Kolkata, India</p>
            </div>
          </div>

          {/* Visual: Workflow diagram */}
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="relative bg-slate-50 rounded-2xl border border-slate-200 p-8">
              <div className="absolute top-4 right-4 text-[10px] font-mono text-slate-400">
                workflow_diagram
              </div>

              {/* Pipeline visual */}
              <div className="space-y-4">
                {/* Stage 1 */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Target className="w-5 h-5 text-brand-600" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 h-12 bg-white rounded-lg border border-slate-200 flex items-center px-4 shadow-sm">
                    <span className="text-sm font-medium text-slate-700">Dataset Input</span>
                  </div>
                </div>
                <div className="ml-5 h-6 w-px bg-slate-300" />

                {/* Stage 2 */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Users className="w-5 h-5 text-brand-600" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 h-12 bg-white rounded-lg border border-slate-200 flex items-center px-4 shadow-sm">
                    <span className="text-sm font-medium text-slate-700">Human Annotation Team</span>
                  </div>
                </div>
                <div className="ml-5 h-6 w-px bg-slate-300" />

                {/* Stage 3 */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Workflow className="w-5 h-5 text-brand-600" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 h-12 bg-white rounded-lg border border-slate-200 flex items-center px-4 shadow-sm">
                    <span className="text-sm font-medium text-slate-700">Quality Review & Validation</span>
                  </div>
                </div>
                <div className="ml-5 h-6 w-px bg-slate-300" />

                {/* Stage 4 */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Gauge className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 h-12 bg-brand-600 rounded-lg flex items-center px-4 shadow-sm">
                    <span className="text-sm font-semibold text-white">Labeled Dataset Delivery</span>
                  </div>
                </div>
              </div>

              {/* Capacity bar */}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-slate-600">Scalable Capacity</span>
                  <span className="text-xs font-bold text-brand-600">5–50+ annotators</span>
                </div>
                <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-brand-400 to-brand-700 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
