import React, { useEffect } from "react";
import ProjectData from "./ProjectData";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects() {
    useEffect(() => {
        document.title = "SAAC | Projects";
    }, []);

    return (
        <>
            <div className="breadcrumb">
                <h2>Projects</h2>
                <span></span>
                <p>Our ongoing works!</p>
            </div>

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
        </>
    );
}

export default Projects;
