/* eslint-disable react/prop-types */
import { makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import fomatPrice from "helpers/convertPrice";
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
		maxWidth: "31%",
	},
	"@media(max-width:800px)": {
		productDetail: {
			maxWidth: "45%",
		},
	},
}));
function ProductSection(props) {
	const { product } = props;
	const classes = useStyles();
	return (
		<Link
			className={classes.productDetail}
			to={`product/details?id=${product.id}`}
		>
			<div className={classes.root}>
				<div className={classes.imgBox}>
					<img
						alt={"products"}
						src={product.imageUrl}
						className={classes.image}
					/>
				</div>
				<div className={classes.description}>
					<h4>{product.name}</h4>
				</div>
				<div className={classes.price}>
					<span>{fomatPrice(product.price) + " VND"}</span>
				</div>
			</div>
		</Link>
	);
}

export default ProductSection;
