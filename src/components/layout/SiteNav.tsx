"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navItems, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#topo"
      className={cn("group inline-flex items-baseline font-mono text-[1.05rem] font-medium tracking-tight", className)}
      aria-label={`${site.name} — início`}
    >
      <span className="text-accent transition-transform duration-300 group-hover:-translate-x-0.5">&lt;</span>
      <span className="display px-0.5 text-[1.35rem] leading-none">WR</span>
      <span className="text-accent transition-transform duration-300 group-hover:translate-x-0.5">/&gt;</span>
    </a>
  );
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open || !menu.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(menu.current, { clipPath: "inset(0% 0% 100% 0%)", duration: 0.7, ease: "expo.inOut" });
      gsap.from(".menu-link > span", { yPercent: 110, duration: 0.9, ease: "expo.out", stagger: 0.06, delay: 0.3 });
    }, menu);
    return () => ctx.revert();
  }, [open]);

  return (
    <header
      data-hero-nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-500",
        scrolled || open
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="wrap flex h-16 items-center justify-between md:h-20">
        <Logo />

        <nav aria-label="Seções" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="eyebrow link-draw text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contato" className="btn hidden !min-h-10 lg:inline-flex" data-magnetic>
          Vamos conversar <ArrowUpRight aria-hidden />
        </a>

        <button
          type="button"
          className="flex h-10 w-10 cursor-pointer items-center justify-center border border-border lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      {open ? (
        <div
          ref={menu}
          id="menu-mobile"
          className="fixed inset-x-0 bottom-0 top-16 flex flex-col justify-between bg-background px-4 pb-8 pt-10 lg:hidden"
        >
          <nav aria-label="Seções">
            <ul className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="menu-link display line-mask flex items-baseline gap-4 text-[clamp(2.8rem,13vw,4.5rem)]"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="eyebrow text-accent">0{index + 1}</span>
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a href={site.resume} download={site.resumeDownloadName} className="btn btn--solid w-full">
            Baixar currículo
          </a>
        </div>
      ) : null}
    </header>
  );
}
