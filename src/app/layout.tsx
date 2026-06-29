import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Engi Korisuli | Korcsolya, TSMT és Hoki iskola",
  description: "Gyerekbarát korcsolyaoktatás, TSMT és hokisuli kezdőknek és haladóknak.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  );
}
