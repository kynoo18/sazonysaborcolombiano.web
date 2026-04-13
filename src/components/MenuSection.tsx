import { motion } from "framer-motion";

const categories = [
  {
    title: "🥟 Entrantes",
    items: [
      { name: "Empanadas colombianas", desc: "Crujientes de maíz con carne y papa" },
      { name: "Arepas", desc: "Arepas de maíz hechas a mano" },
    ],
  },
  {
    title: "🍖 Platos Principales",
    items: [
      { name: "Bandeja Paisa", desc: "El plato insignia: frijoles, arroz, chicharrón, carne, chorizo, huevo, aguacate, plátano y arepa" },
      { name: "Sancocho", desc: "Sopa tradicional con pollo, yuca, plátano y mazorca" },
      { name: "Mondongo", desc: "Sopa espesa con callos, papa, yuca y especias" },
      { name: "Sobrebarriga en salsa", desc: "Tierna sobrebarriga en salsa criolla" },
      { name: "Pescado frito", desc: "Dorada entera frita con patacones y arroz" },
    ],
  },
  {
    title: "🥤 Bebidas",
    items: [
      { name: "Jugos naturales", desc: "Variedad de frutas tropicales: lulo, maracuyá, guanábana, mango" },
    ],
  },
];

export default function MenuSection() {
  return (
    <section id="carta" className="py-20 md:py-28 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Nuestra Carta</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">Sabores para todos los gustos</h2>
        </motion.div>

        <div className="space-y-12">
          {categories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b-2 border-primary/30">
                {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.items.map((item, ii) => (
                  <div
                    key={ii}
                    className="flex justify-between items-start bg-card rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">{item.name}</h4>
                      <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mt-12 text-sm"
        >
          * Consulta precios y disponibilidad llamando al <a href="tel:+34603060792" className="text-primary font-semibold hover:underline">603 06 07 92</a>
        </motion.p>
      </div>
    </section>
  );
}
