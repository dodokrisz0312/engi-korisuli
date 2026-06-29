# Engi Korisuli Next.js landing page

Next.js + TypeScript alapú, Vercelre előkészített reszponzív kezdőoldal az Engi Korisuli számára.

## Indítás

```bash
npm install
npm run dev
```

Fejlesztői URL:

```bash
http://localhost:3000
```

## Build / Vercel

```bash
npm run build
npm run start
```

A projekt Vercelen külön konfiguráció nélkül deployolható.

## v11 módosítások

- A desktop content és header szélessége `80vw`, max-width nélkül.
- A jégpálya breakpointokra lett bontva:
  - `1600px+`: `wideDesktop`
  - `1100px+`: `desktop`
  - `900px+`: `smallDesktop`
  - `600px+`: `tablet`
  - `600px alatt`: `mobile`
- `1600px+` nézetben a programkártyák `800px × 400px` méretűek.
- `1100px+` nézetben a programkártyák `600px × 300px` méretűek, arányosan kisebb betűkkel és belső elemekkel.
- Desktop/tablet/small desktop nézetben egy összefüggő, nagy jégpálya path van.
- Mobil nézetben két külön jégpálya szakasz maradt.
- A footer pingvinje lecserélve az új feltöltött grafikára: `public/images/penguin-footer.png`.
- A CSS továbbra is bontott struktúrában van: `src/styles/components/...` és `src/styles/pages/...`.

## Hol módosítsd a jégpálya alakját?

Fájl:

```txt
src/components/IceMap.tsx
```

Keresd ezt:

```ts
routeVariants.wideDesktop
routeVariants.desktop
routeVariants.smallDesktop
routeVariants.tablet
routeVariants.mobile
```

Egy path például:

```ts
d: "M680 200 C980 190 1250 280 1250 360 C1300 540 -700 650 560 1000 C1600 1300 1000 1300 680 1400"
```

Jelentés:

```txt
M680 200
```

Ez a kezdőpont. Az első szám az X, a második az Y.

```txt
C980 190 1250 280 1250 360
```

Ez egy íves szakasz. A `C` utáni első négy szám kontrollpont, az utolsó két szám pedig az adott szakasz végpontja.

Ha kevesebb kanyart szeretnél, kevesebb `C ... ... ... ... ... ...` blokk kell. Ha csak finomítanád az alakot, a `C` utáni kontrollpontokat módosítsd.

## Hol módosítsd a kártyák méretét és helyét?

Fájl:

```txt
src/styles/components/IceMap.css
```

A kártyák helye:

```css
.card-1 { left: 0; top: 90px; }
.card-2 { right: 0; top: 620px; }
.card-3 { left: 0; top: 1280px; }
```

A kártyák mérete breakpointonként ugyanebben a fájlban található:

```css
@media (min-width: 1100px) {
  .program-card {
    width: 600px;
    height: 300px;
  }
}

@media (min-width: 1600px) {
  .program-card {
    width: 800px;
    height: 400px;
  }
}
```

## Fontos fájlok

- `src/components/IceMap.tsx` – jégpálya SVG path-ok és programkártyák
- `src/styles/components/IceMap.css` – jégpálya layout, kártyapozíciók, pingvinpozíciók, path vizuális stílus
- `src/styles/globals.css` – importálja a bontott style fájlokat
- `src/components/Header.tsx` – aktív menüpontos reszponzív menüsor
- `src/components/Hero.tsx` – kezdő hero szekció
- `src/components/Sections.tsx` – statisztika, galéria, oktatók, footer
- `src/components/Snowflakes.tsx` – contenttel együtt görgő dekor hópelyhek
- `src/data/site.ts` – menüpontok, programok, statisztikák és oktatók adatai
- `public/images/penguin-wave.png`, `public/images/penguin-skate.png`, `public/images/penguin-footer.png` – pingvin grafikák

## v12 javítás

- Az `IceMap` most kliens oldalon választja ki az aktív SVG útvonalat `window.innerWidth` alapján, ezért a 600 / 900 / 1100 / 1600px breakpointoknál ténylegesen más path renderelődik.
- A route-ok továbbra is itt szerkeszthetők: `src/components/IceMap.tsx` → `routeVariants`.
- A kártyák méretezése és pozíciója route-osztályok alapján van bontva itt: `src/styles/components/IceMap.css`.
- A desktop content és header szélessége továbbra is fixen `80vw`, max-width nélkül.
- A projekt `npm run build` paranccsal sikeresen buildel.
