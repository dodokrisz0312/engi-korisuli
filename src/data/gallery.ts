import type { StaticImageData } from "next/image";
import { galleryAssetFolders } from "@/data/gallery-assets";

type GalleryImage = {
  src: StaticImageData;
  alt: string;
};

type GallerySubfolder = {
  title: string;
  slug: string;
  description: string;
  coverImage: StaticImageData;
  images: GalleryImage[];
};

type GalleryFolder = {
  title: string;
  slug: string;
  description: string;
  coverImage: StaticImageData;
  images?: GalleryImage[];
  subfolders?: GallerySubfolder[];
};

const makeGalleryImages = (
  folder: keyof typeof galleryAssetFolders,
  label: string
): GalleryImage[] =>
  galleryAssetFolders[folder].map((image, index) => ({
    src: image,
    alt: `${label} ${index + 1}. kép`,
  }));

export const galleryPage: { folders: GalleryFolder[] } = {
  folders: [
    {
      title: "Korisuli",
      slug: "korisuli",
      description:
        "Korcsolya óráinkon igyekszünk a gyermekek fejlődését hatékony és játékos feladatokkal elérni.",
      coverImage: galleryAssetFolders.korisuli[0],
      images: makeGalleryImages("korisuli", "Korisuli"),
    },
    {
      title: "Hokisuli",
      slug: "hokisuli",
      description:
        "RTK Vasló Hokicsapatunk keményen edz, hogy bizonyos nagy alkalmakkor megcsillogtathassák a tudásukat a hokimeccseken.",
      coverImage: galleryAssetFolders.hokisuli[0],
      images: makeGalleryImages("hokisuli", "Hokisuli"),
    },
    {
      title: "Mozgáskoordinációs Foglalkozások",
      slug: "mozgasfejlesztes",
      description:
        "Mozgásjavító (TSMT) torna foglalkozásokkal segítjük fejleszteni a gyerekek izomzatát, egyensúly- és ritmusérzékét, mindezt a testtudat összehangolásával.",
      coverImage: galleryAssetFolders.mozgaskoordinacio[0],
      images: makeGalleryImages("mozgaskoordinacio", "Mozgáskoordináció"),
    },
    {
      title: "Nyári Tábor",
      slug: "nyari-tabor",
      description:
        "Minden nyáron megrendezzük a klasszikus korcsolya és mozgáskoordinációs torna táborunkat, hogy a nyári szünet alatt is mozgásban maradjunk!",
      coverImage: galleryAssetFolders.nyari_tabor_2018[0],
      subfolders: [
        {
          title: "Nyári Tábor 2018",
          slug: "nyari-tabor-2018",
          description:
            "Képek a 2018-as nyári korcsolya és mozgáskoordinációs tábor vidám pillanataiból.",
          coverImage: galleryAssetFolders.nyari_tabor_2018[0],
          images: makeGalleryImages("nyari_tabor_2018", "Nyári Tábor 2018"),
        },
        {
          title: "Nyári Tábor 2019",
          slug: "nyari-tabor-2019",
          description:
            "Képek a 2019-es nyári korcsolya és mozgáskoordinációs tábor vidám pillanataiból.",
          coverImage: galleryAssetFolders.nyari_tabor_2019[0],
          images: makeGalleryImages("nyari_tabor_2019", "Nyári Tábor 2019"),
        },
      ],
    },
    {
      title: "Farsang & Halloween",
      slug: "farsang-halloween",
      description:
        "Minden évben rendezünk a Farsangi, illetve a Halloween-i ünnepekkor beöltözős mulatságot a jégen a gyerekkel, amikor rendkívüli oktatást tartunk ügyességi sorversenyekkel.",
      coverImage: galleryAssetFolders.farsang_2019[0],
      subfolders: [
        {
          title: "Farsang 2019",
          slug: "farsang-2019",
          description: "Képek a 2019-es farsangi beöltözős jégóráról és ügyességi játékokról.",
          coverImage: galleryAssetFolders.farsang_2019[0],
          images: makeGalleryImages("farsang_2019", "Farsang 2019"),
        },
        {
          title: "Halloween 2020",
          slug: "halloween-2020",
          description: "Képek a 2020-as Halloween beöltözős jégóráról.",
          coverImage: galleryAssetFolders.halloween_2020[0],
          images: makeGalleryImages("halloween_2020", "Halloween 2020"),
        },
        {
          title: "Halloween 2021",
          slug: "halloween-2021",
          description: "Képek a 2021-es Halloween beöltözős jégóráról.",
          coverImage: galleryAssetFolders.halloween_2021[0],
          images: makeGalleryImages("halloween_2021", "Halloween 2021"),
        },
      ],
    },
    {
      title: "Mikulás",
      slug: "mikulas",
      description:
        "Minden évben meglátogat minket is a Mikulás a jégen. Ilyenkor a Mikulás minden csoportnál megnézi az apróságokat és ők bemutathatják mit tanultak az elmúlt hetek/hónapok alatt.",
      coverImage: galleryAssetFolders.mikulas[0],
      images: makeGalleryImages("mikulas", "Mikulás"),
    },
  ],
};

export const galleryFolderRoutes = galleryPage.folders.flatMap((folder) => [
  {
    path: `/galeria/${folder.slug}`,
    title: `${folder.title} képek | Engi Korisuli Galéria`,
    description: folder.description,
  },
  ...(folder.subfolders ?? []).map((subfolder) => ({
    path: `/galeria/${folder.slug}/${subfolder.slug}`,
    title: `${subfolder.title} képek | Engi Korisuli Galéria`,
    description: subfolder.description,
  })),
]);
