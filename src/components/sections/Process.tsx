import { Code, Compass, FlaskConical, Layers, Rocket } from "lucide-react";

const steps = [
  { icon: Compass, title: "Descobrir", body: "Entender a operação, quem usa e onde está o atrito." },
  { icon: Layers, title: "Arquitetar", body: "Modelar dados, rotas e integrações antes da primeira tela." },
  { icon: Code, title: "Desenvolver", body: "Interface e API em ciclos curtos, com revisão de código." },
  { icon: FlaskConical, title: "Testar", body: "Testes unitários e de integração, homologação com o time." },
  { icon: Rocket, title: "Entregar", body: "Deploy, logs e acompanhamento depois que vai ao ar." },
];

export function Process() {
  return (
    <section id="processo" className="border-t border-border py-24 md:py-32">
      <div className="wrap">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p data-reveal className="eyebrow text-accent">Processo</p>
            <h2 data-lines className="display mt-4 text-[clamp(2.8rem,6.4vw,5.4rem)]">
              <span className="line-mask"><span>Da ideia</span></span>
              <span className="line-mask"><span>à <span className="text-accent">operação.</span></span></span>
            </h2>
          </div>
          <p data-reveal className="max-w-sm text-muted">
            Scrum e Kanban no dia a dia, Git e revisão em cada mudança.
          </p>
        </div>

        <div className="relative mt-16">
          <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-px bg-border lg:block">
            <div data-draw className="h-px bg-accent" />
          </div>
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {steps.map(({ icon: Icon, title, body }, index) => (
              <li key={title} data-reveal className="group relative">
                <div className="flex items-center gap-4">
                  <span className="relative flex h-14 w-14 items-center justify-center border border-border bg-background transition-colors duration-300 group-hover:border-accent group-hover:bg-accent">
                    <Icon
                      aria-hidden
                      className="h-5 w-5 text-accent transition-all duration-500 group-hover:scale-110 group-hover:text-background"
                    />
                  </span>
                  <span className="display bg-background pr-3 text-[2.6rem] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="eyebrow mt-6 text-[0.8rem]">{title}</h3>
                <p className="mt-3 text-sm text-muted">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
