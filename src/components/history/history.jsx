import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./style/history.css";

const History = (props) => {
	const { date, title, description, link } = props;

	return (
		<React.Fragment>
			<div className="article">
				<Link to={link}>
					<div className="article-right-side">
						<div className="article-title">{title}</div>
						<div className="article-date">{date}</div>
						<div className="article-description">{description}</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default History;
