import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const schedule = [
  { day: "Lunes", hours: "9:00 – 16:30" },
  { day: "Martes", hours: "9:00 – 16:30" },
  { day: "Miércoles", hours: "Cerrado", closed: true },
  { day: "Jueves", hours: "9:00 – 16:30" },
  { day: "Viernes", hours: "9:00 – 16:30" },
  { day: "Sábado", hours: "9:00 – 16:30" },
  { day: "Domingo", hours: "9:00 – 16:30" },
];

export default function ScheduleSection() {
  const today = new Date().getDay();
  const dayMap: Record<number, string> = { 0: "Domingo", 1: "Lunes", 2: "Martes", 3: "Miércoles", 4: "Jueves", 5: "Viernes", 6: "Sábado" };

  return (
    <section id="horario" className="py-20 md:py-28 bg-warm-light">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Horario</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">¿Cuándo nos visitas?</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-2xl shadow-md overflow-hidden"
        >
          {schedule.map((s, i) => {
            const isToday = dayMap[today] === s.day;
            return (
              <div
                key={i}
                className={`flex justify-between items-center px-6 py-4 border-b border-border last:border-b-0 ${isToday ? "bg-primary/10" : ""}`}
              >
                <span className={`font-semibold ${isToday ? "text-primary" : "text-foreground"}`}>
                  {s.day} {isToday && "• Hoy"}
                </span>
                <span className={`${s.closed ? "text-destructive font-semibold" : "text-muted-foreground"}`}>
                  {s.hours}
                </span>
              </div>
            );
          })}
        </motion.div>
        <p className="text-center text-muted-foreground text-sm mt-4">* Los horarios pueden variar en festivos</p>
      </div>
    </section>
  );
}
