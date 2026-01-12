import { useEffect } from 'react';
import { LuExternalLink } from 'react-icons/lu';
import { FiGithub } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { projects } from '../constants/data';
import { projectStyles } from '../constants/dummyStyles';

const Projects = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className={projectStyles.section} id="projects">
      <div className={projectStyles.container}>
        {/* Header */}
        <div className={projectStyles.header.wrapper} data-aos="fade-down">
          <h1 className={projectStyles.header.title}>Featured Projects</h1>
          <div className={projectStyles.header.divider}></div>
          <p className={projectStyles.header.description}>
            A selection of projects that highlight my experience in building
            scalable, user-focused web applications using modern technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className={projectStyles.grid}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={projectStyles.card.wrapper}
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              {/* Image */}
              <a
                href={project.live_demo}
                target="_blank"
                rel="noopener noreferrer"
                className={projectStyles.card.imageWrapper}
                data-aos="zoom-in"
                data-aos-delay={index * 120}
              >
                <img
                  src={project.image}
                  alt={project.project_name}
                  className={projectStyles.card.image}
                />
              </a>

              {/* Content */}
              <div
                className={projectStyles.card.content}
                data-aos="fade-up"
                data-aos-delay={index * 150 + 100}
              >
                <a
                  href={project.live_demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className={projectStyles.card.title}>
                    {project.project_name}
                  </h3>
                </a>

                <p className={projectStyles.card.description}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className={projectStyles.card.techWrapper}>
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={projectStyles.card.techBadge}
                      data-aos="fade-up"
                      data-aos-delay={i * 80}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className={projectStyles.card.buttonWrapper}>
                  <a
                    href={project.live_demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={projectStyles.card.button}
                  >
                    <LuExternalLink />
                    Live Demo
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={projectStyles.card.button}
                  >
                    <FiGithub />
                    Code
                  </a>
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
