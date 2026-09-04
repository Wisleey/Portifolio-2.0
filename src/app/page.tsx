import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteIndex } from "@/components/layout/SiteIndex";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Intro } from "@/components/sections/Intro";
import { Practice } from "@/components/sections/Practice";
import { Stack } from "@/components/sections/Stack";
import { Work } from "@/components/sections/Work";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="absolute left-4 top-4 z-50 -translate-y-[200%] bg-surface px-3 py-2 text-sm text-foreground focus:translate-y-0"
      >
        Ir para o conteúdo
      </a>
      <SiteIndex />
      <div className="lg:pl-[152px]">
        <main id="conteudo" className="mx-auto w-full max-w-[1120px] px-6 md:px-8">
          <div id="introducao" className="scroll-mt-20 lg:scroll-mt-8">
            <Intro />
            <About />
          </div>
          <Work />
          <Stack />
          <Practice />
          <Contact />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
