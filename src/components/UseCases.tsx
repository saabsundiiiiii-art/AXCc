import { Car, ShoppingBag, Sprout, Factory, Bot, Building2, ShieldAlert, HeartPulse } from 'lucide-react';

const useCases = [
  {
    icon: Car,
    title: 'Autonomous Mobility',
    desc: 'Vehicles, pedestrians, road objects, traffic scenes.',
    image: 'https://images.pexels.com/photos/32461216/pexels-photo-32461216.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Self-driving car navigating city street for autonomous mobility annotation',
  },
  {
    icon: ShoppingBag,
    title: 'Retail & E-commerce',
    desc: 'Products, shelves, packaging, inventory.',
    image: 'https://images.pexels.com/photos/3423860/pexels-photo-3423860.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Convenience store aisle with products for retail annotation',
  },
  {
    icon: Sprout,
    title: 'Agriculture',
    desc: 'Crops, plants, fruits, agricultural objects.',
    image: 'https://images.pexels.com/photos/39347812/pexels-photo-39347812.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Aerial view of green agricultural fields for crop annotation',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    desc: 'Equipment, components, defects, industrial objects.',
    image: 'https://images.pexels.com/photos/6525848/pexels-photo-6525848.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Factory worker operating machinery for industrial annotation',
  },
  {
    icon: Bot,
    title: 'Robotics',
    desc: 'Object detection and environment understanding.',
    image: 'https://images.pexels.com/photos/34207369/pexels-photo-34207369.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Industrial robot arm for robotics environment annotation',
  },
  {
    icon: Building2,
    title: 'Smart Cities',
    desc: 'Traffic, vehicles, pedestrians, infrastructure.',
    image: 'https://images.pexels.com/photos/4947391/pexels-photo-4947391.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Modern city buildings and infrastructure for smart city annotation',
  },
  {
    icon: ShieldAlert,
    title: 'Security & Monitoring',
    desc: 'Object and event-related visual datasets.',
    image: 'https://images.pexels.com/photos/5966513/pexels-photo-5966513.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Security surveillance camera for monitoring annotation',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare Imaging',
    desc: 'Image labeling workflows subject to client requirements and applicable privacy controls.',
    image: 'https://images.pexels.com/photos/7089298/pexels-photo-7089298.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'MRI medical scan on monitor for healthcare imaging annotation',
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="text-xs font-semibold tracking-wider text-brand-600 uppercase mb-3 block">
            Use Cases
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Built for AI & Computer Vision Applications
          </h2>
          <p className="text-sm text-slate-500 mt-3">
            Supported use cases — not existing client references.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {useCases.map((uc, i) => (
            <div
              key={uc.title}
              className="group relative rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 reveal"
              style={{ transitionDelay: `${(i % 4) * 0.08}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={uc.image}
                  alt={uc.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center">
                  <uc.icon className="w-5 h-5 text-brand-600" strokeWidth={1.5} />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-base font-semibold text-white mb-1">{uc.title}</h3>
                <p className="text-xs text-slate-200 leading-snug">{uc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
