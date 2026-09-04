import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import CarImage from "../components/CarImage";
import { vehicles, marcas } from "../data/vehicles";

export default function Vehicles() {
  const [marca, setMarca] = useState("Todas");
  const [orden, setOrden] = useState("recientes");
  const [precioMax, setPrecioMax] = useState(45000000);

  const filtrados = useMemo(() => {
    let list = vehicles.filter((v) => v.precio <= precioMax);
    if (marca !== "Todas") list = list.filter((v) => v.marca === marca);
    if (orden === "precio-asc") list = [...list].sort((a, b) => a.precio - b.precio);
    if (orden === "precio-desc") list = [...list].sort((a, b) => b.precio - a.precio);
    if (orden === "km-asc") list = [...list].sort((a, b) => a.km - b.km);
    if (orden === "año-desc") list = [...list].sort((a, b) => b.year - a.year);
    return list;
  }, [marca, orden, precioMax]);

  return (
    <div className="pt-16 pb-24">
      <div className="container-content">
        <h1 className="font-display text-4xl md:text-5xl font-semibold">Vehículos disponibles</h1>
        <p className="text-steel mt-4 max-w-lg">
          {vehicles.length} autos curados y verificados. Filtrá por lo que te importa.
        </p>

        {/* Filtros */}
        <div className="mt-12 flex flex-wrap gap-6 items-end pb-8 border-b border-black/10">
          <div className="flex flex-col gap-2">
            <label className="text-xs text-steel">Marca</label>
            <select
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
              className="bg-transparent border-b border-black/20 py-1.5 text-sm min-w-[140px] focus:border-ink"
            >
              <option>Todas</option>
              {marcas.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs text-steel">Ordenar por</label>
            <select
              value={orden}
              onChange={(e) => setOrden(e.target.value)}
              className="bg-transparent border-b border-black/20 py-1.5 text-sm min-w-[160px] focus:border-ink"
            >
              <option value="recientes">Más recientes</option>
              <option value="precio-asc">Precio: menor a mayor</option>
              <option value="precio-desc">Precio: mayor a menor</option>
              <option value="km-asc">Menor kilometraje</option>
              <option value="año-desc">Año más nuevo</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 flex-1 min-w-[220px]">
            <label className="text-xs text-steel">
              Precio máximo: US$ {precioMax.toLocaleString("es-AR")}
            </label>
            <input
              type="range"
              min="15000000"
              max="45000000"
              step="500000"
              value={precioMax}
              onChange={(e) => setPrecioMax(Number(e.target.value))}
              className="accent-moss"
            />
          </div>
        </div>

        {/* Grilla */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtrados.map((v) => (
            <Link key={v.id} to={`/vehiculos/${v.id}`} className="group block">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <CarImage seed={v.id} className="w-full h-full group-hover:scale-[1.03] transition-transform duration-500" />
                {v.tag && (
                  <span className="absolute top-4 left-4 bg-paper/95 text-ink text-xs px-3 py-1.5 rounded-full">
                    {v.tag}
                  </span>
                )}
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-lg font-medium">{v.marca} {v.modelo}</p>
                  <p className="text-sm text-steel mt-1">
                    {v.year} · {v.km.toLocaleString("es-AR")} km · {v.combustible}
                  </p>
                </div>
                <p className="font-display text-lg font-medium whitespace-nowrap">
                  US$ {v.precio.toLocaleString("es-AR")}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {filtrados.length === 0 && (
          <p className="text-steel mt-16 text-center">
            No hay vehículos que coincidan con esos filtros. Probá ampliando el rango de precio.
          </p>
        )}
      </div>
    </div>
  );
}
