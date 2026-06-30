import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Brain,
  CalendarDays,
  Eye,
  GraduationCap,
  Heart,
  Megaphone,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import { Header } from "@/components/Header";
import { CTA } from "@/components/Sections";
import penguinWaveImage from "@/assets/penguin-wave.png";
import { galleryItems } from "@/data/site";

const founders = [
  {
    name: "Engi Klári és Tóth Attila",
    points: [
      "Nyolcszoros jégtánc magyar bajnokok",
      "Európa- és Világbajnokság IV. helyezés",
      "Háromszoros olimpikonok",
    ],
  },
  {
    name: "Száraz András",
    points: [
      "Többszörös magyar bajnok",
      "Mesteredző",
      "Napjainkban Svédországban segíti a versenyzők felkészülését",
    ],
  },
];

const timeline = [
  {
    year: "1977",
    icon: <Sparkles size={34} />,
    text: "Az Engi–Tóth jégtánckettős aktív amatőr pályafutása 1977 februárban kezdődött.",
  },
  {
    year: "1992",
    icon: <Award size={34} />,
    text: "Albertville-i Téli Olimpiai Játékokkal fejeződött be. Egy év profi pályafutás, majd a Profi Világbajnokság 3. helyezés.",
  },
  {
    year: "1995",
    icon: <Users size={34} />,
    text: "Gyermekvállalás után, felmérve az igényeket, megalapítottuk közös jégiskolánkat.",
  },
  {
    year: "1996",
    icon: <GraduationCap size={34} />,
    text: "Újpesten kezdtük az utánpótlás nevelést, majd a Pólus Centerben lettünk az első korcsolyaiskola.",
  },
  {
    year: "Napjaink",
    icon: <Star size={34} />,
    text: "Korábbi versenyzők és edzőtársak segítségével, ösztönnel és szakmai tudással fejlődünk.",
  },
];

const goals = [
  {
    icon: <Heart size={32} />,
    title: "Sport és mozgás iránti szeretet kifejlesztése",
  },
  {
    icon: <Eye size={32} />,
    title: "Térlátás elsajátítása",
  },
  {
    icon: <Sparkles size={32} />,
    title: "Korcsolya alapjainak elsajátítása",
  },
  {
    icon: <Target size={32} />,
    title: "Figyelem és az összpontosítás gyakorlása",
  },
  {
    icon: <Brain size={32} />,
    title: "Mozgáskoordináció javítása",
  },
  {
    icon: <GraduationCap size={32} />,
    title: "Iskolába történő beilleszkedés megkönnyítése",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Egyensúlyérzék fejlesztése",
  },
  {
    icon: <Trophy size={32} />,
    title: "További lehetőségek biztosítása a versenysport irányába",
  },
];

const infoItems = [
  {
    icon: <CalendarDays size={30} />,
    text: "Az oktatások korcsolyatudásnak megfelelően, csoportokban történnek. A szezon általában szeptember közepétől június közepéig tart.",
  },
  {
    icon: <Sparkles size={30} />,
    text: "Nyári programunk a jégkorcsolya tábor, melyre mindenkit szeretettel várunk. Célunk, hogy a gyerekek hasznosan és jó társaságban töltsék az időt.",
  },
  {
    icon: <ShieldCheck size={30} />,
    text: "Teljesen kezdőket és haladókat egyaránt szeretettel várunk. Kérjük, kényelmes ruhában és saját korcsolyával érkezzetek, ha van.",
  },
  {
    icon: <Award size={30} />,
    text: "Kesztyű használata kötelező, valamint ajánlott a vízhatlan ruha.",
  },
  {
    icon: <Megaphone size={30} />,
    text: "Bejelentkezni javasolt, ősszel és tavasszal is. Bármelyik időpont látogatható, a csoportokhoz folyamatosan lehet csatlakozni.",
  },
];

export default function KorisuliPage() {
  return (
    <>
      <main className="korisuli-page">
        <Header />

        <section className="korisuli-hero section-shell">
          <div className="korisuli-hero-copy">
            <p className="korisuli-eyebrow">Jégiskolánk</p>
            <h1>
              Jégiskolánk <span>története</span>
            </h1>
            <p>Több évtized tapasztalat a jégen, generációk mozgásáért és fejlődéséért.</p>

            <Image
              className="korisuli-hero-penguin"
              src={penguinWaveImage}
              alt=""
              aria-hidden="true"
            />
          </div>

          <div className="korisuli-hero-visual">
            <Image
              src={galleryItems[0].image}
              alt="Mosolygó gyerekek korcsolyázás közben"
              fill
              priority
              className="korisuli-hero-image"
            />

            <div className="korisuli-stat-card">
              <Award size={42} aria-hidden="true" />
              <strong>28+</strong>
              <span>éve a jég szerelmeseinek</span>
              <p>Megbízható oktatás, szakmai tapasztalat és sok-sok mosoly.</p>
            </div>
          </div>
        </section>

        <section className="korisuli-section section-shell">
          <div className="korisuli-section-title">
            <span />
            <h2>Alapító tagok</h2>
            <span />
          </div>

          <div className="founders-grid">
            {founders.map((founder) => (
              <article className="founder-card" key={founder.name}>
                <div>
                  <h3>{founder.name}</h3>
                  <ul>
                    {founder.points.map((point) => (
                      <li key={point}>
                        <Trophy size={18} aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}

            <article className="founder-note">
              <Users size={48} aria-hidden="true" />
              <p>
                Tapasztalt oktatóink és korábbi versenyzőink minden nap azon dolgoznak, hogy a
                gyerekek a lehető legjobb környezetben tanulhassanak és fejlődjenek.
              </p>
            </article>
          </div>
        </section>

        <section className="korisuli-section section-shell">
          <div className="korisuli-section-title">
            <span />
            <h2>Történetünk</h2>
            <span />
          </div>

          <div className="timeline-grid">
            {timeline.map((item) => (
              <article className="timeline-card" key={item.year}>
                <div className="timeline-icon">{item.icon}</div>
                <h3>{item.year}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="korisuli-info-grid section-shell">
          <article className="korisuli-panel goals-panel">
            <h2>Céljaink a gyermekek korcsolyaoktatásával</h2>

            <div className="goals-grid">
              {goals.map((goal) => (
                <div className="goal-item" key={goal.title}>
                  <div className="goal-icon">{goal.icon}</div>
                  <p>{goal.title}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="korisuli-panel info-panel">
            <h2>
              Fontos információk <br /> jelentkezőknek
            </h2>

            <div className="info-list">
              {infoItems.map((item) => (
                <div className="info-item" key={item.text}>
                  <div className="info-icon">{item.icon}</div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="korisuli-join section-shell">
          <div className="join-image-wrap">
            <Image
              src={galleryItems[3].image}
              width={420}
              height={260}
              alt="Mosolygó gyermek a jégpályán"
              className="join-image"
            />
          </div>

          <div className="join-copy">
            <h2>
              Csatlakozz jégiskolánkhoz, <span>és fedezd fel a korcsolyázás örömét!</span>
            </h2>
            <p>Várunk szeretettel minden korosztályt, kezdőket és haladókat egyaránt!</p>
          </div>

          <div className="join-actions">
            <Link href="/jelentkezes" className="btn primary">
              <CalendarDays size={20} />
              Próbaórára jelentkezés
            </Link>

            <Link href="/elerhetosegek" className="btn secondary join-phone">
              <Phone size={20} />
              Kapcsolat felvétele
            </Link>
          </div>
        </section>
      </main>

      <CTA />
    </>
  );
}
