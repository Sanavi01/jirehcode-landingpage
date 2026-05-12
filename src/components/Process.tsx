import { motion } from "framer-motion";
import { Search, GitBranch, Code2, Users } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { fadeUpStagger } from "../lib/animations";

const STEPS = [
  {
    number: 1,
    icon: Search,
    title: "Analizamos tu operación",
    description:
      "Identificamos cuellos de botella, tareas manuales y oportunidades de mejora concretas.",
  },
  {
    number: 2,
    icon: GitBranch,
    title: "Optimizamos tus procesos",
    description:
      "Rediseñamos la forma en que trabajas antes de escribir una sola línea de código.",
  },
  {
    number: 3,
    icon: Code2,
    title: "Implementamos la solución",
    description:
      "Desarrollamos las herramientas digitales que ejecutan las mejoras definidas.",
  },
  {
    number: 4,
    icon: Users,
    title: "Acompañamos la adopción",
    description:
      "Capacitamos a tu equipo y ajustamos la solución hasta que funcione de verdad.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-20 lg:py-28 bg-surface-alt"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <SectionHeading
            title="Un proceso claro, de principio a fin"
            subtitle="No llegamos a vender un producto. Llegamos a entender tu negocio."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={fadeUpStagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i}
                className="group relative bg-surface-card p-7 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-4 right-4 h-1 rounded-b-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Number + Icon */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {step.number}
                  </div>
                  <Icon className="w-5 h-5 text-primary/60" strokeWidth={1.5} />
                </div>

                <h3 className="text-lg font-semibold text-text-primary mb-2.5">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
