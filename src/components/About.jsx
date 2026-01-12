import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { skills, technologies } from '../constants/data';

const About = () => {
  // Dynamic content object
  const content = {
    title: 'About Me',
    introduction:
      "I'm a passionate full stack developer with a focus on creating efficient, scalable, and user-friendly web applications.",
    journey: {
      title: 'My Journey',
      description:
        'Full Stack Developer with 1 year of hands-on experience as a Front-End Developer, specializing in building scalable, responsive web applications. Proficient in modern front-end and back-end technologies, UI development, API integration, and performance optimization, with a strong focus on clean code and user experience.',
    },
    education: {
      title: 'Education & Experience',
      degree: 'Bachelor of Computer Science',
      institution: 'Acharya Prafulla Chandra College (2015-2019)',
      experience: {
        title: 'Frontend Developer',
        achievements: [
          'Developed and maintained scalable React.js applications, improving performance and usability.',
          'Built responsive, pixel-perfect UI from Figma designs using TailwindCSS.',
          'Integrated RESTful APIs with Axios/Fetch and optimized Redux state management.',
          {
            text: 'Improved UI performance by ',
            highlight: '30%',
            suffix: ' and reduced load times.',
          },
          {
            text: 'Delivered bi-weekly feature updates, maintaining ',
            highlight: '99.9% uptime',
            suffix: ' for ',
            highlight2: '2,000+ active users',
            end: '.',
          },
        ],
      },
    },
    skillsTitle: 'My Skills',
    technologiesTitle: 'What I Do',
  };

  // Organized styles object
  const aboutStyles = {
    section:
      'w-full bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100 flex justify-between items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16',
    container:
      'w-full flex flex-col items-center space-y-8 sm:space-y-10 lg:space-y-12',
    header: {
      wrapper:
        'flex flex-col space-y-3 sm:space-y-4 items-center w-full max-w-lg sm:max-w-xl md:max-w-4xl px-2',
      title:
        'text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent text-center',
      divider:
        'h-1.5 rounded-full w-20 sm:w-24 bg-gradient-to-r from-indigo-600 to-violet-600',
      descriptionWrapper: 'w-full max-w-md sm:max-w-lg md:max-w-2xl mb-4 px-2',
      description:
        'text-base sm:text-lg text-gray-600 text-center leading-relaxed',
    },
    grid: {
      main: 'grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 w-full max-w-6xl px-2 sm:px-0',
      card: 'flex flex-col space-y-3 sm:space-y-4 bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100',
    },
    journey: {
      title: 'text-xl sm:text-2xl font-bold text-gray-800 mb-2',
      text: 'text-sm sm:text-base text-gray-600 leading-relaxed',
    },
    education: {
      title: 'text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6',
      degree: 'font-semibold text-base sm:text-lg text-gray-800',
      institution: 'text-sm sm:text-base text-gray-500 mt-1 mb-4 sm:mb-6',
      experienceWrapper:
        'border-l-4 border-indigo-500 pl-4 sm:pl-6 bg-gradient-to-r from-indigo-50/50 to-transparent rounded-r-lg py-3 sm:py-4 pr-3 sm:pr-4',
      experienceTitle:
        'text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2',
      list: 'space-y-3 sm:space-y-4',
      listItem: 'flex items-start group',
      bullet:
        'text-indigo-600 mr-2 sm:mr-3 mt-1 group-hover:scale-125 transition-transform duration-200 flex-shrink-0',
      text: 'text-sm sm:text-base text-gray-700 leading-relaxed',
      highlight:
        'font-bold text-indigo-600 bg-indigo-50 px-1.5 sm:px-2 py-0.5 rounded text-sm sm:text-base',
    },
    skills: {
      wrapper: 'mt-6 sm:mt-8 w-full max-w-6xl px-2 sm:px-0',
      title:
        'text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent',
      grid: 'flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12',
      badge:
        'bg-gradient-to-r from-indigo-100 to-violet-100 hover:from-indigo-200 hover:to-violet-200 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 font-semibold rounded-full text-xs sm:text-sm text-gray-800 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-default border border-indigo-200',
    },
    technologies: {
      title:
        'text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent',
      grid: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-6xl px-2 sm:px-0',
      card: 'flex flex-col gap-3 sm:gap-4 items-center bg-white rounded-xl sm:rounded-2xl py-8 sm:py-10 px-5 sm:px-6 shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out border border-gray-100 hover:border-indigo-300 hover:-translate-y-1 sm:hover:-translate-y-2 group',
      iconWrapper:
        'bg-gradient-to-br from-indigo-100 to-violet-100 rounded-full p-3 sm:p-4 group-hover:scale-110 transition-transform duration-300',
      icon: 'text-4xl sm:text-5xl text-indigo-600',
      heading:
        'text-lg sm:text-xl font-bold text-center text-gray-800 group-hover:text-indigo-600 transition-colors duration-300',
      body: 'text-sm sm:text-base text-center text-gray-600 leading-relaxed',
    },
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className={aboutStyles.section}>
      <div className={aboutStyles.container}>
        {/* Title */}
        <div
          className={aboutStyles.header.wrapper}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <h1 className={aboutStyles.header.title}>{content.title}</h1>
          <div className={aboutStyles.header.divider}></div>
          <div className={aboutStyles.header.descriptionWrapper}>
            <p className={aboutStyles.header.description}>
              {content.introduction}
            </p>
          </div>
        </div>

        {/* Journey + Education */}
        <div className={aboutStyles.grid.main}>
          {/* Journey Card */}
          <div
            className={aboutStyles.grid.card}
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h2 className={aboutStyles.journey.title}>
              {content.journey.title}
            </h2>
            <p className={aboutStyles.journey.text}>
              {content.journey.description}
            </p>
          </div>

          {/* Education Card */}
          <div
            className={aboutStyles.grid.card}
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h2 className={aboutStyles.education.title}>
              {content.education.title}
            </h2>

            <div className="flex flex-col mb-4">
              <p className={aboutStyles.education.degree}>
                {content.education.degree}
              </p>
              <p className={aboutStyles.education.institution}>
                {content.education.institution}
              </p>
            </div>

            <div className={aboutStyles.education.experienceWrapper}>
              <h3 className={aboutStyles.education.experienceTitle}>
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                {content.education.experience.title}
              </h3>

              <ul className={aboutStyles.education.list}>
                {content.education.experience.achievements.map(
                  (achievement, index) => (
                    <li key={index} className={aboutStyles.education.listItem}>
                      <span className={aboutStyles.education.bullet}>•</span>
                      <p className={aboutStyles.education.text}>
                        {typeof achievement === 'string' ? (
                          achievement
                        ) : (
                          <>
                            {achievement.text}
                            <span className={aboutStyles.education.highlight}>
                              {achievement.highlight}
                            </span>
                            {achievement.suffix}
                            {achievement.highlight2 && (
                              <>
                                <span
                                  className={aboutStyles.education.highlight}
                                >
                                  {achievement.highlight2}
                                </span>
                                {achievement.end}
                              </>
                            )}
                          </>
                        )}
                      </p>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div
          className={aboutStyles.skills.wrapper}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2 className={aboutStyles.skills.title}>{content.skillsTitle}</h2>
          <div className={aboutStyles.skills.grid}>
            {skills.map((skill, index) => (
              <div
                key={skill}
                className={aboutStyles.skills.badge}
                data-aos="zoom-in"
                data-aos-delay={index * 50}
              >
                {skill}
              </div>
            ))}
          </div>

          <h2
            className={aboutStyles.technologies.title}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {content.technologiesTitle}
          </h2>
        </div>

        {/* Technologies */}
        <div className={aboutStyles.technologies.grid}>
          {technologies.map((tech, index) => (
            <div
              className={aboutStyles.technologies.card}
              key={tech.heading}
              data-aos="flip-left"
              data-aos-delay={index * 100}
            >
              <span className={aboutStyles.technologies.iconWrapper}>
                <tech.logo className={aboutStyles.technologies.icon} />
              </span>
              <h3 className={aboutStyles.technologies.heading}>
                {tech.heading}
              </h3>
              <p className={aboutStyles.technologies.body}>{tech.Body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
