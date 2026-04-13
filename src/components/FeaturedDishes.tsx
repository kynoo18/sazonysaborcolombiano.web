import { motion } from "framer-motion";

const dishes = [
  { name: "Bandeja Paisa", desc: "El plato insignia colombiano: frijoles, arroz, chicharrón, carne molida, chorizo, huevo, aguacate, plátano y arepa.", img: "/images/bandeja-paisa.png" },
  { name: "Sancocho", desc: "Sopa tradicional con pollo, yuca, plátano y mazorca. Reconfortante y llena de sabor casero.", img: "/images/sancocho.png" },
  { name: "Sobrebarriga en Salsa", desc: "Tierna sobrebarriga cocinada a fuego lento en salsa criolla con arroz, ensalada y plátano.", img: "/images/sobrebarriga.png" },
  { name: "Empanadas Colombianas", desc: "Crujientes empanadas de maíz rellenas de carne y papa, con ají casero.", img: "/images/empanadas.png" },
  { name: "Mondongo", desc: "Sopa espesa y sustanciosa con callos, papa, yuca y especias tradicionales colombianas.", img: "/images/mondongo.png" },
  { name: "Pescado Frito", desc: "Dorada entera frita con patacones, arroz de coco, ensalada fresca y limón.", img: "/images/pescado-frito.png" },
];

export default function FeaturedDishes() {
  return (
    <section id="platos" className="py-20 md:py-28 bg-warm-light">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Nuestros Platos</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
            Los sabores que nos definen
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
            Cada plato es preparado con ingredientes frescos y recetas que pasan de generación en generación.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="overflow-hidden h-56 md:h-64">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{dish.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{dish.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
