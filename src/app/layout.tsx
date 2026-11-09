import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Anton, Geist, IBM_Plex_Mono } from "next/font/google";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import "./globals.css";

const body = Geist({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const description = site.summary;

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Desenvolvedor Full Stack`,
    template: `%s — ${site.name}`,
  },
  description,
  authors: [{ name: site.name }],
  creator: site.name,
  keywords: [
    "Wisley Rodrigues",
    "desenvolvedor full stack",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Java",
    "Spring Boot",
    "TOTVS Fluig",
    "portfólio",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: `${site.name} — Desenvolvedor Full Stack`,
    description,
    locale: "pt_BR",
    type: "website",
    images: [{ url: site.portrait, alt: site.portraitAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Desenvolvedor Full Stack`,
    description,
    images: [site.portrait],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn(
        "dark h-full antialiased",
        body.variable,
        anton.variable,
        mono.variable,
      )}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
