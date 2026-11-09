"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { site } from "@/data/site";

declare global {
  interface Window {
    __introDone?: boolean;
  }
}

const NAME = site.name.toUpperCase();
const SUBLINE = `${site.role} · ${site.location}`.toUpperCase();
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/{}#=*01";

function randomGlyph() {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
}

/**
 * Intro em estilo "logo animation": o ícone </> nasce de uma barra que gira,
 * os sinais se abrem e o nome entra entre eles como uma tag HTML:
 * <WISLEY RODRIGUES />. Depois uma cortina vermelha revela o site.
 */
export function IntroLoader() {
  const root = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const signal = () => {
      if (window.__introDone) return;
      window.__introDone = true;
      window.dispatchEvent(new Event("intro:done"));
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // a intro fica oculta pelo CSS de movimento reduzido
      signal();
      return;
    }

    const html = document.documentElement;
    html.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(el);
      const lockup = q(".intro__lockup")[0] as HTMLElement;
      const nameBox = q(".intro__name")[0] as HTMLElement;
      const chars = q(".intro__char") as HTMLElement[];
      const sub = q(".intro__sub-text")[0] as HTMLElement;
      const counter = q(".intro__count")[0] as HTMLElement;
      const fullWidth = nameBox.scrollWidth;

      gsap.set(nameBox, { width: 0 });
      gsap.set(chars, { yPercent: 115 });
      gsap.set(q(".intro__lt"), { x: "0.35em", autoAlpha: 0 });
      gsap.set(q(".intro__gt"), { x: "-0.35em", autoAlpha: 0 });
      gsap.set(q(".intro__slash"), { scaleY: 0, rotate: -140 });
      gsap.set(lockup, { scale: 0.55, rotate: -90 });
      gsap.set(q(".intro__meta"), { autoAlpha: 0, y: 12 });

      const load = { value: 0 };
      const typed = { value: 0 };

      const tl = gsap.timeline({
        defaults: { ease: "expo.out" },
        onComplete: () => setDone(true),
      });
      timeline.current = tl;

      tl
        // 1. contador de carregamento e metadados
        .to(q(".intro__meta"), { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.08 }, 0)
        .to(
          load,
          {
            value: 100,
            duration: 2.6,
            ease: "power2.inOut",
            onUpdate: () => {
              counter.textContent = String(Math.round(load.value)).padStart(3, "0");
            },
          },
          0,
        )
        // 2. a barra nasce girando
        .to(q(".intro__slash"), { scaleY: 1, rotate: 0, duration: 0.7 }, 0.15)
        // 3. os sinais < > se abrem e o ícone gira até o lugar
        .to(q(".intro__lt"), { x: 0, autoAlpha: 1, duration: 0.55, ease: "back.out(2.4)" }, 0.5)
        .to(q(".intro__gt"), { x: 0, autoAlpha: 1, duration: 0.55, ease: "back.out(2.4)" }, 0.5)
        .to(lockup, { scale: 1, rotate: 0, duration: 1, ease: "expo.inOut" }, 0.35)
        // 4. o nome abre espaço dentro da tag
        .to(nameBox, { width: fullWidth, duration: 1, ease: "power4.inOut" }, 1.25)
        .to(
          chars,
          {
            yPercent: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.035,
            onStart() {
              // cada letra "decodifica" antes de assentar
              const char = this.targets()[0] as HTMLElement;
              const final = char.dataset.char ?? "";
              if (final === " ") return;
              let ticks = 0;
              const id = window.setInterval(() => {
                ticks += 1;
                char.textContent = ticks > 6 ? final : randomGlyph();
                if (ticks > 6) window.clearInterval(id);
              }, 45);
            },
          },
          1.45,
        )
        .to(q(".intro__slash"), { color: "#ffffff", duration: 0.2, yoyo: true, repeat: 1 }, 2.1)
        .to(q(".intro__bar"), { scaleX: 1, duration: 0.8, ease: "power4.inOut" }, 2.15)
        // 5. a função digita embaixo
        .to(
          typed,
          {
            value: SUBLINE.length,
            duration: 0.9,
            ease: "none",
            onUpdate: () => {
              sub.textContent = SUBLINE.slice(0, Math.round(typed.value));
            },
          },
          2.3,
        )
        .addLabel("exit", "+=0.55")
        // 6. saída: letras sobem, tag fecha, cortina vermelha
        .to(chars, { yPercent: -115, duration: 0.45, ease: "power3.in", stagger: 0.015 }, "exit")
        .to(q(".intro__bar"), { scaleX: 0, transformOrigin: "right", duration: 0.45, ease: "power3.in" }, "exit")
        .to(q(".intro__sub, .intro__meta"), { autoAlpha: 0, duration: 0.3 }, "exit")
        .to(nameBox, { width: 0, duration: 0.55, ease: "power4.inOut" }, "exit+=0.3")
        .to(lockup, { scale: 2.4, rotate: 90, autoAlpha: 0, duration: 0.6, ease: "power3.in" }, "exit+=0.8")
        .to(q(".intro__panel"), { scaleY: 1, duration: 0.55, ease: "power4.inOut" }, "exit+=0.9")
        .call(signal, [], "exit+=1.3")
        .to(el, { yPercent: -100, duration: 0.85, ease: "power4.inOut" }, "exit+=1.4")
        .to(q(".intro__panel"), { yPercent: 30, duration: 0.85, ease: "power4.inOut" }, "<");
    }, el);

    const skip = (event: KeyboardEvent) => {
      if (event.key === "Escape") timeline.current?.timeScale(5);
    };
    window.addEventListener("keydown", skip);

    return () => {
      window.removeEventListener("keydown", skip);
      html.style.overflow = "";
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    if (done) document.documentElement.style.overflow = "";
  }, [done]);

  if (done) return null;

  return (
    <div ref={root} className="intro" role="presentation">
      <div className="intro__grid" aria-hidden />

      <div className="intro__meta eyebrow absolute left-4 top-5 text-muted md:left-8 md:top-7">
        Portfólio · {site.copyrightYear}
      </div>
      <div className="intro__meta eyebrow absolute right-4 top-5 text-muted md:right-8 md:top-7">
        <span className="intro__count text-foreground">000</span>%
      </div>

      <div className="relative flex flex-col items-center">
        <p className="intro__lockup" aria-label={`<${site.name} />`}>
          <span className="intro__chev intro__lt" aria-hidden>
            &lt;
          </span>
          <span className="intro__name" aria-hidden>
            {Array.from(NAME).map((char, index) => {
              const value = char === " " ? " " : char;
              return (
                <span key={index} className="intro__char" data-char={value}>
                  {value}
                </span>
              );
            })}
          </span>
          <span className="intro__chev intro__slash" aria-hidden>
            /
          </span>
          <span className="intro__chev intro__gt" aria-hidden>
            &gt;
          </span>
          <span className="intro__bar" aria-hidden />
        </p>
        <p className="intro__sub eyebrow mt-10 h-4 text-[0.58rem] text-muted md:text-[0.72rem]" aria-hidden>
          <span className="intro__sub-text" />
          <span className="caret" />
        </p>
      </div>

      <button
        type="button"
        onClick={() => timeline.current?.timeScale(5)}
        className="intro__meta eyebrow link-draw absolute bottom-6 right-4 cursor-pointer text-muted hover:text-foreground md:right-8"
      >
        Pular intro
      </button>

      <div className="intro__panel" aria-hidden />
    </div>
  );
}
