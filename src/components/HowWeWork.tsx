import { ArrowRight, Send, Layers, Users, ShieldCheck, PackageCheck } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Send,
    title: 'Share Requirements',
    desc: 'Send your dataset, annotation instructions, classes, expected volume, and output requirements.',
  },
  {
    num: '02',
    icon: Layers,
    title: 'Sample & Alignment',
    desc: 'We annotate a small sample to confirm the labeling methodology and expectations.',
  },
  {
    num: '03',
    icon: Users,
    title: 'Production Annotation',
    desc: 'The scalable annotation workforce processes the approved dataset.',
  },
  {
    num: '04',
    icon: ShieldCheck,
    title: 'Quality Control',
    desc: 'The completed work goes through a structured review process.',
  },
  {
    num: '05',
    icon: PackageCheck,
    title: 'Final Delivery',
    desc: 'The approved dataset is delivered in the agreed format.',
  },
];

export default function HowWeWork() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-xs font-semibold tracking-wider text-brand-600 uppercase mb-3 block">
            How We Work
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            From Dataset to Delivery
          </h2>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Vertical line for mobile */}
          <div className="lg:hidden absolute left-6 top-4 bottom-4 w-px bg-slate-200" />
          {/* Horizontal line for desktop */}
          <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-slate-200 via-brand-200 to-slate-200" />

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-2">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="relative flex lg:flex-col items-start gap-4 lg:gap-0 lg:items-center lg:text-center reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Number circle */}
                <div className="relative flex-shrink-0 lg:mb-4">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-brand-200 flex items-center justify-center shadow-sm z-10 relative">
                    <step.icon className="w-6 h-6 text-brand-600" strokeWidth={1.5} />
                  </div>
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-brand-600 text-white text-[10px] font-bold flex items-center justify-center z-20">
                    {step.num}
                  </span>
                </div>
                <div className="lg:px-2">
                  <h3 className="text-base font-semibold text-slate-900 mb-1.5">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14 reveal">
          <a
            href="#contact?tab=sample"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-lg shadow-lg shadow-brand-600/20 transition-all hover:shadow-xl"
          >
            Start a Pilot Project
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
