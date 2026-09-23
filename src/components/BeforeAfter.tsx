import { useRef, useState, useCallback } from 'react';

interface BeforeAfterProps {
  imageSrc: string;
  alt: string;
  annotationOverlay: React.ReactNode;
  label?: string;
}

export default function BeforeAfter({ imageSrc, alt, annotationOverlay, label }: BeforeAfterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const draggingRef = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPos(pct);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePos(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    updatePos(e.clientX);
  };

  const onPointerUp = () => {
    draggingRef.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="ba-slider rounded-xl overflow-hidden border border-slate-200 bg-slate-100"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      {/* Bottom (full) image = annotated */}
      <div className="relative">
        <img src={imageSrc} alt={alt} className="ba-img" />
        <div className="ba-overlay">{annotationOverlay}</div>
        <span className="ba-label right-3 bg-brand-600 text-white">Annotated</span>
      </div>

      {/* Clipped top = raw */}
      <div className="ba-clip" style={{ width: `${pos}%` }}>
        <img src={imageSrc} alt={`${alt} - raw`} className="ba-img" />
        <span className="ba-label left-3 bg-slate-800 text-white">Raw Image</span>
      </div>

      <div className="ba-handle" style={{ left: `${pos}%` }} />

      {label && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-[10px] font-medium px-3 py-1 rounded-full backdrop-blur-sm whitespace-nowrap">
          {label} · Sample / Demonstration Data
        </div>
      )}
    </div>
  );
}
