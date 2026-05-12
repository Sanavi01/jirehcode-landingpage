import { motion } from "framer-motion";
import type { ReactNode, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "md" | "lg" | "xl";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href: string;
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20",
  outline:
    "border border-border text-text-primary hover:border-primary hover:text-primary hover:bg-primary/5",
  ghost:
    "text-text-secondary hover:text-primary hover:bg-primary/5",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "px-6 py-2.5 text-sm font-semibold rounded-lg",
  lg: "px-8 py-3 text-sm font-semibold rounded-xl",
  xl: "px-10 py-4 text-base font-semibold rounded-xl",
};

export default function Button({
  variant = "primary",
  size = "lg",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <motion.a
      href={href}
      className={`inline-flex items-center justify-center gap-2 tracking-wide transition-colors duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.a>
  );
}
