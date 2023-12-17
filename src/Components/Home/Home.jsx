import React from 'react'
import profile from "../../Assets/profile.png";
import "./Home.css"
const Home = () => {
    return (
        <div>
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
    )
}

export default Home