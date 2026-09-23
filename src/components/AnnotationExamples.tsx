import { useState } from 'react';
import { FileText, ArrowRight } from 'lucide-react';
import BeforeAfter from './BeforeAfter';
import { BoundingBox, PolygonAnnotation, SegmentationMask, KeypointSkeleton, ClassLabel } from './AnnotationOverlays';

const examples = [
  {
    id: 'vehicle',
    label: 'Vehicle Detection',
    image: 'https://images.pexels.com/photos/7442982/pexels-photo-7442982.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'City road with cars during evening — annotated with bounding boxes for vehicle detection',
    technique: 'Bounding Boxes',
    overlay: (
      <svg viewBox="0 0 100 75" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <BoundingBox x={15} y={55} w={22} h={16} label="car" color="#0073c7" />
        <BoundingBox x={42} y={48} w={28} h={22} label="car" color="#0073c7" />
        <BoundingBox x={70} y={58} w={18} h={12} label="car" color="#0073c7" />
        <BoundingBox x={5} y={52} w={10} h={10} label="vehicle" color="#0073c7" />
        <BoundingBox x={60} y={10} w={8} h={14} label="street_light" color="#f59e0b" />
      </svg>
    ),
  },
  {
    id: 'people',
    label: 'People Detection',
    image: 'https://images.pexels.com/photos/10399156/pexels-photo-10399156.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Person walking on city sidewalk — annotated with bounding boxes and keypoints for pedestrian detection',
    technique: 'Bounding Boxes + Keypoints',
    overlay: (
      <svg viewBox="0 0 100 75" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <BoundingBox x={30} y={10} w={35} h={60} label="person" color="#0073c7" />
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
    id: 'retail',
    label: 'Retail Products',
    image: 'https://images.pexels.com/photos/32418799/pexels-photo-32418799.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Supermarket shelves with products — annotated with polygon outlines and classification labels for retail inventory',
    technique: 'Polygon + Classification',
    overlay: (
      <svg viewBox="0 0 100 75" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <PolygonAnnotation points="10,15 35,15 35,30 10,30" label="product" color="#0073c7" fillOpacity={0.15} />
        <PolygonAnnotation points="40,15 65,15 65,30 40,30" label="product" color="#0073c7" fillOpacity={0.15} />
        <PolygonAnnotation points="70,15 90,15 90,30 70,30" label="product" color="#0073c7" fillOpacity={0.15} />
        <ClassLabel x={12} y={8} label="shelf_a" color="#0073c7" />
        <ClassLabel x={42} y={8} label="shelf_b" color="#0073c7" />
        <ClassLabel x={72} y={8} label="shelf_c" color="#0073c7" />
      </svg>
    ),
  },
  {
    id: 'traffic',
    label: 'Traffic Scene',
    image: 'https://images.pexels.com/photos/4062988/pexels-photo-4062988.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Night intersection with city traffic — annotated with bounding boxes and road segmentation for autonomous driving',
    technique: 'Bounding Boxes + Segmentation',
    overlay: (
      <svg viewBox="0 0 100 75" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <SegmentationMask points="0,55 100,55 100,75 0,75" color="#0073c7" opacity={0.25} />
        <BoundingBox x={20} y={45} w={20} h={18} label="car" color="#0073c7" />
        <BoundingBox x={50} y={42} w={22} h={20} label="car" color="#0073c7" />
        <BoundingBox x={75} y={50} w={15} h={12} label="car" color="#0073c7" />
        <BoundingBox x={80} y={5} w={8} h={14} label="traffic_light" color="#f59e0b" />
      </svg>
    ),
  },
  {
    id: 'industrial',
    label: 'Industrial Objects',
    image: 'https://images.pexels.com/photos/10039994/pexels-photo-10039994.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Heavy machinery inside industrial factory — annotated with bounding boxes for equipment detection',
    technique: 'Bounding Boxes',
    overlay: (
      <svg viewBox="0 0 100 75" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <BoundingBox x={10} y={20} w={35} h={40} label="machine" color="#0073c7" />
        <BoundingBox x={50} y={25} w={30} h={30} label="conveyor" color="#0073c7" />
        <BoundingBox x={70} y={15} w={15} h={20} label="component" color="#f59e0b" />
      </svg>
    ),
  },
  {
    id: 'agriculture',
    label: 'Agriculture Imagery',
    image: 'https://images.pexels.com/photos/32047262/pexels-photo-32047262.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Aerial view of agricultural fields — annotated with segmentation masks for crop classification',
    technique: 'Semantic Segmentation',
    overlay: (
      <svg viewBox="0 0 100 75" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <SegmentationMask points="0,10 40,10 35,50 0,45" color="#22c55e" opacity={0.3} />
        <SegmentationMask points="42,10 75,12 70,48 38,50" color="#0073c7" opacity={0.25} />
        <SegmentationMask points="77,12 100,10 100,48 72,48" color="#f59e0b" opacity={0.3} />
        <SegmentationMask points="0,50 100,50 100,70 0,68" color="#8b5cf6" opacity={0.2} />
        <ClassLabel x={12} y={3} label="crop_wheat" color="#22c55e" />
        <ClassLabel x={48} y={3} label="crop_corn" color="#0073c7" />
        <ClassLabel x={80} y={3} label="field" color="#f59e0b" />
      </svg>
    ),
  },
];

export default function AnnotationExamples() {
  const [active, setActive] = useState(0);

  return (
    <section id="examples" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <span className="text-xs font-semibold tracking-wider text-brand-600 uppercase mb-3 block">
            Visual Demonstrations
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            See Our Annotation Workflow
          </h2>
          <p className="text-lg text-slate-600">
            Drag the slider to compare raw images with annotated outputs across different annotation techniques.
          </p>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Example selector */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {examples.map((ex, i) => (
              <button
                key={ex.id}
                onClick={() => setActive(i)}
                className={`flex-shrink-0 lg:w-full text-left px-4 py-3 rounded-lg border transition-all ${
                  active === i
                    ? 'border-brand-600 bg-brand-50 text-brand-700'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                }`}
              >
                <span className="block text-sm font-semibold whitespace-nowrap lg:whitespace-normal">{ex.label}</span>
                <span className={`hidden lg:block text-xs mt-0.5 ${active === i ? 'text-brand-500' : 'text-slate-400'}`}>
                  {ex.technique}
                </span>
              </button>
            ))}
          </div>

          {/* Before/After display */}
          <div className="reveal">
            <BeforeAfter
              key={examples[active].id}
              imageSrc={examples[active].image}
              alt={examples[active].alt}
              annotationOverlay={examples[active].overlay}
              label={examples[active].technique}
            />
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-sm text-slate-500">
                <span className="font-semibold text-slate-700">{examples[active].label}</span> — {examples[active].technique}
                <br />
                <span className="text-xs">Sample / Demonstration Data</span>
              </p>
              <a
                href="#contact?tab=sample"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-lg transition-colors"
              >
                <FileText className="w-4 h-4" />
                Request a Sample Annotation
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
