import { FileText, ArrowRight, Upload } from 'lucide-react';

export default function SamplePilot() {
  return (
    <section id="sample" className="py-20 lg:py-28 bg-gradient-to-br from-brand-600 to-brand-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full mb-6">
            <Upload className="w-3.5 h-3.5 text-white" />
            <span className="text-xs font-semibold tracking-wide text-white uppercase">
              Pilot Project
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4 leading-tight">
            Not Sure If We're the Right Fit?
          </h2>
          <p className="text-lg text-brand-100 mb-8 max-w-xl mx-auto">
            Send us a small sample dataset and let us demonstrate the annotation workflow
            before starting the full project.
          </p>

          <p className="text-sm text-brand-200 mb-8 max-w-lg mx-auto">
            Share a small dataset, annotation requirements, and expected output format.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#contact?tab=sample"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-brand-700 bg-white hover:bg-brand-50 rounded-lg shadow-lg transition-all"
            >
              <FileText className="w-4 h-4" />
              Request a Sample
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact?tab=quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white border border-white/30 hover:bg-white/10 rounded-lg transition-all"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
