import React, { useEffect } from "react";
import { IoRocketOutline, IoMailOutline } from "react-icons/io5";
import "./Auth.css";

function Verify() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "SAAC | Verification";
    }, []);

    return (
        <>
            <section id="verify">
                <div className="verify">
                    <div className="verify_icons">
                        <IoMailOutline />
                        <span>
                            <IoRocketOutline />
                        </span>
                    </div>
                    <h2>Please Verify Your Account!</h2>
                    <p>
                        We have successfully sent you a{" "}
                        <i>verification mail!</i>
                    </p>
                    <p>
                        You will be automatically redirect to your{" "}
                        <i>dashboard</i> after you <i>verified!</i>
                    </p>
                </div>
            </section>
        </>
    );
}

export default Verify;
