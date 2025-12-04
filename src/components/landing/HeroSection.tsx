import { Button } from "@/components/ui/button";
import { Shield, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToPrice = () => {
    document.getElementById('price-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,hsl(43_74%_53%_/_0.1)_0%,transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-8 animate-fade-up">
            <Shield className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-medium tracking-wide">PSZICHOLÓGIAI ÖNVÉDELEM</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up delay-100">
            <span className="text-gradient-gold">TITKOS</span>
            <br />
            <span className="text-foreground">TUDÁS</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 font-light mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-up delay-200">
            A sötét pszichológia valódi eszközei, hogy{" "}
            <span className="text-gold font-medium">többé ne manipuláljanak</span>{" "}
            – és végre te irányíts
          </p>

          {/* Emotional Hook */}
          <div className="space-y-3 mb-12 animate-fade-up delay-300">
            <p className="text-muted-foreground text-lg italic">
              "Érezted már, hogy kihasználnak?"
            </p>
            <p className="text-muted-foreground text-lg italic">
              "Volt olyan beszélgetés, ahol utólag jöttél rá, hogy vesztettél?"
            </p>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-up delay-400">
            <Button 
              variant="hero" 
              size="hero" 
              onClick={scrollToPrice}
              className="group"
            >
              <span>Letöltöm most – 4.990 Ft</span>
            </Button>
            <p className="text-muted-foreground text-sm mt-4">
              Azonnali digitális hozzáférés • 14 napos garancia
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gold/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
