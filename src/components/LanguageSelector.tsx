import { useState } from "react";
import { GameCard } from "./GameCard";
import { Button } from "@/components/ui/button";
import { Code2, Zap, Brain } from "lucide-react";

const languages = [
  { 
    id: "python", 
    name: "Python", 
    icon: "🐍", 
    color: "success",
    description: "Perfect for space beginners!"
  },
  { 
    id: "java", 
    name: "Java", 
    icon: "☕", 
    color: "secondary",
    description: "Build galactic empires!"
  },
  { 
    id: "javascript", 
    name: "JavaScript", 
    icon: "⚡", 
    color: "warning",
    description: "Power the cosmic web!"
  },
];

const levels = [
  { 
    id: "beginner", 
    name: "Beginner", 
    icon: <Zap className="w-5 h-5" />, 
    description: "Just starting out",
    color: "success"
  },
  { 
    id: "intermediate", 
    name: "Intermediate", 
    icon: <Code2 className="w-5 h-5" />, 
    description: "Some experience",
    color: "secondary"
  },
  { 
    id: "advanced", 
    name: "Advanced", 
    icon: <Brain className="w-5 h-5" />, 
    description: "Ready for challenges",
    color: "purple"
  },
];

interface LanguageSelectorProps {
  onSelect: (language: string, level: string) => void;
}

export const LanguageSelector = ({ onSelect }: LanguageSelectorProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const [selectedLevel, setSelectedLevel] = useState<string>("");

  const handleStartLearning = () => {
    if (selectedLanguage && selectedLevel) {
      onSelect(selectedLanguage, selectedLevel);
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-accent/20 to-purple/10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-rainbow bg-clip-text text-transparent">
            Choose Your Galaxy Mission
          </h2>
          <p className="text-xl text-muted-foreground">
            Select your coding spacecraft and mission difficulty to explore the Code Kid Galaxy!
          </p>
        </div>

        {/* Language Selection */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-6">Choose Your Spacecraft 🚀</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {languages.map((lang) => (
              <GameCard 
                key={lang.id}
                className={`cursor-pointer transition-all ${
                  selectedLanguage === lang.id 
                    ? "ring-4 ring-primary shadow-glow scale-105" 
                    : ""
                }`}
                onClick={() => setSelectedLanguage(lang.id)}
              >
                <div className="text-center space-y-4">
                  <div className="text-4xl">{lang.icon}</div>
                  <h4 className="text-xl font-bold">{lang.name}</h4>
                  <p className="text-muted-foreground">{lang.description}</p>
                </div>
              </GameCard>
            ))}
          </div>
        </div>

        {/* Level Selection */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-6">Mission Difficulty 🌟</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {levels.map((level) => (
              <GameCard 
                key={level.id}
                className={`cursor-pointer transition-all ${
                  selectedLevel === level.id 
                    ? "ring-4 ring-success shadow-success scale-105" 
                    : ""
                }`}
                onClick={() => setSelectedLevel(level.id)}
              >
                <div className="text-center space-y-4">
                  <div className="flex justify-center">{level.icon}</div>
                  <h4 className="text-xl font-bold">{level.name}</h4>
                  <p className="text-muted-foreground">{level.description}</p>
                </div>
              </GameCard>
            ))}
          </div>
        </div>

        {/* Start Button */}
        <div className="text-center">
          <Button 
            variant="game" 
            size="xl" 
            disabled={!selectedLanguage || !selectedLevel}
            onClick={handleStartLearning}
            className="animate-bounce-gentle"
          >
            Launch Into Space! 🚀
          </Button>
        </div>
      </div>
    </section>
  );
};