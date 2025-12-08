import { Eye, Shield, Target, Zap } from "lucide-react";
const solutions = [{
  icon: Eye,
  title: "10 másodperc alatt felismered a játszmákat.",
  description: "Megtanulod azonosítani a manipuláció jeleit, mielőtt áldozattá válnál."
}, {
  icon: Shield,
  title: "Visszavágó mondatokkal leállítod a manipulátort.",
  description: "Gyakorlati technikák az érzelmi zsarolás és bűntudatkeltés kivédésére."
}, {
  icon: Target,
  title: "Magabiztosan kommunikálsz konfliktus nélkül.",
  description: "Beszélgetési forgatókönyvek, amikkel magabiztos maradhatsz bármely helyzetben."
}, {
  icon: Zap,
  title: "Megtanulsz határt húzni úgy, hogy tiszteletet kapj.",
  description: "Megtanulsz nemet mondani konfliktus nélkül – és tiszteletet parancsolni."
}];
const SolutionSection = () => {
  return <section className="py-24 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(43_74%_53%_/_0.08)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            A megoldás
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Így segít a{" "}
            <span className="text-gradient-gold">ELME KÓDEX </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Valódi pszichológiai eszközök, amelyeket azonnal alkalmazhatsz 
            a mindennapi helyzetekben.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {solutions.map((solution, index) => <div key={index} className="relative group">
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gold/50 to-gold-dark/50 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
              
              <div className="relative p-8 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <solution.icon className="w-6 h-6 text-gold" />
                  </div>
                  <span className="text-gold/40 font-display text-4xl font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default SolutionSection;