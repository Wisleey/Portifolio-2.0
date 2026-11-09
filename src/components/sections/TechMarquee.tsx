"use client";

import type { IconType } from "react-icons";
import {
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiJavascript,
  SiJira,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSpring,
  SiStripe,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import LogoLoop, { type LogoItem } from "@/components/LogoLoop";

type Tech = [IconType, string];

const topRow: Tech[] = [
  [SiReact, "React"],
  [SiNextdotjs, "Next.js"],
  [SiTypescript, "TypeScript"],
  [SiJavascript, "JavaScript"],
  [SiNodedotjs, "Node.js"],
  [SiExpress, "Express"],
  [SiOpenjdk, "Java"],
  [SiSpring, "Spring Boot"],
  [SiTailwindcss, "Tailwind CSS"],
];

const bottomRow: Tech[] = [
  [SiPostgresql, "PostgreSQL"],
  [SiPrisma, "Prisma"],
  [SiMongodb, "MongoDB"],
  [SiFirebase, "Firebase"],
  [SiStripe, "Stripe"],
  [SiJsonwebtokens, "JWT"],
  [SiDocker, "Docker"],
  [SiSwagger, "Swagger"],
  [SiJira, "Jira"],
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
        speed={50}
        logoHeight={20}
        gap={56}
        fadeOut
        fadeOutColor="#0a0a0a"
        pauseOnHover
        ariaLabel="Tecnologias de interface e servidor"
      />
      <LogoLoop
        logos={bottomLogos}
        direction="left"
        speed={50}
        logoHeight={20}
        gap={56}
        fadeOut
        fadeOutColor="#0a0a0a"
        pauseOnHover
        ariaLabel="Tecnologias de dados, integrações e entrega"
      />
    </div>
  );
}
