import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";
import Resume from "../components/common/resume";
import Movies from "../components/about/movies";
import MouseIcon from "../components/homepage/mouseIcon";

const About = () => {
	const [showMouseIcon, setShowMouseIcon] = useState(true);
	const currentSEO = SEO.find((item) => item.page === "about");

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		// eslint-disable-next-line no-unused-vars
		let lastScrollY = window.pageYOffset;

		const handleScroll = () => {
			const currentScrollY = Math.round(window.pageYOffset, 2);

			// Logic for showing or hiding the mouse icon
			setShowMouseIcon(currentScrollY < 100);

			lastScrollY = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll);

		// Cleanup listener when component unmounts
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<Resume />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									From a young age, I've been driven by the
									desire to innovate and make a meaningful
									impact through technology.
									<br />
									<br />
									My entrepreneurial journey started in high
									school when I founded a startup called{" "}
									<a
										className="link"
										href="https://github.com/0n9aldrin/trainme-frontend"
									>
										Trainme
									</a>
									, an app connecting tennis coaches to
									students. While the venture didn't reach the
									heights I envisioned, the experience taught
									me invaluable lessons about perseverance and
									the power of technology to touch lives, even
									on a small scale.
									<br />
									<br />
									That little taste of entrepreneurship
									sparked a fire in me, and I've been on a
									mission to build, create, and innovate ever
									since. My dream is to build products that
									make a difference in people's lives, and I'm
									excited to see where my journey takes me
									next.
								</div>
								<MouseIcon showMouseIcon={showMouseIcon}/>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src={`${process.env.PUBLIC_URL}/3D_Animation_about.jpg`}
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
						<h2 className="movie-title">Movies</h2>
						<hr className="custom-hr" />
						<div className="movie-description">
							Movies have always been more than mere entertainment
							for me; they served as windows to the vast tapestry
							of the world. From a young age, these cinematic
							narratives became the shared language between my
							dad, my brother, and me, forging a bond that only
							grew stronger with every reel. Here, I've curated a
							list of the top 10 movies that have left an
							indelible mark on my life, each holding a unique
							place in my heart.
						</div>
						<Movies />
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
