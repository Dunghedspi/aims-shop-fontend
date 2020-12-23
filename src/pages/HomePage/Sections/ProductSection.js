/* eslint-disable react/prop-types */
// @material-ui/core components
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/pages/HomePage/productStyle.js";
import ProductSliderSection from "pages/components/Sections/ProductSliderSection";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function TrendingSection(props) {
	const classes = useStyles();
	const { title } = props;
	return (
		<div className={classes.section}>
			<div className={classes.header}>
				<h1>{title}</h1>
				<Link to="/products">
					<Button className={classes.btn}>View All</Button>
				</Link>
			</div>
			<div>
				<ProductSliderSection {...props} />
			</div>
		</div>
	);
}
