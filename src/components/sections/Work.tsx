import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { carouselProjects, compactProjects } from "@/data/projects";
import { site } from "@/data/site";
import type { Project } from "@/types";

function WorkCard({ project, index }: { project: Project; index: number }) {
  const href = project.live || project.github || site.github;
  const words = project.title.split(" ");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-clip
      className="work-card group relative block aspect-[4/5] overflow-hidden border border-border bg-surface sm:aspect-[5/6]"
      aria-label={`${project.title} — abrir em nova aba`}
    >
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 92vw"
        className="object-cover object-top"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      <div aria-hidden className="work-card__shape absolute bottom-0 right-0 h-2/5 w-2/5 bg-accent/90" />

      <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6">
        <p className="eyebrow flex items-center justify-between text-muted">
          <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
          <span>{project.role}</span>
        </p>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="display text-[clamp(2.4rem,4.4vw,3.6rem)]">
              {words.map((word) => (
                <span key={word} className="block">
                  {word}
                </span>
              ))}
            </h3>
            <p className="eyebrow mt-3 text-[0.64rem] text-muted">
              {project.stack.slice(0, 3).join(" · ")}
            </p>
          </div>
          <span
            aria-hidden
            className="work-card__arrow flex h-11 w-11 shrink-0 items-center justify-center border border-foreground/40"
          >
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </a>
  );
}

export function Work() {
  return (
    <section id="projetos" className="border-t border-border py-24 md:py-32">
      <div className="wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p data-reveal className="eyebrow text-accent">Projetos selecionados</p>
            <h2 data-lines className="display mt-4 text-[clamp(3rem,8vw,6.5rem)]">
              <span className="line-mask"><span>Produtos</span></span>
              <span className="line-mask"><span>no ar.</span></span>
            </h2>
          </div>
          <a
            data-reveal
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow link-draw self-start text-muted hover:text-foreground md:self-end"
          >
            Ver todos no GitHub <ArrowUpRight className="h-4 w-4 text-accent" aria-hidden />
          </a>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {carouselProjects.map((project, index) => (
            <WorkCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <div className="mt-20">
          <p data-reveal className="eyebrow text-muted">Outros projetos</p>
          <ul className="mt-6 border-t border-border">
            {compactProjects.map((project) => {
              const href = project.live || project.github || site.github;
              return (
                <li key={project.slug} data-reveal className="border-b border-border">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative isolate grid gap-2 overflow-hidden py-6 md:grid-cols-12 md:items-center md:gap-6"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-surface transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:scale-y-100"
                    />
                    <h3 className="display text-[2rem] transition-transform duration-500 group-hover:translate-x-3 md:col-span-4">
                      {project.title}
                    </h3>
                    <p className="text-muted md:col-span-5">{project.problem}</p>
                    <p className="eyebrow flex items-center justify-between gap-4 text-muted md:col-span-3 md:justify-end">
                      {project.stack.join(" · ")}
                      <ArrowUpRight
                        aria-hidden
                        className="h-5 w-5 shrink-0 text-accent transition-transform duration-500 group-hover:rotate-45"
                      />
                    </p>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
