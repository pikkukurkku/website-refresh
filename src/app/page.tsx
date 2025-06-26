import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import Projects from "@/components/ui/Projects";
import Kunden from "@/components/ui/Kunden";
import Footer from "@/components/ui/Footer";

export default function HomePage() {
  return (
    <>
      <section id="home">
        <Header />
      </section>
      <Hero />
      <section id="projects">
        <Projects />
      </section>
      <section id="kunden">
        <Kunden />
      </section>
  <Footer />
    </>
  );
}
