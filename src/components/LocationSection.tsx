import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="ubicacion" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Ubicación</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">Encuéntranos fácilmente</h2>
          <p className="text-muted-foreground mt-4 text-lg">C. General Elizaicin, 5, Alicante</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden shadow-xl mb-8"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.5!2d-0.4907!3d38.3452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6236e7b0e6f5c5%3A0x0!2sC.%20General%20Elizaicin%2C%205%2C%20Alicante!5e0!3m2!1ses!2ses!4v1700000000000"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Sazón y Sabor Colombiano"
          />
        </motion.div>

        <div className="text-center">
          <Button variant="cta" size="lg" asChild>
            <a href="https://maps.google.com/?q=C.+General+Elizaicin,+5,+Alicante" target="_blank" rel="noopener noreferrer">
              <MapPin className="mr-2" /> Cómo llegar
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
