import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-haze">
      <div className="container-content">
        <h2 className="font-display text-3xl md:text-4xl font-semibold max-w-md mb-16">
          Gente que ya confió en nosotros
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-paper rounded-2xl p-7 flex flex-col">
              <div className="flex items-center gap-4 mb-5">
                {t.foto ? (
                  <img
                    src={t.foto}
                    alt={t.nombre}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-ink text-paper flex items-center justify-center font-display text-sm font-semibold">
                    {t.nombre.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-display text-sm font-medium">{t.nombre}</p>
                  <p className="text-xs text-steel">{t.rol}</p>
                </div>
              </div>
              <p className="text-sm text-steel leading-relaxed">“{t.texto}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
