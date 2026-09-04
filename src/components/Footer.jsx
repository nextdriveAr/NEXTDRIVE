import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="container-content py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <p className="font-display text-2xl font-semibold">Next Drive</p>
            <p className="mt-4 text-sm text-mist max-w-xs leading-relaxed">
              Compramos, vendemos y curamos autos usados con un estándar que la industria
              todavía no tiene.
            </p>
          </div>

          <div>
            <p className="text-sm text-mist mb-4">Navegación</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/vehiculos" className="hover:text-mist">Vehículos</Link></li>
              <li><Link to="/vende-tu-auto" className="hover:text-mist">Vendé tu auto</Link></li>
              <li><Link to="/nosotros" className="hover:text-mist">Nosotros</Link></li>
              <li><Link to="/contacto" className="hover:text-mist">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm text-mist mb-4">Contacto</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://wa.me/5491100000000" target="_blank" rel="noreferrer" className="hover:text-mist">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://instagram.com/nextdrive" target="_blank" rel="noreferrer" className="hover:text-mist">
                  Instagram
                </a>
              </li>
              <li>
                <a href="mailto:hola@nextdrive.com.ar" className="hover:text-mist">
                  hola@nextdrive.com.ar
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-mist">
          <p>© {new Date().getFullYear()} Next Drive. Todos los derechos reservados.</p>
          <p>Buenos Aires, Argentina</p>
        </div>
      </div>
    </footer>
  );
}
