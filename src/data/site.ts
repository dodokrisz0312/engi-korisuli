import { CalendarDays, Heart, MapPin, Medal, Snowflake, UsersRound } from "lucide-react";

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
  { value: "10+", label: "év tapasztalat", icon: CalendarDays },
  { value: "300+", label: "boldog gyermek", icon: UsersRound },
  { value: "2", label: "helyszín", icon: MapPin },
  { value: "95%", label: "visszatérő család", icon: Heart },
];

export const galleryItems = [
  {
    label: "Első lépések a jégen",
    imageSrc: "/images/generated/gallery-1.jpg",
    className: "tile-1",
  },
  {
    label: "Kis csapat a pályán",
    imageSrc: "/images/generated/gallery-2.jpg",
    className: "tile-2",
  },
  {
    label: "Ügyességi feladatok",
    imageSrc: "/images/generated/gallery-3.jpg",
    className: "tile-3",
  },
  { label: "Játék és fejlődés", imageSrc: "/images/generated/gallery-4.jpg", className: "tile-4" },
];

export const teachers = [
  {
    name: "Enci",
    role: "Korcsolyaoktató",
    text: "Több mint 15 éve foglalkozom gyerekekkel a jégen, a játékos fejlődés híve vagyok.",
    imageSrc: "/images/generated/teacher-1.jpg",
  },
  {
    name: "Gábor",
    role: "TSMT terapeuta",
    text: "Mozgásfejlesztés szakértő, aki a helyes mozgásminták kialakítását támogatja.",
    imageSrc: "/images/generated/teacher-2.jpg",
  },
  {
    name: "Lilla",
    role: "Hoki edző",
    text: "Jégkorong játékos múlt, lelkes edző és csapatépítő szemlélet minden órán.",
    imageSrc: "/images/generated/teacher-3.jpg",
  },
];

export const SnowIcon = Snowflake;
export const MedalIcon = Medal;
