import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Serif, Outfit } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Software Engineer & Game Developer`,
    template: `%s — ${site.name}`,
  },
  description: `${site.headline} ${site.subhead}`,
  openGraph: {
    title: `${site.name} — Software Engineer & Game Developer`,
    description: site.headline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${serif.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
