import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/Common/ScrollToTop/ScrollToTop";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />

      <ScrollToTop />
    </>
  );
}

export default Home;