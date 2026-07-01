import {
  Activity,
  Award,
  Brain,
  CalendarDays,
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
import tsmtHeroImage from "@/assets/tsmt.jpg";
import tsmtTeamImage from "@/assets/tsmt.png";
import tsmtJoinImage from "@/assets/gallery/korisuli/oktatasaink_8.jpg";
import teacherViktorImage from "@/assets/teachers/devenyi_viktor.jpg";
import teacherKlariImage from "@/assets/teachers/engi_klari_1.jpg";
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
  { value: "3", label: "helyszín", icon: MapPin },
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
  images: {
    hero: tsmtHeroImage,
    team: tsmtTeamImage,
    join: tsmtJoinImage,
  },
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
      text: "Pólus Center - Fitness Five & Gym",
      note: "Pest",
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

export const SnowIcon = Snowflake;
export const MedalIcon = Medal;
