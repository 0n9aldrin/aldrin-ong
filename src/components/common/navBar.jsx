import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";
import INFO from "../../data/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const NavBar = (props) => {
	const { active } = props;

	const [menuOpen, setMenuOpen] = useState(false); // initially closed
	const toggleMenu = () => setMenuOpen((prev) => !prev);
	const navItemClass = (current) =>
		`nav-item ${active === current ? "active" : ""}`;

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div
						className={`nav-background ${!menuOpen ? "menu" : ""}`}
					>
						<ul className={`nav-list ${!menuOpen ? "menu" : ""}`}>
							{INFO.nav.map((item) => (
								<li
									key={item.name}
									className={navItemClass(
										item.name.toLowerCase()
									)}
								>
									<Link to={item.route} onClick={toggleMenu}>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<button className="menu-btn" onClick={toggleMenu}>
						<FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
					</button>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
