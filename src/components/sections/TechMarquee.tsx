"use client";

import type { IconType } from "react-icons";
import {
  SiCloudinary,
  SiFirebase,
  SiGit,
  SiJavascript,
  SiJsonwebtokens,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import LogoLoop, { type LogoItem } from "@/components/LogoLoop";

type Tech = [IconType, string];

const topRow: Tech[] = [
  [SiReact, "React"],
  [SiNextdotjs, "Next.js"],
  [SiTypescript, "TypeScript"],
  [SiJavascript, "JavaScript"],
  [SiNodedotjs, "Node.js"],
  [SiOpenjdk, "Java"],
  [SiSpring, "Spring"],
  [SiTailwindcss, "Tailwind CSS"],
];

const bottomRow: Tech[] = [
  [SiPostgresql, "PostgreSQL"],
  [SiPrisma, "Prisma"],
  [SiFirebase, "Firebase"],
  [SiCloudinary, "Cloudinary"],
  [SiJsonwebtokens, "JWT"],
  [SiVite, "Vite"],
  [SiGit, "Git"],
];

function toLogos(row: Tech[]): LogoItem[] {
  return row.map(([Icon, label]) => ({
    node: (
      <span className="tech-chip">
        <Icon aria-hidden />
        {label}
      </span>
    ),
    title: label,
    ariaLabel: label,
  }));
}

const topLogos = toLogos(topRow);
const bottomLogos = toLogos(bottomRow);

export function TechMarquee() {
  return (
    <div className="space-y-8">
      <LogoLoop
        logos={topLogos}
        direction="right"
        speed={60}
        logoHeight={20}
        gap={56}
        fadeOut
        fadeOutColor="var(--background)"
        pauseOnHover
        ariaLabel="Tecnologias de interface e servidor"
      />
      <LogoLoop
        logos={bottomLogos}
        direction="left"
        speed={60}
        logoHeight={20}
        gap={56}
        fadeOut
        fadeOutColor="var(--background)"
        pauseOnHover
        ariaLabel="Tecnologias de dados e integrações"
      />
    </div>
  );
}
