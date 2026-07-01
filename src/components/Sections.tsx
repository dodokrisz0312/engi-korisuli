import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Instagram, Mail, Phone } from "lucide-react";
import { GalleryLightbox } from "@/components/GalleryLightbox";
import penguinFooterImage from "@/assets/penguin-footer.png";
import { galleryItems, stats, teachers } from "@/data/constants";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.2 8.3V6.8c0-.7.5-.9.9-.9h2.2V2.2L14.2 2c-3.4 0-4.6 2-4.6 4.5v1.8H6.7v4.1h2.9V22h4.3v-9.6h2.9l.5-4.1h-3.1Z"
      />
    </svg>
  );
}

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
      <GalleryLightbox items={galleryItems} />
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
          <a href="tel:+36301234567">
            <Phone size={14} aria-hidden="true" />
            +36 30 123 4567
          </a>
          <a href="mailto:info@engikorisuli.hu">
            <Mail size={14} aria-hidden="true" />
            info@engikorisuli.hu
          </a>
        </div>

        <div className="footer-follow">
          <h3>Kövess minket!</h3>
          <div className="social-links">
            <a
              href="https://facebook.com/engikorisuli"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <Image className="footer-penguin" src={penguinFooterImage} alt="" aria-hidden="true" />

        <div className="footer-bottom">
          <p>© {currentYear} Engi Korisuli. Minden jog fenntartva.</p>
          <div className="footer-legal">
            <Link href="/adatvedelmi-tajekoztato">Adatvédelmi tájékoztató</Link>
            <span aria-hidden="true">•</span>
            <Link href="/aszf">Általános szerződési feltételek</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
