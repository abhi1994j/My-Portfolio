import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { aboutContent, skills, technologies } from '../constants/data';
import { aboutStyles } from '../constants/dummyStyles';
// import { skills, technologies } from '../constants/data';

const About = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 80,
      easing: 'ease-in-out',
      delay: 100,
    });
  }, []);

  return (
    <section className={aboutStyles.section}>
      <div className={aboutStyles.container}>
        {/* Header */}
        <div className={aboutStyles.header.wrapper} data-aos="fade-down">
          <h1 className={aboutStyles.header.title}>{aboutContent.title}</h1>
          <div className={aboutStyles.header.divider}></div>
          <p className={aboutStyles.header.description}>
            {aboutContent.introduction}
          </p>
        </div>

        {/* Journey + Education */}
        <div className={aboutStyles.grid.main}>
          {/* Journey */}
          <div className={aboutStyles.grid.card} data-aos="fade-right">
            <h2 className={aboutStyles.journey.title}>
              {aboutContent.journey.title}
            </h2>
            <p className={aboutStyles.journey.text}>
              {aboutContent.journey.description}
            </p>
          </div>

          {/* Education & Experience */}
          <div className={aboutStyles.grid.card} data-aos="fade-left">
            <h2 className={aboutStyles.education.title}>
              {aboutContent.education.title}
            </h2>

            <p className={aboutStyles.education.degree}>
              {aboutContent.education.degree}
            </p>
            <p className={aboutStyles.education.institution}>
              {aboutContent.education.institution}
            </p>

            <div className={aboutStyles.education.experienceWrapper}>
              <h3 className={aboutStyles.education.experienceTitle}>
                {aboutContent.education.experience.company}
              </h3>
              <p className="text-sm text-gray-600 font-medium mb-4">
                {aboutContent.education.experience.title}
              </p>

              <ul className={aboutStyles.education.list}>
                {aboutContent.education.experience.achievements.map(
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

        {/* Skills & Technologies unchanged */}
           {/* Skills */}
        <div
          className={aboutStyles.skills.wrapper}
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200"
        >
          <h2 className={aboutStyles.skills.title}>{aboutContent.skillsTitle}</h2>
          <div className={aboutStyles.skills.grid}>
            {skills.map((skill, index) => (
              <div
                key={skill}
                className={aboutStyles.skills.badge}
                data-aos="zoom-in"
                data-aos-delay={100 + index * 30}
                data-aos-duration="800"
              >
                {skill}
              </div>
            ))}
          </div>

          <h2
            className={aboutStyles.technologies.title}
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1200"
          >
            {aboutContent.technologiesTitle}
          </h2>
        </div>

        {/* Technologies */}
        <div className={aboutStyles.technologies.grid}>
          {technologies.map((tech, index) => (
            <div
              className={aboutStyles.technologies.card}
              key={tech.heading}
              data-aos="flip-left"
              data-aos-delay={100 + index * 80}
              data-aos-duration="1000"
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
