/* eslint-disable no-undef */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
// @material-ui/icons
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/pages/HomePage.js";
import slides from "assets/img/landing-bg.jpg";
import SectionNavbars from "../components/Sections/SectionNavbars";
import ProductSection from "./Sections/ProductSection";
import TeamSection from "./Sections/TeamSection";

const useStyles = makeStyles(styles);

export default function HomePage() {
	const classes = useStyles();
	return (
		<div>
			<SectionNavbars
				color="white"
				fixed
				changeColorOnScroll={{
					height: 400,
					color: "white",
				}}
			/>
			<Parallax filter image={slides}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem xs={12} sm={12} md={6}>
							<h1 className={classes.title}>
								Your Story Starts With Us.
							</h1>
							<h4>
								Every landing page needs a small description
								after the big bold title, that{"'"}s why we
								added this text here. Add here all the
								information that can make you or your product
								create the first impression.
							</h4>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div className={classes.container}>
					<ProductSection />
					<TeamSection />
				</div>
			</div>
			<Footer />
		</div>
	);
}
