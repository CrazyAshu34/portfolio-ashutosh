import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import contact from "../../Assets2/contact.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="parent-logo">
        <p className="logo">A</p>
        <span className="logoname"> ASHUTOSH</span>
      </div>
      <div className="navmenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="navlistItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="navlistItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="navlistItem"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="navlistItem"
        >
          Clients
        </Link>
      </div>
      <button
        className="navbutton"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contact} alt="" className="contect_img" />
        Contect Me
      </button>
    </div>
  );
};

export default Navbar;
