export type Experience = {
  company: string;
  role: string;
  period: string;
  kind: string;
  summary: string;
};

/** Fonte: currículo de 2026 (public/CurriculoWisleyRodrigues.pdf). */
export const experiences: Experience[] = [
  {
    company: "Bit Soluções",
    role: "Desenvolvedor de Software · TOTVS Fluig",
    period: "Abr/2026 — Ago/2026",
    kind: "Contrato",
    summary:
      "Processos, workflows, formulários, widgets e datasets em Fluig, com integrações REST como a Clicksign.",
  },
  {
    company: "We-guide",
    role: "Full Stack · Tech Lead",
    period: "Out/2024 — Dez/2025",
    kind: "Liderança técnica",
    summary:
      "Arquitetura do marketplace, JWT e cookies, PostgreSQL, Cloudinary e Pagar.me com Pix, cartão e comissões.",
  },
  {
    company: "Passaporte Carioca",
    role: "Full Stack",
    period: "Jun/2025 — Ago/2025",
    kind: "Freelancer",
    summary:
      "API REST em Node, Express e Prisma, assinaturas recorrentes com Stripe, retry e circuit breaker.",
  },
  {
    company: "Taurus Trading",
    role: "Full Stack",
    period: "Mar/2024 — Mai/2024",
    kind: "Freelancer",
    summary:
      "Aplicação de trading em tempo real com WebSocket e SSE, documentada em Swagger.",
  },
];

export const education = {
  title: "Tecnólogo em Sistemas para Internet",
  school: "Centro Universitário UNIESP",
  year: "Concluído em 2024",
};
