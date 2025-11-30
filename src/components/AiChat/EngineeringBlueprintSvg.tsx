export function EngineeringBlueprintSvg() {
  return (
    <svg
      className="blueprint-svg"
      width="900"
      height="900"
      viewBox="0 0 900 900"
      fill="none"
      style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-10%',
        opacity: 0.07,
        pointerEvents: 'none',
      }}
    >
      <g stroke="#5daeff" strokeWidth="1.2">
        {/* Grid */}
        {[...Array(20)].map((_, i) => (
          <line key={`v-${i}`} x1={i * 45} y1="0" x2={i * 45} y2="900" />
        ))}
        {[...Array(20)].map((_, i) => (
          <line key={`h-${i}`} x1="0" y1={i * 45} x2="900" y2={i * 45} />
        ))}

        {/* Circles */}
        <circle cx="450" cy="450" r="300" />
        <circle cx="450" cy="450" r="200" />
        <circle cx="450" cy="450" r="100" />

        {/* Crosshair */}
        <line x1="450" y1="0" x2="450" y2="900" strokeWidth="2" />
        <line x1="0" y1="450" x2="900" y2="450" strokeWidth="2" />
      </g>
    </svg>
  );
}
