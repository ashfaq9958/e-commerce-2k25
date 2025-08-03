import { Loader2, ShoppingBag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function SuspenseFallback() {
  return (
      <div className="flex h-screen w-full items-center justify-center bg-muted">
      <Card className="w-full max-w-sm text-center shadow-lg border-none bg-background">
        <CardContent className="flex flex-col items-center gap-4 p-8">
          <div className="flex items-center gap-2 text-2xl font-semibold tracking-wide">
            <ShoppingBag className="h-6 w-6 text-primary animate-pulse" />
            NiorHaus & Co.
          </div>
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          <p className="text-muted-foreground text-sm">Loading luxury, please wait...</p>
        </CardContent>
      </Card>
    </div>
  );
}
