import {
  Activity,
  Award,
  Brain,
  CalendarDays,
  Clock,
  Dumbbell,
  Eye,
  GraduationCap,
  Heart,
  HeartPulse,
  MapPin,
  Medal,
  Megaphone,
  Music2,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  UsersRound,
  Zap,
  Facebook,
  Instagram,
  Mail,
  Phone,
  TramFront,
} from "lucide-react";
import type { StaticImageData } from "next/image";
import galleryImage1 from "@/assets/gallery/korisuli/Polusjeg.jpg";
import galleryImage2 from "@/assets/gallery/korisuli/Polusjeg-4.jpg";
import galleryImage3 from "@/assets/gallery/korisuli/Polusjeg-7.jpg";
import galleryImage4 from "@/assets/gallery/korisuli/Polusjeg-10.jpg";
import galleryImage5 from "@/assets/gallery/korisuli/Polusjeg-14.jpg";
import galleryImage6 from "@/assets/gallery/korisuli/Polusjeg-20.jpg";
import galleryImage7 from "@/assets/gallery/korisuli/oktatasaink_1.jpg";
import galleryImage8 from "@/assets/gallery/korisuli/oktatasaink_6.jpg";
import teacherViktorImage from "@/assets/teachers/devenyi_viktor.jpg";
import teacherKlariImage from "@/assets/teachers/engi_klari_1.jpg";
import teacherHaszonitsZitaImage from "@/assets/teachers/haszonits_kálmán_zita.jpg";
import teacherKerekesKrisztaImage from "@/assets/teachers/kerekes_kriszta.jpg";
import teacherMadarLiliImage from "@/assets/teachers/madar_lili.jpg";
import teacherNemethSzilviaImage from "@/assets/teachers/nemeth_szilvia.jpg";
import teacherSzakalKatalinImage from "@/assets/teachers/szakal_katalin.jpg";
import teacherDominikaImage from "@/assets/teachers/toth_dominika.jpg";

export type GalleryItem = {
  label: string;
  image: StaticImageData;
  className: string;
};

export type Teacher = {
  name: string;
  role: string;
  text: string;
  image: StaticImageData;
};

export const navItems = [
  { label: "Kezdőlap", href: "/" },
  { label: "Korisuli", href: "/korisuli" },
  { label: "TSMT", href: "/tsmt" },
  { label: "Hokisuli", href: "/hokisuli" },
  { label: "Oktatók", href: "/oktatok" },
  { label: "Galéria", href: "/galeria" },
  { label: "Elérhetőségek", href: "/elerhetosegek" },
];

export const programs = [
  {
    title: "Korisuli",
    href: "/korisuli",
    description: "Játékos korcsolyaoktatás minden szinten.",
    detail: "Biztonságos első lépések, stabil alapok és sok-sok sikerélmény a jégen.",
    tone: "teal",
    icon: "⛸️",
    imageClass: "skater-one",
  },
  {
    title: "TSMT",
    href: "/tsmt",
    description: "Mozgásfejlesztés és neuro-motoros tréning.",
    detail: "Játékos, célzott feladatok a mozgáskoordináció és figyelem támogatására.",
    tone: "orange",
    icon: "🧠",
    imageClass: "tsmt",
  },
  {
    title: "Hokisuli",
    href: "/hokisuli",
    description: "Alapoktól a csapatjátékig, jégkorong mindenkinek.",
    detail: "Ügyességi feladatok, botkezelés és csapatélmény kezdő szinttől.",
    tone: "blue",
    icon: "🏒",
    imageClass: "hockey",
  },
];

export const stats = [
  { value: "30", label: "év tapasztalat", icon: CalendarDays },
  { value: "1000+", label: "boldog gyermek", icon: UsersRound },
  { value: "2", label: "helyszín", icon: MapPin },
  { value: "100%", label: "Elégedettség", icon: Heart },
];

export const galleryItems: GalleryItem[] = [
  { label: "Első lépések a jégen", image: galleryImage1, className: "tile-1" },
  { label: "Kis csapat a pályán", image: galleryImage2, className: "tile-2" },
  { label: "Ügyességi feladatok", image: galleryImage3, className: "tile-3" },
  { label: "Játék és fejlődés", image: galleryImage4, className: "tile-4" },
  { label: "Korisuli pillanat", image: galleryImage5, className: "tile-5" },
  { label: "Gyakorlás a jégen", image: galleryImage6, className: "tile-6" },
  { label: "Oktatás közben", image: galleryImage7, className: "tile-7" },
  { label: "Vidám jégóra", image: galleryImage8, className: "tile-8" },
];

