import { title } from "assets/jss/theme.js";

const productStyle = {
	section: {
		padding: "70px 0",
		textAlign: "center",
	},
	title: {
		...title,
		marginBottom: "1rem",
		marginTop: "30px",
		minHeight: "32px",
		textDecoration: "none",
	},
	description: {
		color: "#999",
	},
	header: {
		display: "flex",
		flexFlow: "row nowrap",
		"&>h1": {
			margin: 0,
			color: "black",
		},
		justifyContent: "space-between",
		alignItems: "center",
	},
};

export default productStyle;
