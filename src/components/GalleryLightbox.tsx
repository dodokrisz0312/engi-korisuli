"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type GalleryLightboxItem = {
  label: string;
  image: StaticImageData;
  className: string;
};

type GalleryLightboxProps = {
  items: GalleryLightboxItem[];
};

export function GalleryLightbox({ items }: GalleryLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const selectedItem = selectedIndex === null ? null : items[selectedIndex];
  const selectedDisplayIndex = selectedIndex === null ? 0 : selectedIndex + 1;

  const close = () => setSelectedIndex(null);
  const showPrevious = () => {
    setSelectedIndex((current) => {
      if (current === null) return current;
      return (current - 1 + items.length) % items.length;
    });
  };
  const showNext = () => {
    setSelectedIndex((current) => {
      if (current === null) return current;
      return (current + 1) % items.length;
    });
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  const lightbox =
    selectedItem && isMounted
      ? createPortal(
          <div className="gallery-lightbox" role="dialog" aria-modal="true" onClick={close}>
            <button className="gallery-lightbox-close" type="button" onClick={close} aria-label="Bezárás">
              <X size={24} />
            </button>

            <button
              className="gallery-lightbox-nav gallery-lightbox-prev"
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Előző kép"
            >
              <ChevronLeft size={30} />
            </button>

            <figure className="gallery-lightbox-content" onClick={(event) => event.stopPropagation()}>
              <Image
                className="gallery-lightbox-image"
                src={selectedItem.image}
                alt={selectedItem.label}
                sizes="(max-width: 900px) calc(100vw - 48px), 920px"
                priority
              />
              <figcaption>
                {selectedItem.label} <span>{selectedDisplayIndex} / {items.length}</span>
              </figcaption>
            </figure>

            <button
              className="gallery-lightbox-nav gallery-lightbox-next"
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Következő kép"
            >
              <ChevronRight size={30} />
            </button>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <div className="gallery-grid">
        {items.map((item, index) => (
          <button
            className={`gallery-tile ${item.className}`}
            key={item.label}
            type="button"
            onClick={() => setSelectedIndex(index)}
            aria-label={`${item.label} megnyitása`}
          >
            <Image src={item.image} alt={item.label} sizes="180px" />
            <span className="gallery-overlay">
              <span>{item.label}</span>
            </span>
          </button>
        ))}
      </div>

      {lightbox}
    </>
  );
}
