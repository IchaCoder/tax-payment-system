/** @format */

module.exports = {
	content: ["./src/**/*.{html,jsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#2CB1BC",
				inputBg: "#e8f0fe",
			},
			maxWidth: {
				pref: "90%",
			},
			width: {
				sm: "70%",
				pref: "90%",
				lg: "40%",
			},
			aspectRatio: {
				new: 1 / 2,
			},
			gridTemplateColumns: {
				13: "repeat(auto-fit, minmax(300px,1fr))",
			},
			fontSize: {
				xxs: ["14px", { lineHeight: "1rem", letterSpacing: 1 }],
				custom: ["16px", { lineHeight: 1 }],
			},
			height: {
				hh: "500px",
			},
			boxShadow: {
				inner2: " 1px 1px 3px 0px black inset",
			},
			screens: {
				xs: "320px",
			},
		},
	},
	plugins: [],
};