export const teachers: Teacher[] = [
  {
    name: "Klári",
    role: "Vezetőedző, alapító tag",
    text: "Jégiskola vezetője, minden korosztállyal foglalkozik, de legtöbbet a kezdőkkel.",
    image: teacherKlariImage,
  },
  {
    name: "Viktor",
    role: "Edző",
    text: "Egyetlen férfi kollégánk, aki hosszú évek óta támogatja munkánkat Középső és nagy csoportokkal foglalkozik.",
    image: teacherViktorImage,
  },
  {
    name: "Dominika",
    role: "Adminisztrátor, segédedző",
    text: "Gyerekkora óta velünk van, eleinte résztvevőként, ma már oktatóként és adminisztrátorként is segít.",
    image: teacherDominikaImage,
  },
];

export const korisuliPage = {
  founders: [
    {
      name: "Engi Klári és Tóth Attila",
      points: [
        "Nyolcszoros jégtánc magyar bajnokok",
        "Európa- és Világbajnokság IV. helyezés",
        "Háromszoros olimpikonok",
      ],
    },
    {
      name: "Száraz András",
      points: [
        "Többszörös magyar bajnok",
        "Mesteredző",
        "Napjainkban Svédországban segíti a versenyzők felkészülését",
      ],
    },
  ],
  timeline: [
    {
      year: "1977",
      icon: Sparkles,
      text: "Az Engi-Tóth jégtánckettős aktív amatőr pályafutása 1977 februárban kezdődött.",
    },
    {
      year: "1992",
      icon: Award,
      text: "Albertville-i Téli Olimpiai Játékokkal fejeződött be. Egy év profi pályafutás, majd a Profi Világbajnokság 3. helyezés.",
    },
    {
      year: "1995",
      icon: Users,
      text: "Gyermekvállalás után, felmérve az igényeket, megalapítottuk közös jégiskolánkat.",
    },
    {
      year: "1996",
      icon: GraduationCap,
      text: "Újpesten kezdtük az utánpótlás nevelést, majd a Pólus Centerben lettünk az első korcsolyaiskola.",
    },
    {
      year: "Napjaink",
      icon: Star,
      text: "Korábbi versenyzők és edzőtársak segítségével, ösztönnel és szakmai tudással fejlődünk.",
    },
  ],
  goals: [
    { icon: Heart, title: "Sport és mozgás iránti szeretet kifejlesztése" },
    { icon: Eye, title: "Térlátás elsajátítása" },
    { icon: Sparkles, title: "Korcsolya alapjainak elsajátítása" },
    { icon: Target, title: "Figyelem és az összpontosítás gyakorlása" },
    { icon: Brain, title: "Mozgáskoordináció javítása" },
    { icon: GraduationCap, title: "Iskolába történő beilleszkedés megkönnyítése" },
    { icon: ShieldCheck, title: "Egyensúlyérzék fejlesztése" },
    { icon: Trophy, title: "További lehetőségek biztosítása a versenysport irányába" },
  ],
  infoItems: [
    {
      icon: CalendarDays,
      text: "Az oktatások korcsolyatudásnak megfelelően, csoportokban történnek. A szezon általában szeptember közepétől június közepéig tart.",
    },
    {
      icon: Sparkles,
      text: "Nyári programunk a jégkorcsolya tábor, melyre mindenkit szeretettel várunk. Célunk, hogy a gyerekek hasznosan és jó társaságban töltsék az időt.",
    },
    {
      icon: ShieldCheck,
      text: "Teljesen kezdőket és haladókat egyaránt szeretettel várunk. Kérjük, kényelmes ruhában és saját korcsolyával érkezzetek, ha van.",
    },
    {
      icon: Award,
      text: "Kesztyű használata kötelező, valamint ajánlott a vízhatlan ruha.",
    },
    {
      icon: Megaphone,
      text: "Bejelentkezni javasolt, ősszel és tavasszal is. Bármelyik időpont látogatható, a csoportokhoz folyamatosan lehet csatlakozni.",
    },
  ],
};

