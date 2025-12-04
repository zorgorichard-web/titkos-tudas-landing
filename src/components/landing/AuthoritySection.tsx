import { BookOpen, Award, FlaskConical } from "lucide-react";

const AuthoritySection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
              Miért bízhatsz benne
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
              Valódi tudás,{" "}
              <span className="text-gradient-gold">nem hype</span>
            </h2>
          </div>

          <div className="p-8 md:p-12 rounded-3xl bg-surface-elevated border border-border">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gold/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Kutatás-alapú</h3>
                <p className="text-sm text-muted-foreground">
                  Pszichológiai szakirodalom és valós esettanulmányok alapján
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gold/10 flex items-center justify-center mb-4">
                  <FlaskConical className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Gyakorlatban tesztelve</h3>
                <p className="text-sm text-muted-foreground">
                  Valódi emberi helyzetekre optimalizált technikák
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gold/10 flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Etikus megközelítés</h3>
                <p className="text-sm text-muted-foreground">
                  Az önvédelem és határállítás a cél, nem a manipuláció
                </p>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <blockquote className="text-center">
                <p className="text-lg md:text-xl text-foreground italic leading-relaxed">
                  "A legjobb védekezés a megértés. Amikor átlátod a játszmát, 
                  többé nem vagy kiszolgáltatott."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
