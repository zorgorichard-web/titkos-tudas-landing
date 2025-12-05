import { Gift, FileText, Zap } from "lucide-react";

const bonuses = [
  {
    icon: FileText,
    title: "10 azonnal használható válasz manipuláció ellen",
    subtitle: "(helyzet + mondat + hatás)",
    description: "Kész mondatok, amiket bármikor bevetésre kész formában használhatsz a hétköznapokban.",
    value: "Értéke: 2.990 Ft"
  },
  {
    icon: Zap,
    title: "Mentális Pajzs – Gyorsvédelmi Zsebútmutató",
    subtitle: "(gyors checklist krízishelyzetekre)",
    description: "Egy oldalas összefoglaló a legfontosabb védekezési technikákról – mindig kéznél.",
    value: "Értéke: 1.990 Ft"
  }
];

const BonusSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
            <Gift className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-semibold tracking-wide">EXKLUZÍV BÓNUSZOK</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            És ez még{" "}
            <span className="text-gradient-gold">nem minden...</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            A fő e-book mellé két azonnali bónuszt is kapsz, teljesen ingyen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {bonuses.map((bonus, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Border glow */}
              <div className="absolute -inset-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative p-8 rounded-2xl bg-card h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gold/10">
                    <bonus.icon className="w-6 h-6 text-gold" />
                  </div>
                  <span className="text-xs font-semibold text-gold bg-gold/10 px-3 py-1 rounded-full">
                    {bonus.value}
                  </span>
                </div>
                
                <h3 className="font-display text-xl font-bold text-foreground mb-1">
                  {bonus.title}
                </h3>
                <p className="text-gold font-medium text-sm mb-4">
                  {bonus.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {bonus.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-lg text-foreground mt-10 font-medium">
          Ma mindkét bónuszt <span className="text-gold">ingyen</span> megkapod a TITKOS TUDÁS mellé.
        </p>
      </div>
    </section>
  );
};

export default BonusSection;
