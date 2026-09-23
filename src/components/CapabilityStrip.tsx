import { Users, Eye, ShieldCheck, Boxes, Gauge } from 'lucide-react';

const capabilities = [
  { icon: Users, value: '5–50+', label: 'Scalable Annotation Workforce' },
  { icon: Eye, value: 'Human', label: 'Annotation & Review' },
  { icon: ShieldCheck, value: 'QA', label: 'Quality-Controlled Workflow' },
  { icon: Boxes, value: 'Bulk', label: 'Dataset Processing' },
  { icon: Gauge, value: 'Flexible', label: 'Project Capacity' },
];

export default function CapabilityStrip() {
  return (
    <section className="relative border-y border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-y md:divide-y-0 divide-slate-100">
          {capabilities.map((cap, i) => (
            <div
              key={cap.label}
              className="flex flex-col items-center text-center px-4 py-8 reveal hover:bg-slate-50/50 transition-colors"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <cap.icon className="w-6 h-6 text-brand-600 mb-3" strokeWidth={1.5} />
              <span className="text-xl font-bold text-slate-900 mb-1">{cap.value}</span>
              <span className="text-xs font-medium text-slate-500 leading-snug">{cap.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
