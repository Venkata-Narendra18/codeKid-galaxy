import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { LogOut, User, Trophy, Star, Code } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface UserProfileProps {
  onClose?: () => void;
}

export const UserProfile = ({ onClose }: UserProfileProps) => {
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    if (onClose) onClose();
  };

  const handleAuthClick = () => {
    navigate("/auth");
    if (onClose) onClose();
  };

  if (!user) {
    return (
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <User className="h-5 w-5" />
            Guest Mode
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground text-center">
            Sign in to track your progress and compete with other coders!
          </p>
          <Button onClick={handleAuthClick} className="w-full">
            Sign In / Sign Up
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="text-center">
        <div className="flex flex-col items-center space-y-2">
          <Avatar className="h-16 w-16">
            <AvatarImage src={profile?.avatar_url} />
            <AvatarFallback className="bg-primary/10 text-primary">
              {profile?.display_name?.[0] || profile?.username?.[0] || user.email?.[0]?.toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <CardTitle className="text-lg">
            {profile?.display_name || profile?.username || "Code Kid"}
          </CardTitle>
          {profile?.username && (
            <Badge variant="secondary">@{profile.username}</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="space-y-1">
            <div className="flex items-center justify-center">
              <Trophy className="h-4 w-4 text-yellow-500" />
            </div>
            <div className="text-2xl font-bold">{profile?.level || 1}</div>
            <div className="text-xs text-muted-foreground">Level</div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-center">
              <Star className="h-4 w-4 text-yellow-500" />
            </div>
            <div className="text-2xl font-bold">{profile?.stars_earned || 0}</div>
            <div className="text-xs text-muted-foreground">Stars</div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-center">
              <Code className="h-4 w-4 text-blue-500" />
            </div>
            <div className="text-2xl font-bold">{profile?.total_score || 0}</div>
            <div className="text-xs text-muted-foreground">Score</div>
          </div>
        </div>
        
        {profile?.favorite_language && (
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Favorite Language</p>
            <Badge variant="outline">{profile.favorite_language}</Badge>
          </div>
        )}
        
        <Button onClick={handleSignOut} variant="outline" className="w-full">
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </CardContent>
    </Card>
  );
};