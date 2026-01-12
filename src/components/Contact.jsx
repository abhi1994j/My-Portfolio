import { useEffect } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { LuPhone } from 'react-icons/lu';
import { IoLocationOutline } from 'react-icons/io5';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const contactStyles = {
    section: 'w-full bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100 px-4 py-16',
    container: 'max-w-7xl mx-auto',
    header: {
      wrapper: 'flex flex-col items-center text-center space-y-5 mb-16',
      title: 'text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent',
      divider: 'h-1.5 rounded-full w-24 bg-gradient-to-r from-indigo-600 to-violet-600',
      description: 'text-lg text-gray-600 max-w-2xl leading-relaxed'
    },
    content: {
      grid: 'grid grid-cols-1 lg:grid-cols-2 gap-12',
      section: 'space-y-8',
      sectionTitle: 'text-3xl font-bold text-gray-800 mb-6',
      contactCard: 'flex items-center gap-5 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100',
      iconWrapper: 'bg-gradient-to-br from-indigo-100 to-violet-100 rounded-full p-4 flex-shrink-0',
      icon: 'text-4xl text-indigo-600',
      textWrapper: 'flex flex-col',
      label: 'font-semibold text-gray-800 text-lg mb-1',
      value: 'text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer',
      socialGrid: 'flex gap-4',
      socialCard: 'flex-1 bg-white hover:bg-gradient-to-br hover:from-indigo-50 hover:to-violet-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center cursor-pointer border border-gray-100 hover:border-indigo-200',
      socialIcon: 'text-5xl text-gray-700 hover:text-indigo-600 transition-colors'
    },
    cta: {
      wrapper: 'mt-12 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-8 text-center text-white shadow-2xl',
      title: 'text-2xl md:text-3xl font-bold mb-4',
      description: 'text-indigo-100 mb-6 max-w-2xl mx-auto',
      button: 'inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg'
    }
  };

  const contactInfo = [
    {
      icon: MdOutlineEmail,
      label: 'Email',
      value: 'abhibaban4@gmail.com',
      link: 'mailto:abhibaban4@gmail.com'
    },
    {
      icon: LuPhone,
      label: 'Phone',
      value: '8910374010',
      link: 'tel:8910374010'
    },
    {
      icon: IoLocationOutline,
      label: 'Location',
      value: 'Kolkata, India',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      url: 'https://github.com/abhi1994j',
      label: 'GitHub'
    },
    {
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/abhishek-chatterjee-9a7709209',
      label: 'LinkedIn'
    }
  ];

  return (
    <section className={contactStyles.section} id="contact">
      <div className={contactStyles.container}>
        {/* Header */}
        <div
          className={contactStyles.header.wrapper}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <h1 className={contactStyles.header.title}>
            Get In Touch
          </h1>
          <div className={contactStyles.header.divider}></div>
          <p className={contactStyles.header.description}>
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out using my contact information below.
          </p>
        </div>

        {/* Content Grid */}
        <div className={contactStyles.content.grid}>
          {/* Contact Information */}
          <div className={contactStyles.content.section}>
            <h2
              className={contactStyles.content.sectionTitle}
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Contact Information
            </h2>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className={contactStyles.content.contactCard}
                  data-aos="fade-right"
                  data-aos-delay={300 + index * 100}
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
                      <p className={contactStyles.content.value}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className={contactStyles.content.section}>
            <h2
              className={contactStyles.content.sectionTitle}
              data-aos="fade-left"
              data-aos-delay="200"
            >
              Follow Me
            </h2>

            <p
              className="text-gray-600 mb-6 leading-relaxed"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              Connect with me on social media to stay updated with my latest
              projects and activities.
            </p>

            <div
              className={contactStyles.content.socialGrid}
              data-aos="fade-left"
              data-aos-delay="400"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactStyles.content.socialCard}
                  aria-label={social.label}
                >
                  <social.icon className={contactStyles.content.socialIcon} />
                </a>
              ))}
            </div>

            {/* Additional Info Card */}
            <div
              className="mt-8 bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Let's Work Together
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I'm currently available for freelance work and full-time
                opportunities. If you have a project that you want to get
                started or think you need my help with something, then get in touch.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={contactStyles.cta.wrapper}
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <h2 className={contactStyles.cta.title}>
            Ready to Start Your Project?
          </h2>
          <p className={contactStyles.cta.description}>
            Let's bring your ideas to life with cutting-edge web development solutions.
          </p>
          <a
            href="mailto:abhibaban4@gmail.com"
            className={contactStyles.cta.button}
          >
            <MdOutlineEmail className="text-2xl" />
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
