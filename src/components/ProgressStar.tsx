import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProgressStarProps {
  filled?: boolean;
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

export const ProgressStar = ({ filled = false, size = "md", animated = false }: ProgressStarProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6", 
    lg: "w-8 h-8"
  };

  return (
    <Star
      className={cn(
        sizeClasses[size],
        "transition-all duration-300",
        filled 
          ? "fill-warning text-warning animate-bounce-gentle" 
          : "text-muted-foreground",
        animated && "hover:scale-110 hover:animate-wiggle"
      )}
    />
  );
};