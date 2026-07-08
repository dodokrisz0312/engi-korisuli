import Link from "next/link";
import type { Metadata } from "next";
import {
  AlertCircle,
  CalendarDays,
  CreditCard,
  FileText,
  HeartPulse,
  Mail,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { Header } from "@/components/Header";
import { CTA } from "@/components/Sections";
import { createSeoMetadata, pageSeo } from "@/data/seo";

export const metadata: Metadata = createSeoMetadata(pageSeo.aszf);

export default function AszfPage() {
  return (
    <>
      <main className="terms-page">
        <Header />

        <section className="terms-hero section-shell">
          <div className="terms-hero-copy">
            <p className="terms-eyebrow">Általános szerződési feltételek</p>

            <h1>
              ÁSZF <span>és részvételi feltételek</span>
            </h1>

            <p>
              Az alábbi tájékoztató összefoglalja az Engi Korisuli foglalkozásain való részvétel,
              jelentkezés, fizetés, lemondás és kapcsolattartás alapvető feltételeit.
            </p>
          </div>

          <div className="terms-hero-card">
            <FileText size={42} aria-hidden="true" />
            <strong>fontos tudnivalók</strong>
            <span>jelentkezés, részvétel, lemondás és házirend</span>
            <p>
              Kérjük, jelentkezés előtt olvassátok el a részvételi feltételeket és az adatkezelési
              tájékoztatót is.
            </p>
          </div>
        </section>

        <section className="terms-content section-shell">
          <article className="terms-panel">
            <div className="terms-section-heading">
              <FileText size={32} aria-hidden="true" />
              <h2>1. Szolgáltató adatai</h2>
            </div>

            <p>
              Jelen Általános Szerződési Feltételek az Engi Korisuli által szervezett
              korcsolyaoktatásra, hokisuli foglalkozásokra, TSMT / mozgáskoordinációs
              foglalkozásokra, táborokra és egyéb kapcsolódó programokra vonatkoznak.
            </p>

            <div className="terms-info-box">
              <p>
                <strong>Szolgáltató neve:</strong> Jégmadarak Mozgásfejlesztő Club Sport Egyesület
              </p>
              <p>
                <strong>Székhely:</strong> 1155 Budapest, Vág utca 73.
              </p>
              <p>
                <strong>E-mail:</strong>{" "}
                <a href="mailto:engiklara@gmail.com">engiklara@gmail.com</a>
              </p>
              <p>
                <strong>Telefon:</strong> <a href="tel:+36709783703">06-70-978-3703</a>
              </p>
              <p>
                <strong>Weboldal:</strong>{" "}
                <a href="https://engikorisuli.com" target="_blank" rel="noopener noreferrer">
                  https://engikorisuli.com
                </a>
              </p>
            </div>
          </article>

          <article className="terms-panel">
            <div className="terms-section-heading">
              <UserCheck size={32} aria-hidden="true" />
              <h2>2. A szolgáltatások köre</h2>
            </div>

            <p>
              A Szolgáltató gyermekek számára tartott sport- és mozgásfejlesztő foglalkozásokat
              szervez. A foglalkozások célja a korcsolyatudás, mozgáskoordináció, testtudat,
              egyensúlyérzék, figyelem és sportos szemlélet fejlesztése.
            </p>

            <div className="terms-card-grid">
              <div>
                <strong>Korisuli</strong>
                <p>Korcsolyaoktatás kezdő és haladó gyermekek részére.</p>
              </div>

              <div>
                <strong>Hokisuli</strong>
                <p>Játékos hoki alapok, korcsolyatechnika és csapatszellem fejlesztése.</p>
              </div>

              <div>
                <strong>TSMT / mozgáskoordináció</strong>
                <p>Mozgáskoordinációs és mozgásfejlesztő foglalkozások gyermekeknek.</p>
              </div>

              <div>
                <strong>Táborok és események</strong>
                <p>Időszakos táborok, ünnepi órák, bemutatók és egyéb programok.</p>
              </div>
            </div>
          </article>

          <article className="terms-panel">
            <div className="terms-section-heading">
              <CalendarDays size={32} aria-hidden="true" />
              <h2>3. Jelentkezés és részvétel</h2>
            </div>

            <p>
              A foglalkozásokra jelentkezni a weboldalon található kapcsolatfelvételi űrlapon,
              e-mailben, telefonon vagy egyéb egyeztetett csatornán lehet. A jelentkezés akkor válik
              véglegessé, amikor a Szolgáltató visszaigazolja a részvételi lehetőséget.
            </p>

            <ul className="terms-list">
              <li>
                A gyermek életkorát és korábbi korcsolya- vagy sporttapasztalatát kérjük jelezni.
              </li>
              <li>
                A csoportba sorolás a gyermek életkora, tudásszintje és a szabad helyek alapján
                történik.
              </li>
              <li>
                A Szolgáltató fenntartja a jogot a csoportbeosztás módosítására szakmai vagy
                szervezési okból.
              </li>
              <li>
                A foglalkozásokon való részvételhez megfelelő ruházat és felszerelés szükséges.
              </li>
            </ul>
          </article>

          <article className="terms-panel">
            <div className="terms-section-heading">
              <CreditCard size={32} aria-hidden="true" />
              <h2>4. Díjak és fizetés</h2>
            </div>

            <p>
              A foglalkozások, táborok és egyéb programok aktuális díjairól a Szolgáltató külön
              tájékoztatást ad. A díjak programtípusonként, időszakonként és csoportonként
              eltérhetnek.
            </p>

            <div className="terms-table">
              <div>
                <strong>Fizetési mód</strong>
                <p>
                  A fizetés módjáról és határidejéről a Szolgáltató a jelentkezés visszaigazolásakor
                  tájékoztat.
                </p>
              </div>

              <div>
                <strong>Számlázás</strong>
                <p>Számla kiállítása esetén a számlázási adatokat a Szolgáltató külön bekérheti.</p>
              </div>

              <div>
                <strong>Fizetési határidő</strong>
                <p>
                  A részvételi díj megfizetése a visszaigazolásban megadott határidőig esedékes.
                </p>
              </div>

              <div>
                <strong>Elmaradt fizetés</strong>
                <p>
                  Elmaradt fizetés esetén a Szolgáltató a részvételi helyet más jelentkezőnek
                  ajánlhatja fel.
                </p>
              </div>
            </div>
          </article>

          <article className="terms-panel">
            <div className="terms-section-heading">
              <AlertCircle size={32} aria-hidden="true" />
              <h2>5. Lemondás, hiányzás és módosítás</h2>
            </div>

            <p>
              A lemondási és pótlási feltételek programonként eltérhetnek. A pontos feltételekről a
              Szolgáltató az adott foglalkozásra, bérletre, táborra vagy eseményre vonatkozóan külön
              tájékoztatást adhat.
            </p>

            <ul className="terms-list">
              <li>
                Hiányzás esetén a pótlási lehetőség nem automatikus, azt előzetesen egyeztetni kell.
              </li>
              <li>
                Betegség vagy váratlan helyzet esetén kérjük, mielőbb jelezzétek a távolmaradást.
              </li>
              <li>
                A Szolgáltató jogosult időpontot, helyszínt vagy oktatót módosítani indokolt
                esetben.
              </li>
              <li>
                Vis maior, pályalezárás, betegség vagy technikai ok esetén a program elhalasztható
                vagy módosítható.
              </li>
            </ul>
          </article>

          <article className="terms-panel">
            <div className="terms-section-heading">
              <HeartPulse size={32} aria-hidden="true" />
              <h2>6. Egészségügyi és biztonsági feltételek</h2>
            </div>

            <p>
              A foglalkozásokon kizárólag egészséges, sportolásra alkalmas állapotban lévő gyermek
              vehet részt. A szülő / törvényes képviselő felelőssége, hogy jelezze, ha a gyermeknek
              olyan egészségügyi állapota, sérülése, allergiája vagy egyéb körülménye van, amely a
              sportfoglalkozáson való részvételt befolyásolhatja.
            </p>

            <ul className="terms-list">
              <li>
                A jégen kesztyű viselése ajánlott / szükséges, kisebb gyermekeknek vízhatlan ruházat
                javasolt.
              </li>
              <li>A gyermeknek az oktatók utasításait be kell tartania.</li>
              <li>
                Balesetveszélyes viselkedés esetén az oktató a gyermek részvételét korlátozhatja.
              </li>
              <li>
                A sporttevékenység jellegéből adódó kisebb esések, ütések, sérülések kockázata
                fennállhat.
              </li>
            </ul>
          </article>

          <article className="terms-panel">
            <div className="terms-section-heading">
              <ShieldCheck size={32} aria-hidden="true" />
              <h2>7. Házirend és magatartási szabályok</h2>
            </div>

            <p>
              A foglalkozásokon a biztonságos, támogató és gyermekbarát környezet fenntartása közös
              érdek. A résztvevőknek és kísérőknek be kell tartaniuk a helyszín, a jégpálya és az
              oktatók szabályait.
            </p>

            <div className="terms-card-grid">
              <div>
                <strong>Érkezés</strong>
                <p>Kérjük, időben érkezzetek, hogy legyen elegendő idő az átöltözésre.</p>
              </div>

              <div>
                <strong>Felszerelés</strong>
                <p>
                  A gyermek ruházata legyen kényelmes, biztonságos és az adott foglalkozáshoz
                  megfelelő.
                </p>
              </div>

              <div>
                <strong>Szülői jelenlét</strong>
                <p>A szülői jelenlét és várakozás szabályai helyszínenként eltérhetnek.</p>
              </div>

              <div>
                <strong>Közösségi viselkedés</strong>
                <p>Kérjük, minden gyermek és család tartsa tiszteletben a többi résztvevőt.</p>
              </div>
            </div>
          </article>

          <article className="terms-panel">
            <div className="terms-section-heading">
              <Mail size={32} aria-hidden="true" />
              <h2>8. Kapcsolattartás és adatkezelés</h2>
            </div>

            <p>
              A jelentkezéshez és kapcsolattartáshoz megadott személyes adatokat kizárólag a
              jelentkezés kezelése, csoportegyeztetés, tájékoztatás és kapcsolattartás céljából
              kezeljük. Az adatkezelés részletes szabályait az adatvédelmi tájékoztató tartalmazza.
            </p>

            <p>
              Az adatvédelmi tájékoztató itt érhető el:{" "}
              <Link href="/adatvedelmi-tajekoztato">Adatvédelmi tájékoztató</Link>
            </p>
          </article>

          <article className="terms-panel">
            <div className="terms-section-heading">
              <FileText size={32} aria-hidden="true" />
              <h2>9. Fotók, videók és tartalmak</h2>
            </div>

            <p>
              A foglalkozásokon, táborokban, bemutatókon és egyéb eseményeken fénykép- és
              videófelvétel készülhet. A felvételek célja lehet a programok dokumentálása, a
              jégiskola életének bemutatása, valamint kommunikációs és promóciós tartalmak
              készítése.
            </p>

            <p>
              Felismerhető gyermekről készült fénykép vagy videó weboldalon, közösségi média
              felületen — például Facebookon vagy Instagramon — történő közzétételére kizárólag a
              szülő / törvényes képviselő előzetes hozzájárulása alapján kerülhet sor.
            </p>

            <p>
              A hozzájárulás megadása önkéntes. A hozzájárulás megtagadása esetén a gyermek továbbra
              is részt vehet a foglalkozásokon, ez a részvételt nem érinti.
            </p>

            <p>
              A weboldalon található szöveges és képi tartalmak, logók, grafikai elemek és egyéb
              anyagok a jogosult engedélye nélkül nem használhatók fel.
            </p>
          </article>

          <article className="terms-panel">
            <div className="terms-section-heading">
              <AlertCircle size={32} aria-hidden="true" />
              <h2>10. Panaszkezelés</h2>
            </div>

            <p>
              Kérdés, észrevétel vagy panasz esetén kérjük, vedd fel velünk a kapcsolatot e-mailben
              vagy telefonon. Törekszünk arra, hogy minden megkeresést ésszerű időn belül
              megválaszoljunk.
            </p>

            <div className="terms-info-box">
              <p>
                <strong>E-mail:</strong>{" "}
                <a href="mailto:engiklara@gmail.com">engiklara@gmail.com</a>
              </p>
              <p>
                <strong>Telefon:</strong> <a href="tel:+36709783703">06-70-978-3703</a>
              </p>
            </div>
          </article>

          <article className="terms-panel">
            <div className="terms-section-heading">
              <FileText size={32} aria-hidden="true" />
              <h2>11. Az ÁSZF módosítása</h2>
            </div>

            <p>
              A Szolgáltató fenntartja a jogot jelen ÁSZF módosítására. Az aktuális változat mindig
              ezen az oldalon érhető el. A módosítások a közzétételt követően érvényesek.
            </p>

            <p>
              <strong>Hatályos:</strong> 2026. július
            </p>
          </article>

          <div className="terms-back-box">
            <h2>Kérdésed van a részvételi feltételekről?</h2>
            <p>
              Írj nekünk, és segítünk a jelentkezéssel, csoportválasztással vagy gyakorlati
              tudnivalókkal kapcsolatban.
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
