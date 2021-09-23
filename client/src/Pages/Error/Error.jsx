import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiHome } from "react-icons/hi";
import { ErrorImg } from "../../Assets/Assets";
import "./Error.css";

import {
    pageVariants,
    pageTransition,
} from "../../Components/Framer/Animation";

function Error() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "SAAC | Page Not Found";
    }, []);

    return (
        <>
            <section id="error">
                <motion.div
                    exit="out"
                    animate="in"
                    initial="init"
                    variants={pageVariants}
                    transition={pageTransition}
                >
                    <div className="error">
                        <object data={ErrorImg} aria-label="Error Img"></object>
                        <h4>
                            Oops! <br /> Looks like The Page is Lost :(
                        </h4>
                        <p>
                            The link you followed probably broken, or <br />
                            The page has been either removed or doesn't exists.
                        </p>

                        <Link to="/home" className="btn">
                            <HiHome />
                            <span>Go To Home</span>
                        </Link>
                    </div>
                </motion.div>
            </section>
        </>
    );
}

export default Error;
