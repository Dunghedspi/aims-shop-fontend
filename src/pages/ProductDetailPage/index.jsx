import { Button, Divider, makeStyles } from "@material-ui/core";
import productsImage from "assets/img/faces/product.jpg";
import React from "react";
import ProductSliderSection from "pages/components/Sections/ProductSliderSection";
const useStyles = makeStyles(() => ({
	root: {
		display: "flex",
		flexFlow: "column nowrap",
		padding: "3% 3%",
	},
	productDetail: {
		display: "flex",
		flexFlow: "row wrap",
	},
	imgBox: {
		flex: "70%",
	},
	img: {
		width: "100%",
		height: "auto",
	},
	description: {
		flex: "30%",
		display: "flex",
		flexFlow: "column nowrap",
		padding: "0 0 0 2%",
	},
	titleBox: {
		display: "flex",
		flexFlow: "row nowrap",
		justifyContent: "space-between",
	},
	buttonGroup: {
		display: "flex",
		flexFlow: "row nowrap",
		justifyContent: "center",
		marginTop: "3%",
	},
	addCart: {
		width: "75%",
		padding: "4% 7%",
		borderRadius: "30px",
		backgroundColor: "black",
		color: "#FFFFFF",
		"&:hover": {
			backgroundColor: "black",
		},
	},
	context: {
		marginTop: "2%",
	},
	relatedProductsBox: {
		marginTop: "5%",
		display: "flex",
		flexFlow: "column nowrap",
	},
	slider: {
		display: "grid",
		gridTemplateColumns:
			"repeat( 12, calc(33.3333% - var(--grid-gap,16px)) )",
		gridGap: "var(--grid-gap,16px)",
		transition: "all 350ms ease-in-out 0s",
	},
	prevBtn: {
		listStyle: "none",
		overflow: "visible",
		position: "absolute",
		width: "106px",
		background: "none",
		transition: "all 0.25s ease-in 0s",
		opacity: 0.4,
		border: "0px",
		color: "var(--palette-actionable,#333)",
		fontSize: "16px",
		cursor: "pointer",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		outline: 0,
		top: 0,
		bottom: 0,
		marginTop: 0,
		left: 0,
	},
	box: {
		position: "relative",
		overflowX: "hidden",
	},
	silde: {
		display: "inline-block",
		listStyle: "none",
	},
	nextBtn: {
		listStyle: "none",
		overflow: "visible",
		position: "absolute",
		width: "106px",
		background: "none",
		transition: "all 0.25s ease-in 0s",
		opacity: 0.4,
		border: "0px",
		color: "var(--palette-actionable,#333)",
		fontSize: "16px",
		cursor: "pointer",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		outline: 0,
		top: 0,
		bottom: 0,
		marginTop: 0,
		right: 0,
	},
	icon: {
		color: "var(--palette-actionable,#333)",
		cursor: "pointer",
		margin: 0,
		padding: 0,
		border: 0,
		fontSize: "100%",
		font: "inherit",
		verticalAlign: "baseline",
		height: "40px",
		width: "40px",
		backgroundColor: "rgb(255, 255, 255)",
		borderRadius: "20px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		"&>svg": {
			width: "14px",
			height: "14px",
		},
		"&>svg:hover": {
			width: "18px",
			height: "18px",
		},
		"&:hover": {
			color: "black",
		},
	},
	"@media(max-width:800px)": {
		nextBtn: {
			width: "40px",
		},
		prevBtn: {
			width: "40px",
		},
	},
	"@media(max-width:600px)": {
		slider: {
			display: "grid",
			gridTemplateColumns:
				"repeat( 12, calc(100% - var(--grid-gap,16px)) )",
			gridGap: "var(--grid-gap,16px)",
			transition: "all 350ms ease-in-out 0s",
		},
	},
}));

function ProductDetailPage() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.productDetail}>
				<div className={classes.imgBox}>
					<img
						alt={"productDetail"}
						src={productsImage}
						className={classes.img}
					/>
				</div>
				<div className={classes.description}>
					<div className={classes.titleBox}>
						<div className={classes.title}>
							<h4>Products Physical (DVD)</h4>
							<h1>Nike Air Zoom</h1>
						</div>
						<div className={classes.price}>
							<h4>¥33,000</h4>
						</div>
					</div>
					<Divider />
					<div className={classes.context}>
						<h4>
							Gear up for your next personal best with the Nike
							Air Zoom Alphafly NEXT%. Responsive foam and 2 Zoom
							Air units combine to push your running game forward
							for your next marathon or road race.
						</h4>
					</div>
					<Divider />
					<div className={classes.buttonGroup}>
						<Button
							variant="contained"
							color="primary"
							disableElevation
							className={classes.addCart}
						>
							Add To Cart
						</Button>
					</div>
				</div>
			</div>
			<div className={classes.relatedProductsBox}>
				<div className={classes.relatedTitle}>
					<h4>YOU MIGHT ALSO LIKE</h4>
				</div>
				<ProductSliderSection id={"productRated"} />
			</div>
		</div>
	);
}

export default ProductDetailPage;