export const tsmtPage = {
  benefits: [
    {
      icon: Brain,
      title: "Testtudat fejlesztése",
      text: "Segítjük, hogy a gyerekek jobban érzékeljék saját testük mozgását, helyzetét és működését.",
    },
    {
      icon: ShieldCheck,
      title: "Egyensúly és stabilitás",
      text: "A jégen és szárazon végzett mozgásformák kiemelten fejlesztik az egyensúlyérzéket.",
    },
    {
      icon: Eye,
      title: "Térlátás és tájékozódás",
      text: "A gyerekek megtanulnak biztonságosan mozogni térben, irányt váltani és reagálni a környezetre.",
    },
    {
      icon: Music2,
      title: "Ritmusérzék",
      text: "A ritmusos mozgások segítik a koordináltabb, magabiztosabb mozgás kialakulását.",
    },
    {
      icon: Target,
      title: "Figyelem és koncentráció",
      text: "A feladatok követése, sorrendisége és ismétlése támogatja a figyelmi működéseket.",
    },
    {
      icon: HeartPulse,
      title: "Egészséges izomfejlődés",
      text: "Célunk a helyes testtartás, az izomzat harmonikus fejlődése és a későbbi problémák megelőzése.",
    },
  ],
  classes: [
    {
      icon: Sparkles,
      title: "Korcsolyaoktatás",
      text: "A korcsolyázás fejleszti a koordinációt, az egyensúlyt, a térlátást és komoly testtudatot ad a gyermekeknek.",
    },
    {
      icon: Activity,
      title: "Mozgásjavító torna / TSMT",
      text: "Játékos, célzott gyakorlatokon keresztül támogatjuk a mozgáskoordináció és az idegrendszeri érettség fejlődését.",
    },
    {
      icon: Music2,
      title: "Balett alapok",
      text: "A balett segíti a testtartást, a ritmusérzéket, a kontrollált mozgást és a finom koordinációt.",
    },
    {
      icon: ShieldCheck,
      title: "Önvédelmi formagyakorlatok",
      text: "A gyerekek játékos keretek között tanulnak testkontrollt, figyelmet, reakciót és magabiztos mozgást.",
    },
  ],
  expertTeam: [
    "Korcsolyaoktató",
    "TSMT torna szakember",
    "Balettoktató",
    "Mozgásfejlesztésben jártas oktatói csapat",
  ],
  keyFacts: [
    "Kis csoportos foglalkozások, jellemzően 10-15 fővel.",
    "Elsősorban 3-5 éves kor közötti gyerekek számára ajánlott.",
    "A fejlesztés szárazon és jégen is történik.",
    "A cél nem versenyhelyzet, hanem játékos, biztonságos fejlődés.",
  ],
  locationCards: [
    {
      icon: MapPin,
      title: "Helyszín",
      text: "Kikötő Ifjúsági Közösségi Tér",
      note: "1156 Budapest, Száraznád utca 5.",
    },
    {
      icon: CalendarDays,
      title: "Időpont",
      text: "Csütörtök",
      note: "17:15-18:00",
    },
    {
      icon: Users,
      title: "Csoportlétszám",
      text: "Kis csoportos foglalkozások",
      note: "10-15 fő",
    },
  ],
};

