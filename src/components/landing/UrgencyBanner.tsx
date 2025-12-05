import { Flame, Clock } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const UrgencyBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 border-b border-gold/30 backdrop-blur-md">
      <div className="container mx-auto px-4 py-2.5">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-gold animate-pulse" />
            <span className="text-sm font-semibold text-foreground">
              <span className="text-gold">50% KEDVEZMÉNY</span> – Csak ma!
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-muted-foreground hidden sm:block" />
            <span className="text-xs text-muted-foreground hidden sm:block">Lejár:</span>
            <CountdownTimer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBanner;
