import Link from "next/link";
import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Header } from "@/components/Header";
import { CTA } from "@/components/Sections";
import { ContactForm } from "@/components/ContactForm";
import { SmoothHashScroll } from "@/components/SmoothHashScroll";
import { contactPage } from "@/data/constants";
import { createSeoMetadata, pageSeo } from "@/data/seo";

export const metadata: Metadata = createSeoMetadata(pageSeo.elerhetosegek);

export default function ElerhetosegekPage() {
  const socialContactCards = [
    {
      title: "Facebook",
      href: contactPage.contact.facebook,
    },
    {
      title: "Instagram",
      href: contactPage.contact.instagram,
    },
  ];

  return (
    <>
      <SmoothHashScroll />
      <main className="contact-page">
        <Header />

        <section className="contact-hero section-shell">
          <div className="contact-hero-copy">
            <h1>
              Kérdésed van? <span>Írj nekünk!</span>
            </h1>

            <p>
              Jelentkeznétek korcsolyaoktatásra, hokisulira vagy TSMT foglalkozásra? Küldd el az
              adatokat, és felvesszük veled a kapcsolatot.
            </p>
          </div>

          <div className="contact-side-panel contact-hero-contact">
            <h2>Elérhetőségek</h2>

            <div className="contact-methods">
              <Link href={`mailto:${contactPage.contact.email}`} className="contact-method-card">
                <Mail size={30} aria-hidden="true" />
                <strong>{contactPage.contact.email}</strong>
              </Link>

              <Link href={contactPage.contact.phoneHref} className="contact-method-card">
                <Phone size={30} aria-hidden="true" />
                <strong>{contactPage.contact.phone}</strong>
              </Link>

              {socialContactCards.map((item) => {
                return (
                  <Link
                    href={item.href}
                    className="contact-method-card"
                    key={item.title}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.title === "Facebook" ? (
                      <FaFacebookF size={30} aria-hidden="true" />
                    ) : (
                      <FaInstagram size={30} aria-hidden="true" />
                    )}
                    <strong>
                      {item.title === "Facebook"
                        ? "Engi Korisuli Facebook"
                        : "Engi Korisuli Instagram"}
                    </strong>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section id="jelentkezes" className="contact-main-grid section-shell">
          <article className="contact-form-panel">
            <div className="contact-section-heading">
              <p className="contact-eyebrow">Jelentkezési űrlap</p>
              <h2>Lépj kapcsolatba velünk!</h2>
              <p>A csillaggal jelölt mezők kitöltése kötelező.</p>
            </div>

            <ContactForm />
          </article>
        </section>

        <section className="locations-section section-shell">
          <div className="contact-section-title">
            <span />
            <h2>Helyszínek</h2>
            <span />
          </div>

          <div className="locations-grid">
            {contactPage.locations.map((location) => {
              const Icon = location.icon;

              return (
                <article className="location-panel" key={location.title}>
                  <div className="location-content">
                    <div className="location-icon">
                      <Icon size={34} aria-hidden="true" />
                    </div>

                    <h3>{location.title}</h3>
                    <strong>{location.place}</strong>
                    <p>{location.address}</p>

                    <Link
                      href={location.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn secondary"
                    >
                      <MapPin size={18} />
                      Megnyitás Google Maps-ben
                    </Link>

                    <div className="approach-box">
                      <h4>Megközelítési javaslatok</h4>
                      <ul>
                        {location.tips.map((tip) => (
                          <li key={tip}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="map-embed">
                    <iframe
                      src={location.embedUrl}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${location.title} térkép`}
                    />
                  </div>
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
