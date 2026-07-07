import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { CTA } from "@/components/Sections";
import { GalleryLightbox } from "@/components/GalleryLightbox";
import { galleryPage } from "@/data/constants";

type GalleryFolderPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return galleryPage.folders.map((folder) => ({
    slug: folder.slug,
  }));
}

export default async function GalleryFolderPage({ params }: GalleryFolderPageProps) {
  const { slug } = await params;
  const folder = galleryPage.folders.find((item) => item.slug === slug);

  if (!folder) {
    notFound();
  }

  return (
    <>
      <main className="gallery-folder-page">
        <Header />

        <section className="gallery-folder-hero section-shell">
          <div className="gallery-folder-hero-copy">
            <Link href="/galeria" className="gallery-back-link">
              <ArrowLeft size={18} />
              Vissza a galériákhoz
            </Link>

            <h1>
              {folder.title}
              <span> képei</span>
            </h1>

            <p>{folder.description}</p>
          </div>
        </section>

        <section className="gallery-folder-section section-shell">
          <div className="gallery-folder-section-title">
            <span />
            <h2>{folder.title}</h2>
            <span />
          </div>

          <GalleryLightbox
            items={folder.images.map((image, index) => ({
              label: image.alt,
              image: image.src,
              className: `tile-${(index % 8) + 1}`,
            }))}
          />

          {folder.images.length === 0 && (
            <div className="gallery-empty-state">
              <Sparkles size={38} aria-hidden="true" />
              <h3>Hamarosan érkeznek a képek</h3>
              <p>Ebben a galériában jelenleg még nincsenek feltöltött képek.</p>
            </div>
          )}
        </section>
      </main>

      <CTA />
    </>
  );
}
