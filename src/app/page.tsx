import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import ResumeSection from "@/components/ResumeSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
