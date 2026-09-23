// Reusable SVG annotation overlays for demonstrating different annotation types

interface BoxProps {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  color?: string;
}

export function BoundingBox({ x, y, w, h, label, color = '#0073c7' }: BoxProps) {
  return (
    <g>
      <rect
        x={`${x}%`}
        y={`${y}%`}
        width={`${w}%`}
        height={`${h}%`}
        fill="none"
        stroke={color}
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
      <rect
        x={`${x}%`}
        y={`${y}%`}
        width={`${label.length * 6 + 8}px`}
        height="16"
        fill={color}
      />
      <text
        x={`${x + 1}%`}
        y={`${y}%`}
        dy="12"
        fill="white"
        fontSize="10"
        fontWeight="600"
        fontFamily="JetBrains Mono, monospace"
      >
        {label}
      </text>
    </g>
  );
}

interface PolygonProps {
  points: string;
  label: string;
  color?: string;
  fillOpacity?: number;
}

export function PolygonAnnotation({ points, label, color = '#0073c7', fillOpacity = 0.2 }: PolygonProps) {
  return (
    <g>
      <polygon
        points={points}
        fill={color}
        fillOpacity={fillOpacity}
        stroke={color}
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </g>
  );
}

interface SegMaskProps {
  points: string;
  color?: string;
  opacity?: number;
}

export function SegmentationMask({ points, color = '#0073c7', opacity = 0.35 }: SegMaskProps) {
  return (
    <polygon
      points={points}
      fill={color}
      fillOpacity={opacity}
      stroke={color}
      strokeWidth="1.5"
      vectorEffect="non-scaling-stroke"
    />
  );
}

interface KeypointProps {
  x: number;
  y: number;
  label?: string;
  color?: string;
  r?: number;
}

export function Keypoint({ x, y, color = '#f59e0b', r = 4 }: KeypointProps) {
  return (
    <g>
      <circle cx={`${x}%`} cy={`${y}%`} r={r} fill={color} stroke="white" strokeWidth="1.5" />
    </g>
  );
}

export function KeypointSkeleton({ connections, points, color = '#f59e0b' }: { connections: [number, number][]; points: { x: number; y: number }[]; color?: string }) {
  return (
    <g>
      {connections.map(([a, b], i) => (
        <line
          key={`conn-${i}`}
          x1={`${points[a].x}%`}
          y1={`${points[a].y}%`}
          x2={`${points[b].x}%`}
          y2={`${points[b].y}%`}
          stroke={color}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          opacity={0.8}
        />
      ))}
      {points.map((p, i) => (
        <circle key={`kp-${i}`} cx={`${p.x}%`} cy={`${p.y}%`} r={3.5} fill={color} stroke="white" strokeWidth="1.5" />
      ))}
    </g>
  );
}

interface ClassLabelProps {
  x: number;
  y: number;
  label: string;
  confidence?: string;
  color?: string;
}

export function ClassLabel({ x, y, label, confidence, color = '#0073c7' }: ClassLabelProps) {
  return (
    <g>
      <rect x={`${x}%`} y={`${y}%`} width={`${label.length * 6 + (confidence ? 20 : 8)}px`} height="18" fill={color} rx="3" />
      <text
        x={`${x + 1}%`}
        y={`${y}%`}
        dy="13"
        fill="white"
        fontSize="10"
        fontWeight="600"
        fontFamily="JetBrains Mono, monospace"
      >
        {label}{confidence ? ` ${confidence}` : ''}
      </text>
    </g>
  );
}
