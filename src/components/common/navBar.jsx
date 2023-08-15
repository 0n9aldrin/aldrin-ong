import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;

	const [menuOpen, setMenuOpen] = useState(true); // state to manage the side menu

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					{/* Desktop view */}
					<div className={`nav-background ${menuOpen ? "menu" : ""}`}>
						<ul className={`nav-list ${menuOpen ? "menu" : ""}`}>
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/" onClick={toggleMenu}>Home</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about" onClick={toggleMenu}>About</Link>
							</li>
							<li
								className={
									active === "work"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/work" onClick={toggleMenu}>Work</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects" onClick={toggleMenu}>Projects</Link>
							</li>
							<li
								className={
									active === "articles"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/articles" onClick={toggleMenu}>Articles</Link>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact" onClick={toggleMenu}>Contact</Link>
							</li>
						</ul>
					</div>
					{/* Mobile view */}
					<button className="menu-btn" onClick={toggleMenu}>
						{menuOpen ? "☰" : "✕"}
					</button>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
