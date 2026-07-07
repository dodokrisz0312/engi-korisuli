import Image from "next/image";
import Link from "next/link";
import { CalendarDays, CheckCircle2, Clock, Trophy, Users } from "lucide-react";
import { Header } from "@/components/Header";
import { CTA } from "@/components/Sections";
import { hokisuliPage } from "@/data/constants";
import galleryImage7 from "@/assets/gallery/korisuli/oktatasaink_1.jpg";

export default function HokisuliPage() {
  return (
    <>
      <main className="hoki-page">
        <Header />

        <section className="hoki-hero section-shell">
          <div className="hoki-hero-copy">
            <p className="hoki-eyebrow">Engi Hokisuli</p>

            <h1>
              Játékosan <span>a hoki világába</span>
            </h1>

            <p>
              Erős korcsolyaalapok, játékos hoki technika, csapatszellem és sok-sok jégélmény
              gyerekeknek.
            </p>

            <div className="hoki-hero-badges" aria-label="Hokisuli kiemelések">
              <span>U8</span>
              <span>U10</span>
              <span>RTK</span>
            </div>
          </div>

          <div className="hoki-hero-visual">
            <Image
              src={galleryImage7}
              alt="Gyerekek jégkorong edzésen"
              fill
              priority
              className="hoki-hero-image"
            />

            <span className="hoki-puck hoki-puck-one" />
            <span className="hoki-puck hoki-puck-two" />

            <div className="hoki-floating-card">
              <Trophy size={42} aria-hidden="true" />
              <strong>13 fő</strong>
              <span>igazolt játékos</span>
              <p>Folyamatos az új gyerekek bevonása és a felvétel.</p>
            </div>
          </div>
        </section>

        <section className="hoki-section section-shell">
          <div className="hoki-section-title">
            <span />
            <h2>Az egyesület története</h2>
            <span />
          </div>

          <div className="hoki-milestones-grid">
            {hokisuliPage.milestones.map((item) => {
              const Icon = item.icon;

              return (
                <article className="hoki-milestone-card" key={item.year}>
                  <div className="hoki-milestone-icon">
                    <Icon size={32} />
                  </div>
                  <strong>{item.year}</strong>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="hoki-section section-shell">
          <div className="hoki-goal-panel">
            <div className="hoki-goal-copy">
              <p className="hoki-eyebrow">Fő cél</p>
              <h2>Minél képzettebb korcsolyatudáshoz juttatni a gyerekeket</h2>
              <p>
                Az alapos korcsolyatudás meghatározó a későbbi sikeres, könnyen kivitelezhető jó
                játékhoz. Ezért a kezdeteknél a fő hangsúlyt a korcsolyatechnikára tesszük, majd
                fokozatosan tanítjuk a hoki alapokat is.
              </p>
            </div>

            <div className="hoki-goal-cards">
              {hokisuliPage.goalCards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    className="hoki-goal-card"
                    key={item.title}
                    data-number={`0${index + 1}`}
                  >
                    <div className="hoki-goal-icon">
                      <Icon size={30} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="hoki-section section-shell">
          <div className="hoki-section-title">
            <span />
            <h2>Edzőink</h2>
            <span />
          </div>

          <div className="hoki-coaches-grid">
            {hokisuliPage.coaches.map((coach) => (
              <article className="hoki-coach-card" key={coach.name}>
                <div className="hoki-coach-image-wrap">
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    width={220}
                    height={220}
                    className="hoki-coach-image"
                  />
                </div>

                <div className="hoki-coach-content">
                  <p className="hoki-coach-title">{coach.title}</p>
                  <h3>{coach.name}</h3>

                  <ul className="hoki-badge-list">
                    {coach.badges.map((badge) => (
                      <li key={badge}>
                        <Trophy size={17} aria-hidden="true" />
                        {badge}
                      </li>
                    ))}
                  </ul>

                  <div className="hoki-task-box">
                    <h4>Feladatai</h4>
                    <ul>
                      {coach.tasks.map((task) => (
                        <li key={task}>
                          <CheckCircle2 size={17} aria-hidden="true" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="hoki-info-grid section-shell">
          <article className="hoki-panel training-panel">
            <h2>Edzések és felkészülés</h2>

            <div className="hoki-training-grid">
              {hokisuliPage.trainingCards.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="hoki-training-item" key={item.title}>
                    <div className="hoki-training-icon">
                      <Icon size={30} />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="hoki-panel benefits-panel">
            <h2>Mit ad a hoki a gyerekeknek?</h2>

            <div className="hoki-benefits-list">
              {hokisuliPage.benefits.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="hoki-benefit-item" key={item.title}>
                    <div className="hoki-benefit-icon">
                      <Icon size={30} />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
        </section>

        <section className="hoki-location section-shell">
          <div className="hoki-location-copy">
            <p className="hoki-eyebrow">Jégpálya</p>
            <h2>A Pólus Center pályája az otthonunk</h2>
            <p>
              Igyekszünk szülő- és gyerekbarát edzésprogramot összeállítani, hogy mindig teljes
              létszámmal tudjunk részt venni rajta. A száraz edzés bevezetés alatt van, elsősorban
              táborok alkalmával kerül be az edzésprogramba.
            </p>
          </div>

          <div className="hoki-location-cards">
            {hokisuliPage.locationCards.map((card) => {
              const Icon = card.icon;

              return (
                <article className="hoki-location-card" key={card.title}>
                  <Icon size={34} aria-hidden="true" />
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <span>{card.note}</span>
                </article>
              );
            })}
          </div>
        </section>

        <section className="hoki-join section-shell">
          <div className="hoki-join-image-wrap">
            <Image
              src={galleryImage7}
              width={420}
              height={260}
              alt="Gyerek jégkorong felszerelésben"
              className="hoki-join-image"
            />
          </div>

          <div className="hoki-join-copy">
            <h2>
              Próbáld ki a hokit, <span>és építsünk erős kori alapokat!</span>
            </h2>
            <p>
              Kezdőket és ügyesedni vágyó gyerekeket is szeretettel várunk játékos, biztonságos
              edzéseinken.
            </p>
          </div>

          <div className="hoki-join-actions">
            <Link href="/jelentkezes" className="btn primary">
              <CalendarDays size={20} />
              Jelentkezés
            </Link>

            <Link href="/elerhetosegek" className="btn secondary hoki-join-phone">
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
