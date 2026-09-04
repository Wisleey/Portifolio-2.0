import { practiceIntro, practiceItems } from "@/data/practice";

export function Practice() {
  return (
    <section
      id="pratica"
      className="scroll-mt-20 border-t border-border py-16 md:py-24 lg:py-28 lg:scroll-mt-8"
    >
      <div className="mb-12 max-w-2xl">
        <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium tracking-[-0.02em]">
          Prática
        </h2>
        <p className="mt-4 text-muted">{practiceIntro}</p>
      </div>
      <div className="grid gap-12 md:grid-cols-2">
        {practiceItems.map((item) => (
          <article key={item.label}>
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-muted">
              {item.label}
            </p>
            <h3 className="mt-3 text-[1.2rem] font-medium tracking-[-0.015em]">
              {item.title}
            </h3>
            <p className="mt-3 max-w-md text-muted">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
