import Link from "next/link";
import { CalendarDays, ChevronRight } from "lucide-react";

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
        <img className="hero-penguin" src="/images/penguin-wave.png" alt="" aria-hidden="true" />
      </div>
      <div className="hero-visual" aria-label="Gyerekek korcsolyáznak a jégpályán">
        <div className="rink-glow" />
        <div className="kid kid-left">⛸️</div>
        <div className="kid kid-right">🏒</div>
      </div>
    </section>
  );
}
