import React from 'react';
import "./styles/resume.css";

const Resume = () => {
    return (
        <div className="resume-container">
            <a href={process.env.PUBLIC_URL + '/resume.pdf'} target="_blank" rel="noopener noreferrer" className="resume-button">
                Resume
            </a>
        </div>
    );
}

export default Resume;