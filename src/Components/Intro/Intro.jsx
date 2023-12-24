import React from "react";
import image from "../../Assets2/image.png";
import hireme from "../../Assets2/hireme.png";
import resume from "../../Assets/resume.pdf";
import "./Intro.css";
import { Link } from "react-scroll";
const Intro = () => {
      const openResume = () => {
        window.open(resume, '_blank');
    };
    return (
        <section id="intro">
            <div className="introcontent">
                <span className="hello">Hello,</span>
                <span>I'm <span className="introname">Ashutosh</span><br /> Website Designer</span>
                <p className="intropara">I am a skilled Front-end web developer with experience in creating <br />visually appealing and user friendly websites.</p>
                <Link to="/"><button onClick={openResume} className="btn"><img className="btnimg" src={hireme} alt="" /> Hire Me</button></Link>
            </div>
            <img className="profile" src={image} alt="pic" />
        </section>
    );
};

export default Intro;
