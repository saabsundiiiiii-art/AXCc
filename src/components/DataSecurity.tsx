import { Lock, Eye, FileLock2, Send, FileSignature, KeyRound, GitBranch, ShieldOff } from 'lucide-react';

const items = [
  { icon: Eye, text: 'Controlled project access' },
  { icon: KeyRound, text: 'Limited team access' },
  { icon: FileLock2, text: 'Confidential file handling' },
  { icon: Send, text: 'Secure transfer methods' },
  { icon: FileSignature, text: 'NDA availability where required' },
  { icon: GitBranch, text: 'Project-specific access controls' },
  { icon: Lock, text: 'Controlled dataset distribution' },
];

export default function DataSecurity() {
  return (
    <section id="security" className="py-20 lg:py-28 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="reveal">
            <span className="text-xs font-semibold tracking-wider text-brand-400 uppercase mb-3 block">
              Data Security
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4 leading-tight">
              Your Data. Handled Responsibly.
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              We understand that training datasets can contain sensitive or proprietary information.
            </p>

            <div className="flex items-start gap-3 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
              <ShieldOff className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <p className="text-xs text-slate-400 leading-relaxed">
                We do not claim certifications we do not hold. Security practices described here reflect
                our operational approach — not formal certifications.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 reveal" style={{ transitionDelay: '0.1s' }}>
            {items.map((item, i) => (
              <div
                key={item.text}
                className="flex items-center gap-3 p-4 bg-slate-800/40 rounded-lg border border-slate-700/40 hover:border-brand-500/30 transition-colors"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="w-9 h-9 rounded-lg bg-brand-600/15 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-brand-400" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-slate-200">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
