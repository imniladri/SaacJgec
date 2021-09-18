import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ContactImg } from "../../Assets/Assets";
import ContactForm from "./ContactForm";
import "./Contact.css";

import {
    pageVariants,
    pageTransition,
} from "../../Components/Framer/Animation";

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "SAAC | Contact";
    }, []);

    return (
        <>
            <div className="breadcrumb">
                <motion.div
                    exit="out"
                    animate="in"
                    initial="init"
                    variants={pageVariants}
                    transition={pageTransition}
                >
                    <h2>Contact Us</h2>
                    <span></span>
                    <p>We love to hear from you!</p>
                </motion.div>
            </div>

            <motion.div
                exit="out"
                animate="in"
                initial="init"
                variants={pageVariants}
                transition={pageTransition}
            >
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
            </motion.div>
        </>
    );
}

export default Contact;
