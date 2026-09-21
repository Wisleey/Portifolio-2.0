import { site } from "@/data/site";
import { socials } from "@/data/socials";
import { TextLink } from "@/components/ui/TextLink";
import StrokeText from "@/components/StrokeText";

export function Contact() {
  return (
    <section
      id="contato"
      className="scroll-mt-20 border-t border-border py-16 text-center md:py-24 lg:py-32 lg:scroll-mt-8"
    >
      <p className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-muted">
        Fale comigo
      </p>
      <h2 className="mx-auto mt-5 max-w-4xl">
        <a
          href={`mailto:${site.email}`}
          className="block"
          aria-label={`Enviar e-mail para ${site.email}`}
        >
          <StrokeText
            className="contact-stroke"
            text={site.email}
            strokeColor="var(--accent)"
            fillColor="var(--foreground)"
            strokeWidth={1.15}
            drawDuration={1.35}
            fillDelay={0.05}
            stagger={0.025}
            trigger="loop"
            repeatDelay={3}
            fillMode="wipe"
            fontSize={72}
            fontWeight={550}
            letterSpacing={-2.4}
          />
        </a>
      </h2>
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8">
        <TextLink href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</TextLink>
        <TextLink href={site.whatsapp} external>
          WhatsApp
        </TextLink>
        <TextLink href={site.resume} download={site.resumeDownloadName}>
          Currículo
        </TextLink>
        {socials.map((social) => (
          <TextLink key={social.href} href={social.href} external>
            {social.label}
          </TextLink>
        ))}
      </div>
    </section>
  );
}
