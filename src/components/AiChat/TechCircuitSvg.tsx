export function TechCircuitSvg() {
  return (
    <svg
      className="tech-circuit-svg"
      width="600"
      height="600"
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        opacity: 0.15,
        pointerEvents: 'none',
      }}
    >
      <circle cx="300" cy="300" r="200" stroke="#00d4ff" strokeWidth="2" />
      <path
        id="circuit-line"
        d="M100 300 H500 M300 100 V500"
        stroke="#00d4ff"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
