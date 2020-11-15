/* eslint-disable quotes */
import { defaultFont } from "assets/jss/theme.js";

import tooltip from "assets/jss/tooltipsStyle.js";

const headerLinksStyle = (theme) => ({
	list: {
		...defaultFont,
		fontSize: "14px",
		margin: 0,
		paddingLeft: "0",
		listStyle: "none",
		paddingTop: "0",
		paddingBottom: "0",
		color: "inherit",
	},
	listItem: {
		float: "left",
		color: "inherit",
		position: "relative",
		display: "block",
		width: "auto",
		margin: "0",
		padding: "0",
		[theme.breakpoints.down("sm")]: {
			width: "100%",
			"&:after": {
				width: "calc(100% - 30px)",
				content: '""',
				display: "block",
				height: "1px",
				marginLeft: "15px",
				backgroundColor: "#e5e5e5",
			},
		},
	},
	listItemText: {
		padding: "0 !important",
	},
	navLink: {
		color: "inherit",
		position: "relative",
		padding: "0.9375rem",
		fontWeight: "400",
		fontSize: "12px",
		textTransform: "uppercase",
		borderRadius: "3px",
		lineHeight: "20px",
		textDecoration: "none",
		margin: "0px",
		display: "inline-flex",
		"&:hover,&:focus": {
			color: "inherit",
			background: "rgba(200, 200, 200, 0.2)",
		},
		[theme.breakpoints.down("sm")]: {
			width: "calc(100% - 30px)",
			marginLeft: "15px",
			marginBottom: "8px",
			marginTop: "8px",
			textAlign: "left",
			"& > span:first-child": {
				justifyContent: "flex-start",
			},
		},
	},
	notificationNavLink: {
		color: "inherit",
		padding: "0.9375rem",
		fontWeight: "400",
		fontSize: "12px",
		textTransform: "uppercase",
		lineHeight: "20px",
		textDecoration: "none",
		margin: "0px",
		display: "inline-flex",
		top: "4px",
	},
	registerNavLink: {
		top: "3px",
		position: "relative",
		fontWeight: "400",
		fontSize: "12px",
		textTransform: "uppercase",
		lineHeight: "20px",
		textDecoration: "none",
		margin: "0px",
		display: "inline-flex",
	},
	navLinkActive: {
		color: "inherit",
		backgroundColor: "rgba(255, 255, 255, 0.1)",
	},
	icons: {
		width: "20px",
		height: "20px",
		marginRight: "3px",
	},
	socialIcons: {
		position: "relative",
		fontSize: "20px !important",
		marginRight: "4px",
	},
	dropdownLink: {
		"&,&:hover,&:focus": {
			color: "inherit",
			textDecoration: "none",
			display: "block",
			padding: "10px 20px",
		},
	},
	...tooltip,
	marginRight5: {
		marginRight: "5px",
	},
	search: {
		position: "relative",
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(1),
			width: "auto",
		},
		backgroundColor: "inherit",
		borderBottom: "white 1px solid",
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		cursor: "pointer",
		"&:hover": {
			backgroundColor: "none",
			size: "16px",
		},
		zIndex: "100",
		maxWidth: "30px",
		borderRadius: "50%",
		color: "white",
	},
	inputRoot: {
		color: "white",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
});

export default headerLinksStyle;
