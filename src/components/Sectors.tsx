import { motion } from "framer-motion";
import { Building2, Landmark, Palmtree, BookOpen } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { fadeUpStagger } from "../lib/animations";

const SECTORS = [
  {
    icon: Building2,
    title: "Empresas locales",
    description:
      "Digitalizamos y organizamos la operación para que puedan crecer sin caos.",
  },
  {
    icon: Landmark,
    title: "Sector público",
    description:
      "Modernizamos procesos y mejoramos la atención al ciudadano con soluciones accesibles.",
  },
  {
    icon: Palmtree,
    title: "Turismo",
    description:
      "Impulsamos la digitalización de servicios turísticos y la experiencia del visitante.",
  },
  {
    icon: BookOpen,
    title: "Educación",
    description:
      "Optimizamos la gestión académica y administrativa mediante soluciones prácticas.",
  },
];

export default function Sectors() {
  return (
    <section id="sectors" className="py-20 lg:py-28 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <SectionHeading
            title="Sectores en los que trabajamos"
            subtitle="Nuestras soluciones se adaptan al contexto de cada organización."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SECTORS.map((sector, i) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={sector.title}
                variants={fadeUpStagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={i}
                className="group flex flex-col items-center text-center bg-surface-card p-7 rounded-2xl border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-md"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-text-primary mb-2">
                  {sector.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {sector.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
