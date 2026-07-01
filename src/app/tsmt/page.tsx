import Image from "next/image";
import Link from "next/link";
import { Brain, CalendarDays, CheckCircle2, Clock, Dumbbell } from "lucide-react";
import { Header } from "@/components/Header";
import { CTA } from "@/components/Sections";
import { tsmtPage } from "@/data/constants";

export default function TsmtPage() {
  return (
    <>
      <main className="tsmt-page">
        <Header />

        <section className="tsmt-hero section-shell">
          <div className="tsmt-hero-copy">
            <p className="tsmt-eyebrow">Mozgáskoordinációs foglalkozások</p>

            <h1>
              TSMT és <span>mozgásfejlesztés</span>
            </h1>

            <p>
              Játékos, szakmailag támogatott foglalkozások 3-5 éves gyerekeknek, szárazon és jégen,
              a harmonikus mozgásfejlődésért.
            </p>

            <div className="tsmt-hero-actions">
              <Link href="/jelentkezes" className="btn primary">
                Jelentkezés
              </Link>

              <Link href="/elerhetosegek" className="btn secondary">
                Kapcsolat
              </Link>
            </div>
          </div>

          <div className="tsmt-hero-visual">
            <Image
              src={tsmtPage.images.hero}
              alt="Gyerekek mozgáskoordinációs foglalkozáson"
              fill
              priority
              className="tsmt-hero-image"
            />

            <div className="tsmt-floating-card">
              <Brain size={42} aria-hidden="true" />
              <strong>3-5 év</strong>
              <span>a leghatékonyabb időszak</span>
              <p>
                Ebben az életkorban különösen jól fejleszthető az egyensúly, a testtudat és a
                koordináció.
              </p>
            </div>
          </div>
        </section>

        <section className="tsmt-section section-shell">
          <div className="tsmt-section-title">
            <span />
            <h2>Miért fontos?</h2>
            <span />
          </div>

          <div className="why-grid">
            <article className="why-card why-card-main">
              <h3>A mozgás alapjai ebben az életkorban alakulnak ki</h3>
              <p>
                A kisgyerekek 1-6 éves korban alakíthatók a legjobban, mozgásuk alapját ekkor szedik
                össze. Sok későbbi probléma megelőzhető, ha helyesen tanulnak meg bizonyos
                mozgásformákat, és időben figyelmet kap a helyes testtartás.
              </p>
            </article>

            <article className="why-card">
              <h3>A korcsolyázás komplexen fejleszt</h3>
              <p>
                A korcsolyázás nagyon jól fejleszti a koordinációt, az egyensúlyt és a térlátást. Nem
                egyoldalú sport, mert mindkét oldalt megmozgatja, és komoly testtudatot ad a
                gyermekeknek a lábfejtől a fejbúbig.
              </p>
            </article>

            <article className="why-card why-card-soft">
              <Dumbbell size={44} aria-hidden="true" />
              <p>
                Az egyensúly, a ritmusérzék, a mozgásérzékelés, a testtudat és a különböző
                mozgáselemek összehangolása fontos szerepet játszik a mozgáskoordináció
                kialakulásában.
              </p>
            </article>
          </div>
        </section>

        <section className="tsmt-section section-shell">
          <div className="tsmt-section-title">
            <span />
            <h2>Foglalkozásaink</h2>
            <span />
          </div>

          <div className="classes-grid">
            {tsmtPage.classes.map((item) => {
              const Icon = item.icon;
              return (
                <article className="class-card" key={item.title}>
                  <div className="class-icon">
                    <Icon size={34} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="tsmt-info-grid section-shell">
          <article className="tsmt-panel benefits-panel">
            <h2>Miben segít a mozgáskoordinációs oktatás?</h2>

            <div className="benefits-grid">
              {tsmtPage.benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div className="benefit-item" key={benefit.title}>
                    <div className="benefit-icon">
                      <Icon size={32} />
                    </div>
                    <div>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="tsmt-panel team-panel">
            <h2>Profi szakértői csapattal dolgozunk</h2>

            <div className="team-image-wrap">
              <Image
                src={tsmtPage.images.team}
                alt="TSMT és mozgásfejlesztő foglalkozás"
                fill
                className="team-image"
              />
            </div>

            <ul className="team-list">
              {tsmtPage.expertTeam.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={20} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="tsmt-section section-shell">
          <div className="target-card">
            <div>
              <p className="tsmt-eyebrow">Kinek ajánljuk?</p>
              <h2>Elsősorban 3-5 éves kor közötti gyerekeknek</h2>
              <p>
                A mozgásfejlesztésre, az esetleges problémák kiszűrésére ez az időszak a
                leghatékonyabb. A foglalkozások játékosak, támogatóak, és a gyerekek életkorához,
                fejlettségéhez igazodnak.
              </p>
            </div>

            <div className="facts-list">
              {tsmtPage.keyFacts.map((fact) => (
                <div className="fact-item" key={fact}>
                  <CheckCircle2 size={22} aria-hidden="true" />
                  <span>{fact}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="tsmt-location section-shell">
          <div className="location-copy">
            <p className="tsmt-eyebrow">Helyszínek, alkalmak</p>
            <h2>Aktuális foglalkozások</h2>

            <p className="location-notice">
              Jelenleg a korábbi tájékoztatás szerint a vírushelyzet alatt az oktatás szünetelt. Az
              aktuális indulásról és szabad helyekről kérjük, érdeklődjetek elérhetőségeinken.
            </p>
          </div>

          <div className="location-cards">
            {tsmtPage.locationCards.map((card) => {
              const Icon = card.icon;
              return (
                <article className="location-card" key={card.title}>
                  <Icon size={34} aria-hidden="true" />
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <span>{card.note}</span>
                </article>
              );
            })}
          </div>
        </section>

        <section className="tsmt-join section-shell">
          <div className="join-image-wrap">
            <Image
              src={tsmtPage.images.join}
              width={420}
              height={260}
              alt="Gyermek mozgásfejlesztő foglalkozáson"
              className="join-image"
            />
          </div>

          <div className="join-copy">
            <h2>
              Segítsük együtt, <span>hogy magabiztosabban mozogjon!</span>
            </h2>
            <p>
              A mozgásfejlesztés játékos módon támogatja a gyerekek testtudatát, koordinációját és
              önbizalmát.
            </p>
          </div>

          <div className="join-actions">
            <Link href="/jelentkezes" className="btn primary">
              <CalendarDays size={20} />
              Jelentkezés
            </Link>

            <Link href="/elerhetosegek" className="btn secondary join-phone">
              <Clock size={20} />
              Érdeklődés
            </Link>
          </div>
        </section>
      </main>

      <CTA />
    </>
  );
}
