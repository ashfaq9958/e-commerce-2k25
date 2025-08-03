import { Lock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function Unauthorized() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full items-center justify-center bg-muted">
      <Card className="w-full max-w-md text-center shadow-lg border-none bg-background">
        <CardContent className="flex flex-col items-center gap-6 p-8">
          <Lock className="h-10 w-10 text-destructive" />
          <h2 className="text-xl font-semibold tracking-wide">Access Denied</h2>
          <p className="text-muted-foreground text-sm">
            You don’t have permission to view this page. Please log in or go
            back.
          </p>
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
