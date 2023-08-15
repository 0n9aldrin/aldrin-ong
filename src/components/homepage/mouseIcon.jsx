import React from 'react';
import "./styles/mouseIcon.css";

const MouseIcon = ({ showMouseIcon }) => (
    <span className={`scroll-btn ${showMouseIcon ? "" : "hidden"}`}>
        <span className="mouse">
            <span></span>
        </span>
    </span>
);

export default MouseIcon;