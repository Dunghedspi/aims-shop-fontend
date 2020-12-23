/* eslint-disable react/prop-types */
import { Button, makeStyles, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const useRowStyles = makeStyles(() => ({
	root: {
		"& > *": {
			borderBottom: "unset",
		},
	},
	link: {
		textDecoration: "none",
		//color: "#FFFFFF",
	},
	btn: {
		border: "#EEEEEE 1px solid",
		"& > *": {
			color: "#FFFFFF",
		},
		backgroundColor: "black",
		//minHeight: "50px",
		"&:hover": {
			backgroundColor: "#494646",
		},
	},
}));
function OrderItemSection(props) {
	const { products, total, status, id, date, address } = props;
	const classes = useRowStyles();
	const match = useRouteMatch();
	return (
		<TableRow>
			<TableCell align="left">{id}</TableCell>
			<TableCell align="left">{date}</TableCell>
			<TableCell align="left">{address}</TableCell>
			<TableCell align="left">{products}</TableCell>
			<TableCell align="left">{total}</TableCell>
			<TableCell align="left">{status}</TableCell>
			<TableCell align="right">
				<Link to={`${match.url}/${id}`} className={classes.link}>
					<Button
						size="small"
						className={classes.btn}
						endIcon={<ArrowForwardIosIcon />}
					>
						{"Details"}
					</Button>
				</Link>
			</TableCell>
		</TableRow>
	);
}

export default OrderItemSection;
