import { GameCard } from "./GameCard";
import { ProgressStar } from "./ProgressStar";
import { LevelBadge } from "./LevelBadge";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, Zap, Brain } from "lucide-react";

interface ProfileCardProps {
  playerName?: string;
  level: number;
  stars: number;
  totalQuestions: number;
  correctAnswers: number;
  language: string;
}

const achievements = [
  { name: "First Steps", icon: <Zap className="w-4 h-4" />, color: "bg-success" },
  { name: "Quick Learner", icon: <Brain className="w-4 h-4" />, color: "bg-purple" },
  { name: "Star Collector", icon: <Trophy className="w-4 h-4" />, color: "bg-warning" },
];

export const ProfileCard = ({ 
  playerName = "Young Coder", 
  level, 
  stars, 
  totalQuestions,
  correctAnswers,
  language 
}: ProfileCardProps) => {
  const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

  return (
    <GameCard className="space-y-6">
      {/* Profile Header */}
      <div className="text-center space-y-4">
        <div className="w-20 h-20 bg-gradient-rainbow rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto animate-float">
          🤖
        </div>
        <div>
          <h2 className="text-2xl font-bold">{playerName}</h2>
          <p className="text-muted-foreground">Learning {language}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center space-y-2">
          <LevelBadge level={level} variant="purple" size="lg" animated />
          <p className="text-sm text-muted-foreground">Current Level</p>
        </div>
        <div className="text-center space-y-2">
          <div className="flex justify-center gap-1">
            {[...Array(Math.min(stars, 5))].map((_, i) => (
              <ProgressStar key={i} filled size="md" animated />
            ))}
            {stars > 5 && (
              <span className="text-warning font-bold">+{stars - 5}</span>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{stars} Stars Earned</p>
        </div>
      </div>

      {/* Progress Stats */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Questions Answered</span>
          <span className="font-bold">{totalQuestions}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Accuracy</span>
          <span className="font-bold text-success">{accuracy}%</span>
        </div>
      </div>

      {/* Achievements */}
      <div className="space-y-3">
        <h3 className="font-bold flex items-center gap-2">
          <Target className="w-4 h-4" />
          Achievements
        </h3>
        <div className="flex flex-wrap gap-2">
          {achievements.map((achievement, index) => (
            <Badge 
              key={achievement.name}
              className={`${achievement.color} text-white`}
            >
              {achievement.icon}
              <span className="ml-1">{achievement.name}</span>
            </Badge>
          ))}
        </div>
      </div>
    </GameCard>
  );
};