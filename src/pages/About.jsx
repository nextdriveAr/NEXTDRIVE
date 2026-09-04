import CarImage from "../components/CarImage";

const fundadores = [
  { nombre: "Nombre Apellido", rol: "Co-fundador", seed: "founder-1" },
  { nombre: "Nombre Apellido", rol: "Co-fundador", seed: "founder-2" },
];

const principios = [
  {
    title: "Curamos, no acumulamos",
    desc: "Preferimos tener menos autos publicados y que cada uno sea una buena decisión de compra.",
  },
  {
    title: "Decimos lo que hay",
    desc: "Si un auto tiene un detalle, se informa. La confianza se construye siendo directos.",
  },
  {
    title: "Estamos en cada paso",
    desc: "No desaparecemos después de la primera consulta. Acompañamos hasta que el trato está cerrado.",
  },
];

export default function About() {
  return (
    <div className="pt-16 pb-24">
      <div className="container-content">
        <h1 className="font-display text-4xl md:text-5xl font-semibold max-w-2xl">
          Next Drive nace de estar cansados de cómo se compran y venden autos usados.
        </h1>
        <p className="mt-8 text-steel max-w-xl leading-relaxed text-lg">
          Somos un equipo chico que decidió tratar cada auto como si fuera para un amigo:
          con la información completa, sin apuros, y con alguien del otro lado que responde
          cuando le escribís.
        </p>

        {/* Filosofía */}
        <div className="mt-24 grid md:grid-cols-3 gap-12">
          {principios.map((p) => (
            <div key={p.title}>
              <p className="font-display text-xl font-medium">{p.title}</p>
              <p className="text-steel mt-3 leading-relaxed text-sm">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Fundadores */}
        <div className="mt-28">
          <h2 className="font-display text-3xl font-semibold mb-12">Quiénes lo llevan adelante</h2>
          <div className="grid sm:grid-cols-2 gap-10 max-w-2xl">
            {fundadores.map((f) => (
              <div key={f.seed}>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <CarImage seed={f.seed} className="w-full h-full" />
                </div>
                <p className="font-display text-lg font-medium mt-4">{f.nombre}</p>
                <p className="text-steel text-sm">{f.rol}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-steel mt-6 max-w-md">
            Reemplazar por foto y bio real de cada fundador.
          </p>
        </div>

        {/* Cómo trabajan */}
        <div className="mt-28 bg-ink text-paper rounded-3xl p-8 md:p-16">
          <h2 className="font-display text-3xl font-semibold max-w-lg">Cómo trabajamos</h2>
          <p className="mt-6 text-mist max-w-xl leading-relaxed">
            Cada auto que entra a Next Drive pasa por una revisión mecánica y documental antes
            de publicarse. No tercerizamos la atención al cliente: las personas que hablan con
            vos son las mismas que gestionan la operación de punta a punta. Y no medimos
            éxito en cuántos autos tenemos publicados, sino en cuántas personas volverían
            a comprarnos o vendernos un auto.
          </p>
        </div>
      </div>
    </div>
  );
}
