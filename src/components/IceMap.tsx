"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import penguinSkateImage from "@/assets/penguin-skate.png";
import { programs } from "@/data/site";

type RouteVariant =
  "wideDesktop" | "desktop" | "smallDesktop" | "tablet" | "mobile" | "smallMobile";

type RouteSegmentConfig = {
  id: string;
  d: string;
};

const routeVariants: Record<RouteVariant, { viewBox: string; segments: RouteSegmentConfig[] }> = {
  wideDesktop: {
    viewBox: "0 0 1600 1900",
    segments: [
      {
        id: "wide-desktop-journey",
        d: "M720 200 C980 190 1250 280 1250 360 C1300 700 -400 700 700 1000 C1600 1300 1000 1300 720 1550",
      },
    ],
  },
  desktop: {
    viewBox: "0 0 1600 1900",
    segments: [
      {
        id: "desktop-journey",
        d: "M840 200 C980 190 1250 280 1250 360 C1300 600 -400 700 700 1050 C1600 1350 1000 1400 840 1550",
      },
    ],
  },
  smallDesktop: {
    viewBox: "0 0 1600 1900",
    segments: [
      {
        id: "small-desktop-journey",
        d: "M1230 200 C1400 250 1700 350 1450 400 C1300 440 -700 650 560 1050 C1600 1400 1700 1300 1230 1550",
      },
    ],
  },
  tablet: {
    viewBox: "0 0 1000 1900",
    segments: [
      {
        id: "tablet-korisuli-to-tsmt",
        d: "M385 380 C1923 481 -769 559 577 726",
      },
      {
        id: "tablet-tsmt-to-hokisuli",
        d: "M673 1140 C-769 1341 1635 1397 346 1542",
      },
    ],
  },
  mobile: {
    viewBox: "0 0 520 1700",
    segments: [
      {
        id: "mobile-korisuli-to-tsmt",
        d: "M200 340 C1000 430 -400 500 300 650",
      },
      {
        id: "mobile-tsmt-to-hokisuli",
        d: "M350 1020 C-400 1200 850 1250 180 1380",
      },
    ],
  },
  smallMobile: {
    viewBox: "0 0 520 1700",
    segments: [
      {
        id: "small-mobile-korisuli-to-tsmt",
        d: "M200 390 C1000 430 -400 500 300 650",
      },
      {
        id: "small-mobile-tsmt-to-hokisuli",
        d: "M350 1080 C-400 1200 850 1250 180 1380",
      },
    ],
  },
};

function getRouteVariant(width: number): RouteVariant {
  if (width > 1600) return "wideDesktop";
  if (width > 1200) return "desktop";
  if (width > 900) return "smallDesktop";
  if (width > 600) return "tablet";
  if (width > 385) return "mobile";
  return "smallMobile";
}

function useRouteVariant() {
  const [variant, setVariant] = useState<RouteVariant>("mobile");

  useEffect(() => {
    const updateVariant = () => {
      const width = window.screen?.width || window.innerWidth;
      setVariant(getRouteVariant(width));
    };

    updateVariant();
    window.addEventListener("resize", updateVariant);
    window.addEventListener("orientationchange", updateVariant);

    return () => {
      window.removeEventListener("resize", updateVariant);
      window.removeEventListener("orientationchange", updateVariant);
    };
  }, []);

  return variant;
}

function RouteSegment({ d }: { d: string }) {
  return (
    <>
      <path className="ice-segment-shadow" d={d} />
      <path className="ice-segment-outer" d={d} />
      <path className="ice-segment-surface" d={d} />
      <path className="ice-segment-shine" d={d} />
      <path className="ice-segment-cut ice-segment-cut-a" d={d} />
      <path className="ice-segment-cut ice-segment-cut-b" d={d} />
    </>
  );
}

function IceRoutes({ variant }: { variant: RouteVariant }) {
  const config = routeVariants[variant];

  return (
    <svg
      key={variant}
      className={`ice-routes ${variant}-routes`}
      viewBox={config.viewBox}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <filter id={`segment-glow-${variant}`} x="-16%" y="-16%" width="132%" height="132%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter={`url(#segment-glow-${variant})`}>
        {config.segments.map((segment) => (
          <RouteSegment key={segment.id} d={segment.d} />
        ))}
      </g>
    </svg>
  );
}

export function IceMap() {
  const activeVariant = useRouteVariant();

  return (
    <section className="ice-map section-shell" aria-labelledby="ice-map-title">
      <div className="section-heading">
        <span>Válasszatok jégélményt</span>
        <h2 id="ice-map-title">Bármelyik utat választjátok, végigkísérünk a jégen</h2>
        <p>
          Nálunk a Korisuli, a TSMT és a Hokisuli három különböző lehetőség. A közös bennük, hogy
          szeretettel, biztonságosan és lépésről lépésre vezetjük a gyerekeket a saját útjukon.
        </p>
      </div>

      <div className={`map-stage route-${activeVariant}`} data-route={activeVariant}>
        <IceRoutes variant={activeVariant} />

        {programs.map((program, index) => (
          <article key={program.title} className={`program-card card-${index + 1} ${program.tone}`}>
            <div className="program-content">
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <small>{program.detail}</small>
              <Link href={program.href}>
                Részletek <ChevronRight size={15} />
              </Link>
            </div>
            <div className={`program-image ${program.imageClass}`} aria-hidden="true" />
          </article>
        ))}

        <Image
          className="path-penguin path-penguin-one"
          src={penguinSkateImage}
          alt=""
          aria-hidden="true"
        />
        <Image
          className="path-penguin path-penguin-two"
          src={penguinSkateImage}
          alt=""
          aria-hidden="true"
        />

        <span className="map-flake map-flake-1">❄</span>
        <span className="map-flake map-flake-2">✻</span>
        <span className="map-flake map-flake-3">❄</span>
        <span className="map-flake map-flake-4">✼</span>
        <span className="map-flake map-flake-5">❅</span>
        <span className="map-flake map-flake-6">❄</span>
        <span className="map-flake map-flake-7">✻</span>
        <span className="map-flake map-flake-8">❄</span>
        <span className="map-flake map-flake-9">✼</span>
        <span className="map-flake map-flake-10">❅</span>
        <span className="map-flake map-flake-11">❄</span>
      </div>
    </section>
  );
}
