import React, { useRef } from 'react';
import "./Contact.css";
import walmart from "../../Assets2/walmart.png";
import adobe from "../../Assets2/adobe.png";
import microsoft from "../../Assets2/microsoft.png";
import facebook from "../../Assets2/facebook.png";
import facebookicon from '../../Assets2/facebook-icon.png';
import instagramicon from '../../Assets2/instagram.png';
import twitericon from '../../Assets2/twitter.png';
import youtube from '../../Assets2/youtube.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const name = e.target.user_name.value;
        const email = e.target.user_email.value;
        const message = e.target.message.value;

        if (!name || !email || !message) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        emailjs.sendForm('service_57s68ra', 'template_wi6cpr7', form.current, 'vPCtfBMqSB9UI2Hj4')
            .then((result) => {
                console.log(result.text);
                alert("Message sent Successfully")
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id="contactpage">
            <div id="clients">
                <h1 className="contactpagetitle">My Clients</h1>
            </div>
            <p className="clientsdesc">
                "I'm eager to work with these awesome clients who appreciate my skills."
            </p>
            <div className="myclintimgs">
                <img src={walmart} alt="clients" className="clientimg" />
                <img src={adobe} alt="clients" className="clientimg" />
                <img src={microsoft} alt="clients" className="clientimg" />
                <img src={facebook} alt="clients" className="clientimg" />
            </div>
            <div id="contact">
                <h1 className="contactpagetitle">Contact Me</h1>
                <span className="contactdesc">Want to chat? Drop me a message!</span>
                <form className="contactform" ref={form} onSubmit={sendEmail}>
                    <input name="user_name" type="text" id="name" className="name" placeholder='Your Name' />
                    <input name="user_email" type="email" id="email" className="name" placeholder='Your Email' />
                    <textarea id="message" className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                    <button type="submit" id="submit" value='Send' className="submitbtn">Submit</button>
                    <div className="links">
                        <a href="https://www.instagram.com/ashu_singhaniaa/" target="_blank" rel="noopener noreferrer">
                            <img src={instagramicon} alt="Instagram" className="link" />
                        </a>
                        <a href="https://www.youtube.com/channel/UC95cZyHavnNxfZKvRqsmDQQ" target="_blank" rel="noopener noreferrer">
                            <img src={youtube} alt="YouTube" className="link" />
                        </a>
                        <a href="https://twitter.com/AshutoshfastAF" target="_blank" rel="noopener noreferrer">
                            <img src={twitericon} alt="Twitter" className="link" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100071644302351" target="_blank" rel="noopener noreferrer">
                            <img src={facebookicon} alt="Facebook" className="link" />
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
