import {  FaHeart } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { quickLinks, socialLinks } from '../constants/data';
import { footerStyles } from '../constants/dummyStyles';

const Footer = () => {
  
  const currentYear = new Date().getFullYear();

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
