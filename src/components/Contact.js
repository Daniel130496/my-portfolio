import React from "react";
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import "./css/Contact.css";

const Contact = () => {
    return(
        <div id="contact" className="contact">
            <h2>Contact Me</h2>
            <div className="contact-icons">
                <a href="mailto:official130496@gmail.com" className="icon">
                    <FaEnvelope size={30} />
                </a>
                <a href="tel:+60149960832" className="icon">
                    <FaPhone size={30} />
                </a>
            </div>
        </div>
    )
}
export default Contact;
