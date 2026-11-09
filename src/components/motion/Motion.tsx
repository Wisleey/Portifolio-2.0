"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Camada de movimento da página inteira. As seções só marcam os elementos
 * com data-atributos; tudo é animado aqui, num único contexto do GSAP.
 *
 * data-hero-*        entrada do hero, disparada quando a intro termina
 * data-lines         linhas mascaradas (.line-mask > span) sobem
 * data-reveal        sobe e aparece ao entrar na tela
 * data-clip          revela de baixo para cima (cards e fotos)
 * data-draw          linha que se desenha da esquerda
 * data-count="N"     número que conta até N
 * data-parallax="N"  desloca N% enquanto a seção passa
 * data-drift="N"     faixa que corre na horizontal com a rolagem
 * data-chars         letras (.char) caem uma a uma
 * data-magnetic      puxado levemente pelo ponteiro
 */
export function Motion() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // ---------- Hero ----------
      const hero = gsap.timeline({ paused: true, defaults: { ease: "expo.out" } });
      hero
        .from("[data-hero-nav]", { yPercent: -120, autoAlpha: 0, duration: 1.1 }, 0.1)
        .from("[data-hero-disc]", { scale: 0, rotate: -90, duration: 1.5, ease: "expo.inOut" }, 0)
        .from("[data-hero-ring]", { scale: 0.4, autoAlpha: 0, duration: 1.8 }, 0.3)
        .from("[data-hero-photo]", { clipPath: "inset(100% 0% 0% 0%)", duration: 1.4, ease: "expo.inOut" }, 0.15)
        .from("[data-hero-photo] img", { scale: 1.35, duration: 2 }, 0.15)
        .from("[data-hero-line] > span", { yPercent: 115, duration: 1.2, stagger: 0.1 }, 0.25)
        .from("[data-hero-fade]", { y: 28, autoAlpha: 0, duration: 1, stagger: 0.08 }, 0.7)
        .add(() => {
          document.querySelectorAll<HTMLElement>("[data-hero-count]").forEach((el) => {
            countUp(el, Number(el.dataset.heroCount));
          });
        }, 0.9);

      const playHero = () => {
        hero.play();
        ScrollTrigger.refresh();
      };
      if (window.__introDone) playHero();
      else window.addEventListener("intro:done", playHero, { once: true });

      // ---------- Rolagem ----------
      gsap.utils.toArray<HTMLElement>("[data-lines]").forEach((block) => {
        gsap.from(block.querySelectorAll(".line-mask > span"), {
          yPercent: 115,
          duration: 1.15,
          ease: "expo.out",
          stagger: 0.09,
          scrollTrigger: { trigger: block, start: "top 86%" },
        });
      });

      gsap.set("[data-reveal]", { autoAlpha: 0, y: 44 });
      ScrollTrigger.batch("[data-reveal]", {
        start: "top 90%",
        onEnter: (els) =>
          gsap.to(els, {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "expo.out",
            stagger: 0.09,
            overwrite: true,
          }),
      });

      gsap.set("[data-clip]", { clipPath: "inset(100% 0% 0% 0%)" });
      ScrollTrigger.batch("[data-clip]", {
        start: "top 88%",
        onEnter: (els) =>
          gsap.to(els, {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.3,
            ease: "expo.inOut",
            stagger: 0.12,
            overwrite: true,
          }),
      });

      gsap.utils.toArray<HTMLElement>("[data-draw]").forEach((line) => {
        gsap.from(line, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1.4,
          ease: "expo.inOut",
          scrollTrigger: { trigger: line, start: "top 90%" },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          once: true,
          onEnter: () => countUp(el, Number(el.dataset.count)),
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        gsap.to(el, {
          yPercent: Number(el.dataset.parallax),
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement ?? el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-drift]").forEach((el) => {
        const amount = Number(el.dataset.drift);
        gsap.fromTo(
          el,
          { xPercent: amount > 0 ? -amount : 0 },
          {
            xPercent: amount > 0 ? 0 : amount,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.6 },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-chars]").forEach((block) => {
        gsap.from(block.querySelectorAll(".char"), {
          yPercent: 120,
          rotate: 8,
          duration: 0.9,
          ease: "expo.out",
          stagger: 0.025,
          scrollTrigger: { trigger: block, start: "top 85%" },
        });
      });
    });

    // ---------- Ponteiro: cursor e ímã ----------
    mm.add("(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)", () => {
      const dotX = gsap.quickTo(dot.current, "x", { duration: 0.12, ease: "power3" });
      const dotY = gsap.quickTo(dot.current, "y", { duration: 0.12, ease: "power3" });
      const ringX = gsap.quickTo(ring.current, "x", { duration: 0.5, ease: "power3" });
      const ringY = gsap.quickTo(ring.current, "y", { duration: 0.5, ease: "power3" });

      const move = (event: PointerEvent) => {
        dot.current?.classList.add("is-on");
        ring.current?.classList.add("is-on");
        dotX(event.clientX);
        dotY(event.clientY);
        ringX(event.clientX);
        ringY(event.clientY);
      };
      const over = (event: PointerEvent) => {
        const target = event.target as HTMLElement;
        ring.current?.classList.toggle("is-hover", Boolean(target.closest("a, button")));
      };
      window.addEventListener("pointermove", move);
      window.addEventListener("pointerover", over);

      const magnets = gsap.utils.toArray<HTMLElement>("[data-magnetic]").map((el) => {
        const toX = gsap.quickTo(el, "x", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
        const toY = gsap.quickTo(el, "y", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
        const onMove = (event: PointerEvent) => {
          const box = el.getBoundingClientRect();
          toX((event.clientX - (box.left + box.width / 2)) * 0.3);
          toY((event.clientY - (box.top + box.height / 2)) * 0.3);
        };
        const onLeave = () => {
          toX(0);
          toY(0);
        };
        el.addEventListener("pointermove", onMove);
        el.addEventListener("pointerleave", onLeave);
        return () => {
          el.removeEventListener("pointermove", onMove);
          el.removeEventListener("pointerleave", onLeave);
        };
      });

      return () => {
        window.removeEventListener("pointermove", move);
        window.removeEventListener("pointerover", over);
        magnets.forEach((off) => off());
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" aria-hidden />
      <div ref={ring} className="cursor-ring" aria-hidden />
    </>
  );
}

function countUp(el: HTMLElement, target: number) {
  const state = { value: 0 };
  gsap.to(state, {
    value: target,
    duration: 1.6,
    ease: "power3.out",
    onUpdate: () => {
      el.textContent = String(Math.round(state.value)).padStart(2, "0");
    },
  });
}
