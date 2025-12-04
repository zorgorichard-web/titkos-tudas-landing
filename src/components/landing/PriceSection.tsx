import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, Zap, FileText, Gift } from "lucide-react";

const PriceSection = () => {
  return (
    <section id="price-section" className="py-24 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Price Card */}
          <div className="relative">
            {/* Glow border */}
            <div className="absolute -inset-1 bg-gradient-to-b from-gold via-gold/50 to-gold/20 rounded-3xl blur opacity-30" />
            
            <div className="relative bg-card rounded-3xl border border-gold/30 overflow-hidden">
              {/* Header */}
              <div className="p-8 md:p-10 text-center bg-gradient-to-b from-gold/10 to-transparent">
                <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-2 block">
                  Komplett csomag
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  TITKOS TUDÁS
                </h2>
                
                {/* Price */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-muted-foreground line-through text-2xl">9.990 Ft</span>
                  <span className="font-display text-5xl md:text-6xl font-bold text-gradient-gold">
                    4.990 Ft
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Egyszeri fizetés • Örökre a tiéd
                </p>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10">
                {/* What's included */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-3.5 h-3.5 text-gold" />
                    </div>
                    <span className="text-foreground">
                      <strong>40-60 oldalas</strong> részletes e-book (PDF)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <Gift className="w-3.5 h-3.5 text-gold" />
                    </div>
                    <span className="text-foreground">
                      <strong>BÓNUSZ:</strong> 10 azonnal használható válasz PDF
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <Gift className="w-3.5 h-3.5 text-gold" />
                    </div>
                    <span className="text-foreground">
                      <strong>BÓNUSZ:</strong> Mentális pajzs cheat-sheet
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-3.5 h-3.5 text-gold" />
                    </div>
                    <span className="text-foreground">
                      <strong>Azonnali</strong> digitális hozzáférés
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button variant="hero" size="hero" className="w-full mb-6">
                  Igen, kérem a TITKOS TUDÁST
                </Button>

                {/* Guarantee */}
                <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-surface-elevated border border-border">
                  <ShieldCheck className="w-8 h-8 text-gold flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-semibold text-foreground text-sm">
                      14 napos pénzvisszafizetési garancia
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Kérdés nélkül visszakapod a pénzed, ha nem elégedett.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