export const hokisuliPage = {
  milestones: [
    {
      year: "1912",
      icon: Users,
      title: "RTK megalakulása",
      text: "A Rákosmenti Testedző Kör azzal a céllal alakult, hogy a fiatalok körében megszerettesse a mozgás jelentőségét.",
    },
    {
      year: "2019",
      icon: ShieldCheck,
      title: "Jégkorong szakosztály",
      text: "A jégkorong szakosztály 2019 márciusában alakult, ekkor kértük felvételünket a Magyar Jégkorong Szövetség tagjai közé.",
    },
    {
      year: "2019/2020",
      icon: Trophy,
      title: "Első teljes szezon",
      text: "Az első teljes szezonban az U8 piros bajnokságba neveztünk be, és célként megjelent az U10 korosztály kipróbálása is.",
    },
    {
      year: "Most",
      icon: Sparkles,
      title: "Folyamatos fejlődés",
      text: "Jelenleg 13 igazolt játékosunk van, és folyamatos az új gyerekek bevonása, felvétele.",
    },
  ],

  goalCards: [
    {
      icon: Sparkles,
      title: "Erős korcsolyaalapok",
      text: "A fő hangsúlyt kezdetben az alapos korcsolyatudásra tesszük, mert ez a későbbi jó játék alapja.",
    },
    {
      icon: Target,
      title: "Hoki alapok játékosan",
      text: "A gyerekek fokozatosan ismerkednek meg az ütőkezeléssel, szabályokkal, hokitechnikai feladatokkal.",
    },
    {
      icon: Trophy,
      title: "Tornák és meccshelyzetek",
      text: "Célunk az U8 és U10 korosztályos tornákon való részvétel, barátságos mérkőzésekkel és versenyhelyzetekkel.",
    },
    {
      icon: Zap,
      title: "Továbblépési lehetőség",
      text: "A gyerekek számára lehetőséget biztosítunk nagyobb egyesületekbe való bekerüléshez is.",
    },
  ],
  coaches: [
    {
      name: "Haszonits-Kálmán Zita",
      title: "Vezetőedző",
      image: teacherKlariImage,
      badges: [
        "A történelmi első magyar női hokiválogatott tagja",
        "Divízió II. női Világbajnokság bronzérem",
        "Jégkorong B licensz edző",
      ],
      tasks: [
        "jégkorong megismertetése",
        "hokitechnikai feladatok vezénylése",
        "szabályok ismertetése és betanítása",
        "versenyeztetés",
        "száraz edzések lebonyolítása",
      ],
    },
    {
      name: "Engi Klára",
      title: "Koritechnikai edző és csapatmenedzser",
      image: teacherKlariImage,
      badges: [
        "Európa- és Világbajnoki 4. helyezett jégtáncos",
        "25 éve foglalkozik kisgyermekek korcsolyaoktatásával",
        "Jégkorong B licensz edző",
      ],
      tasks: [
        "korcsolyatechnika fejlesztése",
        "segédedzői feladatok",
        "toborzás",
        "adminisztráció",
        "kapcsolattartás a szülők és a szövetség felé",
      ],
    },
  ],

  trainingCards: [
    {
      icon: CalendarDays,
      title: "Szezon",
      text: "Szeptembertől június közepéig tartunk edzéseket. A felkészülést korábban augusztus végi intenzív edzőtáborral kezdtük.",
    },
    {
      icon: Sparkles,
      title: "Heti 3 jégedzés",
      text: "A program 2 korcsolya- és hokitechnikai edzést, valamint 1 kifejezett hoki szituációs és meccshelyzetes edzést tartalmaz.",
    },
    {
      icon: Trophy,
      title: "Tornák",
      text: "A szezon második felében korosztályos tornákon való részvételt tervezünk, havonta akár két tornával.",
    },
    {
      icon: Dumbbell,
      title: "Száraz edzés",
      text: "A száraz edzés bevezetés alatt van, elsősorban táborok alkalmával kerül be az edzésprogramba.",
    },
  ],

  benefits: [
    {
      icon: ShieldCheck,
      title: "Biztonságosabb mozgás a jégen",
      text: "Az erős korcsolyaalapok segítik, hogy a gyerekek magabiztosabban mozogjanak és jobban reagáljanak helyzetekre.",
    },
    {
      icon: Zap,
      title: "Gyors reakció és döntés",
      text: "A hoki játékossága fejleszti a figyelmet, helyzetfelismerést és a gyors döntéshozatalt.",
    },
    {
      icon: Users,
      title: "Csapatszellem",
      text: "A gyerekek megtapasztalják az együttműködés, egymásra figyelés és közös siker élményét.",
    },
    {
      icon: Target,
      title: "Fókusz és kitartás",
      text: "Az edzések játékosan, de következetesen építik a koncentrációt, szabálykövetést és sportos hozzáállást.",
    },
  ],

  locationCards: [
    {
      icon: MapPin,
      title: "Jégpálya",
      text: "Vasas Jégcentrum",
      note: "1048 Budapest, Homoktövis utca 1.",
    },
    {
      icon: Clock,
      title: "Edzésrend",
      text: "Heti 3 jégedzés",
      note: "szezonban",
    },
    {
      icon: Users,
      title: "Játékosok",
      text: "13 igazolt játékos",
      note: "folyamatos felvétel",
    },
  ],
};

export const SnowIcon = Snowflake;
export const MedalIcon = Medal;

