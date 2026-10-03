// Isotipo ND de Next Drive, basado en el manual de marca.
// variant: "dark" (para fondos claros) | "light" (para fondos oscuros)
export default function Logo({ variant = "dark", withWordmark = true, className = "" }) {
  const mark = variant === "light" ? "#F5F5F2" : "#0B0B0B";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* N */}
        <path d="M6 36V12h6l10 16V12h6v24h-6L12 20v16H6z" fill={mark} />
        {/* D, estilizada como flecha/diamante hacia adelante */}
        <path d="M30 12h8c5.5 0 9.5 4.6 9.5 12S43.5 36 38 36h-8V12z" fill={mark} fillOpacity="0" />
        <path d="M28 12l9 12-9 12V12z" fill={mark} />
      </svg>
      {withWordmark && (
        <span
          className="font-display font-bold tracking-tight text-lg leading-none"
          style={{ color: mark }}
        >
          NEXT DRIVE
        </span>
      )}
    </div>
  );
}
