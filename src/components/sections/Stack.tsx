import { TechMarquee } from "@/components/sections/TechMarquee";

export function Stack() {
  return (
    <section
      id="oficio"
      className="scroll-mt-20 border-t border-border py-16 md:py-24 lg:py-28 lg:scroll-mt-8"
    >
      <div className="mb-12 flex items-baseline justify-between gap-4">
        <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium tracking-[-0.02em]">
          Ofício
        </h2>
        <p className="max-w-xs text-right font-mono text-[0.75rem] uppercase tracking-[0.14em] text-muted">
          Ferramentas em produção
        </p>
      </div>
      <TechMarquee />
    </section>
  );
}
