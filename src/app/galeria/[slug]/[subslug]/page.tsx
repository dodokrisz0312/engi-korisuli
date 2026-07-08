import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { CTA } from "@/components/Sections";
import { GalleryLightbox } from "@/components/GalleryLightbox";
import { galleryFolderRoutes, galleryPage } from "@/data/gallery";
import { createSeoMetadata } from "@/data/seo";

type GallerySubfolderPageProps = {
  params: Promise<{
    slug: string;
    subslug: string;
  }>;
};

export function generateStaticParams() {
  return galleryPage.folders.flatMap((folder) =>
    (folder.subfolders ?? []).map((subfolder) => ({
      slug: folder.slug,
      subslug: subfolder.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: GallerySubfolderPageProps): Promise<Metadata> {
  const { slug, subslug } = await params;
  const route = galleryFolderRoutes.find((item) => item.path === `/galeria/${slug}/${subslug}`);

  if (!route) {
    return {};
  }

  return createSeoMetadata(route);
}

export default async function GallerySubfolderPage({ params }: GallerySubfolderPageProps) {
  const { slug, subslug } = await params;
  const folder = galleryPage.folders.find((item) => item.slug === slug);
  const subfolder = folder?.subfolders?.find((item) => item.slug === subslug);

  if (!folder || !subfolder) {
    notFound();
  }

  return (
    <>
      <main className="gallery-folder-page">
        <Header />

        <section className="gallery-folder-hero section-shell">
          <div className="gallery-folder-hero-copy">
            <Link href={`/galeria/${folder.slug}`} className="gallery-back-link">
              <ArrowLeft size={18} />
              Vissza: {folder.title}
            </Link>

            <h1>
              {subfolder.title}
              <span> képei</span>
            </h1>

            <p>{subfolder.description}</p>
          </div>
        </section>

        <section className="gallery-folder-section section-shell">
          <div className="gallery-folder-section-title">
            <span />
            <h2>{subfolder.title}</h2>
            <span />
          </div>

          <GalleryLightbox
            items={subfolder.images.map((image, index) => ({
              label: image.alt,
              image: image.src,
              className: `tile-${(index % 8) + 1}`,
            }))}
          />

          {subfolder.images.length === 0 && (
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