export const oktatokPage = {
  stats: [
    {
      icon: Trophy,
      value: "8x",
      label: "magyar bajnoki háttér",
    },
    {
      icon: Users,
      value: "8",
      label: "oktató és segítő",
    },
    {
      icon: Heart,
      value: "kezdőtől",
      label: "haladó csoportig",
    },
  ],

  values: [
    {
      icon: Heart,
      title: "Szeretetteljes légkör",
      text: "Fontos számunkra, hogy a gyerekek biztonságban, jókedvűen és bizalommal tanuljanak.",
    },
    {
      icon: ShieldCheck,
      title: "Biztonságos fejlődés",
      text: "Lépésről lépésre építjük fel a korcsolyatudást, életkorhoz és tudásszinthez igazítva.",
    },
    {
      icon: Sparkles,
      title: "Játékos tanulás",
      text: "A technikai alapokat sok játékkal, sikerélménnyel és motiváló feladatokkal tanítjuk.",
    },
    {
      icon: Brain,
      title: "Szakmai háttér",
      text: "Műkorcsolya, jégtánc, hoki, TSMT és pedagógiai tapasztalat is erősíti a csapatunkat.",
    },
  ],

  instructors: [
    {
      name: "Engi Klári",
      role: "Vezetőedző, alapító tag",
      focus: "Jégiskola vezetője, minden korosztállyal foglalkozik, de legtöbbet a kezdőkkel.",
      image: teacherKlariImage,
      featured: true,
      highlights: ["8x magyar bajnok", "EB és VB IV. helyezett", "3x olimpikon jégtáncos"],
      quote:
        "A gyerekekkel való foglalkozás, a bizalmuk elnyerése örömet okoz, feltölt, és ha ezzel Nekik is átadhatok valami hasznosat, akkor ez a legjobb dolog a világon mindenki számára!",
    },
    {
      name: "Madárné Kerekes Krisztina",
      role: "Szakedző, gyógypedagógus",
      focus:
        "A jégiskola kezdeteitől van a csapattal. TSMT pedagógusként sokat tanulunk tőle mindannyian.",
      image: teacherKerekesKrisztaImage,
      highlights: [
        "EB és VB jégtáncos résztvevő",
        "TSMT pedagógus",
        "Kezdő és kiscsoportok specialistája",
      ],
    },
    {
      name: "Dévényi Viktor",
      role: "Edző",
      focus:
        "Egyetlen férfi kollégánk, aki hosszú évek óta támogatja munkánkat. Középső és nagy csoportokkal foglalkozik.",
      image: teacherViktorImage,
      highlights: ["Középső csoportok", "Nagy csoportok", "Sokéves oktatói háttér"],
    },
    {
      name: "Szakál Katalin",
      role: "Szakedző",
      focus:
        "Kati 28 éve foglalkozik műkorcsolyával. Célja a technikai korcsolyázás tanítása mellett a sport iránti szeretet népszerűsítése.",
      image: teacherSzakalKatalinImage,
      highlights: ["28 év tapasztalat", "Válogatott versenyzői múlt", "Revütáncos háttér"],
    },
    {
      name: "Dr. Németh Szilvia",
      role: "Edző",
      focus:
        "Műkorcsolya, jégtánc és szinkronkorcsolya háttere miatt gyakorlottan tanítja a gyerekeket, szeretettel figyel rájuk immár 10 éve a korisuliban.",
      image: teacherNemethSzilviaImage,
      highlights: ["Műkorcsolya háttér", "Jégtánc", "Szinkronkorcsolya", "10 év a korisuliban"],
    },
    {
      name: "Haszonits-Kálmán Zita",
      role: "Jégkorong sportedző",
      focus:
        "Hokis múltja miatt jó átmenetet biztosít a műkorcsolya és hoki között. Főként a középső csoportokkal foglalkozik.",
      image: teacherHaszonitsZitaImage,
      highlights: ["Jégkorong háttér", "Középső csoportok", "Műkori és hoki közötti átmenet"],
    },
    {
      name: "Madár Lili",
      role: "Segédedző",
      focus:
        "Gyerekkora óta velünk van, eleinte résztvevőként, ma már oktatóként. Jó érzéke van a gyerekekhez, melyben pszichológiai tanulmányai is segítik.",
      image: teacherMadarLiliImage,
      highlights: ["Kis csoportok", "Középső csoportok", "Pszichológiai tanulmányok"],
    },
    {
      name: "Tóth Dominika",
      role: "Adminisztrátor, segédedző",
      focus:
        "Gyerekkora óta velünk van, eleinte résztvevőként, ma már oktatóként és adminisztrátorként is segít.",
      image: teacherDominikaImage,
      highlights: ["Adminisztráció", "Segédedzői feladatok", "Szervezés és napi rutin támogatása"],
    },
  ],
};

