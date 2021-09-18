import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ProjectData from "./ProjectData";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

import {
    pageVariants,
    pageTransition,
} from "../../Components/Framer/Animation";

function Projects() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "SAAC | Projects";
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
                    <h2>Projects</h2>
                    <span></span>
                    <p>Our ongoing works!</p>
                </motion.div>
            </div>

            <motion.div
                exit="out"
                animate="in"
                initial="init"
                variants={pageVariants}
                transition={pageTransition}
            >
                <section id="projects">
                    <div className="projects_content">
                        {ProjectData.map((val) => {
                            return (
                                <ProjectCard
                                    key={val.id}
                                    name={val.project_name}
                                    desc={val.project_desc}
                                    img={val.project_img}
                                    alt={val.project_alt}
                                />
                            );
                        })}
                    </div>
                </section>
            </motion.div>
        </>
    );
}

export default Projects;
