import { useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-scroll';

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

  const navItems = [
    { label: 'Home', link: 'hero' },
    { label: 'About', link: 'about' },
    { label: 'Projects', link: 'projects' },
    { label: 'Contact', link: 'contact' },
  ];

  const navStyles = {
    nav: `w-full py-4 px-4 md:px-8 sticky top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/90 backdrop-blur-lg shadow-lg'
        : 'bg-white/80 backdrop-blur-md shadow-sm'
    }`,
    container: 'max-w-7xl mx-auto flex justify-between items-center',
    logo: 'text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-300',
    desktopMenu: 'hidden md:flex items-center gap-8',
    navItem:
      'relative group cursor-pointer font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-300',
    navItemUnderline:
      'absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-violet-600 group-hover:w-full transition-all duration-300',
    ctaButton:
      'hidden md:block px-6 py-2.5 text-white bg-gradient-to-r from-indigo-600 to-violet-600 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer',
    mobileMenuButton:
      'md:hidden text-2xl text-gray-700 hover:text-indigo-600 transition-colors cursor-pointer',
    mobileMenu: `md:hidden fixed left-0 right-0 bg-white shadow-xl transition-all duration-500 ease-in-out transform z-40 ${
      isOpen
        ? 'opacity-100 translate-y-0 top-[72px]'
        : 'opacity-0 -translate-y-4 pointer-events-none -top-96'
    }`,
    mobileMenuItem:
      'block py-4 px-6 text-center font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 border-b border-gray-100',
    mobileCTA:
      'block mx-6 my-4 py-3 text-center text-white bg-gradient-to-r from-indigo-600 to-violet-600 rounded-lg font-medium hover:shadow-lg transition-all duration-300',
  };

  return (
    <>
      <nav className={navStyles.nav}>
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
      <div className={navStyles.mobileMenu}>
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
