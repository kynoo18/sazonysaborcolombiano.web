import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="/images/dorada.png"
              alt="Nuestra cocina colombiana"
              className="w-full h-80 md:h-[28rem] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Sobre Nosotros</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Aquí cocinamos como en casa
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Desde hace más de 5 años, <strong className="text-foreground">Sazón y Sabor Colombiano</strong> lleva
              el auténtico sabor de Colombia al corazón de Alicante. Cada plato es preparado con
              amor, ingredientes frescos y las recetas que nuestras abuelas nos enseñaron.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Nuestro compromiso es que cada bocado te transporte a Colombia. Porciones abundantes,
              sabor casero y un ambiente familiar donde todos son bienvenidos.
            </p>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">+5</p>
                <p className="text-sm text-muted-foreground">Años de sabor</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Casero</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">❤️</p>
                <p className="text-sm text-muted-foreground">Hecho con cariño</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
