import { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profile from '../assets/profile.png';
import { heroStyles } from '../constants/dummyStyles';
import { socialLinks } from '../constants/data';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

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
            <a
              href="contact"
              smooth
              duration={500}
              className={heroStyles.primaryButton}
            >
              <span>Contact Me</span>
              <FaArrowRight />
            </a>
            <a
              href="projects"
              smooth
              duration={500}
              className={heroStyles.secondaryButton}
            >
              View Projects
            </a>
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
