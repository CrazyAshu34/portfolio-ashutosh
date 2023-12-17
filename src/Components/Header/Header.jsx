import React from "react";
import "./Header.css";
import searchicon from "../../Assets/searchicon.png";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="bodycolor">
			<div className="nav">
				<div className="parent-logo">
					<p className="logo">A</p><span className="logoname"> ASHUTOSH</span>
				</div>
				<ul>
					<li className="color1">
						<Link to="/">
							<span>Home</span>
						</Link>
					</li>

					<li>
						<Link to="/AboutUs">
							<span>About Us</span>
						</Link>
					</li>

					<li>
						<Link to="/Services" className="color3">
							<span>Services</span>
						</Link>
					</li>

					<li className="color4">
						<img className="searchicon" src={searchicon} alt="searchbar" />
					</li>
				</ul>
			</div>
			
		</div>
	);
};

export default Header;