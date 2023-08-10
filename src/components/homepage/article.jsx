import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Tilt } from "react-tilt";

import "./styles/article.css";

const Article = (props) => {
	const { title, description, date, link } = props;

	return (
		<Tilt className="Tilt" options={{ reverse: true, max: 15, scale: 1 }}>
			<div className="homepage-article">
				<Link to={link} target="_blank" rel="noopener noreferrer">
					<div className="homepage-article-content">
						<div className="homepage-article-date">
							|&nbsp;&nbsp;&nbsp;{date}
						</div>
						<div className="homepage-article-title">{title}</div>
						<div className="homepage-article-description">
							{description}
						</div>
						<div className="homepage-article-link">
							Read article{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</div>
					</div>
				</Link>
			</div>
		</Tilt>
	);
};

export default Article;
