import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Engi Korisuli | Korcsolya, TSMT és Hoki iskola",
  description: "Gyerekbarát korcsolyaoktatás, TSMT és hokisuli kezdőknek és haladóknak.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  );
}
