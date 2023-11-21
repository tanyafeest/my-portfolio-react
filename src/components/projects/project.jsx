import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}>
					<div>
						<div className="project-container">
							<di>
								<div className="project-title">{title}</div>
								<div className="project-description">{description}</div>
								<div className="project-link">
									<div className="project-link-icon">
										<FontAwesomeIcon icon={faLink} />
									</div>

									<div className="project-link-text">{linkText}</div>
								</div>
							</di>
								<div className="project-logo">
									<img src={logo} alt="logo" />
								</div>
					
						</div>
					</div>
					
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
