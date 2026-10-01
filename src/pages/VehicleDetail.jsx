import { useParams, Link, Navigate } from "react-router-dom";
import CarImage from "../components/CarImage";
import { vehicles } from "../data/vehicles";

export default function VehicleDetail() {
  const { id } = useParams();
  const vehicle = vehicles.find((v) => v.id === id);

  if (!vehicle) return <Navigate to="/vehiculos" replace />;

  const waText = `Hola, me interesa el ${vehicle.marca} ${vehicle.modelo} ${vehicle.year} (US$ ${vehicle.precio.toLocaleString("es-AR")})`;
  const waHref = `https://wa.me/5491164027497?text=${encodeURIComponent(waText)}`;

  const ficha = [
    ["Precio", `US$ ${vehicle.precio.toLocaleString("es-AR")}`],
    ["Año", vehicle.year],
    ["Kilómetros", `${vehicle.km.toLocaleString("es-AR")} km`],
    ["Motor", vehicle.motor],
    ["Caja", vehicle.caja],
    ["Combustible", vehicle.combustible],
    ["Color", vehicle.color],
  ];

  return (
    <div className="pt-12 pb-24">
      <div className="container-content">
        <Link to="/vehiculos" className="text-sm text-steel hover:text-ink">
          ← Volver al catálogo
        </Link>

        <div className="mt-6 grid lg:grid-cols-2 gap-10">
          {/* Galería */}
          <div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <CarImage seed={vehicle.id} className="w-full h-full" />
            </div>
            <div className="grid grid-cols-3 gap-3 mt-3">
              <div className="aspect-square rounded-xl overflow-hidden">
                <CarImage seed={vehicle.id + "-2"} className="w-full h-full" />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden">
                <CarImage seed={vehicle.id + "-3"} className="w-full h-full" />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden relative">
                <CarImage seed={vehicle.id + "-video"} className="w-full h-full" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="w-10 h-10 rounded-full bg-paper/90 flex items-center justify-center">
                    <div className="w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-ink ml-0.5" />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-steel mt-3">
              Fotos y video ilustrativos — se reemplazan por el material real de cada unidad.
            </p>
          </div>

          {/* Info */}
          <div>
            {vehicle.tag && (
              <span className="inline-block bg-haze text-xs px-3 py-1.5 rounded-full mb-4">
                {vehicle.tag}
              </span>
            )}
            <h1 className="font-display text-3xl md:text-4xl font-semibold">
              {vehicle.marca} {vehicle.modelo}
            </h1>
            <p className="font-display text-2xl mt-3 text-steel">
              US$ {vehicle.precio.toLocaleString("es-AR")}
            </p>

            <p className="mt-6 text-steel leading-relaxed">{vehicle.descripcion}</p>

            <dl className="mt-8 grid grid-cols-2 gap-y-5 gap-x-6 border-t border-black/10 pt-8">
              {ficha.map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs text-steel">{label}</dt>
                  <dd className="font-display text-base mt-1">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <p className="text-xs text-steel mb-3">Equipamiento</p>
              <div className="flex flex-wrap gap-2">
                {vehicle.equipamiento.map((item) => (
                  <span key={item} className="text-sm bg-haze px-3 py-1.5 rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 bg-moss text-paper px-7 py-3.5 rounded-full text-sm font-medium hover:bg-mossLight transition-colors"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
