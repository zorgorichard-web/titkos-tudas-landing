import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Ez manipulációs tananyag vagy önvédelem?",
    answer: "Egyértelműen önvédelem. A cél az, hogy felismerd és kivédd a manipulációt – nem az, hogy te alkalmazd másokkal szemben. Az etikus határállítás és az asszertív kommunikáció a középpontban áll, nem a mások kihasználása."
  },
  {
    question: "Hogyan férek hozzá a PDF-hez?",
    answer: "A vásárlás után azonnal megkapod az e-mailt a letöltési linkkel. A fájlok PDF formátumúak, így bármilyen eszközön (telefon, tablet, számítógép) olvashatod őket. Nincs várakozási idő – azonnal hozzáférsz."
  },
  {
    question: "Segít a munkahelyi helyzetekben?",
    answer: "Igen, kifejezetten. Az e-book külön foglalkozik a munkahelyi hatalmi játszmákkal, a főnökök és kollégák manipulációs technikáival, és konkrét válaszokat ad ezekre a helyzetekre."
  },
  {
    question: "Működik párkapcsolati problémáknál?",
    answer: "Abszolút. A kapcsolati manipuláció – érzelmi zsarolás, bűntudatkeltés, passzív-agresszió – az egyik leggyakoribb terület, amire az anyag felkészít. Megtanulod, hogyan állíts határokat anélkül, hogy konfliktust generálnál."
  },
  {
    question: "Kezdőknek is érthető?",
    answer: "Igen, az anyag úgy lett megírva, hogy pszichológiai előképzettség nélkül is teljesen érthető legyen. Gyakorlati példákkal és konkrét mondatokkal dolgozunk, nem elméleti okfejtésekkel."
  },
  {
    question: "Mi van, ha nem tetszik?",
    answer: "14 napos, kérdés nélküli pénzvisszafizetési garanciát vállalunk. Ha bármilyen okból nem vagy elégedett, visszakapod a teljes összeget – semmilyen magyarázat nem szükséges."
  }
];

const FAQSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
              Kérdések
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
              Gyakran ismételt{" "}
              <span className="text-gradient-gold">kérdések</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-gold/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-gold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
