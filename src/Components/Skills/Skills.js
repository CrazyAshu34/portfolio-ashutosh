import React from 'react';
import "./Skills.css";
import uidesign from "../../Assets2/ui-design.png";
import webdesign from "../../Assets2/website-design.png";
import appdesign from "../../Assets2/app-design.png";

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skilltitle'>What I Do</span>
            <span className='skilldescription'>I'm a web designer with a passion for crafting awesome designs.</span>
            <div className="myskillbars">
                <div className="skillbar">
                    <img src={uidesign} alt="uidesign" className="skillbarimg" />
                    <div className="skillbartext">
                        <h2>UI/UX Design</h2>
                        <p>I create fantastic UI/UX designs.</p>
                    </div>
                </div>

                <div className="skillbar">
                    <img src={webdesign} alt="webdesign" className="skillbarimg" />
                    <div className="skillbartext">
                        <h2>Website Design</h2>
                        <p>With time, I'm getting better at making awesome websites.</p>
                    </div>
                </div>

                <div className="skillbar">
                    <img src={appdesign} alt="appdesign" className="skillbarimg" />
                    <div className="skillbartext">
                        <h2>App Design</h2>
                        <p>I'm currently not into App design, but I plan to dive into it soon.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
