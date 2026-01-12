import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerStyles = {
    footer: 'w-full bg-gradient-to-br from-gray-900 to-gray-800 text-white',
    container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12',
    grid: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8',
    section: 'flex flex-col space-y-3 sm:space-y-4',
    logo: 'text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent',
    description: 'text-sm sm:text-base text-gray-400 leading-relaxed',
    sectionTitle: 'text-lg sm:text-xl font-bold mb-3 sm:mb-4',
    link: 'text-sm sm:text-base text-gray-400 hover:text-indigo-400 transition-colors duration-300 cursor-pointer',
    socialLinks: 'flex gap-3 sm:gap-4',
    socialIcon:
      'w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center bg-gray-700 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-violet-600 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer text-lg sm:text-xl',
    divider: 'border-t border-gray-700',
    bottom:
      'flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 pt-6 sm:pt-8',
    copyright:
      'text-gray-400 text-xs sm:text-sm flex items-center gap-2 text-center',
    heartIcon: 'text-red-500 animate-pulse',
  };

  const quickLinks = [
    { label: 'Home', link: 'hero' },
    { label: 'About', link: 'about' },
    { label: 'Projects', link: 'projects' },
    { label: 'Contact', link: 'contact' },
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
    {
      icon: MdOutlineEmail,
      url: 'mailto:abhibaban4@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.container}>
        {/* Main Footer Content */}
        <div className={footerStyles.grid}>
          {/* Brand Section */}
          <div className={footerStyles.section}>
            <h2 className={footerStyles.logo}>Abhishek.</h2>
            <p className={footerStyles.description}>
              Full Stack Developer passionate about creating exceptional digital
              experiences. Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className={footerStyles.section}>
            <h3 className={footerStyles.sectionTitle}>Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((item) => (
                <Link
                  key={item.link}
                  to={item.link}
                  smooth
                  duration={500}
                  className={footerStyles.link}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div className={footerStyles.section}>
            <h3 className={footerStyles.sectionTitle}>Connect With Me</h3>
            <p className={footerStyles.description}>
              Follow me on social media to stay updated with my latest work.
            </p>
            <div className={footerStyles.socialLinks}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={footerStyles.socialIcon}
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={footerStyles.divider}></div>

        {/* Bottom Section */}
        <div className={footerStyles.bottom}>
          <p className={footerStyles.copyright}>
            © {currentYear} Abhishek. All rights reserved.
          </p>
          <p className={footerStyles.copyright}>
            Designed and built with{' '}
            <FaHeart className={footerStyles.heartIcon} /> by Abhishek
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
