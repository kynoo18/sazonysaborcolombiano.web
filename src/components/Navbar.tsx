import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#platos", label: "Platos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#carta", label: "Carta" },
  { href: "#horario", label: "Horario" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a href="#" className={`font-heading text-xl font-bold transition-colors ${scrolled ? "text-primary" : "text-primary-foreground"}`}>
          Sazón y Sabor
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${scrolled ? "text-foreground" : "text-primary-foreground/90"}`}
            >
              {l.label}
            </a>
          ))}
          <Button variant="cta" size="sm" asChild>
            <a href="tel:+34603060792"><Phone className="w-4 h-4 mr-1" /> Llamar</a>
          </Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card/95 backdrop-blur-md border-t border-border"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-foreground font-medium py-2 hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <Button variant="cta" size="default" asChild className="w-full">
                <a href="tel:+34603060792"><Phone className="w-4 h-4 mr-1" /> Llamar ahora</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
