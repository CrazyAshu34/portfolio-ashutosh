import React from 'react';
import "./Contact.css";
import walmart from "../../Assets2/walmart.png";
import adobe from "../../Assets2/adobe.png";
import microsoft from "../../Assets2/microsoft.png";
import facebook from "../../Assets2/facebook.png";
import facebookicon from '../../Assets2/facebook-icon.png';
import instagramicon from '../../Assets2/instagram.png';
import twitericon from '../../Assets2/twitter.png';
import youtube from '../../Assets2/youtube.png';

const Contact = () => {
    return (
        <section id="contactpage">
            <div id="clients">
                <h1 className="contactpagetitle">My Clients</h1>
            </div>
            <p className="clientsdesc">
                Description ipsum dolor sit amet consectetur adipisicing elit. Eligendi quasi reiciendis, dolor vel repellendus consequatur saepe deleniti alias eos rerum!
            </p>
            <div className="myclintimgs">
                <img src={walmart} alt="clients" className="clientimg" />
                <img src={adobe} alt="clients" className="clientimg" />
                <img src={microsoft} alt="clients" className="clientimg" />
                <img src={facebook} alt="clients" className="clientimg" />
            </div>
            <div id="contact">
                <h1 className="contactpagetitle">Contact Me</h1>
                <span className="contactdesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ea modi, soluta aperiam dignissimos voluptas?</span>
                <form action="" className="contactform">
                    <input type="text" id="name" className="name" placeholder='Your Name' />
                    <input type="email" id="email" className="name" placeholder='Your Email' />
                    <textarea id="message" className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                    <button type="submit" id="submit" value='send' className="submitbtn">Submit</button>
                    <div className="links">
                        <img src={facebookicon} alt="" className="link" />
                        <img src={twitericon} alt="" className="link" />
                        <img src={youtube} alt="" className="link" />
                        <img src={instagramicon} alt="" className="link" />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
