import { FaArrowRight } from "react-icons/fa";
import profile from "../assets/profile.png";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { TypeAnimation } from "react-type-animation"; // <-- Import this
import { MdOutlineEmail } from "react-icons/md";

const Hero = () => {
  return (
    <>
      <section className="px-2 py-10 w-[100%]">
        <div className="mt-4 mx-2 space-y-4 flex flex-col justify-between items-center md:flex-row p-2">
          <div className="flex flex-col justify-between md:items-start w-full md:w-1/2 space-y-6">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl">
              Hi, I'm Abhishek
            </h1>

            {/* Typing animation here */}
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'Frontend Engineer',
                2000,
                'Backend Engineer',
                2000,
              ]}
              wrapper="p"
              cursor={true}
              repeat={Infinity}
              className="text-[22px] text-gray-950 font-medium md:text-2xl lg:text-3xl"
            />

            <div className="text-wrap w-full max-w-md md:max-w-lg">
              <p className="text-sm md:text-lg text-gray-500">
                I build exceptional and accessible digital experiences for the
                web. Passionate about creating solutions that are both
                functional and beautiful.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <NavLink
                to=""
                className="flex gap-3 text-[14px] items-center text-white bg-black px-4 py-2 rounded-md"
              >
                <span>Contact Me</span>
                <span>
                  <FaArrowRight />
                </span>
              </NavLink>
              <NavLink
                to=""
                className="flex gap-2 text-[14px] items-center text-black bg-white px-4 py-2 border border-gray-300 hover:bg-gray-100 rounded-md"
              >
                View Projects
              </NavLink>
            </div>

            <div className="flex items-center gap-4 text-xl md:text-2xl text-gray-500">
              <NavLink className="hover:text-gray-700" to="">
                <FiGithub />
              </NavLink>
              <NavLink className="hover:text-gray-700"><MdOutlineEmail /></NavLink>
              <NavLink className="hover:text-gray-700" to="">
                <LuLinkedin />
              </NavLink>
            </div>
          </div>

          <div className="flex justify-center items-center w-full md:w-1/2">
            <div className="w-full max-w-md md:max-w-xs m-4">
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
