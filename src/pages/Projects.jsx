import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { LuExternalLink } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import ecommerce from "../assets/Ecommerce.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full px-4 py-10">
      <div className="w-full flex flex-col items-center space-y-6 my-5">
        <div
          className="flex flex-col space-y-4 items-center mb-5 w-full max-w-lg sm:max-w-xl md:max-w-4xl"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            My Projects
          </h1>
          <div
            className="h-1 rounded-lg w-20 bg-black inline-block"
            data-aos="fade-up"
            data-aos-delay="200"
          ></div>
          <div
            className="w-full max-w-md sm:max-w-lg md:max-w-xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p className="text-[16px] text-gray-500 text-center">
              Here are some of the projects I've worked on. Each project
              represents different skills and technologies I've mastered
              throughout my journey.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
          {[1, 2].map((_, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
              data-aos="zoom-in-up"
              data-aos-delay={400 + index * 200}
            >
              <a href="#">
                <img
                  className="rounded-t-lg w-full h-50 object-center object-cover block"
                  src={ecommerce}
                  alt="E-Commerce"
                />
              </a>
              <div className="p-5 space-y-3 md:p-8 flex flex-col">
                <a href="#">
                  <h5
                    className="text-xl font-bold tracking-tight text-gray-900"
                    data-aos="fade-up"
                    data-aos-delay={500 + index * 200}
                  >
                    E-Commerce Platform
                  </h5>
                </a>
                <p
                  className="font-normal text-gray-700"
                  data-aos="fade-up"
                  data-aos-delay={600 + index * 200}
                >
                  A full-featured e-commerce platform with product management,
                  cart functionality, and payment integration.
                </p>
                <div
                  className="flex flex-wrap md:flex-nowrap gap-2"
                  data-aos="fade-up"
                  data-aos-delay={700 + index * 200}
                >
                  {["React", "Node.js", "MongoDB", "Tailwind CSS"].map(
                    (tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 px-2 text-center text-xs rounded py-1"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
                <div
                  className="flex gap-4"
                  data-aos="fade-up"
                  data-aos-delay={800 + index * 200}
                >
                  <NavLink
                    className="text-center rounded-md flex gap-2 hover:bg-gray-100 items-center text-[14px] text-gray-900 border border-gray-300 py-1 px-3"
                    to=""
                  >
                    <LuExternalLink />
                    <span>Live Demo</span>
                  </NavLink>
                  <NavLink
                    className="text-center hover:bg-gray-100 rounded-md flex gap-2 items-center text-[14px] text-gray-900 border border-gray-300 py-1 px-3"
                    to=""
                  >
                    <FiGithub />
                    <span>Code</span>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
