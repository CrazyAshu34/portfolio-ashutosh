import React from 'react'
import "./Works.css"
import Portfolio1 from "../../Assets2/portfolio-1.png";
import Portfolio2 from "../../Assets2/portfolio-2.png";
import Portfolio3 from "../../Assets2/portfolio-3.png";
import Portfolio4 from "../../Assets2/portfolio-4.png";
import Portfolio5 from "../../Assets2/portfolio-5.png";
import Portfolio6 from "../../Assets2/portfolio-6.png";
const Works = () => {
    return (
        <section id='works'>
            <h2 className='worktitle'>My Portfolio</h2>
            <span className="workdesc">I take pride in paing attention to the smllest descripino</span>
            <div className="myworksimgs">
                <img src={Portfolio1} alt="" className="worksimg" />
                <img src={Portfolio2} alt="" className="worksimg" />
                <img src={Portfolio3} alt="" className="worksimg" />
                <img src={Portfolio4} alt="" className="worksimg" />
                <img src={Portfolio5} alt="" className="worksimg" />
                <img src={Portfolio6} alt="" className="worksimg" />
            </div>
            <button className="workbtn">See More</button>
        </section>
    )
}

export default Works