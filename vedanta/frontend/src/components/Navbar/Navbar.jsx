import Styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick =()=>{
    setIsOpen(false);
  };
  return (
    <>
      <nav className={Styles.Navbar}>
        <div className={Styles.logo}>
          <img src="LOGO.png" alt="Vedanta Academy" />
        </div>
        <div className={Styles.hamburger} onClick={()=> setIsOpen(!isOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${Styles.navlinks} ${isOpen ? Styles.active:""}`}>
          <ul>
            <li>
              {" "}
              <NavLink  onClick={handleLinkClick}
                className={({ isActive }) =>
                  isActive ? `${Styles.link} ${Styles.activeLink}` : Styles.link
                }
                to="/"
              >
                {" "}
                Home{" "}
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink onClick={handleLinkClick}
                className={({ isActive }) =>
                  isActive ? `${Styles.link} ${Styles.activeLink}` : Styles.link
                }
                to="/about"
              >
                {" "}
                About{" "}
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink onClick={handleLinkClick}
                className={({ isActive }) =>
                  isActive ? `${Styles.link} ${Styles.activeLink}` : Styles.link
                }
                to="/programs"
              >
                {" "}
                Programs{" "}
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink onClick={handleLinkClick}
                className={({ isActive }) =>
                  isActive ? `${Styles.link} ${Styles.activeLink}` : Styles.link
                }
                to="/gallery"
              >
                {" "}
                Gallery{" "}
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink onClick={handleLinkClick}
                className={({ isActive }) =>
                  isActive ? `${Styles.link} ${Styles.activeLink}` : Styles.link
                }
                to="/contact"
              >
                {" "}
                Contact{" "}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={Styles.navButton}>
          <button className={Styles.button}>Sign in </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