type PublicGalleryImage = {
  src: string;
  alt: string;
};

const galleryPath = (folder: string, file: string) => `/images/gallery/${folder}/${file}`;

const makeGalleryImages = (folder: string, files: string[], label: string): PublicGalleryImage[] =>
  files.map((file, index) => ({
    src: galleryPath(folder, file),
    alt: `${label} ${index + 1}. kép`,
  }));

const paddedGalleryFiles = (prefix: string, count: number) =>
  Array.from(
    { length: count },
    (_, index) => `${prefix}_${String(index + 1).padStart(2, "0")}.JPG`
  );

const korisuliFiles = [
  "Polusjeg.jpg",
  ...[
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28,
    29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  ].map((index) => `Polusjeg-${index}.jpg`),
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 17].map((index) => `oktatasaink_${index}.jpg`),
  ...[11, 12, 14, 15, 16].map((index) => `oktatasaink_${index}.JPG`),
];

const hokisuliFiles = [
  ...[1, 2, 3].map((index) => `Hoki_${index}.JPEG`),
  ...Array.from({ length: 13 }, (_, index) => `Hoki_${index + 4}.JPG`),
];

const mozgaskoordinacioFiles = [
  "mozgaskoordinacio.jpg",
  ...Array.from({ length: 17 }, (_, index) => `mozgaskoordinacio_${index + 2}.jpg`),
];

const nyariTaborFiles = ["2018_koritabor_fokep.png", ...paddedGalleryFiles("2018_koritabor", 31)];

const farsangFiles = [
  ...[1, 2].map((index) => `Farsang_${index}.JPEG`),
  ...Array.from({ length: 38 }, (_, index) => `Farsang_${index + 3}.JPG`),
  "Farsang_41.png",
];

const mikulasFiles = ["2018_mikulas_fokep.png", ...paddedGalleryFiles("2018_mikulas", 5)];

export const galleryPage = {
  folders: [
    {
      title: "Korisuli",
      slug: "korisuli",
      description:
        "Korcsolya óráinkon igyekszünk a gyermekek fejlődését hatékony és játékos feladatokkal elérni.",
      coverImage: galleryPath("korisuli", korisuliFiles[0]),
      images: makeGalleryImages("korisuli", korisuliFiles, "Korisuli"),
    },
    {
      title: "Hokisuli",
      slug: "hokisuli",
      description:
        "RTK Vasló Hokicsapatunk keményen edz, hogy bizonyos nagy alkalmakkor megcsillogtathassák a tudásukat a hokimeccseken.",
      coverImage: galleryPath("hokisuli", hokisuliFiles[0]),
      images: makeGalleryImages("hokisuli", hokisuliFiles, "Hokisuli"),
    },
    {
      title: "Mozgáskoordinációs Foglalkozások",
      slug: "mozgasfejlesztes",
      description:
        "Mozgásjavító (TSMT) torna foglalkozásokkal segítjük fejleszteni a gyerekek izomzatát, egyensúly- és ritmusérzékét, mindezt a testtudat összehangolásával.",
      coverImage: galleryPath("mozgaskoordinacio", mozgaskoordinacioFiles[0]),
      images: makeGalleryImages("mozgaskoordinacio", mozgaskoordinacioFiles, "Mozgáskoordináció"),
    },
    {
      title: "Nyári Tábor",
      slug: "nyari-tabor",
      description:
        "Minden nyáron megrendezzük a klasszikus korcsolya és mozgáskoordinációs torna táborunkat, hogy a nyári szünet alatt is mozgásban maradjunk!",
      coverImage: galleryPath("nyari_tabor", nyariTaborFiles[0]),
      images: makeGalleryImages("nyari_tabor", nyariTaborFiles, "Nyári tábor"),
    },
    {
      title: "Farsang & Halloween",
      slug: "farsang-halloween",
      description:
        "Minden évben rendezünk a Farsangi, illetve a Halloween-i ünnepekkor beöltözős mulatságot a jégen a gyerekkel, amikor rendkívüli oktatást tartunk ügyességi sorversenyekkel.",
      coverImage: galleryPath("farsang", farsangFiles[0]),
      images: makeGalleryImages("farsang", farsangFiles, "Farsang és Halloween"),
    },
    {
      title: "Mikulás",
      slug: "mikulas",
      description:
        "Minden évben meglátogat minket is a Mikulás a jégen. Ilyenkor a Mikulás minden csoportnál megnézi az apróságokat és ők bemutathatják mit tanultak az elmúlt hetek/hónapok alatt.",
      coverImage: galleryPath("mikulas", mikulasFiles[0]),
      images: makeGalleryImages("mikulas", mikulasFiles, "Mikulás"),
    },
  ],
};

