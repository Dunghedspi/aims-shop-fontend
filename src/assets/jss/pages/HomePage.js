import { makeStyles } from "@material-ui/core";
import { container, title } from "assets/jss/theme.js";

const HomePageStyle = makeStyles((theme) => ({
	container: {
		zIndex: "12",
		color: "#FFFFFF",
		...container,
	},
	title: {
		...title,
		display: "inline-block",
		position: "relative",
		marginTop: "30px",
		minHeight: "32px",
		color: "#FFFFFF",
		textDecoration: "none",
	},
	subtitle: {
		fontSize: "1.313rem",
		maxWidth: "500px",
		margin: "10px auto 0",
	},
	main: {
		background: "#FFFFFF",
		position: "relative",
		zIndex: "3",
	},
	mainRaised: {
		margin: "-60px 30px 0px",
		borderRadius: "6px",
		boxShadow:
			"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
	},
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
	body: {
		paddingTop: "64px",
	},
	"@media(max-width:900px)": {
		body: {
			paddingTop: "110px",
		},
	},
}));

export default HomePageStyle;
