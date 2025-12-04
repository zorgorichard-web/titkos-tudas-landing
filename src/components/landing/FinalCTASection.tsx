import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const FinalCTASection = () => {
  const scrollToPrice = () => {
    document.getElementById('price-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="py-24 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(43_74%_53%_/_0.1)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Készen állsz, hogy{" "}
            <span className="text-gradient-gold">átláss a játszmákon?</span>
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Ne légy többé áldozat. Szerezd meg a tudást, ami védelmez – 
            és végre te irányítsd a beszélgetéseket.
          </p>

          <Button variant="hero" size="hero" onClick={scrollToPrice} className="group">
            <span>Megveszem most – 4.990 Ft</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>

          <p className="text-muted-foreground text-sm mt-6">
            Azonnali hozzáférés  • Biztonságos fizetés
          </p>
        </div>
      </div>
    </section>;
};
export default FinalCTASection;