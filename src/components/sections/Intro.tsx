import Image from "next/image";
import { site } from "@/data/site";
import { TextLink } from "@/components/ui/TextLink";
import FoldText from "@/components/FoldText";
import Threads from "@/components/Threads";

export function Intro() {
  return (
    <section className="relative pt-16 md:pt-24 lg:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-10 h-[min(58vh,440px)] opacity-45 dark:opacity-30"
      >
        <Threads color={[0.38, 0.58, 0.51]} amplitude={0.7} distance={0.15} />
      </div>
      <div className="relative grid items-end gap-10 lg:grid-cols-12 lg:gap-6">
        <div className="animate-rise lg:col-span-6">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.16em] text-muted">
            {site.role} · {site.location}
          </p>
          <h1 className="mt-7 max-w-[46rem]">
            <FoldText
              className="name-fold"
              text={site.name}
              splitBy="char"
              hinge="bottom"
              trigger="loop"
              repeatDelay={3}
              duration={0.72}
              stagger={0.055}
              perspective={900}
              creaseShading={0.38}
              fontSize="clamp(2.35rem, 5.6vw, 4.6rem)"
              fontWeight={550}
              color="var(--foreground)"
            />
          </h1>
          <p className="mt-8 max-w-[28rem] text-[1.125rem] leading-relaxed text-muted md:text-[1.2rem]">
            {site.headline}
          </p>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            <TextLink href="#trabalho">Ver trabalho</TextLink>
            <TextLink href="#contato">Fale comigo</TextLink>
            <TextLink href={site.resume} download={site.resumeDownloadName}>
              Baixar currículo
            </TextLink>
          </div>
        </div>
        <div
          className="animate-rise lg:col-span-6"
          style={{ animationDelay: "120ms" }}
        >
          <div className="relative mx-auto aspect-square w-full max-w-[22rem] sm:max-w-[26rem] lg:ml-auto lg:mr-0 lg:max-w-[32rem]">
            <Image
              src={site.portrait}
              alt={site.portraitAlt}
              fill
              priority
              unoptimized
              sizes="(min-width: 1024px) 512px, 90vw"
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
