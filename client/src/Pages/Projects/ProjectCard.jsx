import React from "react";

function ProjectCard(props) {
    return (
        <>
            <div className="project_card">
                <div className="project_figure">
                    <img src={props.img} alt={props.alt} />
                </div>
                <div className="project_details">
                    <h4>{props.name}</h4>
                    <p>{props.desc}</p>
                </div>
            </div>
        </>
    );
}

export default ProjectCard;
