import { MapPin, Phone, Mail } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-foreground py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-primary-foreground/80">
          <div>
            <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">Sazón y Sabor Colombiano</h3>
            <p className="text-sm leading-relaxed">
              Auténtica comida colombiana casera en el corazón de Alicante.
              Sabor, tradición y cariño en cada plato.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-accent shrink-0" />
              <span className="text-sm">C. General Elizaicin, 5, Alicante</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-accent shrink-0" />
              <a href="tel:+34603060792" className="text-sm hover:text-primary-foreground transition-colors">603 06 07 92</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-accent shrink-0" />
              <a href="mailto:viviana08vjd@gmail.com" className="text-sm hover:text-primary-foreground transition-colors">viviana08vjd@gmail.com</a>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-primary-foreground">Enlaces</h4>
            <a href="#platos" className="block text-sm hover:text-primary-foreground transition-colors">Platos destacados</a>
            <a href="#carta" className="block text-sm hover:text-primary-foreground transition-colors">Nuestra carta</a>
            <a href="#horario" className="block text-sm hover:text-primary-foreground transition-colors">Horario</a>
            <a href="#contacto" className="block text-sm hover:text-primary-foreground transition-colors">Contacto</a>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-primary-foreground/50 text-xs">
          <p>© {new Date().getFullYear()} SAZON Y SABOR COLOMBIANO SL – B24876831. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
