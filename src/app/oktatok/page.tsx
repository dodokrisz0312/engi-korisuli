import Image from "next/image";
import type { Metadata } from "next";
import { CheckCircle2, Quote, Star } from "lucide-react";
import { Header } from "@/components/Header";
import { CTA } from "@/components/Sections";
import { oktatokPage } from "@/data/constants";
import { createSeoMetadata, pageSeo } from "@/data/seo";

export const metadata: Metadata = createSeoMetadata(pageSeo.oktatok);

const getInstructorInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();

export default function OktatokPage() {
  const featuredInstructor = oktatokPage.instructors.find((instructor) => instructor.featured);
  const otherInstructors = oktatokPage.instructors.filter((instructor) => !instructor.featured);

  return (
    <>
      <main className="oktatok-page">
        <Header />

        <section className="oktatok-hero section-shell">
          <div className="oktatok-hero-copy">
            <h1>
              Akik végigkísérik <span>a gyerekeket a jégen</span>
            </h1>

            <p>
              Tapasztalt, szeretetteljes és sokszínű oktatói csapatunk segít abban, hogy minden
              gyermek biztonságban, jókedvűen és saját tempójában fejlődhessen.
            </p>

            <div className="oktatok-hero-stars" aria-hidden="true">
              <Star size={20} />
              <Star size={28} />
              <Star size={18} />
            </div>
          </div>
        </section>

        <section className="oktatok-stats section-shell">
          {oktatokPage.stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <article className="oktatok-stat-card" key={stat.label}>
                <Icon size={34} aria-hidden="true" />
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            );
          })}
        </section>

        {featuredInstructor && (
          <section className="oktatok-featured section-shell">
            <div className="oktatok-section-title">
              <span />
              <h2>Jégiskolánk vezetője</h2>
              <span />
            </div>

            <article className="featured-instructor-card">
              <div className="featured-instructor-number" aria-hidden="true">
                01
              </div>

              <div className="featured-image-wrap">
                {featuredInstructor.image ? (
                  <Image
                    src={featuredInstructor.image}
                    alt={featuredInstructor.name}
                    width={420}
                    height={460}
                    className="featured-image"
                  />
                ) : (
                  <div className="featured-image featured-image-placeholder" aria-hidden="true">
                    {getInstructorInitials(featuredInstructor.name)}
                  </div>
                )}
              </div>

              <div className="featured-content">
                <p className="oktatok-eyebrow">{featuredInstructor.role}</p>
                <h3>{featuredInstructor.name}</h3>
                <p>{featuredInstructor.focus}</p>

                <ul className="featured-highlights">
                  {featuredInstructor.highlights.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={18} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                {featuredInstructor.quote && (
                  <blockquote>
                    <Quote size={34} aria-hidden="true" />
                    <p>{featuredInstructor.quote}</p>
                  </blockquote>
                )}
              </div>
            </article>
          </section>
        )}

        <section className="oktatok-section section-shell">
          <div className="oktatok-section-title">
            <span />
            <h2>Oktatói csapatunk</h2>
            <span />
          </div>

          <div className="instructors-grid">
            {otherInstructors.map((instructor, index) => (
              <article className="instructor-card" key={instructor.name}>
                <div className="instructor-top">
                  <div className="instructor-image-wrap">
                    {instructor.image ? (
                      <Image
                        src={instructor.image}
                        alt={instructor.name}
                        width={132}
                        height={132}
                        className="instructor-image"
                      />
                    ) : (
                      <div className="instructor-image instructor-image-placeholder" aria-hidden="true">
                        {getInstructorInitials(instructor.name)}
                      </div>
                    )}
                  </div>

                  <div className="instructor-number" aria-hidden="true">
                    {String(index + 2).padStart(2, "0")}
                  </div>
                </div>

                <p className="instructor-role">{instructor.role}</p>
                <h3>{instructor.name}</h3>
                <p>{instructor.focus}</p>

                <ul>
                  {instructor.highlights.map((highlight) => (
                    <li key={highlight}>
                      <CheckCircle2 size={16} aria-hidden="true" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="oktatok-values section-shell">
          <div className="values-copy">
            <p className="oktatok-eyebrow">Ahogyan tanítunk</p>
            <h2>Szakmai tudás, türelem és játékos figyelem</h2>
            <p>
              A korcsolyázás tanulása egyszerre technikai, fizikai és lelki folyamat. Ezért nemcsak
              a mozdulatokat tanítjuk, hanem biztonságot, önbizalmat és sikerélményt is adunk.
            </p>
          </div>

          <div className="values-grid">
            {oktatokPage.values.map((value) => {
              const Icon = value.icon;

              return (
                <article className="value-card" key={value.title}>
                  <div className="value-icon">
                    <Icon size={30} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <CTA />
    </>
  );
}
