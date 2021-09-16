import React from "react";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

function Footer() {
    return (
        <>
            <footer>
                <div className="footer_content mx-1">
                    <div className="footer_desc">
                        <img src="./svg/logo_light.svg" alt="Saac Logo" />
                        <h4>
                            Space & Aeronautics Activity Center
                            <br />
                            Jalpaiguri Government Engineering College
                        </h4>
                    </div>

                    <div className="footer_desc mx-1">
                        <p>All Rights Reserved | Created with ❤ by SAAC</p>
                        <h6>Connect with us:</h6>
                        <div className="social_links">
                            <a
                                href="https://m.facebook.com/saac2020/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaFacebook />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/space-and-aeronautics-activity-centre"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
