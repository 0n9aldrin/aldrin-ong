import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NotionRenderer } from "react-notion-x";

import { Helmet } from "react-helmet";
import styled from "styled-components";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import myArticles from "../data/articles";

import "./styles/readArticle.css";

let ArticleStyle = styled.div``;

const ReadArticle = () => {
	const navigate = useNavigate();
	let { slug } = useParams();
	const [recordMap, setRecordMap] = useState(null);

	const article = myArticles[slug - 1];

	// Check if the article is a Notion page
	const isNotionPage = article().notionPageId !== undefined;

	useEffect(() => {
		window.scrollTo(0, 0);
		if (isNotionPage) {
			fetch(`/api/notion?pageId=${article().notionPageId}`)
				.then((response) => {
					if (!response.ok) {
						throw new Error("Network response was not ok");
					}
					return response.json();
				})
				.then((data) => setRecordMap(data))
				.catch((error) => {
					console.error("Error fetching Notion data:", error);
				});
		}
	}, [article, isNotionPage]);

	ArticleStyle = styled.div`
		${article().style}
	`;

	if (isNotionPage && recordMap) {
		return (
			<React.Fragment>
				<Helmet>
					<title>{`${article().title} | ${INFO.main.title}`}</title>
					<meta name="description" content={article().description} />
					<meta
						name="keywords"
						content={article().keywords.join(", ")}
					/>
					{/* Open Graph tags */}
					<meta
						property="og:title"
						content={`${article().title} | ${INFO.main.title}`}
					/>
					<meta
						property="og:description"
						content={article().description}
					/>
					<meta
						property="og:image"
						content={article().image || "default-image-url"}
					/>
					<meta property="og:type" content="article" />
				</Helmet>
				<div className="read-article-page-content">
					<div className="read-article-header">
						<NavBar />
						<div className="read-article-logo-container">
							<div className="read-article-logo">
								<Logo width={46} />
							</div>
						</div>
					</div>
					<div className="title read-article-notion-title">
						{article().title}
					</div>
					<div className="notion-wrapper">
						<NotionRenderer
							recordMap={recordMap}
							fullPage={false}
							darkMode={true}
						/>
					</div>
					<div className="content-wrapper">
						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	} else {
		return (
			<React.Fragment>
				<Helmet>
					<title>{`${article().title} | ${INFO.main.title}`}</title>
					<meta name="description" content={article().description} />
					<meta
						name="keywords"
						content={article().keywords.join(", ")}
					/>
				</Helmet>

				<div className="page-content">
					<NavBar />

					<div className="content-wrapper">
						<div className="read-article-logo-container">
							<div className="read-article-logo">
								<Logo width={46} />
							</div>
						</div>

						<div className="read-article-container">
							<div className="read-article-back">
								<img
									src="../back-button.png"
									alt="back"
									className="read-article-back-button"
									onClick={() => navigate(-1)}
								/>
							</div>

							<div className="read-article-wrapper">
								<div className="read-article-date-container">
									<div className="read-article-date">
										{article().date}
									</div>
								</div>

								<div className="title read-article-title">
									{article().title}
								</div>

								<div className="read-article-body">
									<ArticleStyle>
										{article().body}
									</ArticleStyle>
								</div>
							</div>
						</div>
						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
};

export default ReadArticle;
