import { useState } from "react";

const pasos = [
  {
    n: "1",
    title: "Nos contás sobre tu auto",
    desc: "Completás el formulario con los datos básicos: marca, modelo, año, kilometraje y estado general.",
  },
  {
    n: "2",
    title: "Lo evaluamos y tasamos",
    desc: "Coordinamos una revisión rápida y te damos un valor de mercado real, sin vueltas.",
  },
  {
    n: "3",
    title: "Nosotros nos encargamos de vender",
    desc: "Fotos profesionales, publicación, consultas y visitas: te sacamos el trabajo de encima.",
  },
  {
    n: "4",
    title: "Cerramos la operación",
    desc: "Te acompañamos en la documentación y la transferencia hasta que el dinero esté en tu cuenta.",
  },
];

const nosotros = [
  "Fotos y video profesional del vehículo",
  "Publicación en el catálogo y redes de Next Drive",
  "Filtro de compradores serios",
  "Coordinación de visitas y pruebas de manejo",
  "Gestión de la documentación y transferencia",
];

const propietario = [
  "El auto en buen estado de presentación para las fotos",
  "Documentación al día (cédula, VTV, título)",
  "Disponibilidad para una revisión inicial",
  "Flexibilidad para coordinar visitas de interesados",
];

export default function SellYourCar() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    marca: "",
    modelo: "",
    año: "",
    km: "",
    comentarios: "",
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Acá se conecta el envío real (email, API propia, Google Sheets, etc.)
    setEnviado(true);
  };

  return (
    <div className="pt-16 pb-24">
      <div className="container-content">
        <h1 className="font-display text-4xl md:text-5xl font-semibold max-w-2xl">
          Vendé tu auto sin perder tiempo ni plata.
        </h1>
        <p className="mt-6 text-steel max-w-xl leading-relaxed">
          Nos ocupamos de todo el proceso de venta: fotos, publicación, consultas y cierre.
          Vos solo tenés que decidir cuándo entregarlo.
        </p>

        {/* Cómo funciona */}
        <div className="mt-20 grid md:grid-cols-4 gap-10">
          {pasos.map((p) => (
            <div key={p.n} className="border-t border-black/10 pt-6">
              <span className="font-display text-sm text-steel">{p.n}</span>
              <p className="font-display text-lg font-medium mt-4">{p.title}</p>
              <p className="text-steel mt-3 leading-relaxed text-sm">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Qué hace cada uno */}
        <div className="mt-24 grid md:grid-cols-2 gap-12 bg-haze rounded-3xl p-8 md:p-14">
          <div>
            <p className="font-display text-xl font-medium">Qué hacemos nosotros</p>
            <ul className="mt-5 space-y-3">
              {nosotros.map((item) => (
                <li key={item} className="text-sm text-steel flex gap-3">
                  <span className="text-ink">—</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-display text-xl font-medium">Qué necesitamos de vos</p>
            <ul className="mt-5 space-y-3">
              {propietario.map((item) => (
                <li key={item} className="text-sm text-steel flex gap-3">
                  <span className="text-ink">—</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Formulario */}
        <div className="mt-24 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-3xl font-semibold">Contanos sobre tu auto</h2>
            <p className="text-steel mt-4 leading-relaxed max-w-sm">
              Completá tus datos y te contactamos en menos de 24 horas hábiles con una
              tasación preliminar.
            </p>
            <a
              href="https://wa.me/5491164027497?text=Hola,%20quiero%20vender%20mi%20auto"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center bg-ink text-paper px-7 py-3.5 rounded-full text-sm font-medium hover:bg-moss transition-colors"
            >
              Prefiero escribir por WhatsApp
            </a>
          </div>

          <div>
            {enviado ? (
              <div className="bg-haze rounded-2xl p-10 text-center">
                <p className="font-display text-xl font-medium">¡Listo, lo recibimos!</p>
                <p className="text-steel mt-3 text-sm">
                  Te vamos a contactar a la brevedad para coordinar los próximos pasos.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Nombre y apellido" name="nombre" value={form.nombre} onChange={handleChange} required />
                  <Field label="Teléfono" name="telefono" value={form.telefono} onChange={handleChange} required />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Marca" name="marca" value={form.marca} onChange={handleChange} required />
                  <Field label="Modelo" name="modelo" value={form.modelo} onChange={handleChange} required />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Año" name="año" value={form.año} onChange={handleChange} required />
                  <Field label="Kilometraje" name="km" value={form.km} onChange={handleChange} required />
                </div>
                <div>
                  <label className="text-xs text-steel">Comentarios (opcional)</label>
                  <textarea
                    name="comentarios"
                    value={form.comentarios}
                    onChange={handleChange}
                    rows={4}
                    className="w-full mt-2 bg-transparent border border-black/15 rounded-xl px-4 py-3 text-sm focus:border-ink outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center bg-moss text-paper px-7 py-3.5 rounded-full text-sm font-medium hover:bg-mossLight transition-colors"
                >
                  Enviar datos de mi auto
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, name, value, onChange, required }) {
  return (
    <div>
      <label className="text-xs text-steel" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full mt-2 bg-transparent border border-black/15 rounded-xl px-4 py-3 text-sm focus:border-ink outline-none"
      />
    </div>
  );
}
