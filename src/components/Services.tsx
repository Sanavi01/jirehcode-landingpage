import { motion } from "framer-motion";
import {
  Search,
  Code2,
  Zap,
  Globe,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import { fadeUpStagger } from "../lib/animations";

const SERVICES = [
  {
    icon: Search,
    title: "Optimización y Transformación Digital",
    description:
      "Analizamos tu operación actual, identificamos ineficiencias y rediseñamos tus procesos para que tu empresa funcione mejor, con o sin tecnología nueva.",
    features: [
      "Diagnóstico operativo y mapeo de procesos",
      "Optimización de procesos",
      "Implementación tecnológica",
    ],
    idealFor: "Empresas que sienten que algo no funciona pero no saben qué.",
  },
  {
    icon: Code2,
    title: "Desarrollo de Plataformas y Soluciones",
    description:
      "Diseñamos y desarrollamos sistemas digitales a medida, no plantillas ni soluciones genéricas. Cada plataforma construida sobre el análisis previo de tu operación.",
    features: [
      "Plataformas web a medida",
      "Automatización e integraciones",
      "Soluciones para sector público",
    ],
    idealFor: "Empresas que necesitan una herramienta propia, no un software de terceros.",
  },
  {
    icon: Zap,
    title: "Automatización y Eficiencia Operativa",
    description:
      "Identificamos las tareas repetitivas que consumen tiempo de tu equipo y las automatizamos para que puedan enfocarse en lo que realmente importa.",
    features: [
      "Automatización de tareas repetitivas",
      "Integración de sistemas aislados",
      "Flujos de trabajo automatizados",
    ],
    idealFor: "Equipos que dedican horas a tareas que podría hacer un sistema.",
  },
  {
    icon: Globe,
    title: "Presencia Digital y Plataformas Web",
    description:
      "Creamos sitios web que van más allá de lo visual, diseñados para captar clientes, transmitir credibilidad y servir como base para soluciones avanzadas.",
    features: [
      "Landing pages de conversión",
      "Sitios institucionales",
      "Portales web con funcionalidades",
    ],
    idealFor: "Negocios que buscan una presencia digital profesional.",
  },
  {
    icon: GraduationCap,
    title: "Capacitación y Formación Empresarial",
    description:
      "Acompañamos a los equipos en el proceso de cambio, porque una solución tecnológica solo genera valor si las personas saben cómo usarla.",
    features: [
      "Talleres de diagnóstico con tu equipo",
      "Formación en optimización de procesos",
      "Acompañamiento en adopción tecnológica",
    ],
    idealFor: "Empresas que han fallado implementando tecnología.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <SectionHeading
            title="¿Qué podemos hacer por tu empresa?"
            subtitle="Nuestros servicios están diseñados para trabajar juntos. Puedes empezar por uno y escalar según tus necesidades."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={fadeUpStagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={i}
                className="group relative bg-surface-card p-6 lg:p-7 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/[0.06]"
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon size={20} strokeWidth={1.5} />
                </div>

                <h3 className="text-lg font-semibold text-text-primary mb-2.5 leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-5">
                  {service.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2.5 text-sm text-text-secondary"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-primary mt-0.5 shrink-0"
                        strokeWidth={1.5}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Divider + Ideal for */}
                <div className="pt-5 border-t border-border">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">
                    Ideal para
                  </p>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {service.idealFor}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* CTA Card */}
          <motion.div
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            custom={SERVICES.length}
            className="relative overflow-hidden rounded-2xl bg-primary p-6 lg:p-7 flex flex-col justify-center items-center text-center text-white"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute w-40 h-40 rounded-full bg-white -top-10 -right-10" />
              <div className="absolute w-24 h-24 rounded-full bg-white -bottom-6 -left-6" />
            </div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-3">
                ¿No sabes por dónde empezar?
              </h3>
              <p className="text-sm text-white/80 mb-6 max-w-xs mx-auto leading-relaxed">
                Solicita un diagnóstico gratuito y te ayudamos a identificar el primer paso.
              </p>
              <Button
                href="#contact"
                variant="outline"
                size="md"
                className="!border-white/40 !text-white hover:!bg-white hover:!text-primary hover:!border-white"
              >
                Solicitar diagnóstico
                <ArrowRight size={16} />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
