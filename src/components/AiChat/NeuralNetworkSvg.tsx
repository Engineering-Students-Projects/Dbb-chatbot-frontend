export function NeuralNetworkSvg() {
  return (
    <svg
      className="neural-network-svg"
      width="800"
      viewBox="0 0 800 400"
      fill="none"
      style={{
        position: 'absolute',
        top: '50%',
        left: '62%',
        opacity: 0.10,
        transform: 'rotate(120deg)',
        transformOrigin: 'center center',
        pointerEvents: 'none',
      }}
    >
      <circle cx="100" cy="200" r="10" fill="#00d4ff" className="nn-node" />
      <circle cx="200" cy="120" r="10" fill="#00d4ff" className="nn-node" />
      <circle cx="200" cy="280" r="10" fill="#00d4ff" className="nn-node" />
      <circle cx="300" cy="180" r="10" fill="#00d4ff" className="nn-node" />
      <circle cx="400" cy="250" r="10" fill="#00d4ff" className="nn-node" />
      <circle cx="500" cy="150" r="10" fill="#00d4ff" className="nn-node" />
      <circle cx="600" cy="200" r="10" fill="#00d4ff" className="nn-node" />

      <path d="M100 200 L200 120" stroke="#00d4ff" strokeWidth="3" className="nn-line" />
      <path d="M100 200 L200 280" stroke="#00d4ff" strokeWidth="3" className="nn-line" />
      <path d="M200 120 L300 180" stroke="#00d4ff" strokeWidth="3" className="nn-line" />
      <path d="M200 280 L300 180" stroke="#00d4ff" strokeWidth="3" className="nn-line" />
      <path d="M300 180 L400 250" stroke="#00d4ff" strokeWidth="3" className="nn-line" />
      <path d="M300 180 L500 150" stroke="#00d4ff" strokeWidth="3" className="nn-line" />
      <path d="M500 150 L600 200" stroke="#00d4ff" strokeWidth="3" className="nn-line" />
    </svg>
  );
}
