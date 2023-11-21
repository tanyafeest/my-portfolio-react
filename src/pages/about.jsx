import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Article from "../components/homepage/article";
import History from "../components/history/history"
import myArticles from "../data/articles";
import myHistory from "../data/history";
import {
	faTwitter,
	faGithub,
	faStackOverflow,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

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
									{INFO.about.description}
								</div>

								
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>
								<div className="homepage-socials">
									<a
										href={INFO.socials.twitter}
										target="_blank"
										rel="noreferrer"
									>
										<FontAwesomeIcon
											icon={faTwitter}
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
										href={INFO.socials.stackoverflow}
										target="_blank"
										rel="noreferrer"
									>
										<FontAwesomeIcon
											icon={faStackOverflow}
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
											icon={faMailBulk}
											className="homepage-social-icon"
										/>
									</a>
								</div>
							</div>
						</div>

					</div>
					<div className="homepage-after-title">
							<div className="homepage-articles">
								{myHistory.map((histtory, index) => (
									<div
										className="homepage-article"
										key={(index + 1).toString()}
									>
										<History
											key={(index + 1).toString()}
											title={histtory().title}
											date={histtory().date}
											description={histtory().description}
											link={"/history/" + (index + 1)}
										/>
									</div>
								))}
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

export default About;
