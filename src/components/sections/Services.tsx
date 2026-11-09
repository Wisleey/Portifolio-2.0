import { Bot, CreditCard, LayoutTemplate, Plug, Workflow } from "lucide-react";
import { stackGroups } from "@/data/stack";

const services = [
  { icon: LayoutTemplate, label: "Aplicações web" },
  { icon: Plug, label: "APIs e integrações" },
  { icon: CreditCard, label: "Pagamentos" },
  { icon: Workflow, label: "Processos TOTVS Fluig" },
  { icon: Bot, label: "Agentes de IA" },
];

export function Services() {
  return (
    <section id="servicos" className="border-t border-border py-24 md:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-3">
          <p data-reveal className="eyebrow text-accent">Serviços</p>
          <ul className="mt-6 border-t border-border">
            {services.map(({ icon: Icon, label }) => (
              <li
                key={label}
                data-reveal
                className="group flex items-center gap-4 border-b border-border py-4 transition-colors hover:text-accent"
              >
                <Icon
                  aria-hidden
                  className="h-5 w-5 text-accent transition-transform duration-500 group-hover:rotate-[360deg]"
                />
                <span className="eyebrow text-[0.74rem] transition-transform duration-300 group-hover:translate-x-1.5">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center lg:col-span-6 lg:px-6">
          <h2 data-lines className="display text-[clamp(2.8rem,6.4vw,5.4rem)]">
            <span className="line-mask"><span>Código limpo.</span></span>
            <span className="line-mask"><span className="text-accent">Resultado real.</span></span>
          </h2>
          <p data-reveal className="mx-auto mt-8 max-w-md text-muted">
            Do cadastro ao checkout: autenticação com JWT, dados em PostgreSQL,
            Pix e cartão, tempo real com WebSocket e processos corporativos em
            Fluig. SOLID, testes e revisão de código em cada entrega.
          </p>
        </div>

        <div className="lg:col-span-3">
          <p data-reveal className="eyebrow text-accent">Em produção</p>
          <dl className="mt-6 space-y-5">
            {stackGroups.map((group) => (
              <div key={group.label} data-reveal>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="eyebrow text-[0.66rem] text-muted">{group.label}</dt>
                  <dd className="text-right text-sm">{group.items.join(", ")}</dd>
                </div>
                <div className="mt-2 h-px bg-border">
                  <div data-draw className="h-px bg-accent" />
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
