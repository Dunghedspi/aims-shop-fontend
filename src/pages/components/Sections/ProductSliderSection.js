/* eslint-disable react/prop-types */
import ProductSection from "./ProductSection";
import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
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
function ProductSliderSection(props) {
	const { id } = props;
	const classes = useStyles();
	const [offsetX, setOffsetX] = useState(0);
	const renderProducts = () => {
		let list = [];
		for (let i = 0; i < 10; i++) {
			list.push(
				<li
					aria-hidden="false"
					data-in-view="true"
					data-index={i}
					className={classes.silde}
					key={i}
				>
					<ProductSection />
				</li>
			);
		}
		return list;
	};
	const handelClickPrevBtn = () => {
		if (offsetX < 0) {
			let widthElement =
				document.getElementById(`${id}`).childNodes[0].clientWidth + 20;
			let x = offsetX + widthElement;
			document.getElementById(
				`${id}`
			).style.transform = `translate3d(${x}px, 0px, 0px)`;
			setOffsetX(x);
		}
	};
	const handelClickNextBtn = () => {
		let widthElement =
			document.getElementById(`${id}`).childNodes[0].clientWidth + 20;
		if (offsetX > -(widthElement * 7)) {
			let x = offsetX - widthElement;
			document.getElementById(
				`${id}`
			).style.transform = `translate3d(${x}px, 0px, 0px)`;
			setOffsetX(x);
		}
	};
	return (
		<React.Fragment>
			<div
				className={classes.box}
				role="complementary"
				data-test="recommendations-carousel"
			>
				<div
					data-orientation="vertical"
					data-hero="false"
					data-slides-to-show="3"
					data-scrollable="true"
					data-should-transition="false"
					data-semantically-hide-unobserved-cards="true"
					data-conditionally-hide-nav-buttons="false"
					data-with-tracker="false"
					data-with-navigation="false"
				>
					<ul className={classes.slider} id={id}>
						{renderProducts()}
					</ul>
					<button
						data-automation="carousel-nav-prev"
						aria-label="Previous"
						className={classes.prevBtn}
						onClick={() => handelClickPrevBtn()}
					>
						<div className={classes.icon}>
							<svg
								aria-hidden="true"
								fill="#111"
								height="30px"
								width="30px"
								viewBox="0 0 185.4 300"
							>
								<path d="M160.4 300c-6.4 0-12.7-2.5-17.7-7.3L0 150 142.7 7.3c9.8-9.8 25.6-9.8 35.4 0 9.8 9.8 9.8 25.6 0 35.4L70.7 150 178 257.3c9.8 9.8 9.8 25.6 0 35.4-4.9 4.8-11.3 7.3-17.6 7.3z"></path>
							</svg>
						</div>
					</button>
					<button
						data-automation="carousel-nav-next"
						aria-label="Next"
						className={classes.nextBtn}
						onClick={() => handelClickNextBtn()}
					>
						<div className={classes.icon}>
							<svg
								aria-hidden="true"
								fill="#111"
								height="30px"
								width="30px"
								viewBox="0 0 185.4 300"
							>
								<path d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z"></path>
							</svg>
						</div>
					</button>
				</div>
			</div>
		</React.Fragment>
	);
}

export default ProductSliderSection;
