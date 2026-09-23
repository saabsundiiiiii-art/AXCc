import { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowRight } from 'lucide-react';

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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/60'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2.5 shrink-0 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 9h6v6H9z" />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Axcentra
              </span>
            </a>

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-brand-700 rounded-md transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#contact?tab=sample"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-700 hover:text-brand-700 transition-colors"
              >
                <FileText className="w-4 h-4" />
                Request a Sample
              </a>
              <a
                href="#contact?tab=quote"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-lg shadow-sm transition-all hover:shadow-md"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-slate-700"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute right-0 top-0 bottom-0 w-[300px] max-w-[80vw] bg-white shadow-2xl transition-transform duration-300 flex flex-col ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-slate-200">
            <span className="font-bold text-slate-900">Menu</span>
            <button onClick={() => setMobileOpen(false)} className="p-2 text-slate-600">
              <X className="w-6 h-6" />
            </button>
          </div>
          <ul className="flex-1 overflow-y-auto py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-5 py-3 text-base font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="p-4 border-t border-slate-200 space-y-3">
            <a
              href="#contact?tab=sample"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-4 py-3 text-sm font-semibold text-slate-700 border border-slate-300 rounded-lg"
            >
              Request a Sample
            </a>
            <a
              href="#contact?tab=quote"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-4 py-3 text-sm font-semibold text-white bg-brand-600 rounded-lg"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
