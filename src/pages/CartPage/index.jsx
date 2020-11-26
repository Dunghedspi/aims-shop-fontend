import React from "react";
import { InputBase, makeStyles, Typography } from "@material-ui/core";
import ProductSection from "./Sections/Product";
import BillSection from "./Sections/BillSection";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
	cartBox: {
		display: "flex",
		flexFlow: "row warp",
		padding: "5% 10%",
	},
	products: {
		display: "flex",
		flexFlow: "column nowrap",
		flex: "70%",
	},
	bill: {
		flex: "30%",
		alignSelf: "top",
	},
	search: {
		display: "flex",
		flexFlow: "row wrap",
		justifyContent: "space-between",
		alignItems: "center",
	},
	searchBox: {
		display: "flex",
		flexFlow: "row wrap",
		alignItems: "center",
		position: "relative",
		"&:hover": {
			backgroundColor: "#e5e5e5",
		},
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(1),
			width: "auto",
		},
		backgroundColor: "#f5f5f5",
		borderRadius: "45px",
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		position: "absolute",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		color: "black",
		cursor: "pointer",
		zIndex: "100",
		maxWidth: "25px",
		borderRadius: "50%",
	},
	inputRoot: {
		color: "black",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "14ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
	"@media (max-width: 900px)": {
		cartBox: {
			flexFlow: "column nowrap",
		},
		bill: {
			marginTop: "50px",
		},
	},
}));
const renderProducts = () => {
	let list = [];
	for (let i = 0; i < 4; i++) {
		list.push(<ProductSection key={i} />);
	}
	return list;
};
function CartPage() {
	const classes = useStyles();
	return (
		<div className={classes.cartBox}>
			<div className={classes.products}>
				<div className={classes.search}>
					<Typography variant="h5">Cart (5 Products)</Typography>
					<div className={classes.searchBox}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ "aria-label": "search" }}
						/>
					</div>
				</div>
				{renderProducts()}
			</div>
			<div className={classes.bill}>
				<BillSection />
			</div>
		</div>
	);
}

export default CartPage;
