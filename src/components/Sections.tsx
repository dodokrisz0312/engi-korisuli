import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { GalleryLightbox } from "@/components/GalleryLightbox";
import penguinFooterImage from "@/assets/penguin-footer.png";
import { contactPage, galleryItems, stats, teachers } from "@/data/constants";

export function Stats() {
  return (
    <section className="intro-stats section-shell" aria-label="Bemutatkozás és tapasztalat">
      <article className="intro-card">
        <span>Bemutatkozás</span>
        <h2>30 év tapasztalat, játékos fejlődés és sok mosoly a jégen</h2>
        <p>
          Az Engi Korisuli célja, hogy a korcsolyázás örömét minden gyermekhez eljuttassa. Játékos,
          biztonságos és szeretetteljes környezetben dolgozunk, ahol a mozgás, a fejlődés és a
          közösség kéz a kézben jár.
        </p>
        <Link href="/elerhetosegek">
          Többet rólunk <ChevronRight size={16} />
        </Link>
      </article>

      <div className="stats-grid">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div className="stat" key={item.label}>
              <Icon size={30} />
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section className="gallery section-shell">
      <div className="split-heading">
        <h2>Pillanatok a jégről</h2>
        <Link href="/galeria">
          Több kép a galériában <ChevronRight size={16} />
        </Link>
      </div>
      <GalleryLightbox items={galleryItems} variant="carousel" />
    </section>
  );
}

export function Teachers() {
  return (
    <section className="teachers section-shell">
      <div className="split-heading">
        <h2>Oktatóink</h2>
        <Link href="/oktatok">
          Összes oktató <ChevronRight size={16} />
        </Link>
      </div>
      <div className="teacher-grid">
        {teachers.map((teacher, i) => (
          <article className="teacher-card" key={teacher.name}>
            <Image
              className={`avatar avatar-${i + 1}`}
              src={teacher.image}
              alt={teacher.name}
              sizes="124px"
            />
            <div>
              <h3>{teacher.name}</h3>
              <strong>{teacher.role}</strong>
              <p>{teacher.text}</p>
              <Link href="/oktatok">
                Bemutatkozás <ChevronRight size={14} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function CTA() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner section-shell">
        <div className="footer-brand">
          <strong>Jégiskola · TSMT · Hokisuli</strong>
          <span>Játék, mozgás, közösség.</span>
        </div>

        <div className="footer-contact" aria-label="Elérhetőségek">
          <h3>Elérhetőségek</h3>
          <a href={contactPage.contact.phoneHref}>
            <Phone size={14} aria-hidden="true" />
            {contactPage.contact.phone}
          </a>
          <a href={`mailto:${contactPage.contact.email}`}>
            <Mail size={14} aria-hidden="true" />
            {contactPage.contact.email}
          </a>
        </div>

        <div className="footer-follow">
          <h3>Kövess minket!</h3>
          <div className="social-links">
            <a
              href={contactPage.contact.facebook}
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF size={18} aria-hidden="true" />
            </a>
            <a
              href={contactPage.contact.instagram}
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <Image className="footer-penguin" src={penguinFooterImage} alt="" aria-hidden="true" />

        <div className="footer-bottom">
          <p>© {currentYear} Engi Korisuli. Minden jog fenntartva.</p>
          <div className="footer-legal">
            <Link href="/adatvedelmi-tajekoztato">Adatvédelmi tájékoztató</Link>
            <span aria-hidden="true">•</span>
            <Link href="/suti-tajekoztato">Süti tájékoztató</Link>
            <span aria-hidden="true">•</span>
            <Link href="/aszf">Általános szerződési feltételek</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
