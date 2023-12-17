import React from "react";
import "./Header.css";
import profile from "../Assets/profile.png";
import searchicon from "../Assets/searchicon.png";

// import logo from "../Assets/logo.png";
const Header = () => {
    return (
        <div className="bodycolor">
			<div className="nav">
				<div className="parent-logo">
					<p className="logo">A</p><span className="logoname"> ASHUTOSH</span>
				</div>
				<ul>
					<li className="color1"> Home</li>
					<li className="color2"> About Us</li>
					<li className="color3"> Services</li>
					<li className="color4"><img className="searchicon" src={searchicon} alt="searchbar" /></li>
				</ul>
			</div>
			<div className="main">
				<div className="details">
					<h1>Hi, I'm Ashutosh</h1>
					<p>
						 Excited to provide you with my service, <br />
        and I feel awesome knowing that I can assist you with anything you need.
					</p>
					<button className="btn1">Contect Me </button>
					<button className="btn2">Project <span role="img" aria-label="View Project">↗</span></button>
				</div>
				<div className="pictureDiv">
					<img className="picture" src={profile} alt="pic" />
				</div>
			</div>
		</div>
    );
};

export default Header;