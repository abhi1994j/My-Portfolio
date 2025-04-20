import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";
import Ab from "../assets/Ab.svg";
import Ac from "../assets/Ac.svg";

const Navbar = () => {
  const [flag, setFlag] = useState(false);


  function handleClick() {
    setFlag(!flag);
  }

  const navItems = [
    {
      label: "Home",
      link: "hero",
    },
    {
      label: "About",
      link: "about",
    },
    {
      label: "Projects",
      link: "projects",
    },
    {
      label: "Contact",
      link: "contact",
    },
  ];
  return (
    <>
      <nav className="w-full py-4 px-2 sticky bg-transparent backdrop-blur-md top-0 z-50 transition-all duration-300">
        <div className="flex justify-between items-center mx-2"> 
          <span className="md:block hidden cursor-pointer text-2xl font-semibold gradient-text shadow-text ml-3">Abhishek.</span>
          <span className="block md:hidden text-2xl cursor-pointer font-semibold gradient-text shadow-text ml-2">AC.</span>
          <ul className="hidden md:flex md:items-center gap-8">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="text-gray-600 hover:text-gray-900 active:text-gray-800 cursor-pointer transition-colors duration-300 ease-in-out"
              >
                <Link
                  to={item.link}
                  smooth={true}
                  duration={500}
                  className="relative inline-block transition-all duration-300 after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:origin-center hover:after:w-full after:-translate-x-1/2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hidden cursor-pointer text-center md:block py-2 px-4 text-white bg-black rounded-lg text-[16px] transition-all duration-300 hover:bg-gray-800"
          >
            Hire Me
          </Link>

          <button
            className="text-2xl block md:hidden cursor-pointer transition-transform duration-300"
            onClick={handleClick}
          >
            {flag ? (
              <RxCross2 className="transition-transform duration-300 rotate-90" />
            ) : (
              <AiOutlineMenu />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu with transition */}
      <section
        className={`md:hidden fixed top-16 left-0 w-full bg-white shadow-md z-50 transition-all duration-500 ease-in-out transform ${
          flag
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <div className="p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.link}
              to={item.link}
              smooth={true}
              duration={500}
              onClick={() => setFlag(false)} // 👈 Close menu on click
              className="block font-normal py-2 text-gray-900 hover:text-gray-600 text-center active:text-gray-800 transition-all duration-300 relative after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:origin-center hover:after:w-full after:-translate-x-1/2"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setFlag(false)} // 👈 Close menu on click
            className="block cursor-pointer py-2 mt-4 text-center text-white bg-black rounded-lg text-[14px] hover:bg-gray-800 transition-all duration-300"
          >
            Hire Me
          </Link>
        </div>
      </section>
    </>
  );
};

export default Navbar;
