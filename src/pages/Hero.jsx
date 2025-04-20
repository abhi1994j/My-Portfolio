import { FaArrowRight } from "react-icons/fa";
import profile from "../assets/profile.png";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      <section className="px-1 md:px-2 py-10 w-[100%]">
        <div className="mt-4 mx-2 space-y-4 flex flex-col justify-between items-center md:flex-row p-2">
          {/* Left Section */}
          <div
            className="flex flex-col justify-between md:items-start w-full md:w-1/2 space-y-6"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl">
              Hi, I'm Abhishek
            </h1>

            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Frontend Engineer",
                2000,
                "Backend Engineer",
                2000,
              ]}
              wrapper="p"
              cursor={true}
              repeat={Infinity}
              className="text-[22px] text-gray-950 font-medium md:text-2xl lg:text-3xl"
            />

            <div
              className="text-wrap w-full max-w-md md:max-w-lg"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <p className="text-sm md:text-lg text-gray-500">
                I build exceptional and accessible digital experiences for the
                web. Passionate about creating solutions that are both
                functional and beautiful.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="300">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="flex gap-3 text-[14px] cursor-pointer items-center text-white bg-black hover:bg-gray-800 px-4 py-2 rounded-md"
              >
                <span>Contact Me</span>
                <FaArrowRight />
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="flex gap-2 text-[14px] items-center cursor-pointer text-black bg-white px-4 py-2 border border-gray-300 hover:bg-gray-100 rounded-md"
              >
                View Projects
              </Link>
            </div>

            {/* Social Icons */}
            <div
              className="flex items-center gap-4 text-xl md:text-2xl text-gray-500"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <NavLink
                target="_blank"
                className="hover:text-gray-700"
                to="https://github.com/abhi1994j"
              >
                <FiGithub />
              </NavLink>
              <NavLink
                target="_blank"
                className="hover:text-gray-700"
                to="mailto:abhibaban4@gmail.com"
              >
                <MdOutlineEmail />
              </NavLink>
              <NavLink
                target="_blank"
                className="hover:text-gray-700"
                to="https://www.linkedin.com/in/abhishek-chatterjee-9a7709209"
              >
                <LuLinkedin />
              </NavLink>
            </div>
          </div>

          {/* Right Section - Image */}
          <div
            className="flex justify-center items-center w-full md:w-1/2"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div className="w-full max-w-md md:max-w-xs m-4 transition-transform transform hover:scale-105 shadow-lg hover:shadow-2xl rounded-full bg-white/70 backdrop-blur-md border border-gray-200 p-1">
              <img
                className="w-full object-cover block rounded-full"
                src={profile}
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
