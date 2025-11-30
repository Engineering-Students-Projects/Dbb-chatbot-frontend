export function NeuralMeshGridSvg() {
  const rows = 12;
  const cols = 20;

  const points = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      points.push({ x, y });
    }
  }

  return (
    <svg
      className="neural-mesh-grid"
      width="1200"
      height="800"
      viewBox="0 0 1200 800"
      fill="none"
      style={{
        transform: 'translateX(-50%) perspective(800px) rotateX(60deg)',
        position: 'absolute',
        bottom: '-10%',
        left: '50%',
        opacity: 0.10,
        pointerEvents: 'none',
      }}
    >
      {/* Vertical grid lines */}
      {Array.from({ length: cols }).map((_, i) => (
        <line
          key={`v-${i}`}
          x1={i * 60}
          y1="0"
          x2={i * 60}
          y2="800"
          stroke="#00e1ff"
          strokeWidth="1"
          className="mesh-line-v"
        />
      ))}

      {/* Horizontal grid lines */}
      {Array.from({ length: rows }).map((_, i) => (
        <line
          key={`h-${i}`}
          x1="0"
          y1={i * 60}
          x2="1200"
          y2={i * 60}
          stroke="#00e1ff"
          strokeWidth="1"
          className="mesh-line-h"
        />
      ))}

      {/* Glow points */}
      {points.map((p, i) => (
        <circle
          key={i}
          cx={p.x * 60}
          cy={p.y * 60}
          r="3"
          fill="#00e1ff"
          className="mesh-point"
        />
      ))}
    </svg>
  );
}
