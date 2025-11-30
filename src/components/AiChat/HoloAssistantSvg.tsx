export function HoloAssistantSvg() {
  return (
    <svg
      className="holo-svg"
      width="450"
      viewBox="0 0 450 600"
      fill="none"
      style={{
        position: 'absolute',
        right: '5%',
        bottom: '10%',
        opacity: 0.12,
        pointerEvents: 'none',
      }}
    >
      {/* Face outline */}
      <path
        id="face-outline"
        d="M225 30 C300 80 350 150 350 300 C350 450 300 520 225 570 C150 520 100 450 100 300 C100 150 150 80 225 30 Z"
        stroke="#bb88ff"
        strokeWidth="5"
      />

      {/* Eye nodes */}
      <circle className="holo-node" cx="185" cy="240" r="10" fill="#bb88ff" />
      <circle className="holo-node" cx="265" cy="240" r="10" fill="#bb88ff" />

      {/* Scanner beam */}
      <rect className="holo-scan" x="100" y="0" width="250" height="12" fill="#bb88ff" />
    </svg>
  );
}
