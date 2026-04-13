import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "María L.", text: "Platos abundantes, con sabor casero y ambiente acogedor. ¡Me sentí como en casa!", rating: 5 },
  { name: "Carlos R.", text: "Excelente atención y precios muy económicos. La bandeja paisa es espectacular.", rating: 5 },
  { name: "Andrea P.", text: "Auténtica comida colombiana en Alicante. El sancocho me recordó a mi abuela.", rating: 4 },
  { name: "Juan M.", text: "Las empanadas son las mejores que he probado fuera de Colombia. Volveré seguro.", rating: 4 },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < count ? "fill-accent text-accent" : "text-border"}`} />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="resenas" className="py-20 md:py-28 bg-warm-light">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Reseñas</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">Lo que dicen nuestros clientes</h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`w-6 h-6 ${i < 4 ? "fill-accent text-accent" : i === 4 ? "fill-accent/40 text-accent/40" : "text-border"}`} />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">4,2</span>
            <span className="text-muted-foreground">/ 5 · +200 reseñas</span>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Stars count={r.rating} />
              <p className="text-foreground mt-4 text-sm leading-relaxed italic">"{r.text}"</p>
              <p className="text-primary font-semibold mt-4 text-sm">— {r.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
