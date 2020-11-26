/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import BodyHeaderSection from "./Sections/BodyHeaderSection";
import FilterSection from "./Sections/FilterSection";
import ProductSection from "./Sections/ProductSection";
import classNames from "classnames";
const useStyles = makeStyles(() => ({
	container: {
		display: "flex",
		flexFlow: "column nowrap",
		alignItems: "flex-start",
	},
	BodyProduct: {
		padding: "2% 2% 1% 3%",
		display: "flex",
		flexFlow: "row nowrap",
		alignItems: "flex-start",
		paddingTop: "1%",
		position: "relative",
	},
	filter: {
		flex: "20%",
		padding: "0 3% 0 0",
		position: "relative",
		top: "inherit",
		left: "inherit",
		transition: "margin-left 0.5s",
		overflowX: "hidden",
		zIndex: 10,
		marginLeft: "-20%",
		width: "20%",
	},
	products: {
		flex: "100%",
		display: "flex",
		flexFlow: "row wrap",
	},
	BodyHeaderSection: {
		width: "100%",
		padding: "3px 2% 3px 2%",
		top: "inherit",
		transition: "transform .3s ease",
	},
	resetMarginLFilter: {
		marginLeft: "0",
	},
	sticky: {
		position: "fixed",
		top: 0,
		zIndex: 100,
		backgroundColor: "#ffffff !important",
		boxShadow:
			"0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
		width: "100%",
		marginLeft: "0!important",
		borderRadius: "0 0 10px 10px",
		transition: "transform .3s ease",
	},
	sticky1: {
		position: "fixed",
		top: 0,
		zIndex: 2000,
		backgroundColor: "#fff !important",
		boxShadow:
			"0 0px 1px 0px rgba(0, 0, 0, 0.12), 0 0px 0px 0px rgba(0, 0, 0, 0.15)",
		width: "100%",
		marginLeft: "0!important",
		borderRadius: "0 0 10px 10px",
		transform: "translateY(64px)",
		transition: "transform .3s ease",
	},
}));
const renderProducts = () => {
	let list = [];
	for (let i = 0; i < 10; i++) {
		list.push(<ProductSection key={i} />);
	}
	return list;
};

function ProductPage() {
	const classes = useStyles();
	const [showFilter, setShowFilter] = useState(true);
	const [headerYOffset, setHeaderYOffset] = useState(0);
	const [currentYOffset, setCurrentYOffset] = useState(0);
	const animationFilter = (showFilter) => {
		if (showFilter) {
			document
				.getElementById("filter")
				.classList.add(classes.resetMarginLFilter);
			setShowFilter(true);
		} else {
			document
				.getElementById("filter")
				.classList.remove(classes.resetMarginLFilter);
			setShowFilter(false);
		}
	};
	const myFunction = () => {
		if (window.pageYOffset > currentYOffset) {
			if (window.pageYOffset >= headerYOffset) {
				console.log(currentYOffset);
				document
					.getElementById("headerSection")
					.classList.remove(classes.sticky1);
				document
					.getElementById("headerSection")
					.classList.add(classes.sticky);
			} else {
				console.log(2);
				document
					.getElementById("headerSection")
					.classList.remove(classes.sticky1);
			}
		} else {
			if (window.pageYOffset > headerYOffset) {
				console.log(3);
				document
					.getElementById("headerSection")
					.classList.remove(classes.sticky);
				document
					.getElementById("headerSection")
					.classList.add(classes.sticky1);
			} else {
				console.log(4);
				document
					.getElementById("headerSection")
					.classList.remove(classes.sticky);
				document
					.getElementById("headerSection")
					.classList.remove(classes.sticky1);
			}
		}
		setCurrentYOffset(window.pageYOffset);
	};
	React.useEffect(() => {
		setHeaderYOffset(document.getElementById("headerSection").offsetTop);
		window.addEventListener("scroll", myFunction);
		return function cleanup() {
			window.removeEventListener("scroll", myFunction);
		};
	});
	return (
		<div className={classes.container}>
			<div className={classes.BodyHeaderSection} id={"headerSection"}>
				<BodyHeaderSection
					showFilter={showFilter}
					setShowFilter={animationFilter}
				/>
			</div>
			<div className={classes.BodyProduct}>
				<div
					className={classNames(
						classes.filter,
						classes.resetMarginLFilter
					)}
					id={"filter"}
				>
					<FilterSection />
				</div>
				<div className={classNames(classes.products)}>
					{renderProducts()}
				</div>
			</div>
		</div>
	);
}

export default ProductPage;
