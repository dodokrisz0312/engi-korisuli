import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import heroPenguin from "@/assets/penguin-wave.png";

export function Hero() {
  return (
    <section className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow">Gyerekbarát jégoktatás 4 éves kortól</p>
        <h1>Első lépések a jégen, életre szóló élmények!</h1>
        <p>
          Játékos, biztonságos és szeretetteljes oktatás minden gyermeknek. Fejlesztjük a mozgást,
          az önbizalmat és a jég szeretetét.
        </p>
        <div className="hero-actions">
          <Link className="btn primary" href="/jelentkezes">
            <CalendarDays size={18} /> Próbára jelentkezés
          </Link>
          <Link className="btn ghost" href="/orarend">
            Órarend megtekintése <ChevronRight size={16} />
          </Link>
        </div>
        <Image className="hero-penguin" src={heroPenguin} alt="" aria-hidden="true" />
      </div>
      <div className="hero-visual">
        <Image
          src={heroImage}
          alt="Gyerekek korcsolyáznak a jégpályán"
          fill
          className="hero-image"
          priority
        />
      </div>
    </section>
  );
}
