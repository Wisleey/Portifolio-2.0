import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import Particles from "@/components/Particles";

const liveCount = projects.filter((project) => project.status === "live").length;

export function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-14 pt-28 md:pt-32"
    >
      {/* partículas (React Bits) no fundo do hero */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Particles
          particleColors={["#e9b44c", "#f2f2f2", "#7a7a7a"]}
          particleCount={260}
          particleSpread={11}
          speed={0.08}
          particleBaseSize={90}
          sizeRandomness={1}
          alphaParticles
          connections
          connectionDistance={90}
          glow={0.4}
          twinkle={0.4}
          hoverEffect="repel"
          clickBurst={false}
          opacity={0.75}
          pixelRatio={undefined}
          style={undefined}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,var(--background)_95%)]" />
      </div>

      {/* número gigante de fundo */}
      <span
        aria-hidden
        data-parallax="-30"
        className="display outline-text pointer-events-none absolute -right-6 bottom-0 select-none text-[38vw] leading-none lg:text-[24vw]"
      >
        &lt;/&gt;
      </span>

      <div className="wrap relative grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <p data-hero-fade className="eyebrow flex items-center gap-3 text-accent">
            <span className="h-px w-8 bg-accent" aria-hidden />
            {site.role}
          </p>

          <h1 className="display hero-title mt-10">
            <span data-hero-line className="line-mask">
              <span>Código</span>
            </span>
            <span data-hero-line className="line-mask">
              <span>que move</span>
            </span>
            <span data-hero-line className="line-mask">
              <span className="text-accent">negócios.</span>
            </span>
          </h1>

          <p data-hero-fade className="mt-8 max-w-md text-[1.05rem] text-muted">
            Crio aplicações web completas — interface, API, dados e pagamentos —
            e transformo rotinas de negócio em fluxos digitais.
          </p>

          <div data-hero-fade className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#projetos" className="btn btn--solid" data-magnetic>
              Ver projetos <ArrowUpRight aria-hidden />
            </a>
            <a
              href={site.resume}
              download={site.resumeDownloadName}
              className="btn btn--ghost"
              data-magnetic
            >
              Baixar currículo <Download aria-hidden />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[26rem] lg:col-span-5 lg:mr-0 lg:max-w-[27rem]">
          <div className="hero-figure relative aspect-[4/5] w-full">
            <div
              data-hero-ring
              aria-hidden
              className="hero-ring spin-slow absolute -inset-6 rounded-full border-dashed"
            />
            <div
              data-hero-disc
              aria-hidden
              className="absolute inset-0 translate-x-4 -translate-y-4 border border-accent/70 sm:translate-x-5 sm:-translate-y-5"
            />
            <div
              data-hero-photo
              className="absolute inset-0 overflow-hidden bg-surface"
            >
              <Image
                src={site.portrait}
                alt={site.portraitAlt}
                fill
                priority
                sizes="(min-width: 1024px) 480px, 90vw"
                className="hero-photo object-cover object-top"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/90 to-transparent"
              />
            </div>

            <div
              data-hero-fade
              className="absolute -left-3 bottom-6 flex gap-6 border-l-2 border-accent bg-background/85 px-5 py-4 backdrop-blur-sm sm:-left-8"
            >
              <div>
                <p className="display text-[2.6rem] text-accent">
                  <span data-hero-count="2">02</span>+
                </p>
                <p className="eyebrow mt-1 text-[0.62rem] text-muted">Anos de experiência</p>
              </div>
              <div>
                <p className="display text-[2.6rem]">
                  <span data-hero-count={liveCount}>{String(liveCount).padStart(2, "0")}</span>
                </p>
                <p className="eyebrow mt-1 text-[0.62rem] text-muted">Produtos no ar</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#projetos"
        data-hero-fade
        className="eyebrow absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-muted md:flex"
        aria-label="Rolar até os projetos"
      >
        Role
        <span className="relative block h-10 w-px overflow-hidden bg-border">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-[scrollcue_1.8s_ease-in-out_infinite] bg-accent" />
        </span>
      </a>
    </section>
  );
}
