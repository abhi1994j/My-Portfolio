import { NavLink } from "react-router-dom";
import { LuExternalLink } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import ecommerce from "../assets/Ecommerce.jpg"
const Projects = () => {
  return (
    <>
      <section className="w-[100%] px-4 py-10">
        <div className="w-full flex flex-col items-center space-y-6 my-5">
          <div className="flex flex-col space-y-4 items-center mb-5 w-full max-w-lg sm:max-w-xl md:max-w-4xl ">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              My Projects
            </h1>
            <div className="h-1 rounded-lg w-20 bg-black inline-block"></div>
            <div className="w-full max-wmd sm:max-w-lg md:max-w-xl">
              <p className="text-[16px] text-gray-500 text-center">
                Here are some of the projects I've worked on. Each project
                represents different skills and technologies I've mastered
                throughout my journey.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
            <div className=" bg-white border border-gray-200 rounded-lg shadow-sm">
              <a href="#">
                <img
                  className="rounded-t-lg w-full h-50 object-cover block"
                  src={ecommerce}
                  alt=""
                />
              </a>
              <div className="p-8 flex flex-col">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                    E-Commerce Platform
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  A full-featured e-commerce platform with product management, cart functionality, and payment integration.
                </p>
                <div className="flex gap-2 mb-4">
                      <span className="bg-gray-200 px-2 text-xs rounded py-1">React</span>
                      <span className="bg-gray-200 px-2 text-xs rounded py-1">Node.js</span>
                      <span className="bg-gray-200 px-2 text-xs rounded py-1">MongoDB</span>
                      <span className="bg-gray-200 px-2 text-xs rounded py-1">Tailwind CSS</span>
                </div>
                <div className="flex gap-4">
                    <NavLink className="text-center rounded-md flex gap-2 hover:bg-gray-100 items-center text-[14px] text-gray-900 border border-gray-300 py-1 px-3" to=''><LuExternalLink/><span>Live Demo</span></NavLink>
                    <NavLink className="text-center hover:bg-gray-100 rounded-md flex gap-2 items-center text-[14px] text-gray-900 border border-gray-300 py-1 px-3" to=''><FiGithub/><span>Code</span></NavLink>
                </div>
              </div>
            </div>
            <div className=" bg-white border border-gray-200 rounded-lg shadow-sm">
              <a href="#">
                <img
                  className="rounded-t-lg w-full h-50 object-center object-cover block"
                  src={ecommerce}
                  alt=""
                />
              </a>
              <div className="p-8 flex flex-col">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                    E-Commerce Platform
                  </h5>
                </a>
                <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                  A full-featured e-commerce platform with product management, cart functionality, and payment integration.
                </p>
                <div className="flex gap-2 mb-4">
                      <span className="bg-gray-200 px-2 text-center text-xs rounded py-1">React</span>
                      <span className="bg-gray-200 px-2 text-center text-xs rounded py-1">Node.js</span>
                      <span className="bg-gray-200 px-2 text-center text-xs rounded py-1">MongoDB</span>
                      <span className="bg-gray-200 px-2 text-center text-xs rounded py-1">Tailwind CSS</span>
                </div>
                <div className="flex gap-4">
                    <NavLink className="text-center rounded-md flex gap-2 hover:bg-gray-100 items-center text-[14px] text-gray-900 border border-gray-300 py-1 px-3" to=''><LuExternalLink/><span>Live Demo</span></NavLink>
                    <NavLink className="text-center hover:bg-gray-100 rounded-md flex gap-2 items-center text-[14px] text-gray-900 border border-gray-300 py-1 px-3" to=''><FiGithub/><span>Code</span></NavLink>
                </div>
              </div>
            </div>
          </div>
            
        </div>
      </section>
    </>
  );
};

export default Projects;
