"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/data/site";
import { site } from "@/data/site";
import { socials } from "@/data/socials";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

export function SiteIndex() {
  const [activeId, setActiveId] = useState(navItems[0].id);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background lg:hidden">
        <div className="flex items-center justify-between px-6 py-3">
          <a href="#introducao" className="font-medium tracking-tight">
            {site.shortName}
          </a>
          <button
            type="button"
            className="cursor-pointer font-mono text-[0.72rem] font-medium uppercase tracking-[0.14em] text-foreground"
            aria-expanded={menuOpen}
            aria-controls="mobile-index"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Fechar" : "Índice"}
          </button>
        </div>
        {menuOpen ? (
          <nav
            id="mobile-index"
            aria-label="Índice da página"
            className="border-t border-border px-6 py-4"
          >
            <IndexLinks
              activeId={activeId}
              onNavigate={closeMenu}
              className="flex flex-col gap-3"
            />
            <div className="mt-5 border-t border-border pt-4">
              <ThemeButton theme={theme} onToggle={toggleTheme} />
            </div>
          </nav>
        ) : null}
      </header>

      <aside className="pointer-events-none fixed inset-y-0 left-0 z-30 hidden w-[152px] lg:block">
        <div className="pointer-events-auto flex h-full flex-col justify-between border-r border-border px-5 py-8">
          <a
            href="#introducao"
            className="font-medium tracking-tight text-foreground"
          >
            {site.shortName}
          </a>
          <nav aria-label="Índice da página">
            <IndexLinks activeId={activeId} className="flex flex-col gap-2.5" />
          </nav>
          <div className="flex flex-col gap-4">
            <ThemeButton theme={theme} onToggle={toggleTheme} />
            <ul className="flex flex-col gap-1.5">
              {socials.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted transition-colors duration-200 hover:text-accent"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}

function IndexLinks({
  activeId,
  onNavigate,
  className,
}: {
  activeId: string;
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <ul className={className}>
      {navItems.map((item) => {
        const isActive = item.id === activeId;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={onNavigate}
              aria-current={isActive ? "location" : undefined}
              className={cn(
                "font-mono text-[0.72rem] uppercase tracking-[0.14em] transition-colors duration-200",
                isActive ? "text-accent" : "text-muted hover:text-foreground",
              )}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function ThemeButton({
  theme,
  onToggle,
}: {
  theme: "light" | "dark";
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="cursor-pointer self-start font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted transition-colors duration-200 hover:text-foreground"
      aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
    >
      {theme === "dark" ? "Claro" : "Escuro"}
    </button>
  );
}
