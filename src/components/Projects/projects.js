import React, { useState } from "react";
import "./projects.css";

function Projects() {
    return (
        <div className="projects">
            <h1>My Projects</h1>
            <div className="project-item">
                <h2>Project 1</h2>
                <p>Project 1 Description</p>
                <a href="">View Project</a>
            </div>
            <div className="project-item">
                <h2>Project 2</h2>
                <p>Project 2 Description</p>
                <a href="">View Project</a>
            </div>
            <div className="project-item">
                <h2>Project 3</h2>
                <p>Project 3 Description</p>
                <a href="">View Project</a>
            </div>
        </div>
    );
}

export default Projects;