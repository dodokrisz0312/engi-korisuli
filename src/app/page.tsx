import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IceMap } from "@/components/IceMap";
import { CTA, Gallery, Stats, Teachers } from "@/components/Sections";
import { Snowflakes } from "@/components/Snowflakes";

export default function Home() {
  return (
    <main className="home-page">
      <Snowflakes />
      <Header />
      <Hero />
      <IceMap />
      <Stats />
      <Gallery />
      <Teachers />
      <CTA />
    </main>
  );
}
