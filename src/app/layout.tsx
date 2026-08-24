import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Bricolage_Grotesque, IBM_Plex_Mono, Geist } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
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
    default: `${site.name} — Full Stack`,
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
    "portfólio",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: `${site.name} — Full Stack`,
    description,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: site.portrait,
        alt: site.portraitAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Full Stack`,
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
      className={cn("h-full", "antialiased", display.variable, mono.variable, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem("theme")==="dark")document.documentElement.classList.add("dark")}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
