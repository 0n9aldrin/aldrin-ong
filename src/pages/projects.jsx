import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

// import logo from "../components/projects/programming-not-css.svg";
// import styles from "../components/projects/programming-styles.css";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";
import Resume from "../components/common/resume";
import Programmer from "../components/projects/Programmer";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");
	const projectsLength = INFO.projects.items.length;

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<Resume />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="projects-main">
							<div className="projects-left-side">
								<Programmer />
							</div>

							<div className="projects-right-side">
								<div className="projects-page-title">
									{INFO.projects.title}
								</div>

								<div className="projects-page-subtitle">
									{INFO.projects.description}
								</div>
							</div>
						</div>

						<div className="projects-list">
							<AllProjects numberOfProjects={projectsLength} />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
