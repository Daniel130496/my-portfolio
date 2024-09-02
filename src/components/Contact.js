import React from "react";
import "./css/Contact.css";
import emailIcon from "../assets/images/email.png";
import phoneIcon from "../assets/images/phone.png";
import githubIcon from "../assets/images/github.png";

const Contact = () => {
    return (
        <div id="contact" className="contact">
            <h2>Contact Me</h2>
            <div className="contact-icons">
                <a href="mailto:official130496@gmail.com" className="icon">
                    <img src={emailIcon} alt="email icon" />
                </a>
                <a href="tel:+60149960832" className="icon">
                    <img src={phoneIcon} alt="smartphone icon" />
                </a>
                <a href="https://github.com/Daniel130496" className="icon">
                    <img src={githubIcon} alt="github" />
                </a>
            </div>
        </div>
    );
};

export default Contact;
