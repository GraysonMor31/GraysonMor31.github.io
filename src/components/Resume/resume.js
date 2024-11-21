import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const Resume = () => {
  return (
    <div className="resume">
      <h1>My Resume</h1>

      {/* PDF Viewer */}
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js"> 

        <div style={{ height: "750px", border: "1px solid #ccc" }}>
          <Viewer fileUrl="/Cyber-Analyst.pdf" />
        </div>
      </Worker>

      {/* Download Link */}
      <div style={{ marginTop: "20px" }}>
        <a href="/Cyber Analyst.pdf" download="Grayson_Morris_Resume.pdf" className="btn">
          Download My Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;