import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
	root: {
		display: "flex",
		flexFlow: "row wrap",
		justifyContent: "flex-start",
		width: "100%",
		padding: "2% 5%",
	},
	title: {
		margin: "0!important",
		color: "black",
	},
	summer: {
		display: "flex",
		flexFlow: "row nowrap",
		width: "100%",
		alignItems: "center",
		justifyContent: "space-between",
		borderBottom: "#ced4da 1px solid",
	},
	Subtotal: {
		display: "flex",
		flexFlow: "row nowrap",
		width: "100%",
		alignItems: "center",
		justifyContent: "space-between",
	},
	total: {
		display: "flex",
		flexFlow: "row nowrap",
		width: "100%",
		alignItems: "center",
		justifyContent: "space-between",
		borderBottom: "#ced4da 1px solid",
	},
	button: {
		display: "flex",
		flexFlow: "row nowrap",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		margin: "15px",
		"& > button": {
			width: "100%",
			height: "50px",
			borderRadius: "7px",
		},
	},
}));
function BillSection() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div>
				<h2 className={classes.title}>Summary</h2>
			</div>
			<div className={classes.Subtotal}>
				<h4>Subtotal</h4>
				<span>¥17,600</span>
			</div>
			<div className={classes.summer}>
				<h4>Estimated Shipping {"&"} Handling</h4>
				<span>¥0</span>
			</div>
			<div className={classes.total}>
				<h4>Total</h4>
				<span>¥17,600</span>
			</div>
			<div className={classes.button}>
				<Button variant="contained" color="primary" disableElevation>
					Checkout
				</Button>
			</div>
		</div>
	);
}

export default BillSection;
