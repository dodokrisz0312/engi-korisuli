import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight, FolderOpen, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { CTA } from "@/components/Sections";
import { GalleryLightbox } from "@/components/GalleryLightbox";
import { galleryFolderRoutes, galleryPage } from "@/data/gallery";
import { createSeoMetadata } from "@/data/seo";

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

export async function generateMetadata({ params }: GalleryFolderPageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = galleryFolderRoutes.find((item) => item.path === `/galeria/${slug}`);

  if (!route) {
    return {};
  }

  return createSeoMetadata(route);
}

export default async function GalleryFolderPage({ params }: GalleryFolderPageProps) {
  const { slug } = await params;
  const folder = galleryPage.folders.find((item) => item.slug === slug);

  if (!folder) {
    notFound();
  }

  const hasSubfolders = Boolean(folder.subfolders?.length);
  const images = folder.images ?? [];

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
            <h2>{hasSubfolders ? "Mappák" : folder.title}</h2>
            <span />
          </div>

          {hasSubfolders ? (
            <div className="gallery-folders-grid">
              {folder.subfolders?.map((subfolder, index) => (
                <Link
                  href={`/galeria/${folder.slug}/${subfolder.slug}`}
                  className="gallery-folder-card"
                  key={subfolder.slug}
                >
                  <div className="gallery-folder-image-wrap">
                    <Image
                      src={subfolder.coverImage}
                      alt={subfolder.title}
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

                    <h3>{subfolder.title}</h3>
                    <p>{subfolder.description}</p>

                    <div className="gallery-folder-link">
                      Galéria megnyitása <ChevronRight size={16} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <GalleryLightbox
              items={images.map((image, index) => ({
                label: image.alt,
                image: image.src,
                className: `tile-${(index % 8) + 1}`,
              }))}
            />
          )}

          {!hasSubfolders && images.length === 0 && (
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
