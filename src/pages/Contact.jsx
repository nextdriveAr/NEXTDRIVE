import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div className="pt-16 pb-24">
      <div className="container-content">
        <h1 className="font-display text-4xl md:text-5xl font-semibold">Hablemos</h1>
        <p className="mt-6 text-steel max-w-md leading-relaxed">
          Elegí el canal que prefieras. Del otro lado siempre hay una persona, no un bot.
        </p>

        <div className="mt-16 grid lg:grid-cols-2 gap-16">
          {/* Canales */}
          <div className="space-y-8">
            <ContactRow
              label="WhatsApp"
              value="+54 9 11 6402-7497"
              href="https://wa.me/5491164027497"
            />
            <ContactRow
              label="Instagram"
              value="@nextdrive_arg"
              href="https://instagram.com/nextdrive_arg"
            />
            <ContactRow
              label="TikTok"
              value="@nextdrive_arg"
              href="https://tiktok.com/@nextdrive_arg"
            />
            <ContactRow
              label="Email"
              value="nextdrivearg@gmail.com"
              href="mailto:nextdrivearg@gmail.com"
            />
          </div>

          {/* Formulario */}
          <div>
            {enviado ? (
              <div className="bg-haze rounded-2xl p-10 text-center">
                <p className="font-display text-xl font-medium">Mensaje enviado</p>
                <p className="text-steel mt-3 text-sm">Te respondemos a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs text-steel" htmlFor="nombre">Nombre</label>
                  <input
                    id="nombre"
                    required
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    className="w-full mt-2 bg-transparent border border-black/15 rounded-xl px-4 py-3 text-sm focus:border-ink outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-steel" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full mt-2 bg-transparent border border-black/15 rounded-xl px-4 py-3 text-sm focus:border-ink outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-steel" htmlFor="mensaje">Mensaje</label>
                  <textarea
                    id="mensaje"
                    required
                    rows={5}
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    className="w-full mt-2 bg-transparent border border-black/15 rounded-xl px-4 py-3 text-sm focus:border-ink outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center bg-moss text-paper px-7 py-3.5 rounded-full text-sm font-medium hover:bg-mossLight transition-colors"
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactRow({ label, value, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group flex items-baseline justify-between border-b border-black/10 pb-6">
      <span className="text-xs text-steel">{label}</span>
      <span className="font-display text-lg group-hover:text-moss transition-colors">{value}</span>
    </a>
  );
}
