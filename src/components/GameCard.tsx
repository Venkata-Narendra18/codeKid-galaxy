import { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GameCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export const GameCard = ({ children, className, hover = true, glow = false, ...props }: GameCardProps) => {
  return (
    <div
      className={cn(
        "bg-card border rounded-xl p-6 shadow-fun transition-all duration-300",
        hover && "hover:scale-105 hover:shadow-glow",
        glow && "animate-pulse-glow",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};