import React, { useEffect } from "react";
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
                <p>How it all begins!</p>
            </div>
        </>
    );
}

export default Projects;
