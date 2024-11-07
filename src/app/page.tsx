import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
    </main>
  );
}
