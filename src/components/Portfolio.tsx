import { useState } from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { BoundingBox, PolygonAnnotation, SegmentationMask, KeypointSkeleton, ClassLabel } from './AnnotationOverlays';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'detection', label: 'Object Detection' },
  { id: 'bbox', label: 'Bounding Box' },
  { id: 'segmentation', label: 'Segmentation' },
  { id: 'classification', label: 'Classification' },
  { id: 'keypoint', label: 'Keypoint' },
  { id: 'custom', label: 'Custom' },
];

interface PortfolioItem {
  id: string;
  category: string;
  title: string;
  image: string;
  alt: string;
  technique: string;
  outputFormat: string;
  overlay: React.ReactNode;
}

const items: PortfolioItem[] = [
  {
    id: 'p1',
    category: 'detection',
    title: 'Urban Vehicle Detection',
    image: 'https://images.pexels.com/photos/7442982/pexels-photo-7442982.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Cars on city road annotated with bounding boxes for object detection',
    technique: 'Object Detection',
    outputFormat: 'YOLO',
    overlay: (
      <svg viewBox="0 0 100 75" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <BoundingBox x={15} y={55} w={22} h={16} label="car" />
        <BoundingBox x={42} y={48} w={28} h={22} label="car" />
        <BoundingBox x={70} y={58} w={18} h={12} label="car" />
      </svg>
    ),
  },
  {
    id: 'p2',
    category: 'bbox',
    title: 'Pedestrian Bounding Box',
    image: 'https://images.pexels.com/photos/15883185/pexels-photo-15883185.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Person crossing street annotated with bounding box for pedestrian detection',
    technique: 'Bounding Box',
    outputFormat: 'COCO',
    overlay: (
      <svg viewBox="0 0 100 75" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <BoundingBox x={35} y={15} w={30} h={60} label="person" />
        <BoundingBox x={65} y={30} w={20} h={35} label="person" color="#f59e0b" />
      </svg>
    ),
  },
  {
    id: 'p3',
    category: 'segmentation',
    title: 'Agricultural Field Segmentation',
    image: 'https://images.pexels.com/photos/32047262/pexels-photo-32047262.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Aerial agricultural fields annotated with semantic segmentation masks',
    technique: 'Semantic Segmentation',
    outputFormat: 'JSON',
    overlay: (
      <svg viewBox="0 0 100 75" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <SegmentationMask points="0,10 40,10 35,50 0,45" color="#22c55e" opacity={0.3} />
        <SegmentationMask points="42,10 75,12 70,48 38,50" color="#0073c7" opacity={0.25} />
        <SegmentationMask points="77,12 100,10 100,48 72,48" color="#f59e0b" opacity={0.3} />
      </svg>
    ),
  },
  {
    id: 'p4',
    category: 'classification',
    title: 'Retail Product Classification',
    image: 'https://images.pexels.com/photos/32418799/pexels-photo-32418799.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Supermarket shelf products annotated with classification labels',
    technique: 'Image Classification',
    outputFormat: 'CSV',
    overlay: (
      <svg viewBox="0 0 100 75" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <ClassLabel x={5} y={5} label="beverages" color="#0073c7" />
        <ClassLabel x={5} y={25} label="snacks" color="#22c55e" />
        <ClassLabel x={5} y={45} label="dairy" color="#f59e0b" />
      </svg>
    ),
  },
  {
    id: 'p5',
    category: 'keypoint',
    title: 'Human Pose Estimation',
    image: 'https://images.pexels.com/photos/10399156/pexels-photo-10399156.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Person walking annotated with keypoint skeleton for pose estimation',
    technique: 'Keypoint Annotation',
    outputFormat: 'JSON',
    overlay: (
      <svg viewBox="0 0 100 75" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <KeypointSkeleton
          connections={[[0,1],[1,2],[2,3],[3,4],[1,5],[5,6],[1,7],[7,8],[8,9],[7,10],[10,11]]}
          points={[
            { x: 47, y: 14 }, { x: 47, y: 22 }, { x: 44, y: 30 }, { x: 42, y: 40 },
            { x: 41, y: 48 }, { x: 50, y: 30 }, { x: 52, y: 40 }, { x: 47, y: 32 },
            { x: 45, y: 48 }, { x: 44, y: 56 }, { x: 49, y: 48 }, { x: 50, y: 56 },
          ]}
          color="#ef4444"
        />
      </svg>
    ),
  },
  {
    id: 'p6',
    category: 'segmentation',
    title: 'Traffic Scene Segmentation',
    image: 'https://images.pexels.com/photos/4062988/pexels-photo-4062988.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Night traffic intersection annotated with road segmentation and bounding boxes',
    technique: 'Instance Segmentation',
    outputFormat: 'COCO',
    overlay: (
      <svg viewBox="0 0 100 75" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <SegmentationMask points="0,55 100,55 100,75 0,75" color="#0073c7" opacity={0.25} />
        <BoundingBox x={20} y={45} w={20} h={18} label="car" />
        <BoundingBox x={50} y={42} w={22} h={20} label="car" />
      </svg>
    ),
  },
  {
    id: 'p7',
    category: 'custom',
    title: 'Industrial Equipment Custom',
    image: 'https://images.pexels.com/photos/10039994/pexels-photo-10039994.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Heavy machinery annotated with custom bounding boxes for industrial defect detection',
    technique: 'Custom Workflow',
    outputFormat: 'Custom XML',
    overlay: (
      <svg viewBox="0 0 100 75" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <BoundingBox x={10} y={20} w={35} h={40} label="machine" />
        <BoundingBox x={50} y={25} w={30} h={30} label="conveyor" color="#f59e0b" />
        <PolygonAnnotation points="15,25 40,25 38,35 17,35" label="defect" color="#ef4444" fillOpacity={0.2} />
      </svg>
    ),
  },
  {
    id: 'p8',
    category: 'bbox',
    title: 'Retail Shelf Bounding Box',
    image: 'https://images.pexels.com/photos/3423860/pexels-photo-3423860.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Store aisle products annotated with bounding boxes for shelf inventory detection',
    technique: 'Bounding Box',
    outputFormat: 'YOLO',
    overlay: (
      <svg viewBox="0 0 100 75" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <BoundingBox x={10} y={20} w={18} h={20} label="product" />
        <BoundingBox x={32} y={20} w={18} h={20} label="product" />
        <BoundingBox x={54} y={20} w={18} h={20} label="product" />
        <BoundingBox x={76} y={20} w={18} h={20} label="product" />
        <BoundingBox x={10} y={45} w={18} h={18} label="product" color="#f59e0b" />
        <BoundingBox x={32} y={45} w={18} h={18} label="product" color="#f59e0b" />
      </svg>
    ),
  },
];

export default function Portfolio() {
  const [active, setActive] = useState('all');

  const filtered = active === 'all' ? items : items.filter((it) => it.category === active);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <span className="text-xs font-semibold tracking-wider text-brand-600 uppercase mb-3 block">
            Portfolio
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Annotation Portfolio
          </h2>
          <p className="text-sm text-slate-500 mt-3">
            Internal demonstration data — not client projects.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-all ${
                active === cat.id
                  ? 'bg-brand-600 text-white border-brand-600'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 reveal"
              style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors" />
                {item.overlay}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-brand-50 text-brand-600 rounded">
                    {item.outputFormat}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">{item.technique}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-slate-400">Original → Annotated</span>
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 mt-2 pt-2 border-t border-slate-100">
                  Internal Demonstration
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <a
            href="#contact?tab=sample"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:border-brand-300 hover:text-brand-700 rounded-lg transition-all"
          >
            <FileText className="w-4 h-4" />
            Request a Sample Annotation
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
