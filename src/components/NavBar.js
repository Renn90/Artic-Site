import "./NavBar.css";
import { Link as Link1 } from "react-scroll";
import { Link as Link2 } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
import Form from "../pages/Form";

const NavBar = () => {
  const [showMenu, setshowMenu] = useState(false);

  const togglelist = () => {
    setshowMenu((showMenu) => !showMenu);
  };

  const toggle = showMenu ? "active" : "";

  return (
    <nav className="navbar">
      <div>
        <header className="header">
          <img src="./images/artic.png" alt="/" className="logo-img"/>
          <p className="call">Call +234 8157 6245 58</p>
        </header>
        <hr></hr>
        <div onClick={togglelist} className="menu-bars">
          <HamburgerMenu data={toggle} />
        </div>
        <nav className={`nav ${toggle}`}>
          <ul>
            <li className="nav-item">
              <Link1
                to="hero"
                spy={true}
                smooth={true}
                offset={-145}
                duration={500}
              >
                <Link2 to="/" onClick={togglelist}>
                  Home
                </Link2>
              </Link1>
            </li>

            <li className="nav-item">
              <Link1
                to="regions"
                spy={true}
                smooth={true}
                offset={-140}
                duration={500}
              >
                <span onClick={togglelist}>Regions</span>
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                to="lodging"
                spy={true}
                smooth={true}
                offset={-145}
                duration={500}
              >
                <span onClick={togglelist}>Accomodation</span>
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                to="footer"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
              >
                <span onClick={togglelist}>Contact&nbsp;Us</span>
              </Link1>
            </li>
          </ul>
          <span className="menu"></span>
        </nav>
        <hr></hr>
      </div>
    </nav>
  );
};

export default NavBar;
