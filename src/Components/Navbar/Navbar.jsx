import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import contact from "../../Assets2/contact.png";
import menu from "../../Assets2/menu.png";
import logo from "../../Assets2/logo.png";

const Navbar = () => {
  const [showmenu, setShowmenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="navmenu">
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="navlistItem">Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="navlistItem">About</Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="navlistItem">Portfolio</Link>
        <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-50} duration={500} className="navlistItem">Clients</Link>
      </div>

      <button
        className="navbutton"
        onClick={() => {
          document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
        }}>
        <img src={contact} alt="" className="contect_img" />Contect Me
      </button>

      <img className="mobmenu" src={menu} alt="menu" onClick={() => setShowmenu(!showmenu)} />
      <div className="burgermenu" style={{ display: showmenu ? "flex" : 'none' }}>
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowmenu(false)}>Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowmenu(false)}>About</Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowmenu(false)}>Portfolio</Link>
        <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowmenu(false)}>Clients</Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowmenu(false)}>Contact</Link>
      </div>

    </nav>
  );
};

export default Navbar;
