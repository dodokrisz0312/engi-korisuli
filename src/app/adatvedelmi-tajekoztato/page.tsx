import Link from "next/link";
import { Cookie, FileText, Mail, ShieldCheck, UserCheck } from "lucide-react";
import { Header } from "@/components/Header";
import { CTA } from "@/components/Sections";

export default function AdatvedelmiTajekoztatoPage() {
  return (
    <>
      <main className="privacy-page">
        <Header />

        <section className="privacy-hero section-shell">
          <div className="privacy-hero-copy">
            <h1>
              Adatvédelmi <span>tájékoztató</span>
            </h1>

            <p>
              Az alábbi tájékoztató összefoglalja, hogyan kezeljük a weboldalon megadott személyes
              adatokat, a foglalkozásokon készült fénykép- és videófelvételeket, valamint hogyan
              használunk sütiket és Google Analytics mérést.
            </p>
          </div>

          <div className="privacy-hero-card">
            <ShieldCheck size={42} aria-hidden="true" />
            <strong>átlátható adatkezelés</strong>
            <span>kapcsolatfelvétel, jelentkezés, fotók és sütik</span>
            <p>
              A statisztikai sütiket csak hozzájárulás esetén használjuk, a jelentkezési adatokat
              pedig kizárólag kapcsolatfelvételre kezeljük.
            </p>
          </div>
        </section>

        <section className="privacy-content section-shell">
          <article className="privacy-panel">
            <div className="privacy-section-heading">
              <FileText size={32} aria-hidden="true" />
              <h2>1. Az adatkezelő adatai</h2>
            </div>

            <p>A weboldal üzemeltetője és az adatkezelő:</p>

            <div className="privacy-info-box">
              <p>
                <strong>Név:</strong> Jégmadarak Mozgásfejlesztő Club Sport Egyesület
              </p>
              <p>
                <strong>Székhely:</strong> 1155 Budapest, Vág utca 73.
              </p>
              <p>
                <strong>E-mail:</strong>{" "}
                <a href="mailto:engiklara@gmail.com">engiklara@gmail.com</a>
              </p>
              <p>
                <strong>Telefon:</strong> <a href="tel:+36709783703">06 70 978 3703</a>
              </p>
              <p>
                <strong>Weboldal:</strong>{" "}
                <a href="https://engikorisuli.com" target="_blank" rel="noopener noreferrer">
                  https://engikorisuli.com
                </a>
              </p>
            </div>
          </article>

          <article className="privacy-panel">
            <div className="privacy-section-heading">
              <UserCheck size={32} aria-hidden="true" />
              <h2>2. Kapcsolatfelvételi és jelentkezési űrlap adatkezelése</h2>
            </div>

            <p>
              A weboldalon található kapcsolatfelvételi / jelentkezési űrlapon keresztül a látogatók
              érdeklődhetnek a korcsolyaoktatás, hokisuli vagy TSMT / mozgáskoordinációs
              foglalkozások iránt.
            </p>

            <div className="privacy-table">
              <div>
                <strong>Kezelt adatok</strong>
                <p>
                  Szülő neve, e-mail cím, telefonszám, gyermek / gyermekek életkora, kiválasztott
                  oktatás típusa, valamint az üzenetben önkéntesen megadott információk.
                </p>
              </div>

              <div>
                <strong>Adatkezelés célja</strong>
                <p>
                  Kapcsolatfelvétel, jelentkezés kezelése, időpont- és csoportegyeztetés,
                  tájékoztatás az oktatásokról.
                </p>
              </div>

              <div>
                <strong>Jogalap</strong>
                <p>
                  Az érintett hozzájárulása, amelyet az űrlap elküldésével ad meg. Bizonyos
                  esetekben az adatkezelés szerződéskötést megelőző lépések megtételéhez is
                  szükséges lehet.
                </p>
              </div>

              <div>
                <strong>Megőrzési idő</strong>
                <p>
                  Az érdeklődéssel kapcsolatos adatokat az ügy lezárásától számított legfeljebb 12
                  hónapig őrizzük meg, kivéve, ha jogszabály vagy jogos érdek ennél hosszabb
                  megőrzést indokol.
                </p>
              </div>
            </div>

            <p>
              Az űrlapon megadott telefonszám opcionális. Az e-mail cím megadása azért szükséges,
              hogy válaszolni tudjunk a megkeresésre.
            </p>
          </article>

          <article className="privacy-panel">
            <div className="privacy-section-heading">
              <FileText size={32} aria-hidden="true" />
              <h2>3. Fénykép- és videófelvételek kezelése</h2>
            </div>

            <p>
              A foglalkozásokon, táborokban, bemutatókon, versenyeken és egyéb eseményeken fénykép-
              és videófelvétel készülhet. A felismerhető személyről, különösen gyermekről készült
              fénykép- vagy videófelvétel személyes adatnak minősül.
            </p>

            <div className="privacy-table">
              <div>
                <strong>Kezelt adatok</strong>
                <p>
                  A gyermekről, résztvevőről vagy kísérőről készült fénykép- és videófelvétel,
                  valamint az ezekhez kapcsolódó esemény, foglalkozás vagy program megnevezése.
                </p>
              </div>

              <div>
                <strong>Adatkezelés célja</strong>
                <p>
                  A foglalkozások, táborok, bemutatók és események dokumentálása, a jégiskola
                  életének bemutatása, valamint kommunikációs és promóciós tartalmak készítése.
                </p>
              </div>

              <div>
                <strong>Jogalap</strong>
                <p>
                  Az érintett, gyermek esetén a szülő / törvényes képviselő önkéntes, konkrét,
                  tájékozott és egyértelmű hozzájárulása.
                </p>
              </div>

              <div>
                <strong>Felhasználási felületek</strong>
                <p>
                  A hozzájárulás alapján a felvételek megjelenhetnek az Engi Korisuli weboldalán,
                  Facebook oldalán, Instagram oldalán, valamint egyéb hivatalos kommunikációs
                  felületein.
                </p>
              </div>

              <div>
                <strong>Megőrzési idő</strong>
                <p>
                  A felvételeket a hozzájárulás visszavonásáig, de legfeljebb addig kezeljük, amíg
                  azok kommunikációs vagy dokumentációs célból relevánsak. A hozzájárulás
                  visszavonása esetén a felvételt a saját felületeinkről ésszerű határidőn belül
                  eltávolítjuk.
                </p>
              </div>

              <div>
                <strong>Hozzájárulás visszavonása</strong>
                <p>
                  A hozzájárulás bármikor visszavonható az adatkezelő elérhetőségein. A visszavonás
                  nem érinti a korábbi, jogszerű adatkezelést.
                </p>
              </div>
            </div>

            <p>
              A hozzájárulás megtagadása vagy visszavonása nem jár hátránnyal, és nem érinti a
              gyermek foglalkozásokon, táborokon vagy eseményeken való részvételét.
            </p>

            <p>
              Amennyiben egy felvételen több gyermek vagy résztvevő is szerepel, a felvétel
              eltávolítását vagy további felhasználásának korlátozását az érintetti jogok gyakorlása
              körében lehet kérni az adatkezelő elérhetőségein.
            </p>
          </article>

          <article className="privacy-panel">
            <div className="privacy-section-heading">
              <Cookie size={32} aria-hidden="true" />
              <h2>4. Sütik és Google Analytics</h2>
            </div>

            <p>
              A weboldal sütiket használhat. A sütik olyan kis adatfájlok, amelyeket a böngésző
              tárolhat a látogató eszközén. A sütik egy része a weboldal működéséhez szükséges, más
              részük statisztikai célokat szolgál.
            </p>

            <div className="privacy-table">
              <div>
                <strong>Szükséges sütik</strong>
                <p>
                  Ezek a sütik a weboldal alapvető működéséhez szükségesek, például a
                  süti-hozzájárulási beállítás megjegyzéséhez. Ezek nem kapcsolhatók ki a weboldal
                  megfelelő működésének biztosítása miatt.
                </p>
              </div>

              <div>
                <strong>Statisztikai sütik</strong>
                <p>
                  A weboldal Google Analytics szolgáltatást használhat a látogatottság és az
                  oldalhasználat mérésére. Ezeket a sütiket kizárólag akkor kapcsoljuk be, ha a
                  látogató ehhez hozzájárul a süti bannerben.
                </p>
              </div>

              <div>
                <strong>Google Analytics célja</strong>
                <p>
                  Annak megértése, hogy a látogatók milyen oldalakat néznek meg, milyen eszközről
                  érkeznek, és hogyan használják a weboldalt. Ezek az adatok segítenek a weboldal
                  fejlesztésében.
                </p>
              </div>

              <div>
                <strong>Hozzájárulás visszavonása</strong>
                <p>
                  A látogató bármikor törölheti a böngészőjében tárolt süti beállításokat, vagy
                  módosíthatja böngészője süti beállításait. A hozzájárulás visszavonása nem érinti
                  a korábbi, jogszerű adatkezelést.
                </p>
              </div>
            </div>

            <p>
              A Google Analytics használata során a Google önálló szolgáltatóként adatokat kezelhet.
              A Google adatkezelési tájékoztatói a Google saját felületein érhetők el.
            </p>
          </article>

          <article className="privacy-panel">
            <div className="privacy-section-heading">
              <Mail size={32} aria-hidden="true" />
              <h2>5. Adattovábbítás és adatfeldolgozók</h2>
            </div>

            <p>
              A weboldal működtetése során igénybe vehetünk tárhelyszolgáltatót, e-mail
              szolgáltatót, valamint statisztikai szolgáltatót. Ezek a szolgáltatók az adatokhoz
              kizárólag a szolgáltatás nyújtásához szükséges mértékben férhetnek hozzá.
            </p>

            <div className="privacy-table">
              <div>
                <strong>Tárhely / weboldal üzemeltetés</strong>
                <p>Vercel Inc.</p>
              </div>

              <div>
                <strong>E-mail küldés</strong>
                <p>
                  Az űrlapon keresztül beküldött üzenetek e-mailben továbbításra kerülnek az
                  adatkezelő megadott e-mail címére.
                </p>
              </div>

              <div>
                <strong>Statisztika</strong>
                <p>Google Analytics, kizárólag hozzájárulás esetén.</p>
              </div>

              <div>
                <strong>Közösségi média felületek</strong>
                <p>
                  Hozzájárulás alapján közzétett fényképek és videók megjelenhetnek az Engi Korisuli
                  Facebook és Instagram oldalán. Ezeken a felületeken a Meta Platforms saját
                  adatkezelési feltételei is irányadók lehetnek.
                </p>
              </div>
            </div>
          </article>

          <article className="privacy-panel">
            <div className="privacy-section-heading">
              <ShieldCheck size={32} aria-hidden="true" />
              <h2>6. Az érintettek jogai</h2>
            </div>

            <p>
              A látogatók, érdeklődők, résztvevők, valamint gyermek esetén a szülők / törvényes
              képviselők jogosultak tájékoztatást kérni személyes adataik kezeléséről, kérhetik azok
              helyesbítését, törlését, kezelésének korlátozását, valamint bizonyos esetekben
              tiltakozhatnak az adatkezelés ellen.
            </p>

            <ul className="privacy-rights-list">
              <li>hozzáférés a kezelt személyes adatokhoz,</li>
              <li>pontatlan adatok helyesbítése,</li>
              <li>adatok törlésének kérése,</li>
              <li>adatkezelés korlátozásának kérése,</li>
              <li>hozzájárulás visszavonása,</li>
              <li>panasz benyújtása felügyeleti hatósághoz.</li>
            </ul>

            <p>
              Adatvédelmi kérés esetén az alábbi e-mail címen lehet kapcsolatba lépni velünk:
              <br />
              <a href="mailto:engiklara@gmail.com">engiklara@gmail.com</a>
            </p>
          </article>

          <article className="privacy-panel">
            <div className="privacy-section-heading">
              <FileText size={32} aria-hidden="true" />
              <h2>7. Panasztételi lehetőség</h2>
            </div>

            <p>
              Amennyiben úgy érzed, hogy személyes adataid kezelése nem megfelelő, elsőként kérjük,
              vedd fel velünk a kapcsolatot. Emellett panasszal fordulhatsz a Nemzeti Adatvédelmi és
              Információszabadság Hatósághoz is.
            </p>

            <div className="privacy-info-box">
              <p>
                <strong>Hatóság:</strong> Nemzeti Adatvédelmi és Információszabadság Hatóság
              </p>
              <p>
                <strong>Weboldal:</strong>{" "}
                <a href="https://www.naih.hu" target="_blank" rel="noreferrer">
                  www.naih.hu
                </a>
              </p>
              <p>
                <strong>Cím:</strong> 1055 Budapest, Falk Miksa utca 9-11.
              </p>
            </div>
          </article>

          <article className="privacy-panel">
            <div className="privacy-section-heading">
              <FileText size={32} aria-hidden="true" />
              <h2>8. A tájékoztató módosítása</h2>
            </div>

            <p>
              Fenntartjuk a jogot, hogy jelen adatvédelmi tájékoztatót szükség esetén módosítsuk. Az
              aktuális változat mindig ezen az oldalon érhető el.
            </p>

            <p>
              <strong>Hatályos:</strong> 2026. július
            </p>
          </article>

          <div className="privacy-back-box">
            <h2>Kérdésed van az adatkezeléssel kapcsolatban?</h2>
            <p>
              Írj nekünk e-mailt, és válaszolunk az adatkezeléssel vagy jelentkezéssel kapcsolatos
              kérdésekre.
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
