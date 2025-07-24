import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface LevelBadgeProps {
  level: number;
  variant?: "default" | "success" | "purple" | "secondary";
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

export const LevelBadge = ({ level, variant = "default", size = "md", animated = false }: LevelBadgeProps) => {
  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1", 
    lg: "text-lg px-4 py-2"
  };

  return (
    <Badge
      className={cn(
        sizeClasses[size],
        "font-bold rounded-full shadow-fun",
        variant === "success" && "bg-gradient-success text-success-foreground",
        variant === "purple" && "bg-purple text-purple-foreground",
        variant === "secondary" && "bg-gradient-secondary text-secondary-foreground",
        variant === "default" && "bg-gradient-primary text-primary-foreground",
        animated && "animate-bounce-gentle hover:scale-110"
      )}
    >
      Level {level}
    </Badge>
  );
};