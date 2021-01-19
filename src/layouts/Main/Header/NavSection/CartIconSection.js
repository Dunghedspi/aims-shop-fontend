import { makeStyles } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
const useStyles = makeStyles(() => ({
	root: {
		position: "relative",
	},
	qty: {
		fontSize: "10px",
		position: "absolute",
		color: "black",
		left: "7px",
		top: "8px",
	},
}));
function CartIcon() {
	const classes = useStyles();
	const { total } = useSelector((state) => state.CartReducers);
	return (
		<div className={classes.root}>
			<svg width="24px" height="24px" fill="#111" viewBox="0 0 24 24">
				<path d="M16 7a1 1 0 0 1-1-1V3H9v3a1 1 0 0 1-2 0V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1z"></path>
				<path d="M20 5H4a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h16z"></path>
			</svg>
			<span className={classes.qty}>{total > 0 ? total : ""}</span>
		</div>
	);
}

export default CartIcon;
