import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./Blog.css";

import {
    pageVariants,
    pageTransition,
} from "../../Components/Framer/Animation";

function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "SAAC | Blog";
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
                    <h2>Blog</h2>
                    <span></span>
                    <p>All our releases!</p>
                </motion.div>
            </div>
        </>
    );
}

export default Blog;
