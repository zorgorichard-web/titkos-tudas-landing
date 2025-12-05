import { AlertTriangle, Heart, Briefcase, MessageSquare } from "lucide-react";

const problems = [
  {
    icon: Briefcase,
    title: "Bűntudatkeltés",
    description: "Bűntudatot keltenek benned, amikor nemet mondasz."
  },
  {
    icon: MessageSquare,
    title: "Elvesztett beszélgetések",
    description: "A beszélgetések végére valahogy mindig ők kerülnek fölénybe."
  },
  {
    icon: Heart,
    title: "Gaslighting",
    description: "Utólag jössz rá, hogy átcsavarták a történetet ellened."
  },
  {
    icon: AlertTriangle,
    title: "Határállítási nehézség",
    description: "Feszengsz, amikor határt kell húzni."
  }
];

const ProblemSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ismerős ez a{" "}
            <span className="text-gold">helyzet?</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Az emberek 90%-a nem veszi észre, amikor manipulálják. 
            Te is közéjük tartozol?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-surface-elevated border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-[0_0_40px_hsl(43_74%_53%_/_0.1)]"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-primary-foreground transition-all duration-300">
                  <problem.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-xl md:text-2xl text-foreground font-light">
            Itt az idő, hogy{" "}
            <span className="text-gold font-semibold">átlásd a játszmákat</span>
            {" "}— és visszavedd az irányítást.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
