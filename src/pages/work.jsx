import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
	faMapMarkerAlt,
	faExternalLinkAlt,
	faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/work.css"; // Renamed the CSS file.
import Resume from "../components/common/resume";

const Work = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);

	const modalRef = useRef(null);

	useEffect(() => {
		function handleClickOutside(event) {
			if (modalRef.current && !modalRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		}

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleElementClick = (item) => {
		setIsOpen(true);
		setSelectedItem(item);
	};

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
									onTimelineElementClick={() => {
										handleElementClick(item);
									}}
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
												borderRadius: "30px",
											}}
										/>
									}
								>
									<h4 className="item-role">{item.role}</h4>
									<h3 className="item-title">{item.title}</h3>
								</VerticalTimelineElement>
							))}
						</VerticalTimeline>
						{isOpen && selectedItem && (
							<div className="work-modal-overlay">
								<div className="work-modal" ref={modalRef}>
									<div className="work-modal-inner">
										<button
											className="work-modal-close"
											onClick={() => setIsOpen(false)}
										>
											<FontAwesomeIcon icon={faTimes} />
										</button>
										<div className="work-modal-content">
											<div
												className="work-modal-image"
												style={{
													backgroundImage: `url(${selectedItem.image})`,
												}}
											></div>
											<div className="work-modal-right-side">
												<h3 className="custom-underline">
													<span className="role-class">
														{selectedItem.role}
													</span>
													<span> @ </span>
													<a
														href={`https://${selectedItem.url}`}
														target="_blank"
														rel="noopener noreferrer"
														className="title-class"
													>
														{selectedItem.title}
													</a>
												</h3>
												<div className="work-header work-page-header">
													<FontAwesomeIcon
														icon={faMapMarkerAlt}
														className="work-header-icon"
													/>
													<span className="work-header-text work-page-header-text">
														{selectedItem.location}
													</span>
													<FontAwesomeIcon
														icon={faExternalLinkAlt}
														className="work-header-icon"
													/>
													<a
														href={`https://${selectedItem.url}`}
														target="_blank"
														rel="noopener noreferrer"
														className="work-header-text work-page-header-text"
													>
														{selectedItem.url}
													</a>
												</div>
												{selectedItem.longDescription
													.split("\n")
													.map((line, lineIndex) => (
														<p key={lineIndex}>
															{line}
														</p>
													))}
												<div className="work-skills work-page-skills">
													{selectedItem.skills.map(
														(skill) => (
															<span
																key={skill}
																className="skill"
															>
																{skill}
															</span>
														)
													)}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}
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
