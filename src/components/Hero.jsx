import { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { LuLinkedin } from 'react-icons/lu';
import { MdOutlineEmail } from 'react-icons/md';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profile from '../assets/profile.png';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const heroStyles = {
    section:
      'w-full min-h-screen flex items-center bg-gradient-to-br from-white via-indigo-50/30 to-violet-50/30 px-4 md:px-8 py-20',
    container:
      'max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center',
    leftSection: 'flex flex-col space-y-8 order-2 lg:order-1',
    title:
      'text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight',
    name: 'bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent',
    typeAnimation:
      'text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 min-h-[48px]',
    description: 'text-base md:text-lg text-gray-600 leading-relaxed max-w-xl',
    buttonGroup: 'flex flex-wrap gap-4',
    primaryButton:
      'flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer',
    secondaryButton:
      'flex items-center gap-2 px-6 py-3 bg-white text-gray-900 border-2 border-gray-300 rounded-lg font-medium hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300 cursor-pointer',
    socialLinks: 'flex items-center gap-6 text-2xl',
    socialIcon:
      'text-gray-600 hover:text-indigo-600 hover:scale-125 transition-all duration-300 cursor-pointer',
    rightSection: 'flex justify-center items-center order-1 lg:order-2',
    imageWrapper: 'relative w-full max-w-md lg:max-w-lg',
    imageContainer:
      'relative rounded-full bg-gradient-to-br from-indigo-100 to-violet-100 p-2 shadow-2xl hover:shadow-indigo-300/50 transition-all duration-500 hover:scale-105',
    image: 'w-full rounded-full object-cover',
    glowEffect:
      'absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400/20 to-violet-400/20 blur-2xl -z-10 animate-pulse',
  };

  const socialLinks = [
    {
      icon: FiGithub,
      url: 'https://github.com/abhi1994j',
      label: 'GitHub',
    },
    {
      icon: MdOutlineEmail,
      url: 'mailto:abhibaban4@gmail.com',
      label: 'Email',
    },
    {
      icon: LuLinkedin,
      url: 'https://www.linkedin.com/in/abhishek-chatterjee-9a7709209',
      label: 'LinkedIn',
    },
  ];

  return (
    <section className={heroStyles.section} id="hero">
      <div className={heroStyles.container}>
        {/* Left Section */}
        <div
          className={heroStyles.leftSection}
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <h1 className={heroStyles.title}>
            Hi, I'm <span className={heroStyles.name}>Abhishek</span>
          </h1>

          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'Frontend Developer',
              2000,
              'Backend Developer',
              2000,
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            className={heroStyles.typeAnimation}
          />

          <p className={heroStyles.description}>
            I build exceptional and accessible digital experiences for the web.
            Passionate about creating solutions that are both functional and
            beautiful.
          </p>

          {/* Buttons */}
          <div className={heroStyles.buttonGroup}>
            <Link
              to="contact"
              smooth
              duration={500}
              className={heroStyles.primaryButton}
            >
              <span>Contact Me</span>
              <FaArrowRight />
            </Link>
            <Link
              to="projects"
              smooth
              duration={500}
              className={heroStyles.secondaryButton}
            >
              View Projects
            </Link>
          </div>

          {/* Social Links */}
          <div className={heroStyles.socialLinks}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={heroStyles.socialIcon}
                aria-label={social.label}
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>

        {/* Right Section - Image */}
        <div
          className={heroStyles.rightSection}
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <div className={heroStyles.imageWrapper}>
            <div className={heroStyles.glowEffect}></div>
            <div className={heroStyles.imageContainer}>
              <img
                src={profile}
                alt="Abhishek Chatterjee"
                className={heroStyles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
