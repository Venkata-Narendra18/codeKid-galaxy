import { useState, useEffect } from "react";
import { GameCard } from "./GameCard";
import { Button } from "@/components/ui/button";
import { ProgressStar } from "./ProgressStar";
import { LevelBadge } from "./LevelBadge";
import { Progress } from "@/components/ui/progress";
import { ProfileCard } from "./ProfileCard";
import { UserProfile } from "./UserProfile";
import { CheckCircle, XCircle, Trophy, Lightbulb, User, Home } from "lucide-react";
import { getRandomQuestions, Question } from "@/data/questionBanks";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

interface QuizGameProps {
  language: string;
  level: string;
}

export const QuizGame = ({ language, level }: QuizGameProps) => {
  const { user, profile, updateProfile } = useAuth();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [stars, setStars] = useState(0);
  const [playerLevel, setPlayerLevel] = useState(profile?.level || 1);
  const [questions] = useState(() => getRandomQuestions(language, level, 20));
  const [showProfile, setShowProfile] = useState(false);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = async () => {
    if (selectedAnswer === null) return;
    
    setShowResult(true);
    
    if (selectedAnswer === question.correct) {
      const newScore = score + 1;
      const newStars = stars + 1;
      setScore(newScore);
      setStars(newStars);
      
      // Update user progress if logged in
      if (user && profile) {
        const newTotalScore = (profile.total_score || 0) + 10; // 10 points per correct answer
        const newTotalStars = (profile.stars_earned || 0) + 1;
        const newLevel = Math.floor(newTotalStars / 5) + 1; // Level up every 5 stars
        
        try {
          await updateProfile({
            total_score: newTotalScore,
            stars_earned: newTotalStars,
            level: newLevel,
            favorite_language: language
          });
          setPlayerLevel(newLevel);
        } catch (error) {
          console.error('Error updating profile:', error);
        }
      } else {
        // Level up every 3 correct answers for guest users
        if (newScore % 3 === 0) {
          setPlayerLevel(playerLevel + 1);
        }
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setTotalQuestions(totalQuestions + questions.length);
  };

  const handleShowProfile = () => {
    setShowProfile(!showProfile);
  };

  const handleGoHome = () => {
    window.location.reload();
  };

  const isQuizComplete = currentQuestion === questions.length - 1 && showResult;
  const isCorrect = selectedAnswer === question.correct;

  return (
    <div className="min-h-screen bg-gradient-hero p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile Sidebar */}
          <div className={`lg:block ${showProfile ? 'block' : 'hidden'}`}>
            {user ? (
              <UserProfile onClose={() => setShowProfile(false)} />
            ) : (
              <ProfileCard 
                level={playerLevel}
                stars={stars}
                totalQuestions={totalQuestions + currentQuestion}
                correctAnswers={score}
                language={language}
              />
            )}
          </div>

          {/* Main Game Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleGoHome}
                    className="lg:hidden"
                  >
                    <Home className="w-4 h-4 mr-2" />
                    Home
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleShowProfile}
                    className="lg:hidden"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </Button>
                  <LevelBadge level={playerLevel} variant="purple" animated />
                  <div className="hidden sm:flex gap-1">
                    {[...Array(Math.min(stars, 10))].map((_, i) => (
                      <ProgressStar key={i} filled size="md" animated />
                    ))}
                    {[...Array(Math.max(0, 10 - stars))].map((_, i) => (
                      <ProgressStar key={i + stars} size="md" />
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Score</div>
                  <div className="text-2xl font-bold text-primary">{score}/{questions.length}</div>
                </div>
              </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>
        </div>

        {/* Quiz Complete */}
        {isQuizComplete ? (
          <GameCard className="text-center space-y-6" glow>
            <Trophy className="w-16 h-16 text-warning mx-auto animate-bounce-gentle" />
            <h2 className="text-3xl font-bold bg-gradient-rainbow bg-clip-text text-transparent">
              Quiz Complete! 🎉
            </h2>
            <div className="space-y-4">
              <div className="text-6xl font-bold text-primary">{score}/{questions.length}</div>
              <p className="text-xl text-muted-foreground">
                You earned {score} stars and reached Level {playerLevel}!
              </p>
              <div className="flex justify-center gap-1">
                {[...Array(score)].map((_, i) => (
                  <ProgressStar key={i} filled size="lg" animated />
                ))}
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              <Button variant="game" size="xl" onClick={handleRestartQuiz}>
                Play Again
              </Button>
              <Button variant="secondary" size="xl">
                Choose New Topic
              </Button>
            </div>
          </GameCard>
        ) : (
          /* Question Card */
          <GameCard className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-warning" />
                <span className="text-sm font-medium text-warning capitalize">
                  {question.difficulty} • {language}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold">{question.question}</h2>
            </div>

            {/* Answer Options */}
            <div className="grid gap-3">
              {question.options.map((option, index) => (
                <Button
                  key={index}
                  variant={
                    showResult
                      ? index === question.correct
                        ? "success"
                        : index === selectedAnswer
                        ? "destructive"
                        : "outline"
                      : selectedAnswer === index
                      ? "default"
                      : "outline"
                  }
                  size="lg"
                  className="justify-start text-left p-4 h-auto"
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                >
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center font-bold">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="flex-1">{option}</span>
                    {showResult && index === question.correct && (
                      <CheckCircle className="w-5 h-5 text-success" />
                    )}
                    {showResult && index === selectedAnswer && index !== question.correct && (
                      <XCircle className="w-5 h-5 text-destructive" />
                    )}
                  </div>
                </Button>
              ))}
            </div>

            {/* Result Explanation */}
            {showResult && (
              <GameCard className={`${isCorrect ? 'bg-success/10 border-success' : 'bg-destructive/10 border-destructive'}`}>
                <div className="flex items-start gap-3">
                  {isCorrect ? (
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  ) : (
                    <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  )}
                  <div>
                    <h3 className="font-bold mb-2">
                      {isCorrect ? "Correct! Well done! 🎉" : "Not quite right 🤔"}
                    </h3>
                    <p className="text-muted-foreground">{question.explanation}</p>
                  </div>
                </div>
              </GameCard>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center">
              {!showResult ? (
                <Button 
                  variant="hero" 
                  size="xl" 
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                >
                  Submit Answer
                </Button>
              ) : (
                <Button variant="game" size="xl" onClick={handleNextQuestion}>
                  Next Question →
                </Button>
              )}
            </div>
          </GameCard>
        )}
          </div>
        </div>
      </div>
    </div>
  );
};