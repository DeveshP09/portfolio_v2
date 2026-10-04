/** Soft drifting color blobs, adapted from shadcn.io's Mesh Gradient background */
const BLOBS = [
  {
    color: "#7c3aed40",
    className: "left-[-10%] top-[-10%] h-[60%] w-[60%] blur-[80px] animate-mesh-1",
  },
  {
    color: "#2563eb35",
    className: "right-[-5%] top-[10%] h-[50%] w-[50%] blur-[100px] animate-mesh-2",
  },
  {
    color: "#06b6d430",
    className: "bottom-[-15%] left-[20%] h-[55%] w-[70%] blur-[120px] animate-mesh-3",
  },
  {
    color: "#8b5cf625",
    className: "left-[40%] top-[30%] h-[40%] w-[40%] blur-[90px] animate-mesh-4",
  },
];

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")";

export function MeshGradientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden bg-[#030014]"
    >
      {BLOBS.map((blob) => (
        <div
          key={blob.color}
          className={`absolute rounded-full motion-reduce:animate-none ${blob.className}`}
          style={{
            background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
          }}
        />
      ))}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: NOISE }}
      />
    </div>
  );
}
