import { ArrowRight, FileText } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex gap-2">
        <a
          href="#contact?tab=sample"
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-3 text-sm font-semibold text-slate-700 border border-slate-300 rounded-lg"
        >
          <FileText className="w-4 h-4" />
          Sample
        </a>
        <a
          href="#contact?tab=quote"
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-3 text-sm font-semibold text-white bg-brand-600 rounded-lg"
        >
          Get a Quote
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
