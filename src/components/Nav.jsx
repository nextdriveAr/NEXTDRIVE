import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/vehiculos", label: "Vehículos" },
  { to: "/vende-tu-auto", label: "Vendé tu auto" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/contacto", label: "Contacto" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur border-b border-black/[0.06]">
      <div className="container-content flex items-center justify-between h-20">
        <Link to="/" className="font-display text-xl font-semibold tracking-tight">
          Next Drive
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive ? "text-ink" : "text-steel hover:text-ink"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/vehiculos"
          className="hidden md:inline-flex items-center bg-ink text-paper text-sm px-5 py-2.5 rounded-full hover:bg-moss transition-colors"
        >
          Ver vehículos
        </Link>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={`block w-6 h-px bg-ink transition-transform ${open ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-6 h-px bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-ink transition-transform ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-black/[0.06] bg-paper">
          <div className="container-content flex flex-col py-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base border-b border-black/[0.04] last:border-b-0"
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
