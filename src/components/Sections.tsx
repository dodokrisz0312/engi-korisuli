import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import penguinFooterImage from "@/assets/penguin-footer.png";
import { galleryItems, stats, teachers } from "@/data/site";

export function Stats() {
  return (
    <section className="intro-stats section-shell" aria-label="Bemutatkozás és tapasztalat">
      <article className="intro-card">
        <span>Bemutatkozás</span>
        <h2>10+ év tapasztalat, játékos fejlődés és sok mosoly a jégen</h2>
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
      <div className="gallery-grid">
        {galleryItems.map((item, i) => (
          <article className={`gallery-tile ${item.className}`} key={item.label}>
            <img src={item.imageSrc} alt={item.label} />
            <div className="gallery-overlay">
              <span>{item.label}</span>
            </div>
          </article>
        ))}
      </div>
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
            <img className={`avatar avatar-${i + 1}`} src={teacher.imageSrc} alt={teacher.name} />
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
  return (
    <footer className="site-footer">
      <div className="footer-inner section-shell">
        <div className="footer-copy">
          <h2>Csatlakozz hozzánk, és élvezzétek együtt a jég örömét!</h2>
          <p>Próbáld ki bármelyik programunkat – szeretettel várunk!</p>
        </div>

        <Link className="btn primary footer-cta" href="/jelentkezes">
          Próbára jelentkezés
        </Link>

        <nav className="social-links" aria-label="Közösségi média linkek">
          <a href="#" aria-label="Facebook">
            f
          </a>
          <a href="#" aria-label="Instagram">
            ◎
          </a>
          <a href="#" aria-label="YouTube">
            ▶
          </a>
        </nav>

        <Image
          className="footer-penguin"
          src={penguinFooterImage}
          alt=""
          aria-hidden="true"
        />
      </div>
    </footer>
  );
}
