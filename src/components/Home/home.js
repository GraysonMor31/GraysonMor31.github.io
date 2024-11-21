import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
    return (
    <div className="hero">
        <h1>Grayson Morris</h1>
        <p>Securing tomorrow's technology with innovative solutions</p>
        <div className="hero-buttons">
            <Link to="/Resume" className="btn btn-primary">View My Resume</Link>
            <Link to="/Projects" className="btn btn-secondary">Explore My Projects</Link>
        </div>
    </div>
    );
}

export default Home;