import { Check } from "lucide-react";

const learnings = [
  "A legismertebb sötét pszichológiai technikák",
  "Hogyan manipulálnak hétköznapi helyzetekben",
  "10 leggyakoribb támadó mondat és mit válaszolj",
  "Munkahelyi és párkapcsolati red flag-ek",
  "Hogyan védd a határaid veszekedés nélkül",
  "Mit mondj vissza, amikor sarokba akarnak szorítani",
  "Dominancia visszafordító beszélgetési minták",
  "20 valós élethelyzet lebontása"
];

const WhatYouLearnSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
              Tartalom
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Mit tanulsz az{" "}
              <span className="text-gradient-gold">e-bookból?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {learnings.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-surface-elevated/50 border border-border/50 hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                  <Check className="w-4 h-4 text-gold group-hover:text-primary-foreground" />
                </div>
                <span className="text-foreground font-medium leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearnSection;
