import {
  Square,
  Hexagon,
  Grid3x3,
  Layers,
  Tag,
  Target,
  Spline,
  Settings2,
} from 'lucide-react';

const services = [
  {
    icon: Square,
    title: 'Bounding Box Annotation',
    desc: 'Precise rectangular annotations for object detection and localization.',
    examples: ['Cars', 'People', 'Vehicles', 'Products', 'Animals', 'Equipment'],
  },
  {
    icon: Hexagon,
    title: 'Polygon Annotation',
    desc: 'Detailed object boundary annotation for applications requiring more precise shapes.',
    examples: [],
  },
  {
    icon: Grid3x3,
    title: 'Semantic Segmentation',
    desc: 'Pixel-level labeling of objects and regions within images.',
    examples: [],
  },
  {
    icon: Layers,
    title: 'Instance Segmentation',
    desc: 'Individual object-level segmentation for computer vision models.',
    examples: [],
  },
  {
    icon: Tag,
    title: 'Image Classification',
    desc: 'Categorizing images according to client-defined classes and labeling guidelines.',
    examples: [],
  },
  {
    icon: Target,
    title: 'Object Detection',
    desc: 'Identifying and localizing multiple objects within an image.',
    examples: [],
  },
  {
    icon: Spline,
    title: 'Keypoint Annotation',
    desc: 'Point-based annotation for human pose, facial landmarks, object landmarks, and specialized computer vision applications.',
    examples: ['Human pose', 'Facial landmarks', 'Object landmarks'],
  },
  {
    icon: Settings2,
    title: 'Custom Image Annotation',
    desc: 'Custom annotation workflows designed according to client-specific datasets, classes, instructions, and output formats.',
    examples: [],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="text-xs font-semibold tracking-wider text-brand-600 uppercase mb-3 block">
            What We Do
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Image Annotation Services
          </h2>
          <p className="text-lg text-slate-600">
            Structured, accurate labeled data for computer vision and AI applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group bg-white rounded-xl border border-slate-200 p-6 hover:border-brand-200 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 reveal"
              style={{ transitionDelay: `${(i % 4) * 0.08}s` }}
            >
              <div className="w-11 h-11 rounded-lg bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-600 transition-colors duration-300">
                <service.icon className="w-5 h-5 text-brand-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2 leading-snug">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                {service.desc}
              </p>
              {service.examples.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  {service.examples.map((ex) => (
                    <span
                      key={ex}
                      className="text-[11px] font-medium px-2 py-0.5 bg-slate-100 text-slate-600 rounded"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
