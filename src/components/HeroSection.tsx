import { Button } from "@/components/ui/button";
import { GameCard } from "./GameCard";
import { Code, Play, Sparkles } from "lucide-react";
import heroRobot from "@/assets/coding-robot-hero.png";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-rainbow bg-clip-text text-transparent leading-tight">
                Welcome to Code Kid Galaxy!
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Blast off into the universe of coding! Master Python, Java, and JavaScript through epic space adventures, quizzes, and coding battles.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                <Play className="mr-2 group-hover:animate-bounce-gentle" />
                Launch Into Space 🚀
                <Sparkles className="ml-2 group-hover:animate-float" />
              </Button>
              
              <Button variant="outline" size="xl" className="border-2 border-primary hover:bg-primary hover:text-primary-foreground">
                <Code className="mr-2" />
                View Demo
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex justify-center lg:justify-start gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Space Cadets</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">180+</div>
                <div className="text-sm text-muted-foreground">Quests</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">3</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center">
            <GameCard className="bg-gradient-to-br from-accent/30 to-purple/20 border-2 border-primary/20" hover={false} glow>
              <div className="relative">
                <img 
                  src={heroRobot} 
                  alt="Friendly coding robot mascot" 
                  className="w-80 h-80 object-contain animate-float"
                />
                <div className="absolute -top-4 -right-4 animate-bounce-gentle">
                  <div className="bg-warning text-warning-foreground px-3 py-1 rounded-full text-sm font-bold shadow-fun">
                    Ready to Explore? 🌌
                  </div>
                </div>
              </div>
            </GameCard>
          </div>
        </div>
      </div>
    </section>
  );
};