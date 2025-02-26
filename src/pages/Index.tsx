import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const Index = () => {
  const benefits = [
    {
      title: "Pre lídrov a tímových členov",
      items: [
        "Budovanie autentických vzťahov",
        "Efektívne riešenie zložitých situácií",
        "Prekonávanie izolácie",
        "Zlepšenie schopnosti počúvať",
      ],
    },
    {
      title: "Pre konzultantov a sociálnych pracovníkov",
      items: [
        "Rýchlejšie budovanie vzťahov",
        "Zvýšená schopnosť empatie",
        "Posilnenie psychickej odolnosti",
        "Trauma informed prístup",
      ],
    },
    {
      title: "Pre učiteľov a študentov",
      items: [
        "Vytváranie bezpečného prostredia",
        "Budovanie dôvery v skupinách",
        "Rešpektovanie odlišností",
        "Zvládanie tlakov v školskom prostredí",
      ],
    },
  ];

  const programItems = [
    "objavovať skutočné možnosti a kvality počúvania",
    "porozumejú a ocenia význam \"pohnútky\" v komunikácii",
    "budú praktizovať \"Ja výrok\"",
    "naučia sa rešpektovať priestor a rytmus komunikácie",
    "budú sa učiť vyjadrovať nespokojnosť",
    "vnímať mnohé procesy a podmienky, ktoré prekryvajú autentické potreby jedinca a podobne",
  ];

  const personalBenefits = [
    "osvoja si kľúčové zručnosti pre tvorbu zdravých vzťahov a komunity",
    "identifikujú a pustia osobné bariéry, ktoré im stoja v ceste autentickej a efektívnej komunikáci",
    "dokážu sa autenticky prejaviť medzi inými ľuďmi",
    "významne si zdokonalia svoju schopnosť počúvať a prepájať sa s inými ľuďmi, obnovovať vzťahy, prelamovať izoláciu bežnú v našich životoch",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-secondary/20 overflow-hidden">
        <div className="container mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex justify-center mb-8">
              <img 
                src="/lovable-uploads/250546fe-344e-4944-822e-5a89b059db24.png" 
                alt="Community Building International Logo" 
                className="h-24 md:h-32"
              />
            </div>
            <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
              9.5.-11.5.2025
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Community Building Skills Training
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Cesta k autentickej a rešpektujúcej komunikácii
            </p>
            <Button
              size="lg"
              className="mt-8 bg-accent hover:bg-accent/90 text-white"
              onClick={() => window.location.href = "mailto:austria@communitybuilding.com"}
            >
              Prihlásiť sa
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Čas</h3>
              <p className="text-muted-foreground">9.5.-11.5.2025 (9.00 - 18.00)</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Miesto</h3>
              <a 
                href="https://g.co/kgs/iBauvXK" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Katholische Kirche St. Benedikt - Am Leberberg
              </a>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Jazyk</h3>
              <p className="text-muted-foreground">Slovenský, Český</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Cena</h3>
              <p className="text-muted-foreground">180 - 230 €</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Personal Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              Jednotlivci, ktorým záleží na osobnostnom raste
            </h2>
            <ul className="space-y-4">
              {personalBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start text-muted-foreground">
                  <span className="text-accent mr-2">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* About Program Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Viac o zámeroch programu</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              V našich organizáciách, tímoch a školách máme ohromný kapitál, know-how, majetok, tvorivosť, skúsenosti a predsa, podstatná časť zdrojov je nevyužitá: je "zamrznutá" v nezdravej komunikácii a v náročných vzťahoch.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ak ľudia pracujú spoza masiek, v neistote či súťaživosti, v napätí a strachu zo zlyhania, nie sú k sebe pravdiví, ak sa kontrolujú a "brzdia", lebo sa necítia bezpečne, ich potenciál zďaleka nie je využitý. Podstatná časť ľudských zdrojov sa neprejaví, lebo je udusená vo viac alebo menej náročnej komunikácii a v neplodných vzťahoch.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pritom existujú cesty, ako v organizácii a v tíme uvoľniť tieto "zamrznuté" zdroje a využiť naplno potenciál ľudí, podporiť potrebné zmeny, prebudiť odvahu a tvorivosť kolegov v prospech organizácie a jednotlivcom umožniť osobnú sebarealizáciu a satisfakciu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Details Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Program seminára</h2>
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Z niekoľkých blokov "sedení v skupinovom procese", kde sa účastníci autenticky prejavujú so zámerom experimentovať a poznávať fázy vývoja skupiny smerom od pseudokomunity ku komunite.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                V našom porozumení sa komunita vyznačuje tým, že jej členovia medzi sebou zažívajú pocity výnimočného bezpečia a rešpektu.
              </p>
              <div>
                <p className="text-lg mb-4">V rámci komunikačných cvičení účastníci budú:</p>
                <ul className="space-y-3">
                  {programItems.map((item, index) => (
                    <li key={index} className="flex items-start text-muted-foreground">
                      <span className="text-accent mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Súčasne všetci budú pozvaní k "domácej úlohe" medzi dvomi tréningovými dňami. Cvičenie na odhalenie a uvoľnenie klamov dáva možnosť oslobodiť sa od niektorých nevedomých "spúšťačov", ktoré podmieňujú naše správanie a komunikáciu.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About CBI Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              O organizácii Community Building International (CBI)
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Community Building International (CBI) je globálnym lídrom v oblasti výcviku a certifikácie facilitátorov pre Tvorbu spoločenstva (CB).
              </p>
              <p className="text-lg text-muted-foreground">
                CBI má skúsenosti s využívaním CB metodiky v rôznych oblastiach: vedenie a rozvoj tímov, posilnenie skutočnej spolupráce, efektívna komunikácia, riešenie konfliktov, diverzita a inklúzia, zmiernenie, syndrómu vyhorenia a únavy zo súcitu, zvýšenie emocionálnej inteligencie, zlepšenie sociálnych služieb, posilnenie reálnych komunít, práca s recidivistami, osobnostný rozvoj a mnoho ďalších oblastí
              </p>
              <p className="text-lg text-muted-foreground">
                CBI je rešpektovaná pre svoj záväzok dodržiavať najvyššiu úroveň kvality a etiky práce a súčasne konzistentne nadväzuje na overené metódy a princípy, ktoré vyvinul M. Scott Peck M.D., autor knihy The Road Less Travelled (Nevyšliapanou cestou).
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Tréneri</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">Vanda Marečková</h3>
                <p className="text-muted-foreground">CBI Trainer Europe</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">Lenka Kmetová</h3>
                <p className="text-muted-foreground">Facilitator in Training</p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Čo sa naučíte a zažijete
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-6">{benefit.title}</h3>
                <ul className="space-y-4">
                  {benefit.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Kontakt a prihlásenie</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Pre viac informácií a prihlásenie nás kontaktujte na:
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white"
            onClick={() => window.location.href = "mailto:austria@communitybuilding.com"}
          >
            austria@communitybuilding.com
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
