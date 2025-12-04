import { Users, Briefcase, Heart, Brain } from "lucide-react";

const audiences = [
  {
    icon: Users,
    title: "Akik elegük van abból, hogy kihasználják őket",
    description: "Érzelmileg és mentálisan egyaránt."
  },
  {
    icon: Brain,
    title: "Akik erősebb jelenlétre vágynak",
    description: "Magabiztosabb fellépést szeretnének társas helyzetekben."
  },
  {
    icon: Briefcase,
    title: "Munkahelyi harcosoknak",
    description: "Akik tisztességes előrelépést akarnak a politizálás helyett."
  },
  {
    icon: Heart,
    title: "Kapcsolati egyensúlyra vágyóknak",
    description: "Akik egészséges dinamikát szeretnének a párkapcsolatban."
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

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <audience.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {audience.title}
                </h3>
              </div>
              <p className="text-muted-foreground ml-12">
                {audience.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-lg">
            Ha introvertált vagy és <span className="text-foreground font-medium">verbális páncélra</span> vágysz – 
            ez neked szól.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItForSection;
