import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/work.css"; // Renamed the CSS file.
import Resume from "../components/common/resume";

const Work = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "articles"); // Changed to "work"

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Work | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="work" />
				<Resume />
				<div className="content-wrapper">
					<div className="work-logo-container">
						<div className="work-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="work-main-container">
						<div className="title work-title">
							{INFO.work.title}
						</div>

						<div className="subtitle work-subtitle">
							{INFO.work.description}
						</div>

						<VerticalTimeline lineColor="#2e3039">
							{INFO.work.items.map((item, index) => (
								<VerticalTimelineElement
									key={index.toString()}
									date={item.date}
									iconStyle={{
										background: "#2e3039",
										color: "#2e3039",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										borderColor: "#2e3039",
									}}
									icon={
										<img
											src={item.logo}
											alt={item.title}
											style={{
												width: "100%",
												height: "100%",
												objectFit: "contain",
											}}
										/>
									}
								>
									<h3>{item.title}</h3>
									<h4>{item.role}</h4>
									<p>{item.longDescription}</p>
								</VerticalTimelineElement>
							))}
						</VerticalTimeline>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Work;
