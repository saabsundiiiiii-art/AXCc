import { Mail, MessageCircle, Linkedin, MapPin } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Quality', href: '#quality' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Confidentiality / NDA', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-14 grid lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 9h6v6H9z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">Axcentra</span>
            </div>
            <p className="text-sm leading-relaxed max-w-md mb-6">
              AI Image Annotation & Data Labeling Services. Scalable human-powered annotation for
              computer vision and AI teams.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:hello@axcentra.com"
                className="inline-flex items-center gap-2 px-3 py-2 bg-slate-800 rounded-lg text-xs hover:bg-slate-700 transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@axcentra.com
              </a>
              <a
                href="https://wa.me/918100276449"
                className="inline-flex items-center gap-2 px-3 py-2 bg-slate-800 rounded-lg text-xs hover:bg-slate-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                +91 8100276449
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Contact */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2.5 mb-6">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Connect</h4>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://wa.me/918100276449" aria-label="WhatsApp" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="mailto:hello@axcentra.com" aria-label="Email" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-6 flex items-start gap-2 text-xs">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>Kolkata, India</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © 2026 Axcentra. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 font-mono">
            MSME Reg: UDYAM-WB-14-0202932
          </p>
        </div>
      </div>
    </footer>
  );
}
