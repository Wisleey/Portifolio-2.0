import { Download } from "lucide-react";
import { education, experiences } from "@/data/experience";
import { site } from "@/data/site";

export function Experience() {
  return (
    <section id="experiencia" className="border-t border-border py-24 md:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <p data-reveal className="eyebrow text-accent">Experiência</p>
          <h2 data-lines className="display mt-4 text-[clamp(2.8rem,5.6vw,4.6rem)]">
            <span className="line-mask"><span>Formação e</span></span>
            <span className="line-mask"><span>projetos reais.</span></span>
          </h2>
          <div data-reveal className="mt-8 border-l-2 border-accent pl-5">
            <p className="font-medium">{education.title}</p>
            <p className="mt-1 text-sm text-muted">
              {education.school} · {education.year}
            </p>
          </div>
          <a
            data-reveal
            href={site.resume}
            download={site.resumeDownloadName}
            className="btn mt-10"
            data-magnetic
          >
            Currículo completo <Download aria-hidden />
          </a>
        </div>

        <ol className="grid gap-px self-start bg-border sm:grid-cols-2 lg:col-span-8">
          {experiences.map((item) => (
            <li
              key={item.company}
              data-reveal
              className="group relative flex flex-col gap-4 overflow-hidden bg-background p-6 md:p-8"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:scale-x-100"
              />
              <p className="eyebrow flex items-center justify-between gap-4 text-accent">
                {item.period}
                <span className="text-muted">{item.kind}</span>
              </p>
              <div>
                <h3 className="display text-[2.2rem] transition-colors duration-300 group-hover:text-accent">
                  {item.company}
                </h3>
                <p className="mt-1 text-sm">{item.role}</p>
              </div>
              <p className="text-sm text-muted">{item.summary}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
