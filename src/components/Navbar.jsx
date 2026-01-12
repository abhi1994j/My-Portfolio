import { useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-scroll';
import { navItems } from '../constants/data';
import { navStyles } from '../constants/dummyStyles';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      <nav
        className={`${navStyles.nav} ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-lg'
            : 'bg-white/80 backdrop-blur-md shadow-sm'
        }`}
      >
        <div className={navStyles.container}>
          {/* Logo */}
          <Link to="hero" smooth duration={500}>
            <span className={`${navStyles.logo} hidden md:block`}>
              Abhishek.
            </span>
            <span className={`${navStyles.logo} md:hidden`}>AC.</span>
          </Link>

          {/* Desktop Menu */}
          <ul className={navStyles.desktopMenu}>
            {navItems.map((item) => (
              <li key={item.label} className={navStyles.navItem}>
                <Link to={item.link} smooth duration={500}>
                  {item.label}
                  <span className={navStyles.navItemUnderline}></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            to="contact"
            smooth
            duration={500}
            className={navStyles.ctaButton}
          >
            Hire Me
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={navStyles.mobileMenuButton}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <RxCross2 /> : <AiOutlineMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${navStyles.mobileMenu} ${isOpen
    ? 'opacity-100 translate-y-0 top-[72px]'
    : 'opacity-0 -translate-y-4 pointer-events-none -top-96'
    }`}>
        {navItems.map((item) => (
          <Link
            key={item.link}
            to={item.link}
            smooth
            duration={500}
            onClick={() => setIsOpen(false)}
            className={navStyles.mobileMenuItem}
          >
            {item.label}
          </Link>
        ))}
        <Link
          to="contact"
          smooth
          duration={500}
          onClick={() => setIsOpen(false)}
          className={navStyles.mobileCTA}
        >
          Hire Me
        </Link>
      </div>
    </>
  );
};

export default Navbar;
