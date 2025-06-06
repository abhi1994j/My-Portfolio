import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full px-4 py-15 bg-gray-50">
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col space-y-4 items-center mb-5 w-full max-w-lg sm:max-w-xl md:max-w-4xl">
          <h1
            className="text-2xl text-center md:text-3xl lg:text-4xl font-semibold"
            data-aos="fade-down"
            data-aos-delay="0"
          >
            Get In Touch
          </h1>
          <div className="h-1 rounded-lg w-20 bg-black inline-block" data-aos="fade-up" data-aos-delay="100"></div>
          <div className="w-full max-wmd sm:max-w-lg md:max-w-2xl" data-aos="fade-up" data-aos-delay="200">
            <p className="text-[16px] text-gray-500 text-center">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out using the form below or through my contact information.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h1 className="text-2xl font-semibold" data-aos="fade-right" data-aos-delay="300">Contact Information</h1>

        <div className="flex items-center gap-4" data-aos="zoom-in" data-aos-delay="400">
          <span className="bg-gray-200 text-center rounded-full">
            <MdOutlineEmail className="text-5xl p-3" />
          </span>
          <div>
            <p className="font-semibold">Email</p>
            <p className="text-gray-500 hover:text-gray-900 cursor-pointer">abhibaban4@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center gap-4" data-aos="zoom-in" data-aos-delay="500">
          <span className="bg-gray-200 text-center rounded-full">
            <LuPhone className="text-5xl p-3" />
          </span>
          <div>
            <p className="font-semibold">Phone</p>
            <p className="text-gray-500 hover:text-gray-900 cursor-pointer">8910374010</p>
          </div>
        </div>

        <div className="flex items-center gap-4" data-aos="zoom-in" data-aos-delay="600">
          <span className="bg-gray-200 text-center rounded-full">
            <IoLocationOutline className="text-5xl p-3" />
          </span>
          <div>
            <p className="font-semibold">Location</p>
            <p className="text-gray-500">Kolkata, India</p>
          </div>
        </div>

        <h1 className="text-2xl font-semibold" data-aos="fade-right" data-aos-delay="700">Follow Me</h1>

        <p data-aos="fade-up" data-aos-delay="800">
          Connect with me on social media to stay updated with my latest projects and activities.
        </p>

        <div className="flex gap-2" data-aos="fade-up" data-aos-delay="900">
          <NavLink
            target="blank"
            to="https://github.com/abhi1994j"
            className="bg-gray-50 hover:bg-gray-200 text-center rounded-full cursor-pointer"
          >
            <FaGithub className="text-5xl p-3" />
          </NavLink>
          <NavLink
            target="blank"
            to="https://www.linkedin.com/in/abhishek-chatterjee-9a7709209"
            className="bg-gray-50 hover:bg-gray-200 text-center rounded-full cursor-pointer"
          >
            <FaLinkedin className="text-5xl p-3" />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Contact;
