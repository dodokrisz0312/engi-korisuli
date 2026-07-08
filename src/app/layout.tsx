import type { Metadata, Viewport } from "next";
import { CookieConsent } from "@/components/CookieConsent";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import {
  createSeoMetadata,
  organizationJsonLd,
  pageSeo,
  siteName,
  siteUrl,
} from "@/data/seo";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  ...createSeoMetadata(pageSeo.home),
  icons: {
    icon: "/favicon.ico",
  },
  category: "education",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu">
      <body>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
