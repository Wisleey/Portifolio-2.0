import { ArrowUp } from "lucide-react";
import { site } from "@/data/site";
import { Logo } from "@/components/layout/SiteNav";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="wrap flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <Logo />
        <p className="eyebrow text-[0.64rem] text-muted">
          © {site.copyrightYear} {site.name}. Todos os direitos reservados.
        </p>
        <a href="#topo" className="eyebrow link-draw text-[0.64rem] text-muted hover:text-foreground">
          Voltar ao topo <ArrowUp className="h-3.5 w-3.5 text-accent" aria-hidden />
        </a>
      </div>
    </footer>
  );
}
