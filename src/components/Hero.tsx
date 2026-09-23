import { ArrowRight, FileText, Check } from 'lucide-react';
import { BoundingBox, SegmentationMask, KeypointSkeleton } from './AnnotationOverlays';

const trafficImg = 'https://images.pexels.com/photos/4062988/pexels-photo-4062988.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const trustPoints = [
  'Human Annotated',
  'Quality Checked',
  'Scalable Workforce',
  'Bulk Project Support',
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-50 rounded-full blur-3xl opacity-50 -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-100 rounded-full blur-3xl opacity-60 translate-y-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-50 border border-brand-200 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              <span className="text-xs font-semibold tracking-wide text-brand-700 uppercase">
                AI Data Annotation & Labeling
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight text-slate-900 mb-4">
              Accurate Image Annotation for{' '}
              <span className="text-brand-600">Smarter AI</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-2 max-w-xl">
              High-quality human-labeled image data for computer vision and AI teams.
            </p>
            <p className="text-base text-slate-500 leading-relaxed mb-8 max-w-xl">
              We provide scalable image annotation and data labeling services designed to help
              AI teams build, train, and improve computer vision systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href="#contact?tab=quote"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-lg shadow-lg shadow-brand-600/20 transition-all hover:shadow-xl hover:shadow-brand-600/30"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact?tab=sample"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:border-brand-300 hover:text-brand-700 rounded-lg transition-all"
              >
                <FileText className="w-4 h-4" />
                Request a Sample
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {trustPoints.map((tp) => (
                <div key={tp} className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-brand-600" />
                  <span className="text-sm font-medium text-slate-700">{tp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Annotation workflow visual */}
          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="relative">
              {/* Raw → Annotated labels */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase">
                  Raw Image
                </span>
                <div className="flex-1 mx-3 h-px bg-gradient-to-r from-slate-300 via-brand-300 to-brand-500" />
                <span className="text-xs font-mono font-semibold tracking-wider text-brand-600 uppercase">
                  Annotated Image
                </span>
              </div>

              {/* Main annotated image card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-200 bg-slate-900">
                <div className="relative aspect-[4/3]">
                  <img
                    src={trafficImg}
                    alt="Traffic intersection with annotated bounding boxes and segmentation masks for autonomous driving computer vision"
                    className="w-full h-full object-cover"
                  />

                  {/* Annotation overlay */}
                  <svg
                    viewBox="0 0 100 75"
                    preserveAspectRatio="none"
                    className="absolute inset-0 w-full h-full"
                    style={{ pointerEvents: 'none' }}
                  >
                    {/* Vehicles - bounding boxes */}
                    <BoundingBox x={22} y={42} w={16} h={20} label="car" color="#0073c7" />
                    <BoundingBox x={48} y={38} w={18} h={24} label="car" color="#0073c7" />
                    <BoundingBox x={5} y={48} w={12} h={15} label="car" color="#0073c7" />
                    <BoundingBox x={70} y={44} w={14} h={18} label="vehicle" color="#0073c7" />

                    {/* Traffic light */}
                    <BoundingBox x={82} y={8} w={6} h={12} label="traffic_light" color="#f59e0b" />

                    {/* Road segmentation */}
                    <SegmentationMask
                      points="0,58 100,58 100,75 0,75"
                      color="#0073c7"
                      opacity={0.2}
                    />

                    {/* Person keypoints */}
                    <KeypointSkeleton
                      connections={[[0,1],[1,2],[2,3],[3,4],[1,5],[5,6],[1,7],[7,8],[8,9],[7,10],[10,11]]}
                      points={[
                        { x: 38, y: 56 }, { x: 38, y: 58 }, { x: 37, y: 61 }, { x: 36, y: 64 },
                        { x: 35, y: 66 }, { x: 39, y: 61 }, { x: 39, y: 64 }, { x: 38, y: 62 },
                        { x: 37, y: 66 }, { x: 37, y: 68 }, { x: 39, y: 66 }, { x: 39, y: 68 },
                      ]}
                      color="#ef4444"
                    />
                  </svg>

                  {/* Scan line effect */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute left-0 right-0 h-px bg-brand-400/60 animate-scan" />
                  </div>

                  {/* Corner brackets */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-white/50 rounded-tl" />
                  <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-white/50 rounded-tr" />
                  <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-white/50 rounded-bl" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-white/50 rounded-br" />
                </div>

                {/* Status bar */}
                <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs font-mono text-slate-300">annotation_preview.jpg</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">Sample / Demonstration</span>
                </div>
              </div>

              {/* Floating labels around the card */}
              <div className="absolute -left-3 top-1/4 hidden lg:flex flex-col gap-2 animate-float">
                <div className="bg-white shadow-lg rounded-lg px-3 py-2 border border-slate-200">
                  <span className="text-xs font-mono text-brand-600">bounding_box</span>
                </div>
              </div>
              <div className="absolute -right-3 top-2/3 hidden lg:flex flex-col gap-2 animate-float" style={{ animationDelay: '1s' }}>
                <div className="bg-white shadow-lg rounded-lg px-3 py-2 border border-slate-200">
                  <span className="text-xs font-mono text-amber-600">segmentation</span>
                </div>
              </div>
              <div className="absolute -right-2 top-1/4 hidden lg:flex flex-col gap-2 animate-float" style={{ animationDelay: '2s' }}>
                <div className="bg-white shadow-lg rounded-lg px-3 py-2 border border-slate-200">
                  <span className="text-xs font-mono text-red-500">keypoints</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
