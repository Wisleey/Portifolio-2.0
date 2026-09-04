"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Project } from "@/types";
import { TextLink } from "@/components/ui/TextLink";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 7000;

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [index, setIndex] = useState(0);
  const [interacting, setInteracting] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const count = projects.length;

  const goTo = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );

  useEffect(() => {
    if (interacting) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % count),
      AUTOPLAY_MS,
    );
    return () => window.clearInterval(timer);
  }, [interacting, count]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    }
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
    setInteracting(true);
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) > 48) goTo(delta < 0 ? index + 1 : index - 1);
  };

  return (
    <section
      aria-roledescription="carrossel"
      aria-label="Projetos em destaque"
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocusCapture={() => setInteracting(true)}
      onBlurCapture={() => setInteracting(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {projects.map((project, slideIndex) => {
            const active = slideIndex === index;
            return (
              <article
                key={project.slug}
                inert={!active || undefined}
                aria-hidden={!active}
                className="w-full shrink-0"
              >
                <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
                  <a
                    href={project.live ?? project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`Abrir ${project.title} em nova aba`}
                    className="group relative block overflow-hidden bg-surface lg:col-span-7"
                  >
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 640px, 92vw"
                        priority={slideIndex === 0}
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02] motion-reduce:transition-none"
                      />
                    </div>
                  </a>
                  <div
                    className={cn(
                      "flex flex-col justify-between gap-8 transition-all duration-500 delay-150 lg:col-span-5",
                      active
                        ? "translate-y-0 opacity-100"
                        : "translate-y-3 opacity-0",
                      "motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none",
                    )}
                  >
                    <div>
                      <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted">
                        {String(slideIndex + 1).padStart(2, "0")} ·{" "}
                        {project.role}
                      </p>
                      <h3 className="mt-3 text-[clamp(1.5rem,3vw,2rem)] font-medium tracking-[-0.02em]">
                        {project.title}
                      </h3>
                      <p className="mt-4 text-muted">{project.problem}</p>
                      <p className="mt-3">{project.solution}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-muted">
                        {project.stack.join(" · ")}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                        {project.live ? (
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
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-8 flex items-center gap-6">
        <p className="font-mono text-[0.75rem] tracking-[0.1em] text-muted">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(count).padStart(2, "0")}
        </p>
        <div className="h-px flex-1 bg-border" aria-hidden>
          <div
            className="h-px bg-foreground transition-all duration-500 ease-out motion-reduce:transition-none"
            style={{ width: `${((index + 1) / count) * 100}%` }}
          />
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Projeto anterior"
            className="flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:border-foreground"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M10.5 3 5.5 8l5 5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Próximo projeto"
            className="flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:border-foreground"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="m5.5 3 5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
