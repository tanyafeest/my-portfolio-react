import React from "react";

function history_1() {
	return {
		date: "2/2022 ~ 3/2023",
		title: "Senior Front-end Developer",
		description:
			"I have worked in Tianlu Digital Services in Spain",
		keywords: [
			"Senior Front-end Developer"
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
				<div> - Decreased load times by 58% using isomorphic React and Node.js for 13 web applications one month after taking over the project</div>
				<div> - Collaborated with the back-end team to integrate user-facing elements with server-side logic, resulting in a 20% reduction in server response time.</div>
				<div> - Reduced the time spent on development by 73% by creating maintainable reusable components.</div>
				<div> - Created an interactive and user-friendly website experience by working with a team of 25 developers for one month.</div>
			</React.Fragment>
		),
	};
}

function history_2() {
	return {
		date: "3/2019 ~ 11/2021",
		title: "React / React Native Specialist",
		description:
			"I have worked in Mavlers(Netherland)",
		style: ``,
		keywords: [
			"React / React Native Specialist"
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

const MyHistory = [history_1, history_2];

export default MyHistory;
