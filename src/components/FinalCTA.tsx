import { motion } from "framer-motion";
import Button from "./ui/Button";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 lg:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-80 h-80 rounded-full bg-white -top-20 -right-20" />
        <div className="absolute w-60 h-60 rounded-full bg-white -bottom-16 -left-16" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl lg:text-4xl font-bold text-white mb-4"
        >
          ¿Tu operación podría funcionar mejor?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base text-white/80 mb-8 max-w-xl mx-auto leading-relaxed"
        >
          Te ayudamos a identificar el problema y construir la solución correcta.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            href="#contact"
            variant="outline"
            size="xl"
            className="!bg-white !text-primary !border-white hover:!bg-white/90"
          >
            Solicitar diagnóstico gratuito
          </Button>
          <Button
            href="https://wa.me/message/AURH6HDQLDVJE1"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="xl"
            className="!border-white/30 !text-white hover:!bg-white/10 hover:!border-white/50"
          >
            Escribirnos por WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
