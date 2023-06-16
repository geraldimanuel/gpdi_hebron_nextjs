/* eslint-disable no-tabs */
/* eslint-disable indent */

// REVIEW: INI ESLINT KENAPA BANYAK BET WOE
// TODO: perbaiki eslintnya

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				// eslint-disable-next-line quotes
				protocol: "https",
				// eslint-disable-next-line quotes
				hostname: "gpdi-hebron.com",
				// eslint-disable-next-line quotes
				port: "",
				// eslint-disable-next-line quotes, comma-dangle
				pathname: "/website/images/banner/*",
				// eslint-disable-next-line comma-dangle
			},
			// eslint-disable-next-line comma-dangle
		],
		// eslint-disable-next-line comma-dangle
	},
	// eslint-disable-next-line semi
};

// eslint-disable-next-line semi
module.exports = nextConfig;
