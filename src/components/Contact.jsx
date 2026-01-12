import { useEffect } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { LuPhone } from 'react-icons/lu';
import { IoLocationOutline } from 'react-icons/io5';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    });
  }, []);

  const contactStyles = {
    section:
      'w-full overflow-x-hidden bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100 px-4 sm:px-6 lg:px-8 py-12 sm:py-16',
    container: 'max-w-7xl mx-auto w-full',

    header: {
      wrapper:
        'flex flex-col items-center text-center space-y-4 sm:space-y-5 mb-10 sm:mb-14',
      title:
        'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent',
      divider:
        'h-1.5 w-20 sm:w-24 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600',
      description:
        'text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed px-2',
    },

    content: {
      grid: 'grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 w-full',
      section: 'space-y-6 sm:space-y-8',
      sectionTitle: 'text-xl sm:text-2xl md:text-3xl font-bold text-gray-800',

      contactCard:
        'flex items-start gap-4 bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300',

      iconWrapper:
        'bg-gradient-to-br from-indigo-100 to-violet-100 rounded-full p-3 flex-shrink-0',
      icon: 'text-2xl sm:text-3xl text-indigo-600',

      textWrapper: 'flex flex-col min-w-0',
      label: 'font-semibold text-gray-800 text-sm sm:text-base',
      value:
        'text-xs sm:text-sm md:text-base text-gray-600 break-all hover:text-indigo-600 transition-colors',

      socialGrid: 'flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 w-full',
      socialCard:
        'w-full sm:w-auto flex-1 min-w-[140px] bg-white p-5 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex items-center justify-center',
      socialIcon:
        'text-3xl sm:text-4xl text-gray-700 hover:text-indigo-600 transition-colors',
    },

    cta: {
      wrapper:
        'mt-12 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl p-6 sm:p-8 text-center text-white shadow-2xl',
      title: 'text-lg sm:text-xl md:text-2xl font-bold mb-3',
      description: 'text-sm sm:text-base text-indigo-100 mb-6 max-w-xl mx-auto',
      button:
        'inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base',
    },
  };

  const contactInfo = [
    {
      icon: MdOutlineEmail,
      label: 'Email',
      value: 'abhibaban4@gmail.com',
      link: 'mailto:abhibaban4@gmail.com',
    },
    {
      icon: LuPhone,
      label: 'Phone',
      value: '8910374010',
      link: 'tel:8910374010',
    },
    {
      icon: IoLocationOutline,
      label: 'Location',
      value: 'Kolkata, India',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      url: 'https://github.com/abhi1994j',
      label: 'GitHub',
    },
    {
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/abhishek-chatterjee-9a7709209',
      label: 'LinkedIn',
    },
  ];

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
        <div className={contactStyles.cta.wrapper} data-aos="zoom-in-up">
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
