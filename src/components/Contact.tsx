import { useState, useEffect, useRef } from 'react';
import { ArrowRight, FileText, Check, AlertCircle, Upload, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const datasetTypes = ['Images', 'Aerial / Satellite', 'Medical Imaging', 'Industrial', 'Retail', 'Other'];
const datasetSizes = ['< 1,000', '1,000–10,000', '10,000–50,000', '50,000–100,000', '100,000+'];
const annotationTypes = [
  'Bounding Box',
  'Polygon',
  'Semantic Segmentation',
  'Instance Segmentation',
  'Image Classification',
  'Object Detection',
  'Keypoint',
  'Custom',
];
const outputFormats = ['YOLO', 'COCO', 'JSON', 'CSV', 'XML', 'Custom'];
const timelines = ['ASAP', '1–2 weeks', '2–4 weeks', '1–2 months', 'Flexible'];

export default function Contact() {
  const [tab, setTab] = useState<'quote' | 'sample'>('quote');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Read tab from URL hash query
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      const match = hash.match(/tab=(sample|quote)/);
      if (match) setTab(match[1] as 'quote' | 'sample');
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      form_type: tab,
      full_name: formData.get('full_name') as string,
      company_name: formData.get('company_name') as string,
      business_email: formData.get('business_email') as string,
      phone: formData.get('phone') as string,
      dataset_type: formData.get('dataset_type') as string,
      dataset_size: formData.get('dataset_size') as string,
      annotation_type: formData.get('annotation_type') as string,
      output_format: formData.get('output_format') as string,
      timeline: formData.get('timeline') as string,
      requirements: formData.get('requirements') as string,
      dataset_link: formData.get('dataset_link') as string,
      sample_filename: fileName,
    };

    const { error: insertError } = await supabase.from('quote_requests').insert(data);

    if (insertError) {
      setError('Something went wrong. Please try again or email us directly.');
      setSubmitting(false);
      return;
    }

    setSuccess(true);
    setSubmitting(false);
    formRef.current?.reset();
    setFileName('');
  };

  const inputClass =
    'w-full px-4 py-2.5 text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all placeholder:text-slate-400';
  const labelClass = 'block text-xs font-semibold text-slate-700 mb-1.5';
  const selectClass = `${inputClass} appearance-none bg-no-repeat bg-right cursor-pointer`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 reveal">
          <span className="text-xs font-semibold tracking-wider text-brand-600 uppercase mb-3 block">
            Contact
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Let's Discuss Your Dataset
          </h2>
          <p className="text-lg text-slate-600">
            Tell us what you need labeled, how much data you have, and your expected timeline.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex justify-center mb-8 reveal">
          <div className="inline-flex p-1 bg-slate-100 rounded-lg">
            <button
              onClick={() => setTab('quote')}
              className={`px-5 py-2.5 text-sm font-semibold rounded-md transition-all ${
                tab === 'quote' ? 'bg-white text-brand-700 shadow-sm' : 'text-slate-600'
              }`}
            >
              Request a Quote
            </button>
            <button
              onClick={() => setTab('sample')}
              className={`px-5 py-2.5 text-sm font-semibold rounded-md transition-all ${
                tab === 'sample' ? 'bg-white text-brand-700 shadow-sm' : 'text-slate-600'
              }`}
            >
              Request a Sample
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 lg:p-10 reveal">
          {success ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {tab === 'quote' ? 'Quote Request Received' : 'Sample Request Received'}
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                Thank you for your interest. We'll review your requirements and get back to you
                within 1–2 business days.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass} htmlFor="full_name">Full Name *</label>
                  <input id="full_name" name="full_name" type="text" required className={inputClass} placeholder="John Doe" />
                </div>
                <div>
                  <label className={labelClass} htmlFor="company_name">Company Name</label>
                  <input id="company_name" name="company_name" type="text" className={inputClass} placeholder="Acme AI" />
                </div>
                <div>
                  <label className={labelClass} htmlFor="business_email">Business Email *</label>
                  <input id="business_email" name="business_email" type="email" required className={inputClass} placeholder="john@company.com" />
                </div>
                <div>
                  <label className={labelClass} htmlFor="phone">Phone / WhatsApp</label>
                  <input id="phone" name="phone" type="tel" className={inputClass} placeholder="+1 234 567 890" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass} htmlFor="dataset_type">Dataset Type</label>
                  <select id="dataset_type" name="dataset_type" className={selectClass}>
                    <option value="">Select type</option>
                    {datasetTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="dataset_size">Approximate Dataset Size</label>
                  <select id="dataset_size" name="dataset_size" className={selectClass}>
                    <option value="">Select size</option>
                    {datasetSizes.map((s) => <option key={s} value={s}>{s} images</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="annotation_type">Annotation Type</label>
                  <select id="annotation_type" name="annotation_type" className={selectClass}>
                    <option value="">Select type</option>
                    {annotationTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="output_format">Required Output Format</label>
                  <select id="output_format" name="output_format" className={selectClass}>
                    <option value="">Select format</option>
                    {outputFormats.map((f) => <option key={f} value={f}>{f}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="timeline">Expected Timeline</label>
                <select id="timeline" name="timeline" className={selectClass}>
                  <option value="">Select timeline</option>
                  {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div>
                <label className={labelClass} htmlFor="requirements">Project Requirements</label>
                <textarea
                  id="requirements"
                  name="requirements"
                  rows={3}
                  className={inputClass}
                  placeholder="Describe your annotation requirements, classes, labeling instructions, etc."
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="dataset_link">Dataset / Drive Link</label>
                <input id="dataset_link" name="dataset_link" type="url" className={inputClass} placeholder="https://drive.google.com/..." />
              </div>

              <div>
                <label className={labelClass}>Upload Sample</label>
                <label className="flex items-center gap-3 px-4 py-3 border border-dashed border-slate-300 rounded-lg cursor-pointer hover:border-brand-400 hover:bg-brand-50/30 transition-all">
                  <Upload className="w-5 h-5 text-slate-400" />
                  <span className="text-sm text-slate-500">
                    {fileName || 'Choose a file (optional)'}
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
                  />
                </label>
              </div>

              {error && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-sm text-red-700">{error}</span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-lg shadow-lg shadow-brand-600/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <FileText className="w-4 h-4" />
                  )}
                  {tab === 'quote' ? 'Request a Quote' : 'Request a Sample'}
                  {!submitting && <ArrowRight className="w-4 h-4" />}
                </button>
                <button
                  type="button"
                  onClick={() => setTab(tab === 'quote' ? 'sample' : 'quote')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:border-brand-300 hover:text-brand-700 rounded-lg transition-all"
                >
                  {tab === 'quote' ? 'Request a Sample instead' : 'Get a Quote instead'}
                </button>
              </div>

              <p className="text-xs text-slate-400 pt-2">
                By submitting, you agree to be contacted about your request. Your information is
                handled confidentially.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
