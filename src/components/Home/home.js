import React from "react";
import "./home.css";

function Home() {
    return (
    <div className="hero">
        <h1>Grayson Morris</h1>
        <p>Securing tomorrow's technology with innovative solutions</p>
        <div className="hero-buttons">
            <a href="/Resume" className="btn">View My Resume</a>
            <a href="#projects" className="btn btn-secondary">Explore My Projects</a>
        </div>
    </div>
    );
}

export default Home;