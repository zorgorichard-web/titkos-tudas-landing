import { Users, Briefcase, Heart, Brain, Shield, MessageSquare } from "lucide-react";

const audiences = [
  {
    icon: Heart,
    title: "Akiket már ért érzelmi manipuláció",
    description: "És szeretnék elkerülni, hogy újra megtörténjen."
  },
  {
    icon: Users,
    title: "Akik érzik, hogy néha kihasználják őket",
    description: "De nem tudják pontosan megfogalmazni, hogyan."
  },
  {
    icon: MessageSquare,
    title: "Akik szeretnének végre magabiztosan kommunikálni",
    description: "Konfliktushelyzetekben is megőrizve a kontrollt."
  },
  {
    icon: Brain,
    title: "Introvertáltaknak, akik verbális védelmet akarnak",
    description: "Kész mondatok és forgatókönyvek, amiket azonnal használhatsz."
  },
  {
    icon: Shield,
    title: "Akik tiszta határokat szeretnének",
    description: "Anélkül, hogy folyton magyarázkodni kellene."
  },
  {
    icon: Briefcase,
    title: "Akik nem akarnak többé vesztesen kijönni egy beszélgetésből",
    description: "Sem munkahelyen, sem otthon."
  }
];

const WhoIsItForSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            Célközönség
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Kinek szól a{" "}
            <span className="text-gradient-gold">TITKOS TUDÁS?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <audience.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground">
                  {audience.title}
                </h3>
              </div>
              <p className="text-muted-foreground ml-12 text-sm">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsItForSection;
