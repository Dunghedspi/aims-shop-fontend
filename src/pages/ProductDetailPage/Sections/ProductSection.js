import { makeStyles } from "@material-ui/core";
import productsImage from "assets/img/faces/product.jpg";
import React from "react";
import { Link } from "react-router-dom";
// import classNames from "classnames";
const useStyles = makeStyles(() => ({
	root: {
		display: "flex",
		flexFlow: "column nowrap",
		alignItems: "flex-start",
	},
	image: {
		width: "100%",
		height: "auto",
	},
	productDetail: {
		color: "black",
		textDecoration: "none",
		margin: "0 2% 4% 0",
		display: "inline",
		float: "left",
	},
	"@media(max-width:800px)": {
		description: {
			fontSize: "12px",
		},
		price: {
			fontSize: "12px",
		},
	},
}));
function ProductSection() {
	const classes = useStyles();
	return (
		<Link className={classes.productDetail} to={"/"}>
			<div className={classes.root}>
				<div className={classes.imgBox}>
					<img
						alt={"products"}
						src={productsImage}
						className={classes.image}
					/>
				</div>
				<div className={classes.description}>
					<h4>Shoes Nike</h4>
				</div>
				<div className={classes.price}>
					<span>¥17,600</span>
				</div>
			</div>
		</Link>
	);
}

export default ProductSection;
