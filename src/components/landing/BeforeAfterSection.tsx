import { X, Check } from "lucide-react";

const beforeItems = [
  "bizonytalanság",
  "bűntudatkeltés elleni tehetetlenség",
  "elvesztett beszélgetések",
  "összeomló határok"
];

const afterItems = [
  "tisztán felismered a játszmákat",
  "pontosan tudod, mit mondj",
  "stabil határok és nyugodt kommunikáció",
  "magabiztos jelenlét minden helyzetben"
];

const BeforeAfterSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
              Hogyan változik meg az életed a{" "}
              <span className="text-gradient-gold">TITKOS TUDÁS</span> után?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="font-display text-2xl font-bold text-muted-foreground mb-6">
                Előtte
              </h3>
              <div className="space-y-4">
                {beforeItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="p-8 rounded-2xl bg-card border border-gold/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-bold text-gold mb-6">
                  Utána
                </h3>
                <div className="space-y-4">
                  {afterItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
