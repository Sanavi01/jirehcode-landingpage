import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block px-4 py-1.5 bg-primary-light text-primary text-xs font-semibold rounded-full uppercase tracking-wider ${className}`}
    >
      {children}
    </span>
  );
}
