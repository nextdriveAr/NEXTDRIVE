import { Link } from "react-router-dom";
import CarImage from "../components/CarImage";
import Testimonials from "../components/Testimonials";
import { vehicles } from "../data/vehicles";

const pasos = [
  {
    n: "1",
    title: "Contanos qué buscás o qué tenés",
    desc: "Comprador o vendedor, arrancamos con una charla simple para entender tu situación.",
  },
  {
    n: "2",
    title: "Inspeccionamos y curamos",
    desc: "Cada auto que publicamos pasa un control real: mecánica, papeles y estado general.",
  },
  {
    n: "3",
    title: "Cerramos el trato",
    desc: "Te acompañamos en la negociación, la documentación y la transferencia.",
  },
];

const razones = [
  {
    title: "Selección, no acumulación",
    desc: "No llenamos la web de autos. Publicamos los que pasarían nuestro propio control de calidad.",
  },
  {
    title: "Transparencia real",
    desc: "Fotos y datos tal cual son. Si un auto tiene un detalle, lo vas a saber antes de ir a verlo.",
  },
  {
    title: "Trato directo",
    desc: "Hablás con las personas que están llevando tu operación, no con un call center.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-ink text-paper overflow-hidden">
        <div className="container-content relative z-10 pt-24 pb-28 md:pt-36 md:pb-40">
          <p className="text-mist text-sm mb-6 tracking-wide uppercase">Tu próximo auto, nuestra prioridad</p>
          <h1 className="font-display text-[13vw] leading-[0.95] md:text-7xl md:leading-[0.95] font-semibold max-w-3xl">
            Autos usados que merecen confianza.
          </h1>
          <p className="mt-8 text-lg text-mist max-w-xl leading-relaxed">
            Curamos cada vehículo que publicamos y acompañamos cada venta de principio a fin.
            Nada de improvisación, nada de sorpresas.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/vehiculos"
              className="inline-flex items-center bg-paper text-ink px-7 py-3.5 rounded-full text-sm font-medium hover:bg-mist transition-colors"
            >
              Ver vehículos
            </Link>
            <Link
              to="/vende-tu-auto"
              className="inline-flex items-center border border-white/25 px-7 py-3.5 rounded-full text-sm font-medium hover:border-white/60 transition-colors"
            >
              Quiero vender mi auto
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -right-40 top-0 w-[70%] h-full bg-gradient-to-l from-moss/30 to-transparent" />
        </div>
      </section>

      {/* Vehículos destacados */}
      <section className="py-24 md:py-32">
        <div className="container-content">
          <div className="flex items-end justify-between mb-12 gap-6">
            <h2 className="font-display text-3xl md:text-4xl font-semibold max-w-md">
              Vehículos destacados
            </h2>
            <Link to="/vehiculos" className="text-sm text-steel hover:text-ink whitespace-nowrap">
              Ver catálogo completo
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.slice(0, 3).map((v) => (
              <Link key={v.id} to={`/vehiculos/${v.id}`} className="group block">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <CarImage seed={v.id} className="w-full h-full group-hover:scale-[1.03] transition-transform duration-500" />
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-lg font-medium">{v.marca} {v.modelo}</p>
                    <p className="text-sm text-steel mt-1">{v.year} · {v.km.toLocaleString("es-AR")} km</p>
                  </div>
                  <p className="font-display text-lg font-medium whitespace-nowrap">
                    US$ {v.precio.toLocaleString("es-AR")}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-24 md:py-32 bg-haze">
        <div className="container-content">
          <h2 className="font-display text-3xl md:text-4xl font-semibold max-w-md mb-16">
            Cómo funciona Next Drive
          </h2>
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {pasos.map((p) => (
              <div key={p.n} className="border-t border-black/10 pt-6">
                <span className="font-display text-sm text-steel">{p.n}</span>
                <p className="font-display text-xl font-medium mt-4">{p.title}</p>
                <p className="text-steel mt-3 leading-relaxed text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-24 md:py-32">
        <div className="container-content">
          <h2 className="font-display text-3xl md:text-4xl font-semibold max-w-md mb-16">
            Por qué elegirnos
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {razones.map((r) => (
              <div key={r.title}>
                <p className="font-display text-xl font-medium">{r.title}</p>
                <p className="text-steel mt-3 leading-relaxed text-sm">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA final */}
      <section className="py-24 md:py-32 bg-ink text-paper">
        <div className="container-content text-center">
          <h2 className="font-display text-3xl md:text-5xl font-semibold max-w-2xl mx-auto">
            ¿Comprás, vendés, o simplemente querés preguntar algo?
          </h2>
          <p className="mt-6 text-mist max-w-md mx-auto">
            Escribinos y te respondemos nosotros, directamente.
          </p>
          <Link
            to="/contacto"
            className="mt-10 inline-flex items-center bg-paper text-ink px-8 py-4 rounded-full text-sm font-medium hover:bg-mist transition-colors"
          >
            Hablemos
          </Link>
        </div>
      </section>
    </div>
  );
}