export const contactPage = {
  contact: {
    email: "engiklara@gmail.com",
    phone: "06-70-978-3703",
    phoneHref: "tel:+36709783703",
    facebook: "https://www.facebook.com/engikorisuli/",
    instagram: "https://www.instagram.com/engikorisuli/",
  },

  programs: [
    {
      value: "korcsolya",
      label: "Korisuli",
    },
    {
      value: "hoki",
      label: "Hokisuli",
    },
    {
      value: "tsmt",
      label: "TSMT",
    },
  ],

  locations: [
    {
      title: "Korisuli és Hokisuli",
      address: "1048 Budapest, Homoktövis utca 1.",
      place: "Vasas Jégcentrum",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Vasas+J%C3%A9gcentrum+1048+Budapest+Homokt%C3%B6vis+utca+1",
      embedUrl:
        "https://www.google.com/maps?q=Vasas%20J%C3%A9gcentrum%201048%20Budapest%20Homokt%C3%B6vis%20utca%201&output=embed",
      icon: MapPin,
      tips: [
        "Autóval érkezve a Vasas Jégcentrum környékén parkolási lehetőség elérhető",
        "14-es villamossal a Megyeri út megállóig (végállomás) érdemes menni, innen pár perc séta",
        "122-es, 296-os vagy 30-as busszal a Homoktövis utca megállóig lehet menni, innen pár perc séta",
      ],
    },
    {
      title: "TSMT / mozgáskoordináció",
      address: "1156 Budapest, Száraznád utca 5.",
      place: "Kikötő Ifjúsági Közösségi Tér",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Kik%C3%B6t%C5%91+Ifj%C3%BAs%C3%A1gi+K%C3%B6z%C3%B6ss%C3%A9gi+T%C3%A9r+1156+Budapest+Sz%C3%A1razn%C3%A1d+utca+5",
      embedUrl:
        "https://www.google.com/maps?q=Kik%C3%B6t%C5%91%20Ifj%C3%BAs%C3%A1gi%20K%C3%B6z%C3%B6ss%C3%A9gi%20T%C3%A9r%201156%20Budapest%20Sz%C3%A1razn%C3%A1d%20utca%205&output=embed",
      icon: MapPin,
      tips: [
        "Autóval érkezve a Száraznád utca környékén parkolási lehetőség elérhető",
        "7-es, 7E, 8E, 133E vagy 196A busszal a Vásárcsarnok megállóig érdemes menni, innen pár perc séta",
        "69-es villamossal a Vásárcsarnok megállóig lehet menni, innen pár perc séta",
      ],
    },
  ],

  socialCards: [
    {
      title: "Facebook",
      text: "Aktuális hírek, események és képek a jégiskola életéből.",
      href: "https://www.facebook.com/engikorisuli/",
      icon: Facebook,
    },
    {
      title: "Instagram",
      text: "Pillanatok a jégről, táborokból és foglalkozásainkról.",
      href: "https://www.instagram.com/engikorisuli/",
      icon: Instagram,
    },
    {
      title: "E-mail",
      text: "Írj nekünk közvetlenül jelentkezéssel vagy kérdéssel kapcsolatban.",
      href: "mailto:engiklara@gmail.com",
      icon: Mail,
    },
    {
      title: "Telefon",
      text: "Sürgősebb kérdés esetén telefonon is elérhetőek vagyunk.",
      href: "tel:+36709783703",
      icon: Phone,
    },
  ],
};
