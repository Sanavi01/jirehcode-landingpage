import { motion } from "framer-motion";
import { Verified, Target, Eye } from "lucide-react";

const VALUES = [
  "Primero entendemos, luego proponemos",
  "Acompañamos todo el proceso",
  "Soluciones construidas para tu operación, no genéricas",
  "Enfocados en resultados medibles",
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden bg-text-primary text-white rounded-3xl p-8 lg:p-14 grid grid-cols-1 lg:grid-cols-5 gap-10 items-start"
        >
          {/* Left: Content */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            {/* Header */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Jireh Code</h2>
              <p className="text-white/80 text-base leading-relaxed text-balance">
                Somos una empresa de consultoría y desarrollo tecnológico enfocada
                en un objetivo concreto: que tu operación funcione mejor. No
                creemos en la tecnología por la tecnología misma. Creemos en
                herramientas que resuelven problemas reales, ahorran tiempo y
                permiten a las organizaciones crecer de manera ordenada y
                sostenible.
              </p>
              <p className="text-primary-light text-lg font-semibold mt-4">
                Trabajamos como aliados, no como proveedores.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {VALUES.map((value, i) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.35 }}
                  className="flex items-center gap-3"
                >
                  <Verified
                    size={18}
                    className="text-primary-light shrink-0"
                    strokeWidth={1.5}
                  />
                  <span className="text-sm text-white/80">{value}</span>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10" />

            {/* Mission + Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-light/20 text-primary-light flex items-center justify-center shrink-0 mt-0.5">
                  <Target size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                    Misión
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Ayudamos a empresas e instituciones a optimizar su operación
                    mediante consultoría, automatización y desarrollo de
                    soluciones tecnológicas diseñadas para resolver problemas
                    reales y generar resultados sostenibles.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-light/20 text-primary-light flex items-center justify-center shrink-0 mt-0.5">
                  <Eye size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                    Visión
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Convertirnos en un aliado tecnológico referente en Boyacá y
                    Colombia, reconocido por transformar procesos complejos en
                    soluciones digitales claras, eficientes y de alto impacto.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Abstract visual */}
          <div className="lg:col-span-2 hidden lg:flex items-center justify-center relative h-full min-h-[300px]">
            <motion.div
              className="absolute w-48 h-48 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(193,194,255,0.3), rgba(53,55,214,0.1))",
              }}
              animate={{
                borderRadius: [
                  "30% 70% 70% 30% / 30% 30% 70% 70%",
                  "70% 30% 30% 70% / 70% 70% 30% 30%",
                  "30% 70% 70% 30% / 30% 30% 70% 70%",
                ],
                rotate: [0, 10, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-36 h-36 rounded-full border border-primary-light/30"
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-6 h-6 rounded-lg bg-primary-light/40 -translate-x-16 translate-y-4"
              animate={{ y: [0, -12, 0], rotate: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
