import { useState, useEffect } from "react";
import "./Navbar.css";
import Header from "../editor-components/Header";
// import { DarkModeSwitch } from "react-toggle-dark-mode";

const Navbar = ({darkMode, toggleDarkMode}) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "SQL Editor",
      link: "/editor",
    },
    {
      title: "Contact Us",
      link: "/",
    },
    {
      title: "Login",
      link: "/",
    },
    {
      title: "Github",
      link: "/github",
    },
  ];

  const handleScroll = () => {
    window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
  };

  const logoClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className='mini-header'>
        <Header />
      </div>
      <div
        className={`nav-menu-icon ${menuOpen ? "active" : "not-active"}`}
        id='nav-menu-icon'
        onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
      >
        <span className='hb-line'></span>
        <span className='hb-line'></span>
        <span className='hb-line'></span>
      </div>
      <nav className={`${scrolled ? "scrolled" : ""}`}>
        <div className={`nav-main`}>
          <span onClick={logoClick} className='nav-brand'>
            <span className='nav-brand-text'>Atlan SQL Editor</span>
          </span>
          <ul className={`nav-links`}>
            {links.map((link, index) => {
              return (
                <a
                  className='nav-link-original'
                  href={link.link}
                  key={index}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.title}
                  <div className='underline'></div>
                </a>
              );
            })}
            {/* <DarkModeSwitch
              style={{ marginBottom: "2rem" }}
              checked={darkMode}
              onChange={toggleDarkMode}
              size={20}
            /> */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
