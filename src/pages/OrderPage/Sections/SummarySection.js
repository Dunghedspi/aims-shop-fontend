/* eslint-disable react/prop-types */
import React from "react";
import { makeStyles } from "@material-ui/core";
import fomatPrice from "helpers/convertPrice";
const useStyles = makeStyles(() => ({
	container: {
		display: "flex",
		flexFlow: "column nowrap",
		border: "#EEEEEE 2px solid",
	},
	body: {
		display: "flex",
		flexFlow: "column nowrap",
		padding: "10px 20px",
	},
	item: {
		display: "flex",
		flexFlow: "row nowrap",
		justifyContent: "space-between",
		alignItems: "center",
	},
	title: {
		fontSize: "16px",
	},
	total: {
		color: "red",
	},
	header: {
		backgroundColor: "#EEEEEE",
		paddingLeft: "20px",
	},
	h4: {
		padding: 0,
	},
}));
function SummarySection(props) {
	const { sum, ship } = props;
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<div className={classes.header}>
				<h3>SUMMARY</h3>
			</div>
			<div className={classes.body}>
				<div className={classes.item}>
					<h4 className={classes.h4}>SUBTOTAL</h4>
					<span>{fomatPrice(sum) + " VND"}</span>
				</div>
				<div className={classes.item}>
					<h4 className={classes.h4}>{"SHIPPING & HANDLING"}</h4>
					<span>{fomatPrice(ship) + " VND"}</span>
				</div>
				<div className={classes.item}>
					<h3 className={classes.title}>TOTAL</h3>
					<span className={classes.total}>
						{fomatPrice(sum + ship) + " VND"}
					</span>
				</div>
			</div>
		</div>
	);
}

export default SummarySection;
