import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerStyles = {
    footer: 'w-full bg-gradient-to-br from-gray-900 to-gray-800 text-white',
    container: 'max-w-7xl mx-auto px-4 py-12',
    grid: 'grid grid-cols-1 md:grid-cols-3 gap-12 mb-8',
    section: 'flex flex-col space-y-4',
    logo: 'text-3xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent',
    description: 'text-gray-400 leading-relaxed',
    sectionTitle: 'text-xl font-bold mb-4',
    link: 'text-gray-400 hover:text-indigo-400 transition-colors duration-300 cursor-pointer',
    socialLinks: 'flex gap-4',
    socialIcon:
      'w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-violet-600 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer',
    divider: 'border-t border-gray-700',
    bottom: 'flex flex-col md:flex-row justify-between items-center gap-4 pt-8',
    copyright: 'text-gray-400 text-sm flex items-center gap-2',
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
