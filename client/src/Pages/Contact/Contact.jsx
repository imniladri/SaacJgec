import React, { useEffect } from "react";
import "./Contact.css";

function Contact() {
    useEffect(() => {
        document.title = "SAAC | Contact";
    }, []);

    return (
        <>
            <div className="breadcrumb">
                <h2>Contact</h2>
                <span></span>
                <p>How it all begins!</p>
            </div>
        </>
    );
}

export default Contact;
