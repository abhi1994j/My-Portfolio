import { useEffect } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { contactInfo, socialLinks } from '../constants/data';
import { contactStyles } from '../constants/dummyStyles';

const Contact = () => {

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section className={contactStyles.section} id="contact">
      <div className={contactStyles.container}>
        {/* Header */}
        <div className={contactStyles.header.wrapper} data-aos="fade-down">
          <h1 className={contactStyles.header.title}>Get In Touch</h1>
          <div className={contactStyles.header.divider}></div>
          <p className={contactStyles.header.description}>
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out using my contact information below.
          </p>
        </div>

        {/* Grid */}
        <div className={contactStyles.content.grid}>
          {/* Contact Info */}
          <div className={contactStyles.content.section} data-aos="fade-right">
            <h2 className={contactStyles.content.sectionTitle}>
              Contact Information
            </h2>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className={contactStyles.content.contactCard}
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                >
                  <div className={contactStyles.content.iconWrapper}>
                    <item.icon className={contactStyles.content.icon} />
                  </div>
                  <div className={contactStyles.content.textWrapper}>
                    <p className={contactStyles.content.label}>{item.label}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        className={contactStyles.content.value}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className={contactStyles.content.value}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className={contactStyles.content.section} data-aos="fade-left">
            <h2 className={contactStyles.content.sectionTitle}>Follow Me</h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Connect with me on social media to stay updated with my latest
              projects and activities.
            </p>

            <div className={contactStyles.content.socialGrid}>
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactStyles.content.socialCard}
                  data-aos="zoom-in"
                  data-aos-delay={index * 150}
                >
                  <social.icon className={contactStyles.content.socialIcon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className={contactStyles.cta.wrapper}
          data-aos="zoom-in-up"
          data-aos-delay="300"
        >
          <h2 className={contactStyles.cta.title}>
            Ready to Start Your Project?
          </h2>
          <p className={contactStyles.cta.description}>
            Let's bring your ideas to life with cutting-edge web development
            solutions.
          </p>
          <a
            href="mailto:abhibaban4@gmail.com"
            className={contactStyles.cta.button}
          >
            <MdOutlineEmail className="text-xl" />
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
