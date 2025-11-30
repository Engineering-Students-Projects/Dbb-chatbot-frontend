export function AiBrainSvg() {
  return (
    <svg
      className="ai-brain-svg"
      width="350"
      viewBox="0 0 350 350"
      fill="none"
      style={{
        position: 'absolute',
        bottom: '15%',
        right: '10%',
        opacity: 0.10,
        pointerEvents: 'none',
      }}
    >
      <path
        id="brain-outline"
        d="M175 20 C100 20 60 80 60 140 C60 200 100 260 175 260 C250 260 290 200 290 140 C290 80 250 20 175 20 Z"
        stroke="#bb66ff"
        strokeWidth="4"
      />

      <circle cx="150" cy="120" r="8" fill="#bb66ff" />
      <circle cx="200" cy="120" r="8" fill="#bb66ff" />

      <line x1="150" y1="120" x2="200" y2="120" stroke="#bb66ff" strokeWidth="3" />
      <line x1="175" y1="120" x2="175" y2="200" stroke="#bb66ff" strokeWidth="3" />
    </svg>
  );
}
