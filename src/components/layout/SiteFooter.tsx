import { site } from "@/data/site";
import { TextLink } from "@/components/ui/TextLink";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-4 px-6 py-10 md:flex-row md:items-end md:justify-between md:px-8">
        <p className="text-sm leading-relaxed text-muted">
          © {site.copyrightYear} {site.name}. Todos os direitos reservados.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-x-6">
          <TextLink href={site.resume} download={site.resumeDownloadName}>
            Currículo
          </TextLink>
          <TextLink href={`mailto:${site.email}`}>{site.email}</TextLink>
        </div>
      </div>
    </footer>
  );
}
