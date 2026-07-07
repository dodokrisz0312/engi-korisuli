import Image from "next/image";
import Link from "next/link";
import { ChevronRight, FolderOpen, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { CTA } from "@/components/Sections";
import { galleryPage } from "@/data/constants";

export default function GaleriaPage() {
  return (
    <>
      <main className="gallery-page">
        <Header />

        <section className="gallery-hero section-shell">
          <div className="gallery-hero-copy">
            <p className="gallery-eyebrow">Galéria</p>

            <h1>
              Pillanatok <span>a jégről</span>
            </h1>

            <p>
              Nézzetek bele korcsolyaóráink, hokis edzéseink, mozgásfejlesztő foglalkozásaink és
              ünnepi programjaink hangulatába.
            </p>

            <div className="gallery-hero-badges" aria-label="Galéria kategóriák">
              <span>Korisuli</span>
              <span>Hokisuli</span>
              <span>Táborok</span>
            </div>
          </div>
        </section>

        <section className="gallery-section section-shell">
          <div className="gallery-section-title">
            <span />
            <h2>Galéria mappák</h2>
            <span />
          </div>

          <div className="gallery-folders-grid">
            {galleryPage.folders.map((folder, index) => (
              <Link
                href={`/galeria/${folder.slug}`}
                className="gallery-folder-card"
                key={folder.slug}
              >
                <div className="gallery-folder-image-wrap">
                  <Image
                    src={folder.coverImage}
                    alt={folder.title}
                    fill
                    className="gallery-folder-image"
                  />

                  <div className="gallery-folder-overlay">
                    <FolderOpen size={34} aria-hidden="true" />
                    <span>Megnyitás</span>
                  </div>
                </div>

                <div className="gallery-folder-content">
                  <div className="gallery-folder-topline">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <Sparkles size={18} aria-hidden="true" />
                  </div>

                  <h3>{folder.title}</h3>
                  <p>{folder.description}</p>

                  <div className="gallery-folder-link">
                    Galéria megnyitása <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <CTA />
    </>
  );
}
