import Link from "next/link";
import { BarChart3, CheckCircle2, Cookie, FileText, Settings, ShieldCheck } from "lucide-react";
import { Header } from "@/components/Header";
import { CTA } from "@/components/Sections";

export default function SutiTajekoztatoPage() {
  return (
    <>
      <main className="cookies-page">
        <Header />

        <section className="cookies-hero section-shell">
          <div className="cookies-hero-copy">
            <p className="cookies-eyebrow">Süti tájékoztató</p>

            <h1>
              Cookie-k <span>használata</span>
            </h1>

            <p>
              Ez az oldal bemutatja, milyen sütiket és hasonló technológiákat használhat a weboldal,
              mire szolgálnak ezek, és hogyan kezelheted a hozzájárulásodat.
            </p>
          </div>

          <div className="cookies-hero-card">
            <Cookie size={42} aria-hidden="true" />
            <strong>választható statisztika</strong>
            <span>Google Analytics csak hozzájárulás esetén</span>
            <p>
              A szükséges sütik a működéshez kellenek, a statisztikai sütik pedig csak akkor
              aktiválódnak, ha elfogadod őket.
            </p>
          </div>
        </section>

        <section className="cookies-content section-shell">
          <article className="cookies-panel">
            <div className="cookies-section-heading">
              <FileText size={32} aria-hidden="true" />
              <h2>1. Mi az a süti?</h2>
            </div>

            <p>
              A süti, vagyis cookie, egy kis adatfájl, amelyet a böngésző tárolhat a látogató
              eszközén. A sütik segíthetik a weboldal működését, a beállítások megjegyzését vagy a
              látogatottság mérését.
            </p>

            <p>
              A weboldal sütiket és helyi böngészőtárhelyet is használhat. A süti-hozzájárulás
              beállítását például a böngésző helyi tárhelyében tároljuk, hogy a banner ne jelenjen
              meg minden látogatáskor.
            </p>
          </article>

          <article className="cookies-panel">
            <div className="cookies-section-heading">
              <ShieldCheck size={32} aria-hidden="true" />
              <h2>2. Szükséges sütik és technikai tárolás</h2>
            </div>

            <p>
              Ezek a weboldal alapvető működéséhez, biztonságához vagy a felhasználói döntések
              megjegyzéséhez szükségesek. Ezek a sütik / tárolások nem kapcsolhatók ki a weboldal
              működésének sérelme nélkül.
            </p>

            <div className="cookies-table">
              <div>
                <strong>Megnevezés</strong>
                <p>engi-cookie-consent</p>
              </div>

              <div>
                <strong>Típus</strong>
                <p>Helyi böngészőtárhely / localStorage</p>
              </div>

              <div>
                <strong>Cél</strong>
                <p>A látogató süti-hozzájárulási beállításainak megjegyzése.</p>
              </div>

              <div>
                <strong>Megőrzés</strong>
                <p>A böngészőben történő törlésig vagy a beállítások módosításáig.</p>
              </div>
            </div>
          </article>

          <article className="cookies-panel">
            <div className="cookies-section-heading">
              <BarChart3 size={32} aria-hidden="true" />
              <h2>3. Statisztikai sütik — Google Analytics</h2>
            </div>

            <p>
              A weboldal Google Analytics 4 mérést használhat a látogatottság és az oldalhasználat
              megértésére. A statisztikai mérés csak akkor aktiválódik, ha a látogató ehhez
              hozzájárul a süti bannerben. A Google dokumentációja szerint a GA4 webhelyeken sütiket
              használhat a felhasználói interakciók megkülönböztetésére és mérésére.
            </p>

            <div className="cookies-table">
              <div>
                <strong>Cookie</strong>
                <p>_ga</p>
              </div>

              <div>
                <strong>Cél</strong>
                <p>Felhasználók megkülönböztetése statisztikai méréshez.</p>
              </div>

              <div>
                <strong>Cookie</strong>
                <p>_ga_&#123;container-id&#125;</p>
              </div>

              <div>
                <strong>Cél</strong>
                <p>Munkamenet- és látogatottsági adatok kezelése GA4 méréshez.</p>
              </div>
            </div>

            <p>
              A Google Analytics használatakor a Google saját adatkezelési feltételei és
              tájékoztatói is irányadók lehetnek. A Google Consent Mode célja, hogy a Google tagek a
              látogatók hozzájárulási döntéseihez igazodjanak.
            </p>
          </article>

          <article className="cookies-panel">
            <div className="cookies-section-heading">
              <Settings size={32} aria-hidden="true" />
              <h2>4. Hozzájárulás kezelése</h2>
            </div>

            <p>
              A weboldal első látogatásakor süti banner jelenik meg. A bannerben választható, hogy
              elfogadod-e a statisztikai sütiket. A szükséges sütik a weboldal működéséhez
              szükségesek, ezért azok mindig aktívak.
            </p>

            <ul className="cookies-list">
              <li>Az „Elfogadom” gombbal a statisztikai sütik is aktiválódnak.</li>
              <li>
                Az „Elutasítom” gombbal csak a szükséges sütik / technikai tárolások maradnak
                aktívak.
              </li>
              <li>
                A „Beállítások” opcióval külön is kiválasztható a statisztikai mérés engedélyezése.
              </li>
              <li>
                A hozzájárulás később a böngésző adatai / localStorage törlésével visszavonható.
              </li>
            </ul>
          </article>

          <article className="cookies-panel">
            <div className="cookies-section-heading">
              <CheckCircle2 size={32} aria-hidden="true" />
              <h2>5. Hogyan tudod törölni vagy módosítani a sütiket?</h2>
            </div>

            <p>
              A sütiket és a helyi tárhelyben mentett beállításokat a böngésződ beállításaiban tudod
              törölni. A törlés után a süti banner újra megjelenhet, és ismét megadhatod a
              döntésedet.
            </p>

            <div className="cookies-card-grid">
              <div>
                <strong>Chrome</strong>
                <p>Beállítások → Adatvédelem és biztonság → Böngészési adatok törlése.</p>
              </div>

              <div>
                <strong>Safari</strong>
                <p>Beállítások → Adatvédelem → Webhelyadatok kezelése / törlése.</p>
              </div>

              <div>
                <strong>Firefox</strong>
                <p>Beállítások → Adatvédelem és biztonság → Sütik és webhelyadatok.</p>
              </div>

              <div>
                <strong>Edge</strong>
                <p>Beállítások → Sütik és webhelyengedélyek → Sütik és webhelyadatok kezelése.</p>
              </div>
            </div>
          </article>

          <article className="cookies-panel">
            <div className="cookies-section-heading">
              <FileText size={32} aria-hidden="true" />
              <h2>6. Kapcsolódó tájékoztatók</h2>
            </div>

            <p>
              A sütik adatvédelmi vonatkozásairól az adatvédelmi tájékoztató is rendelkezik. A NAIH
              saját oldalán is közzétesz süti tájékoztatót, amely jó példa arra, hogy a weboldalak
              külön tájékoztatják a látogatókat a sütikről.
            </p>

            <div className="cookies-links">
              <Link href="/adatvedelmi-tajekoztato" className="btn secondary">
                Adatvédelmi tájékoztató
              </Link>

              <Link href="/aszf" className="btn secondary">
                ÁSZF
              </Link>
            </div>
          </article>

          <div className="cookies-back-box">
            <h2>Kérdésed van a sütikkel kapcsolatban?</h2>
            <p>
              Írj nekünk, ha kérdésed van a weboldal adatkezelésével vagy a süti beállításokkal
              kapcsolatban.
            </p>

            <Link href="/elerhetosegek" className="btn primary">
              Kapcsolatfelvétel
            </Link>
          </div>
        </section>
      </main>

      <CTA />
    </>
  );
}
