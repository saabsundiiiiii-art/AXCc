import { Rocket, Factory, Maximize2, TrendingUp } from 'lucide-react';

const stages = [
  {
    icon: Rocket,
    name: 'Pilot',
    features: [
      'Small dataset',
      'Sample validation',
      'Workflow alignment',
    ],
    size: '2–5 annotators',
  },
  {
    icon: Factory,
    name: 'Production',
    features: [
      'Dedicated annotation capacity',
      'Regular QA',
      'Scheduled delivery',
    ],
    size: '5–20 annotators',
  },
  {
    icon: Maximize2,
    name: 'Scale',
    features: [
      'Expanded workforce',
      'Large dataset processing',
      'Flexible project capacity',
    ],
    size: '20–50+ annotators',
  },
];

export default function Scalability() {
  return (
    <section id="scalability" className="py-20 lg:py-28 bg-gradient-to-b from-brand-50/50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-100/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-14">
          <div className="reveal">
            <span className="text-xs font-semibold tracking-wider text-brand-600 uppercase mb-3 block">
              Scalability
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4 leading-tight">
              Scale Your Annotation Workforce When You Need It
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Start with a pilot and expand capacity as your dataset grows.
            </p>
            <p className="text-base text-slate-500 leading-relaxed">
              Our flexible workforce model allows us to allocate additional annotators according to
              dataset size, project deadlines, and annotation complexity.
            </p>
          </div>

          {/* Capacity highlight */}
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-600 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-semibold text-slate-900">Project Capacity</span>
              </div>
              <p className="text-4xl font-bold text-brand-600 mb-2">5–50+</p>
              <p className="text-sm text-slate-600 mb-4">Annotators available based on project requirements</p>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-slate-500">Pilot</span>
                    <span className="font-semibold text-slate-700">2–5</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[10%] bg-brand-300 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-slate-500">Production</span>
                    <span className="font-semibold text-slate-700">5–20</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[40%] bg-brand-500 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-slate-500">Scale</span>
                    <span className="font-semibold text-slate-700">20–50+</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[100%] bg-brand-700 rounded-full" />
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-4">
                Workforce capacity is project-based and scalable — not permanent headcount.
              </p>
            </div>
          </div>
        </div>

        {/* Three stages */}
        <div className="grid md:grid-cols-3 gap-5">
          {stages.map((stage, i) => (
            <div
              key={stage.name}
              className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:shadow-slate-200/50 transition-all reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center">
                  <stage.icon className="w-5 h-5 text-brand-600" strokeWidth={1.5} />
                </div>
                <span className="text-xs font-mono font-semibold text-slate-400">{stage.size}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{stage.name}</h3>
              <ul className="space-y-2">
                {stage.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
