import type { Project } from "@/types";
import { TextLink } from "@/components/ui/TextLink";

const statusLabel: Record<Project["status"], string | null> = {
  live: null,
  paused: "Pausado",
  study: "Estudo",
};

export function ProjectRow({ project }: { project: Project }) {
  const rawStatus = statusLabel[project.status];
  const status =
    rawStatus && rawStatus.toLowerCase() !== project.role.toLowerCase()
      ? rawStatus
      : null;
  const showLive = Boolean(project.live && project.live !== project.github);

  return (
    <article className="grid gap-4 border-t border-border py-8 md:grid-cols-12 md:items-baseline md:gap-6">
      <div className="md:col-span-4">
        <h3 className="text-[1.2rem] font-medium tracking-[-0.015em]">
          {project.title}
        </h3>
        <p className="mt-1 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-muted">
          {project.role}
          {status ? ` · ${status}` : ""}
        </p>
      </div>
      <p className="md:col-span-4 text-muted">{project.problem}</p>
      <div className="md:col-span-4 md:text-right">
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-muted">
          {project.stack.join(" · ")}
        </p>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
          {showLive && project.live ? (
            <TextLink href={project.live} external>
              Ver produto
            </TextLink>
          ) : null}
          {project.github ? (
            <TextLink href={project.github} external>
              GitHub
            </TextLink>
          ) : null}
        </div>
      </div>
    </article>
  );
}
