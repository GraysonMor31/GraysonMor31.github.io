import React, { useState } from "react";
import "./About.css";

const sections = [
  {
    title: "Skills",
    content: (
      <ul>
        <li>Python</li>
        <li>Bash</li>
        <li>Java</li>
        <li>Active Directory</li>
      </ul>
    ),
  },
  {
    title: "General",
    content: (
      <p>
        I am a Senior at CSU specializing in Networks and Security with experience in compliance frameworks
        and incident response. I am also the CTO of the IBM-Z club and a member of Hashdump Cybersecurity.
      </p>
    ),
  },
];

function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % sections.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + sections.length) % sections.length);
  };

  return (
    <div className="about-carousel">
      <h1>{sections[activeIndex].title}</h1>
      <div className="carousel-content">{sections[activeIndex].content}</div>
      <div className="carousel-controls">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default About;
