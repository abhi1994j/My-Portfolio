import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { Element } from "react-scroll";
import Hero from "../components/Hero";

const HomeLayout = () => {
  return (
    <>
      <Element name="hero">
        <Hero/>
      </Element>
      <Element name="about">
        <About />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

    </>
  );
};

export default HomeLayout;
