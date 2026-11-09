import type { StackGroup } from "@/types";

/** Fonte: competências técnicas do currículo de 2026. */
export const stackGroups: StackGroup[] = [
  {
    label: "Front-end",
    items: ["React", "Next.js", "TypeScript"],
  },
  {
    label: "Back-end",
    items: ["Node.js", "Java", "Spring Boot"],
  },
  {
    label: "Dados",
    items: ["PostgreSQL", "Prisma", "MongoDB"],
  },
  {
    label: "Integrações",
    items: ["Pagar.me", "Stripe", "Clicksign"],
  },
  {
    label: "Entrega",
    items: ["Docker", "AWS", "CI/CD"],
  },
];
