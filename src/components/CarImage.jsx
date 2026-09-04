// Placeholder visual de vehículo: reemplazar por fotos reales del auto.
// Uso: <CarImage seed="audi-a3-2021" className="..." />
export default function CarImage({ seed = "car", className = "" }) {
  // Genera un tono sutil distinto por auto, dentro de la paleta de marca.
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  const hue = Math.abs(hash) % 40; // variación tenue

  return (
    <div
      className={`relative overflow-hidden bg-graphite ${className}`}
      style={{
        background: `linear-gradient(135deg, hsl(${210 + hue}, 8%, 10%) 0%, hsl(${210 + hue}, 6%, 16%) 100%)`,
      }}
    >
      <svg
        viewBox="0 0 400 220"
        className="absolute inset-0 w-full h-full opacity-90"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M20 150 Q40 110 90 100 L130 70 Q160 55 210 55 L270 60 Q310 70 340 100 L375 110 Q385 130 380 150 L370 155 Q365 170 345 170 Q330 170 322 155 L140 155 Q132 170 112 170 Q95 170 88 158 L25 155 Z"
          fill="none"
          stroke="rgba(250,250,248,0.22)"
          strokeWidth="2"
        />
        <circle cx="118" cy="158" r="20" fill="none" stroke="rgba(250,250,248,0.3)" strokeWidth="2" />
        <circle cx="322" cy="158" r="20" fill="none" stroke="rgba(250,250,248,0.3)" strokeWidth="2" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </div>
  );
}
