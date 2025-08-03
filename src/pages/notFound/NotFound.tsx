import { Ghost, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full items-center justify-center bg-muted">
      <Card className="w-full max-w-md text-center shadow-lg border-none bg-background">
        <CardContent className="flex flex-col items-center gap-6 p-8">
          <Ghost className="h-10 w-10 text-primary" />
          <h2 className="text-xl font-semibold tracking-wide">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-sm">
            Oops! The page you’re looking for doesn’t exist or has been moved.
          </p>
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
