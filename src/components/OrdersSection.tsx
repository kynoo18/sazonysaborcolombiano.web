import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ShoppingBag } from "lucide-react";

export default function OrdersSection() {
  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary-foreground" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-primary-foreground" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ShoppingBag className="w-16 h-16 text-primary-foreground mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Disfruta de nuestra comida donde quieras
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-4 max-w-xl mx-auto">
            Servicio para llevar y a domicilio (consultar disponibilidad).
            ¡Llámanos y te lo preparamos!
          </p>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="tel:+34603060792">
              <Phone className="mr-2" /> Llamar para pedir
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
