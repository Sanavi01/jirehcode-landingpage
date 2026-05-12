import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import Badge from "./ui/Badge";
import Button from "./ui/Button";

function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(53,55,214,0.3) 0%, transparent 70%)",
          right: "-10%",
          top: "5%",
        }}
        animate={{ y: [0, -30, 0], scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-[300px] h-[300px] rounded-[3rem] opacity-15"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(80,84,239,0.4) 0%, transparent 70%)",
          left: "-5%",
          bottom: "10%",
        }}
        animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-[150px] h-[150px] rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(193,194,255,0.6) 0%, transparent 70%)",
          left: "15%",
          top: "25%",
        }}
        animate={{ x: [0, 15, 0], y: [0, -15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-[200px] h-[200px] rounded-full border-2 opacity-10"
        style={{ borderColor: "rgba(53,55,214,0.4)", left: "10%", top: "10%" }}
        animate={{ rotate: [0, 360], scale: [1, 0.95, 1] }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <motion.div
        className="absolute w-4 h-4 rounded-full opacity-30"
        style={{ background: "#3537d6", right: "25%", bottom: "20%" }}
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-3 h-3 rounded-full opacity-25"
        style={{ background: "#5054ef", right: "30%", top: "40%" }}
        animate={{ y: [0, 15, 0], opacity: [0.25, 0.5, 0.25] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}

const fadeUpClasses = [
  "animate-hero-fade-up",
  "animate-hero-fade-up animation-delay-150",
  "animate-hero-fade-up animation-delay-300",
  "animate-hero-fade-up animation-delay-450",
  "animate-hero-fade-up animation-delay-550",
];

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    },
    [],
  );

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center bg-surface overflow-hidden"
    >
      {/* Cursor glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(53,55,214,0.08), transparent 50%)`,
        }}
      />

      <FloatingShapes />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #3537d6 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div className="flex flex-col items-start">
            <div className={fadeUpClasses[0]}>
              <Badge>Consultoría &amp; Desarrollo</Badge>
            </div>

            <h1
              className={`mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary leading-[1.08] text-balance tracking-tight ${fadeUpClasses[1]}`}
            >
              Optimizamos tu operación.{" "}
              <span className="text-primary">Construimos la solución.</span>
            </h1>

            <p
              className={`mt-6 text-lg lg:text-xl text-text-secondary leading-relaxed max-w-xl text-balance ${fadeUpClasses[2]}`}
            >
              En Jireh Code analizamos cómo trabaja tu empresa, identificamos lo
              que frena tu crecimiento y desarrollamos herramientas digitales
              que generan resultados reales.
            </p>

            <div
              className={`mt-8 flex flex-col sm:flex-row gap-4 ${fadeUpClasses[3]}`}
            >
              <Button href="#contact" variant="primary" size="xl">
                Solicitar diagnóstico gratuito
              </Button>
              <Button href="#process" variant="outline" size="xl">
                Ver cómo trabajamos
              </Button>
            </div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[420px] h-[420px]">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl rotate-3" />
              <img
                src="/hero-image.png"
                alt="Jireh Code — Consultoria y Desarrollo Tecnologico"
                className="relative z-10 w-full h-full object-cover rounded-3xl border border-border shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
