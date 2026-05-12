import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import Button from "./ui/Button";
import SectionHeading from "./ui/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <SectionHeading
            title="Hablemos sobre tu operación"
            subtitle="La mayoría de empresas tienen oportunidades de mejora claras que no han identificado aún. Nosotros las encontramos contigo."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left: Channels */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* Email */}
            <a
              href="mailto:contacto@jirehcode.com"
              className="flex items-center gap-5 p-5 bg-surface-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-md group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Mail size={22} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-0.5">
                  Escríbenos al correo
                </p>
                <p className="text-sm font-semibold text-text-primary">
                  jirehcompanyit@gmail.com
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/message/AURH6HDQLDVJE1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-5 bg-[#25D366] rounded-xl hover:opacity-90 transition-all duration-300 hover:shadow-md group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-0.5">
                  WhatsApp Directo
                </p>
                <p className="text-sm font-semibold text-white">
                  Hablar con un consultor
                </p>
              </div>
            </a>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="bg-surface-card p-6 lg:p-8 rounded-2xl border border-border"
          >
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                  Nombre
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Tu nombre completo"
                  className="w-full bg-surface-alt border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                />
              </div>
              <div>
                <label htmlFor="contact-company" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                  Empresa u Organización
                </label>
                <input
                  id="contact-company"
                  type="text"
                  placeholder="Nombre de tu empresa"
                  className="w-full bg-surface-alt border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                />
              </div>
              <div>
                <label htmlFor="contact-challenge" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                  ¿Cuál es tu mayor reto operativo hoy?
                </label>
                <textarea
                  id="contact-challenge"
                  rows={4}
                  placeholder="Descríbenos brevemente lo que quieres mejorar..."
                  className="w-full bg-surface-alt border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3.5 rounded-xl text-sm font-semibold hover:bg-primary-hover transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <Send size={16} strokeWidth={2} />
                Enviar mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
