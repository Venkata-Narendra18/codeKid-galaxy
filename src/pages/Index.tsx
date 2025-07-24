import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { LanguageSelector } from "@/components/LanguageSelector";
import { QuizGame } from "@/components/QuizGame";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  const handleLanguageSelect = (language: string, level: string) => {
    setSelectedLanguage(language);
    setSelectedLevel(level);
    setGameStarted(true);
  };

  if (gameStarted) {
    return (
      <QuizGame 
        language={selectedLanguage} 
        level={selectedLevel} 
      />
    );
  }

  return (
    <div className="min-h-screen">
      <div className="absolute top-4 right-4 z-10">
        {user ? (
          <Button variant="ghost" size="sm" className="gap-2">
            <User className="h-4 w-4" />
            {user.email}
          </Button>
        ) : (
          <Button variant="outline" size="sm" onClick={() => navigate("/auth")}>
            Sign In
          </Button>
        )}
      </div>
      <HeroSection />
      <LanguageSelector onSelect={handleLanguageSelect} />
    </div>
  );
};

export default Index;
