import Image from "next/image";
import type { Metadata } from "next";
import { Brain, CalendarDays, CheckCircle2, Clock, Dumbbell } from "lucide-react";
import { Header } from "@/components/Header";
import { JoinSection } from "@/components/JoinSection";
import { CTA } from "@/components/Sections";
import { tsmtPage } from "@/data/constants";
import { createSeoMetadata, pageSeo } from "@/data/seo";
import tsmtHeroImage from "@/assets/gallery/mozgaskoordinacio/mozgaskoordinacio_1.jpg";
import tsmtTeamImage from "@/assets/gallery/mozgaskoordinacio/mozgaskoordinacio_6.jpg";
import tsmtJoinImage from "@/assets/gallery/mozgaskoordinacio/mozgaskoordinacio_11.jpg";

export const metadata: Metadata = createSeoMetadata(pageSeo.tsmt);

export default function TsmtPage() {
  return (
    <>
      <main className="tsmt-page">
        <Header />

        <section className="tsmt-hero section-shell">
          <div className="tsmt-hero-copy">
            <h1>
              TSMT és <span>mozgásfejlesztés</span>
            </h1>

            <p>Játékos, szakmailag támogatott csoportos foglalkozások 3 éves kortól.</p>
          </div>

          <div className="tsmt-hero-visual">
            <Image
              src={tsmtHeroImage}
              alt="Gyerekek mozgáskoordinációs foglalkozáson"
              fill
              priority
              className="tsmt-hero-image"
            />

            <div className="tsmt-floating-card">
              <Brain size={42} aria-hidden="true" />
              <strong>3-10 év</strong>
              <p>
                Ebben az életkorban különösen jól fejleszthető az egyensúly, a testtudat, a figyelem
                és a koordináció.
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
              <h3>A korcsolya és a TSMT kapcsolata</h3>
              <p>
                A TSMT szárazföldön alapozza meg azokat a mozgásos képességeket, amelyek a jégen is
                fontosak: az egyensúlyt, a ritmust, a mozgásérzékelést és a feladatkövetést. A
                biztosabb mozgásalapok segítik, hogy a gyerekek magabiztosabban kapcsolódjanak a
                korcsolyázáshoz is.
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
                src={tsmtTeamImage}
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
              <h2>Elsősorban 3-10 éves kor közötti gyerekeknek</h2>
              <p>
                A TSMT minden gyermek számára hasznos mozgásfejlesztő foglalkozás lehet, mert
                támogatja az egyensúlyt, a koordinációt, a figyelmet, a ritmust és a
                feladatkövetést. A foglalkozások szárazföldön zajlanak, játékosak, támogatóak, és a
                gyerekek életkorához, fejlettségéhez igazodnak.
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
              A csoportos foglalkozásokra folyamatosan várjuk az érdeklődőket. Az aktuális
              időpontokról, induló csoportokról és szabad helyekről kérjük, érdeklődjetek
              elérhetőségeinken.
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

        <JoinSection
          image={tsmtJoinImage}
          imageAlt="Gyermek mozgásfejlesztő foglalkozáson"
          title="Segítsük együtt,"
          titleAccent="hogy magabiztosabban mozogjon!"
          subtitle="A mozgásfejlesztés játékos módon támogatja a gyerekek testtudatát, koordinációját és önbizalmát."
          buttons={[
            {
              href: "/elerhetosegek#jelentkezes",
              label: "Jelentkezés",
              icon: CalendarDays,
            },
            {
              href: "/elerhetosegek",
              label: "Érdeklődés",
              icon: Clock,
              variant: "secondary",
            },
          ]}
        />
      </main>

      <CTA />
    </>
  );
}
