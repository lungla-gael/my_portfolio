import Navbar from "./ui/Navbar";
import Hero from "./ui/Hero";
import Footer from "./ui/Footer";
import About from "./ui/About";
import Skills from "./ui/Skills";
import Projects from "./ui/Projects";
import Contact from "./ui/Contact";

// import { fetchRepos } from './lib/github';

export default function Home() {
  // const repos = await fetchRepos('lungla-gael');
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <hr />
      <Footer />
    </main>
  );
}
