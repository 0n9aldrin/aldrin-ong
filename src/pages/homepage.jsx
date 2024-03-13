import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faInstagram,
	faLinkedin,
	faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";
import TypedComponent from "../components/homepage/typed";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/homepage.css";
import Resume from "../components/common/resume";
import MouseIcon from "../components/homepage/mouseIcon";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);
	const [showMouseIcon, setShowMouseIcon] = useState(true);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		// eslint-disable-next-line no-unused-vars
		let lastScrollY = window.pageYOffset;

		const handleScroll = () => {
			const currentScrollY = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (currentScrollY * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}

			// Logic for showing or hiding the mouse icon
			setShowMouseIcon(currentScrollY < 100);

			lastScrollY = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll);

		// Cleanup listener when component unmounts
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
				<meta
					name="google-site-verification"
					content="iMGE4TditBRc1WGR7iK0h7ddQLUaXI9hHGLjcWwrn7c"
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<Resume />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<SpeedInsights />
						<h1 className="title homepage-title">
							<TypedComponent strings={INFO.homepage.titles} />
						</h1>
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src={
												process.env.PUBLIC_URL +
												"/homepage2.jpg"
											}
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.medium}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMedium}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faEnvelope}
									className="homepage-social-icon"
								/>
							</a>
						</div>
						<MouseIcon showMouseIcon={showMouseIcon} />
						<h2 className="projects-title">Projects</h2>
						<div className="homepage-projects">
							<AllProjects numberOfProjects={6} />
						</div>
						<div className="more-projects">
							<a
								href={process.env.PUBLIC_URL + "/projects"}
								className="more-button"
							>
								View all projects
							</a>
						</div>
						<h2 className="work-experience-title">
							Work Experience
						</h2>
						<div className="homepage-works">
							<Works />
						</div>
						<div className="more-work">
							<a
								href={process.env.PUBLIC_URL + "/work"}
								className="more-button"
							>
								Explore My Journey
							</a>
						</div>
						<h2 className="blogs-title">Featured Blogs</h2>
						<div className="homepage-articles">
							{myArticles.slice(0, 3).map((article, index) => (
								<div
									className="homepage-article-wrapper"
									key={(index + 1).toString()}
								>
									<Article
										key={(index + 1).toString()}
										date={article().date}
										title={article().title}
										description={article().description}
										link={article().url}
									/>
								</div>
							))}
						</div>
						<div className="more-work">
							<a
								href={process.env.PUBLIC_URL + "/articles"}
								className="more-button"
							>
								View all blogs
							</a>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
