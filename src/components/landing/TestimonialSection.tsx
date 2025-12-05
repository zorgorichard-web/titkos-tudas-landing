import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "A párom hónapokig bűntudatot keltett bennem. A 10 másodperces felismerési technika szó szerint megváltoztatta a beszélgetéseket.",
    source: "— Kapcsolati játszma esettanulmány"
  },
  {
    text: "A főnökömmel sosem tudtam kezelni a rejtett passzív-agressziót… amíg el nem olvastam a mondatmintákat.",
    source: "— Munkahelyi példa"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-surface-elevated border border-border relative"
              >
                <Quote className="w-8 h-8 text-gold/20 absolute top-4 right-4" />
                <p className="text-foreground italic leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
