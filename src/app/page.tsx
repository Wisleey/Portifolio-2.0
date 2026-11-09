import { IntroLoader } from "@/components/intro/IntroLoader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteNav } from "@/components/layout/SiteNav";
import { Motion } from "@/components/motion/Motion";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Stack } from "@/components/sections/Stack";
import { Work } from "@/components/sections/Work";

export default function Home() {
  return (
    <>
      <IntroLoader />
      <a
        href="#conteudo"
        className="absolute left-4 top-4 z-[60] -translate-y-[200%] bg-accent px-3 py-2 text-sm text-background focus:translate-y-0"
      >
        Ir para o conteúdo
      </a>
      <SiteNav />
      <main id="conteudo">
        <Hero />
        <Work />
        <Services />
        <Stack />
        <Experience />
        <Process />
        <Contact />
      </main>
      <SiteFooter />
      <Motion />
    </>
  );
}
