import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { createSeoMetadata, pageSeo } from "@/data/seo";

export const metadata: Metadata = createSeoMetadata(pageSeo.orarend);

export default function Page() {
  return (
    <main className="subpage subpage-orarend">
      <Header />
      <section className="placeholder-page section-shell">
        <h1>orarend</h1>
        <p>Ez az oldal elő van készítve a későbbi tartalomnak.</p>
      </section>
    </main>
  );
}
