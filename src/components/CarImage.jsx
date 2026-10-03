// Placeholder visual de vehículo: reemplazar por fotos reales del auto.
// Uso: <CarImage seed="audi-a3-2021" className="..." />
export default function CarImage({ seed = "car", className = "" }) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  const hue = Math.abs(hash) % 30;

  return (
    <div
      className={`relative overflow-hidden bg-graphite ${className}`}
      style={{
        background: `linear-gradient(160deg, hsl(${20 + hue}, 4%, 9%) 0%, hsl(${20 + hue}, 4%, 15%) 55%, hsl(${20 + hue}, 4%, 11%) 100%)`,
      }}
    >
      {/* Línea de horizonte / asfalto */}
      <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-[18%] h-px bg-white/10" />

      {/* Silueta de auto */}
      <svg
        viewBox="0 0 400 220"
        className="absolute inset-0 w-full h-full opacity-90"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M20 150 Q40 110 90 100 L130 70 Q160 55 210 55 L270 60 Q310 70 340 100 L375 110 Q385 130 380 150 L370 155 Q365 170 345 170 Q330 170 322 155 L140 155 Q132 170 112 170 Q95 170 88 158 L25 155 Z"
          fill="none"
          stroke="rgba(245,245,242,0.26)"
          strokeWidth="2"
        />
        <circle cx="118" cy="158" r="20" fill="none" stroke="rgba(245,245,242,0.32)" strokeWidth="2" />
        <circle cx="322" cy="158" r="20" fill="none" stroke="rgba(245,245,242,0.32)" strokeWidth="2" />
        {/* Detalle de faro, en tono arena como acento sutil */}
        <circle cx="368" cy="115" r="3.5" fill="#D6C8B2" fillOpacity="0.85" />
      </svg>

      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
    </div>
  );
}
