import React from "react";

function article_1() {
	return {
		date: "2 May 2020",
		title: "The Benefits of Cloud Computing",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				
					<div> - Accessibility anywhere, with any device.</div>
					<div> - Ability to get rid of most or all hardware and software.</div>
					<div> - Centralized data security.</div>
					<div> - Higher performance and availability.</div>
					<div> - Quick application deployment.</div>
				
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "9 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<div>
				According to Statista, the artificial intelligence (AI) healthcare market, valued at $11 billion in 2021, is projected to be worth $187 billion in 2030. That massive increase means we will likely continue to see considerable changes in how medical providers, hospitals, pharmaceutical and biotechnology companies, and others in the healthcare industry operate.
				Better machine learning (ML) algorithms, more access to data, cheaper hardware and the availability of 5G have contributed to the increasing application of AI in the healthcare industry, accelerating the pace of change. AI and ML technologies can sift through enormous volumes of health data—from health records and clinical studies to genetic information—and analyze it much faster than humans.</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
