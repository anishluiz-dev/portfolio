import { Hero } from "../presentation/hero";
import { About } from "../presentation/about";
import { Skills } from "../presentation/skills";
import { Experience } from "../presentation/experience";
import { WorkHighlights } from "../presentation/work-highlights";
import { Contact } from "../presentation/contact";
import { Footer } from "../presentation/footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <WorkHighlights />
      <Contact />
      <Footer />
    </div>
  );
}
