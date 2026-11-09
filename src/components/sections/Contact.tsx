import { ArrowUpRight, Download, Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { site } from "@/data/site";

function chars(text: string) {
  return Array.from(text).map((char, index) => (
    <span key={index} className="char inline-block">
      {char === " " ? " " : char}
    </span>
  ));
}

const channels = [
  { label: "WhatsApp", href: site.whatsapp, icon: FaWhatsapp },
  { label: "LinkedIn", href: site.linkedin, icon: FaLinkedinIn },
  { label: "GitHub", href: site.github, icon: SiGithub },
];

export function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden border-t border-border py-24 md:py-32">
      <div
        aria-hidden
        data-parallax="-20"
        className="pointer-events-none absolute -right-[20vw] top-1/4 aspect-square w-[60vw] rounded-full bg-accent/10 blur-3xl"
      />
      <div className="wrap relative grid gap-14 lg:grid-cols-12 lg:items-end lg:gap-8">
        <div className="lg:col-span-7">
          <p data-reveal className="eyebrow text-accent">Contato</p>
          <h2 data-chars className="display mt-4 text-[clamp(3.4rem,9vw,7.8rem)]">
            <span className="line-mask">
              <span className="inline-block">{chars("Vamos criar")}</span>
            </span>
            <span className="line-mask">
              <span className="inline-block">
                {chars("algo ")}
                <span className="text-accent">{chars("grande.")}</span>
              </span>
            </span>
          </h2>
        </div>

        <div className="lg:col-span-5">
          <a
            data-reveal
            href={`mailto:${site.email}`}
            className="group flex items-center justify-between gap-4 border-b border-border pb-5"
          >
            <span className="min-w-0">
              <span className="eyebrow block text-muted">E-mail</span>
              <span className="mt-2 block truncate text-[clamp(1.1rem,2vw,1.5rem)] font-medium transition-colors group-hover:text-accent">
                {site.email}
              </span>
            </span>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-accent text-background transition-transform duration-500 group-hover:rotate-45">
              <ArrowUpRight className="h-5 w-5" aria-hidden />
            </span>
          </a>

          <ul className="mt-8 grid grid-cols-3 gap-3">
            {channels.map(({ label, href, icon: Icon }) => (
              <li key={label} data-reveal>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col items-start gap-6 border border-border p-4 transition-colors duration-300 hover:border-accent hover:bg-accent/10"
                >
                  <Icon aria-hidden className="h-5 w-5 text-accent transition-transform duration-500 group-hover:-translate-y-1" />
                  <span className="eyebrow text-[0.66rem]">{label}</span>
                </a>
              </li>
            ))}
          </ul>

          <a
            data-reveal
            href={site.resume}
            download={site.resumeDownloadName}
            className="btn btn--solid mt-8 w-full"
            data-magnetic
          >
            Baixar currículo <Download aria-hidden />
          </a>
        </div>
      </div>

      <div className="wrap relative mt-20">
        <div className="flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted sm:flex-row sm:flex-wrap sm:gap-x-10">
          <a href={`mailto:${site.email}`} className="link-draw gap-2 hover:text-foreground">
            <Mail className="h-4 w-4 text-accent" aria-hidden /> {site.email}
          </a>
          <a href={`tel:${site.phoneTel}`} className="link-draw gap-2 hover:text-foreground">
            <Phone className="h-4 w-4 text-accent" aria-hidden /> {site.phoneDisplay}
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" aria-hidden /> {site.location}
          </span>
        </div>
      </div>
    </section>
  );
}
