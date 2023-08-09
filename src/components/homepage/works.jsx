import React, { useState } from "react";
import {
	faPlus,
	faMinus,
	faMapMarkerAlt,
	faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles/works.css";
import INFO from "../../data/user";

const Works = () => {
	const [selectedWork, setSelectedWork] = useState(null);

	const toggleWork = (workTitle) => {
		if (selectedWork === workTitle) {
			setSelectedWork(null);
		} else {
			setSelectedWork(workTitle);
		}
	};

	return (
		<div className="works">
			{INFO.work.items.map((workItem) => (
				<div key={workItem.title}>
					<div
						className={`work ${
							selectedWork === workItem.title ? "active-work" : ""
						}`}
						onClick={() => toggleWork(workItem.title)}
					>
						<div className="work-title-duration">
							<div className="work-title">{`${workItem.role} @ ${workItem.title}`}</div>
							<div className="work-duration">{workItem.date}</div>
						</div>
						<FontAwesomeIcon
							icon={
								selectedWork === workItem.title
									? faMinus
									: faPlus
							}
							className="work-toggle-icon"
						/>
					</div>
					<div
						className={
							selectedWork === workItem.title
								? "work-description active-description"
								: "work-description"
						}
					>
						
						<div className="work-content">
							<div className="work-info">
							<div className="work-header">
							<FontAwesomeIcon icon={faMapMarkerAlt} className="work-header-icon"/>
							<span className="work-header-text">{workItem.location}</span>
							<FontAwesomeIcon icon={faExternalLinkAlt} className="work-header-icon"/>
							<a
								href={`https://${workItem.url}`}
								target="_blank"
								rel="noopener noreferrer"
								className="work-header-text"
							>
								{workItem.url}
							</a>
						</div>
								<div className="work-detail">
									{workItem.description}
								</div>
								<div className="work-skills">
									{workItem.skills.map((skill) => (
										<span key={skill} className="skill">
											{skill}
										</span>
									))}
								</div>
							</div>
							<img
								src={workItem.logo}
								alt={`${workItem.title} Logo`}
								className="company-logo"
							/>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Works;
