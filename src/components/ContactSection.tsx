import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ nombre: "", telefono: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola, soy ${formData.nombre}. ${formData.mensaje}. Mi teléfono: ${formData.telefono}`;
    window.open(`https://wa.me/34603060792?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-warm-light">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Contacto</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">¿Quieres reservar mesa?</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Teléfono</p>
                <a href="tel:+34603060792" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                  603 06 07 92
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href="mailto:viviana08vjd@gmail.com" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                  viviana08vjd@gmail.com
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img src="/images/arepas.png" alt="Arepas colombianas" className="w-full h-56 object-cover" />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 shadow-md space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Nombre</label>
              <input
                type="text"
                required
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Teléfono</label>
              <input
                type="tel"
                required
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="Tu teléfono"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Mensaje</label>
              <textarea
                required
                rows={4}
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                placeholder="Quiero reservar mesa para..."
              />
            </div>
            <Button variant="cta" size="lg" type="submit" className="w-full">
              Reservar mesa
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
