import { FileCode2, ArrowRight } from 'lucide-react';

const formats = [
  { name: 'YOLO', desc: 'You Only Look Once — .txt files per image' },
  { name: 'COCO', desc: 'Common Objects in Context — JSON' },
  { name: 'JSON', desc: 'Custom JSON schemas' },
  { name: 'CSV', desc: 'Tabular label data' },
  { name: 'XML', desc: 'Pascal VOC & custom XML' },
  { name: 'Custom', desc: 'Client-specified formats' },
];

export default function OutputFormats() {
  return (
    <section id="formats" className="py-20 lg:py-28 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="text-xs font-semibold tracking-wider text-brand-600 uppercase mb-3 block">
            Data Delivery
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Flexible Data Delivery
          </h2>
          <p className="text-lg text-slate-600">
            We deliver annotated datasets in the format your pipeline expects.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4 mb-10">
          {formats.map((fmt, i) => (
            <div
              key={fmt.name}
              className="group bg-white rounded-xl border border-slate-200 p-5 text-center hover:border-brand-200 hover:shadow-md transition-all reveal"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <FileCode2 className="w-7 h-7 text-brand-500 mx-auto mb-3 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <p className="text-sm font-bold text-slate-900 mb-1">{fmt.name}</p>
              <p className="text-[11px] text-slate-500 leading-snug">{fmt.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center reveal">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white rounded-xl border border-slate-200 px-6 py-4">
            <span className="text-sm text-slate-600">Need a specific format?</span>
            <a
              href="#contact?tab=quote"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
            >
              Tell us your requirements
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
