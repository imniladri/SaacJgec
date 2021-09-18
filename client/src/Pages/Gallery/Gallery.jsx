import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./Gallery.css";

import {
    pageVariants,
    pageTransition,
} from "../../Components/Framer/Animation";

function Gallery() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "SAAC | Gallery";
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
                    <h2>Gallery</h2>
                    <span></span>
                    <p>Our memories till now!</p>
                </motion.div>
            </div>
        </>
    );
}

export default Gallery;
