import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  children?: ReactNode;
}

export default function SectionHeading({
  title,
  subtitle,
  className = "",
  children,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`text-center max-w-2xl mx-auto ${className}`}
    >
      <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-text-secondary leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
      {children}
    </motion.div>
  );
}
