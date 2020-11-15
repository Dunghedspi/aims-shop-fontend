import headerLinksStyle from "assets/jss/components/headerLinksStyle.js";

const navbarsStyle = (theme) => ({
	section: {
		padding: "0",
		display: "flex",
		flexFlow: "row wrap",
		justifyContent: "center",
		alignItems: "center",
	},
	navbar: {
		marginBottom: "-20px",
		zIndex: "100",
		position: "relative",
		overflow: "hidden",
		"& header": {
			borderRadius: "0",
		},
	},
	logo: {
		maxWidth: "40px",
		minWidth: "20px",
		height: "auto",
	},
	formControl: {
		margin: "0 !important",
		paddingTop: "0",
	},
	inputRootCustomClasses: {
		margin: "0!important",
	},
	searchIcon: {
		width: "20px",
		height: "20px",
		color: "inherit",
	},
	...headerLinksStyle(theme),
	img: {
		width: "40px",
		height: "40px",
		borderRadius: "50%",
	},
	imageDropdownButton: {
		padding: "0px",
		top: "4px",
		borderRadius: "50%",
		marginLeft: "5px",
	},
	searchBox: {
		display: "flex",
		flexFlow: "row nowrap",
		justifyContent: "center",
		alignItems: "center",
	},
});

export default navbarsStyle;
