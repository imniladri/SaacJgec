import React, { useEffect } from "react";
import { ContactImg } from "../../Assets/Assets";
import ContactForm from "./ContactForm";
import "./Contact.css";

function Contact() {
    useEffect(() => {
        document.title = "SAAC | Contact";
    }, []);

    return (
        <>
            <div className="breadcrumb">
                <h2>Contact Us</h2>
                <span></span>
                <p>We love to hear from you!</p>
            </div>

            <section id="contact">
                <div className="contact container">
                    <div className="contact_img col-lg-6">
                        <img
                            src={ContactImg}
                            alt="Contact Img"
                            className="img-fluid"
                        />
                    </div>

                    <div className="contact_form col-lg-6">
                        <ContactForm />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
