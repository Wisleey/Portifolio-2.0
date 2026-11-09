import { TechMarquee } from "@/components/sections/TechMarquee";

const words = ["Next.js", "React", "TypeScript", "Node.js", "Java", "Spring", "PostgreSQL", "Fluig"];

/** Faixa de transição: palavras gigantes que correm com a rolagem + esteira de tecnologias. */
export function Stack() {
  return (
    <section aria-label="Tecnologias" className="overflow-hidden border-t border-border py-20 md:py-28">
      <div aria-hidden className="flex flex-col gap-2">
        <p data-drift="-30" className="display whitespace-nowrap text-[clamp(4rem,11vw,9rem)]">
          {words.map((word) => (
            <span key={word} className="mr-8">
              {word} <span className="text-accent">/</span>
            </span>
          ))}
        </p>
        <p data-drift="30" className="display outline-text whitespace-nowrap text-[clamp(4rem,11vw,9rem)]">
          {[...words].reverse().map((word) => (
            <span key={word} className="mr-8">
              {word} /
            </span>
          ))}
        </p>
      </div>
      <div className="wrap mt-16">
        <TechMarquee />
      </div>
    </section>
  );
}
