import { site } from "@/data/site";

export function About() {
  return (
    <section
      className="border-t border-border py-16 md:py-24 lg:py-28"
      aria-labelledby="sobre-titulo"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-3">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-muted">
            Trajetória
          </p>
          <h2
            id="sobre-titulo"
            className="mt-3 text-[clamp(1.5rem,3vw,2rem)] font-medium tracking-[-0.02em]"
          >
            Sobre
          </h2>
        </div>

        <div className="lg:col-span-6">
          <p className="max-w-2xl text-[clamp(1.35rem,2.5vw,2rem)] font-medium leading-[1.25] tracking-[-0.025em]">
            Tecnologia, para mim, precisa funcionar tanto para quem usa quanto
            para quem opera.
          </p>
          <div className="mt-8 grid gap-6 text-muted sm:grid-cols-2">
            <p>
              Tenho {site.age} anos e sou formado em Sistemas para Internet
              pela UNIESP PB. Desenvolvo produtos web completos, conectando
              interface, regras de negócio, dados e integrações.
            </p>
            <p>
              Hoje também trabalho com processos digitais Utilizando TOTVS Fluig,
              transformando rotinas internas em fluxos mais claros,
              rastreáveis e fáceis de manter.
            </p>
          </div>
        </div>

        <dl className="border-t border-border pt-6 lg:col-span-3 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <div>
            <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted">
              Atuação atual
            </dt>
            <dd className="mt-2">Full stack ·</dd>
          </div>
          <div className="mt-7">
            <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted">
              Foco
            </dt>
            <dd className="mt-2">Produtos web e processos de negócio</dd>
          </div>
          <div className="mt-7">
            <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted">
              Base
            </dt>
            <dd className="mt-2">{site.location}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
