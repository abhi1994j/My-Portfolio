import React from "react";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { Element } from "react-scroll";

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
