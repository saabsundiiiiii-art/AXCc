import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What types of images can you annotate?',
    a: 'We annotate a wide range of image types including street scenes, retail products, industrial equipment, agricultural imagery, medical imaging (subject to applicable privacy controls), aerial imagery, and more. If you have a specific image type, share samples and we will confirm feasibility.',
  },
  {
    q: 'Can you handle bulk image datasets?',
    a: 'Yes. Our scalable workforce model allows us to process large volumes of images. Project capacity can be expanded from 5 to 50+ annotators depending on dataset size and deadlines.',
  },
  {
    q: 'What is your minimum project size?',
    a: 'We support projects starting from small pilot datasets. There is no strict minimum — share your requirements and we will discuss feasibility.',
  },
  {
    q: 'Can you provide a sample before starting?',
    a: 'Yes. We encourage starting with a small sample dataset so we can demonstrate the annotation workflow and confirm alignment before committing to the full project.',
  },
  {
    q: 'Do you support custom annotation guidelines?',
    a: 'Absolutely. We work with client-specific classes, labeling rules, edge cases, and output formats. Custom guidelines are part of our standard workflow.',
  },
  {
    q: 'Which annotation formats can you deliver?',
    a: 'We commonly deliver in YOLO, COCO, JSON, CSV, XML, and custom client-specified formats. If you need a particular format, let us know and we will accommodate it.',
  },
  {
    q: 'How does your quality-control process work?',
    a: 'Our workflow includes four stages: annotation guidelines, human annotation, quality review (checking for missing labels, incorrect classifications, boundary errors, and consistency), and final validation in the agreed delivery format.',
  },
  {
    q: 'How quickly can a project start?',
    a: 'After an initial discussion and sample alignment, production annotation can typically begin within a few days. Timelines depend on dataset size and complexity.',
  },
  {
    q: 'Can you sign an NDA?',
    a: 'Yes, NDAs are available where required. We understand that training datasets may contain sensitive or proprietary information and handle them accordingly.',
  },
  {
    q: 'How do I send my dataset?',
    a: 'Datasets can be shared via cloud storage links (Google Drive, Dropbox, AWS S3, etc.), secure file transfer, or any method you prefer. Share your preferred method and we will coordinate.',
  },
  {
    q: 'Can your workforce scale for larger projects?',
    a: 'Yes. Our workforce is project-based and scalable. We can start with a small pilot team and expand to 50+ annotators as your dataset grows and deadlines require.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <span className="text-xs font-semibold tracking-wider text-brand-600 uppercase mb-3 block">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden reveal"
              style={{ transitionDelay: `${i * 0.03}s` }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-slate-50/50 transition-colors"
              >
                <span className="text-sm font-semibold text-slate-900">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                    open === i ? 'rotate-180 text-brand-600' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <p className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
