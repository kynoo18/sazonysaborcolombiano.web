import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, UtensilsCrossed } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/restaurant.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent font-semibold text-lg md:text-xl mb-4 tracking-wider uppercase"
        >
          🇨🇴 Sazón y Sabor Colombiano
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-tight mb-6"
        >
          Auténtica comida colombiana en Alicante
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          Sabor casero, porciones abundantes y precios que te harán volver
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="lg" asChild>
            <a href="#carta">
              <UtensilsCrossed className="mr-2" /> Ver carta
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="tel:+34603060792">
              <Phone className="mr-2" /> Llamar ahora
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="https://maps.google.com/?q=C.+General+Elizaicin,+5,+Alicante" target="_blank" rel="noopener noreferrer">
              <MapPin className="mr-2" /> Cómo llegar
            </a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#platos" className="text-primary-foreground/60 animate-bounce block">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
