import React from 'react'
import "./Footer.css"
import instagram from "../Assets/instagram.png"
import whatsapp from "../Assets/whatsapp.png"
import linkedin from "../Assets/linkedin.png"
import email from "../Assets/email.png"
const Footer = () => {
    return (
        <div className="footer">
		<div className="iconparent">
			<img className="icon" src={instagram} alt="instagram"/>
			<img className="icon" src={linkedin} alt="linkedin"/>
			<img className="icon" src={whatsapp} alt="whatsapp"/>
			<img className="icon" src={email} alt="email"/>
		</div>
			<p>Copyright with ashutsoh singh !</p>
		</div>
    )
}

export default Footer