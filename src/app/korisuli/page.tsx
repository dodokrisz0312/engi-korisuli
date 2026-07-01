import Image from "next/image";
import Link from "next/link";
import { Award, CalendarDays, Phone, Trophy, Users } from "lucide-react";
import { Header } from "@/components/Header";
import { CTA } from "@/components/Sections";
import penguinWaveImage from "@/assets/penguin-wave.png";
import { galleryItems, korisuliPage } from "@/data/constants";

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
            {korisuliPage.founders.map((founder) => (
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
            {korisuliPage.timeline.map((item) => {
              const Icon = item.icon;
              return (
                <article className="timeline-card" key={item.year}>
                  <div className="timeline-icon">
                    <Icon size={34} />
                  </div>
                  <h3>{item.year}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="korisuli-info-grid section-shell">
          <article className="korisuli-panel goals-panel">
            <h2>Céljaink a gyermekek korcsolyaoktatásával</h2>

            <div className="goals-grid">
              {korisuliPage.goals.map((goal) => {
                const Icon = goal.icon;
                return (
                  <div className="goal-item" key={goal.title}>
                    <div className="goal-icon">
                      <Icon size={32} />
                    </div>
                    <p>{goal.title}</p>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="korisuli-panel info-panel">
            <h2>
              Fontos információk <br /> jelentkezőknek
            </h2>

            <div className="info-list">
              {korisuliPage.infoItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="info-item" key={item.text}>
                    <div className="info-icon">
                      <Icon size={30} />
                    </div>
                    <p>{item.text}</p>
                  </div>
                );
              })}
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
