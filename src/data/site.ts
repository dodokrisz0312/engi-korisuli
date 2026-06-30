import { CalendarDays, Heart, MapPin, Medal, Snowflake, UsersRound } from "lucide-react";
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

export const SnowIcon = Snowflake;
export const MedalIcon = Medal;
