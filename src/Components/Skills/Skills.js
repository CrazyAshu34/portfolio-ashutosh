import React from 'react'
import "./Skills.css"
import uidesign from "../../Assets2/ui-design.png";
import webdesign from "../../Assets2/website-design.png";
import appdesign from "../../Assets2/app-design.png";

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skilltitle'>What I do </span>
            <span className='skilldescription'> I am a skilled and passionate web designer with experience </span>
            <div className="myskillbars">
                <div className="skillbar">
                    <img src={uidesign} alt="uidesign" className="skillbarimg" />
                    <div className="skillbartext">
                        <h2>UI/UX Design</h2>
                        <p>I make wonderful ui ux designs </p>
                    </div>
                </div>

                <div className="skillbar">
                    <img src={webdesign} alt="webdesign" className="skillbarimg" />
                    <div className="skillbartext">
                        <h2>website design</h2>
                        <p>As I grow older, I'm learning how to create better websites. </p>
                    </div>
                </div>

                <div className="skillbar">
                    <img src={appdesign} alt="appdesign" className="skillbarimg" />
                    <div className="skillbartext">
                        <h2>App Design</h2>
                        <p>I am not aware of App desing now. but in the future in wil.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills