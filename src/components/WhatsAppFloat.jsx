export default function WhatsAppFloat({ text = "Hola, quiero hacer una consulta" }) {
  const href = `https://wa.me/5491100000000?text=${encodeURIComponent(text)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Consultar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-moss text-paper shadow-lg hover:bg-mossLight transition-colors"
    >
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.35a9.9 9.9 0 0 0 4.62 1.14h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.79 14.09c-.24.68-1.4 1.3-1.93 1.35-.5.05-1.06.07-1.71-.11a12.4 12.4 0 0 1-1.82-.68 10.9 10.9 0 0 1-4.06-3.6c-.37-.5-1-1.56-1-2.98 0-1.41.74-2.1 1-2.39.24-.27.54-.34.72-.34h.52c.17 0 .39-.02.6.46.24.55.79 1.9.86 2.04.07.14.11.3.02.48-.09.18-.14.29-.28.44-.14.16-.29.36-.42.48-.14.13-.28.28-.12.55.16.27.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.23 1.38.27.14.43.12.59-.07.16-.2.68-.79.86-1.06.18-.27.36-.22.6-.13.25.09 1.58.75 1.85.88.27.14.45.2.52.32.07.11.07.66-.17 1.34Z" />
      </svg>
    </a>
  );
}
