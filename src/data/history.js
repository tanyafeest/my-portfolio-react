import React from "react";

function history_1() {
	return {
		date: "7/2019 ~ 3/2023",
		title: "Senior Laravel Developer",
		description:
			"I have worked on CMC GLOBAL(Japan)",
		keywords: [
			"Senior Laravel Developer"
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
				<div> - Created project using Laravel's Vapor (AWS serverless) to scan, activate, void, and check the balance of gift cards.</div>
				<div> - Applied console commands to implement cron job in new projects.</div>
				<div> - Improved Laravel version v7 to v8 using Rector.</div>
				<div> - Completed Motive Mob project with Laravel v9 + Tailwind CSS + Vite.</div>
				<div> - Integrated Spotify, Google OAuth 2, Spotify etc using Cashier and Socialite.</div>
				<div> - Sent SMS using Twilio and Integrated Facebook, Twitter, Apple and Instagram.</div>
				<div> - Synchronized two PHP, Smarty, and jQuery model-view-controller (MVC) systems such that they swapped out modules.</div>
				<div> - Developed a custom PHP website for video games and movies, that supported a user account, favorites, and reviews.</div>
				<div> - Background in MVC style frameworks (eg laravel, Symfony, Codeigniter).</div>
				<div> - Experience developing highly scalable and composable RESTful APIs (JSON, API design, HATEOAS, Swagger, Hypermedia, JSON-LD, HAL)</div>
				<div> - Experience with REST APIs, with a basic understanding of object-oriented programming (OOP) design patterns.</div>
				<div> - Experience with REST APIs, with a basic understanding of object-oriented programming (OOP) design patterns.</div>
				<div> - Experience with MySQL (relational concepts, SQL, connection pooling. ER diagrams).</div>
				<div> - Introduced and configured the application to use Git for both version-control and deployment.</div>
			</React.Fragment>
		),
	};
}

function history_2() {
	return {
		date: "9/2017 ~ 5/2019",
		title: "Senior Front-End  Developer",
		description:
			"I have worked BrainCave Software Pvt. Ltd.(Singapore)",
		style: ``,
		keywords: [
			"Senior Front-end Developer"
		],
		body: (
			<React.Fragment>
				<div> - Created several React components with D3 charts that support interactive visualizations of market data projections and analysis.</div>
				<div> - Developed unit tests and component snapshot tests using Jest and Enzyme.</div>
				<div> - Implemented client-side data transformations to map, filter, reduce, etc. large datasets for display in interactive SVG charts.</div>
				<div> - Developed a streaming music service front-end that allows users to create custom radio stations.</div>
				<div> - Refactored very large front-end application code to make it more modular and reusable.</div>
				<div> - Built a desktop-like browser application for real-time analysis of risk and commodity index valuations.</div>
				<div> - Implemented the React front-end for a "play for purpose" NFT game called Zeedz.</div>
				<div> - Developed a multi-tenant dashboard that facilitates users and organizations managements with multiple permission levels for different account types and access control on individual level.</div>
				<div> - Developed a visual web builder based on JavaScript that creates web interfaces using user-friendly UI components.</div>
				<div> - Used complex graph libraries for a variety of complex data display scenarios.</div>
				<div> - Built a React/Three.js website for a film portfolio with Webflow integration.</div>
				<div> - Created an Nginx gateway server acting as a reverse proxy to internal microservices for cybersecurity. The gateway instance protects entry to individual servers, so they don't need to be exposed to the public network.</div>
				<div> - Designed, developed, tested, and released a commodity index market tool used in the valuation and hedge analysis of large commodity index swap, options, futures, and structured note transactions.</div>
				<div> - Developed a RESTful API for the system to be consumed by other applications, including Android apps.</div>
				<div> - Built a lightweight yet powerful video-calling web application powered by Next.js, Twilio Video, and Tailwind CSS.</div>
			</React.Fragment>
		),
	};
}

function history_3(){
	return {
		date: "7/2015 ~ 3/2017",
		title: "Junior PHP Developer",
		description:
			"I have worked AMSTERDAM SOFTWARE",
		style: ``,
		keywords: [
			"Junior PHP Developer"
		],
		body: (
			<React.Fragment>
				<div> - Developed a PDF Generator system that transforms a crafted HTML document into PDF format using Webkit.</div>
				<div> - Detected several security-related issues and started tasks to solve them.</div>
				<div> - Integrated Infinite scroll for pages with thousands of data to improve UX.</div>
				<div> - Maintained and implemented site customizations and updates (PHP, JavaScript, HTML, CSS).</div>
				<div> - Developed interfaces, routes, containers, lazy loading modules to boost UI/UX using third-party libraries.</div>
				<div> - Integrated file upload feature as well as importing and exporting dataset feature.</div>
				<div> - Implemented the React front-end for a "play for purpose" NFT game called Zeedz.</div>
				<div> - Set up integration and E2E tests using the Cypress framework.</div>
				<div> - Created an intelligence system for gathering and processing data from the game Prime World, landing pages, and advertising campaigns of the game. It helped to measure all KPIs and optimize all steps of the buying cycle.</div>
				<div> - Led the effort to carry out the needed adaptations to migrate the sites from PHP 5 to PHP 7 and from PHP 7 to PHP 8.1.</div>
				<div> - Built a dashboard for publishers that allows them to manage and integrate their inventory. Technologies used : React.JS + Reflux, Gulp, Capistrano.</div>
			</React.Fragment>
		),
	};
}

const MyHistory = [history_1, history_2, history_3];

export default MyHistory;
