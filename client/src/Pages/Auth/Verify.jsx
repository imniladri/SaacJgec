import React, { useEffect } from "react";
import Lottie from "react-lottie";
import { IoRocketOutline } from "react-icons/io5";
import "./Auth.css";

import { VerifyIcon } from "../../Assets/Assets";

function Verify() {
    const lottieSettings = {
        loop: true,
        autoplay: true,
        animationData: VerifyIcon,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "SAAC | Verification";
    }, []);

    return (
        <>
            <section id="verify">
                <div className="verify">
                    <div className="verify_icons">
                        <Lottie
                            className="verify_lottie"
                            options={lottieSettings}
                            height="30%"
                            width="30%"
                            isStopped={false}
                            isPaused={false}
                        />
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
