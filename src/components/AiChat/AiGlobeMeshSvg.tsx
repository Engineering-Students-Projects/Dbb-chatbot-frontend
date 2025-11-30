export function AiGlobeMeshSvg() {
  const latLines = 6;
  const lonLines = 12;

  return (
    <svg
      className="ai-globe-svg"
      width="600"
      height="600"
      viewBox="0 0 600 600"
      fill="none"
      style={{
        position: 'absolute',
        left: '-5%',
        top: '1%',
        opacity: 0.12,
        pointerEvents: 'none',
      }}
    >
      {/* Outer sphere */}
      <circle
        cx="300"
        cy="300"
        r="250"
        stroke="#00eaff"
        strokeWidth="2"
        className="globe-outline"
      />

      {/* Latitude lines */}
      {[...Array(latLines)].map((_, i) => {
        const ry = 250 * Math.cos((i / (latLines - 1)) * Math.PI);
        return (
          <ellipse
            key={`lat-${i}`}
            cx="300"
            cy="300"
            rx={250}
            ry={Math.abs(ry)}
            stroke="#00eaff"
            strokeWidth="1"
            className="globe-lat"
          />
        );
      })}

      {/* Longitude lines */}
      {[...Array(lonLines)].map((_, i) => (
        <ellipse
          key={`lon-${i}`}
          cx="300"
          cy="300"
          rx="250"
          ry="50"
          stroke="#00eaff"
          strokeWidth="1"
          transform={`rotate(${(i / lonLines) * 180} 300 300)`}
          className="globe-lon"
        />
      ))}

      {/* Glow dots on equator */}
      {[...Array(8)].map((_, i) => (
        <circle
          key={`dot-${i}`}
          cx={300 + 250 * Math.cos((i / 8) * 2 * Math.PI)}
          cy={300}
          r="7"
          fill="#00eaff"
          className="globe-dot"
        />
      ))}
    </svg>
  );
}
