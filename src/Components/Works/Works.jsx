import React from "react";
import "./Works.css";
import Portfolio1 from "../../Assets2/portfolio-1.png";
import Portfolio2 from "../../Assets2/portfolio-2.png";
import Portfolio3 from "../../Assets2/portfolio-3.png";
import Portfolio4 from "../../Assets2/portfolio-4.png";
import Portfolio5 from "../../Assets2/portfolio-5.png";
import Portfolio6 from "../../Assets2/portfolio-6.png";

const Works = () => {
    return (
        <section id="works">
            <h2 className="worktitle">My Works</h2>
            <span className="workdesc">
                I pay close attention to the finer details.
            </span>
            <div className="myworksimgs">
                <a
                    href="https://crazyashu34.github.io/weather-react-app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={Portfolio1} alt="" className="worksimg" />
                </a>

                <a
                    href="https://crazyashu34.github.io/e-com-app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={Portfolio2} alt="" className="worksimg" />
                </a>
                <a
                    href="https://crazyashu34.github.io/Amazon-Live-website/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={Portfolio3} alt="" className="worksimg" />
                </a>

                <a
                    href="https://crazyashu34.github.io/TextUtiles-react/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={Portfolio4} alt="" className="worksimg" />
                </a>

                <a
                    href="https://crazyashu34.github.io/TODO-LIST-REACT/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={Portfolio5} alt="" className="worksimg" />
                </a>

                <a href="/" target="_blank" rel="noopener noreferrer">
                    <img src={Portfolio6} alt="" className="worksimg" />
                </a>
            </div>
            <button className="workbtn">See More</button>
        </section>
    );
};

export default Works;
