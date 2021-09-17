import React from "react";

function ContactForm() {
    return (
        <>
            <form id="contact_form">
                <div className="form-group">
                    <label htmlFor="name">
                        Your Name <span>*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="Name"
                        className="form-control"
                        placeholder=" "
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">
                        Email Id <span>*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="Email"
                        className="form-control"
                        placeholder=" "
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="sub">
                        Subject <span>*</span>
                    </label>
                    <input
                        type="text"
                        id="sub"
                        name="Subject"
                        className="form-control"
                        placeholder=" "
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">
                        Your Message <span>*</span>
                    </label>
                    <textarea
                        id="message"
                        name="Message"
                        className="form-control"
                        placeholder=" "
                        rows="4"
                        required
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-submit">
                    Send Message
                </button>
            </form>
        </>
    );
}

export default ContactForm;
