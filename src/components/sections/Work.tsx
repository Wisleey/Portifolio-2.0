import { carouselProjects, compactProjects } from "@/data/projects";
import { ProjectCarousel } from "@/components/project/ProjectCarousel";
import { ProjectRow } from "@/components/project/ProjectRow";

export function Work() {
  return (
    <section
      id="trabalho"
      className="scroll-mt-20 border-t border-border py-16 md:py-24 lg:py-28 lg:scroll-mt-8"
    >
      <div className="mb-14 flex items-baseline justify-between gap-4">
        <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium tracking-[-0.02em]">
          Trabalho
        </h2>
        <p className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-muted">
          Seleção
        </p>
      </div>
      <ProjectCarousel projects={carouselProjects} />
      <div className="mt-20">
        <p className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-muted">
          Outros projetos
        </p>
        <div className="mt-6">
          {compactProjects.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
