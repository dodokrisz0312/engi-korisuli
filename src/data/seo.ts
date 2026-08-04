import type { Metadata } from "next";

export const siteUrl = "https://engikorisuli.com";
export const siteName = "Engi Korisuli";
export const defaultSeoDescription =
  "Gyerekbarát korcsolyaoktatás, TSMT mozgásfejlesztés és hokisuli kezdőknek és haladóknak Budapesten.";

const defaultImage = "/favicon.ico";

type SeoMetadataOptions = {
  path?: string;
  title: string;
  description: string;
  image?: string;
  noIndex?: boolean;
};

type SeoRoute = SeoMetadataOptions & {
  path: string;
};

export function createSeoMetadata({
  path = "/",
  title,
  description,
  image = defaultImage,
  noIndex = false,
}: SeoMetadataOptions): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: "hu_HU",
      type: "website",
      images: [
        {
          url: image,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
        }
      : undefined,
  };
}

export const pageSeo: Record<string, SeoRoute> = {
  home: {
    path: "/",
    title: "Engi Korisuli | Korcsolyaoktatás, TSMT és Hokisuli Budapesten",
    description: defaultSeoDescription,
  },
  korisuli: {
    path: "/korisuli",
    title: "Korisuli | Játékos korcsolyaoktatás gyerekeknek",
    description:
      "Ismerd meg az Engi Korisuli történetét, céljait és játékos korcsolyaoktatását kezdő és haladó gyerekeknek.",
  },
  tsmt: {
    path: "/tsmt",
    title: "TSMT és mozgásfejlesztés | Engi Korisuli",
    description: "Játékos, szakmailag támogatott csoportos TSMT foglalkozások 4 éves kortól.",
  },
  hokisuli: {
    path: "/hokisuli",
    title: "Hokisuli | Játékos jégkorong alapok gyerekeknek",
    description:
      "Hokisuli gyerekeknek erős korcsolyaalapokkal, játékos hoki technikával és csapatélménnyel.",
  },
  oktatok: {
    path: "/oktatok",
    title: "Oktatók | Engi Korisuli",
    description:
      "Ismerd meg az Engi Korisuli tapasztalt oktatóit, akik biztonságos és szeretetteljes légkörben tanítanak.",
  },
  galeria: {
    path: "/galeria",
    title: "Galéria | Pillanatok az Engi Korisuli életéből",
    description: "Képek korcsolyaórákról, hokis edzésekről, táborokról és ünnepi programokról.",
  },
  elerhetosegek: {
    path: "/elerhetosegek",
    title: "Elérhetőségek és jelentkezés | Engi Korisuli",
    description:
      "Lépj kapcsolatba az Engi Korisulival, jelentkezz korcsolyaoktatásra, hokisulira vagy TSMT foglalkozásra.",
  },
  adatvedelem: {
    path: "/adatvedelmi-tajekoztato",
    title: "Adatvédelmi tájékoztató | Engi Korisuli",
    description:
      "Az Engi Korisuli adatvédelmi tájékoztatója a kapcsolatfelvétel, jelentkezés, sütik és Google Analytics használatáról.",
  },
  aszf: {
    path: "/aszf",
    title: "ÁSZF és részvételi feltételek | Engi Korisuli",
    description:
      "Az Engi Korisuli foglalkozásaira, jelentkezésre, fizetésre, lemondásra és részvételre vonatkozó feltételek.",
  },
  suti: {
    path: "/suti-tajekoztato",
    title: "Süti tájékoztató | Engi Korisuli",
    description:
      "Tájékoztató az Engi Korisuli weboldalán használt szükséges és statisztikai sütikről.",
  },
  orarend: {
    path: "/orarend",
    title: "Órarend | Engi Korisuli",
    description: "Az Engi Korisuli órarend oldalának előkészített felülete.",
    noIndex: true,
  },
};

export const sitemapRoutes = Object.values(pageSeo).filter((route) => !route.noIndex);

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
  description: defaultSeoDescription,
  email: "engiklara@gmail.com",
  telephone: "+36709783703",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vág utca 73.",
    postalCode: "1155",
    addressLocality: "Budapest",
    addressCountry: "HU",
  },
  sameAs: ["https://www.facebook.com/engikorisuli/", "https://www.instagram.com/engikorisuli/"],
  areaServed: {
    "@type": "City",
    name: "Budapest",
  },
};
