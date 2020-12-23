/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import useStyles from "assets/jss/pages/HomePage.js";
// nodejs library that concatenates classes
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Page from "components/Page";
import Parallax from "components/Parallax/Parallax.js";
import React from "react";
import { UserApi } from "apis/UserApi";
// Sections for this page

import bg from "assets/img/bg7.jpg";
import TrendingSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import { getCookie } from "helpers/cookies";
export default function LandingPage() {
	React.useEffect(() => {
		console.log(window.screen.width);
		if (window.screen.width < 600) {
			document
				.getElementById("productHome")
				.classList.remove(classes.mainRaised);
		} else {
			document
				.getElementById("productHome")
				.classList.add(classes.mainRaised);
		}
	});
	const classes = useStyles();
	return (
		<Page title="Home Page" className={classes.root}>
			<Parallax filter image={bg}>
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
			<div
				className={classNames(classes.main, classes.mainRaised)}
				id={"productHome"}
			>
				<div className={classes.container}>
					<GridContainer>
						<GridItem xs={12}>
							<h4>Trending</h4>
						</GridItem>
						<GridItem xs={12}></GridItem>
					</GridContainer>
					<TeamSection />
				</div>
			</div>
		</Page>
	);
}
