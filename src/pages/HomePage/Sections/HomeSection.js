import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Parallax from "components/Parallax/Parallax";
import React from "react";
import classNames from "classnames";
import styles from "assets/jss/pages/HomePage.js";
import slides from "assets/img/bg7.jpg";
import ProductSection from "../ProductSection";
import TeamSection from "./TeamSection";
function HomeSection() {
	const classes = styles();
	return (
		<React.Fragment>
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
					<ProductSection title={"Trending"} id={"trending"} />
					<ProductSection title={"Sale"} id={"sale"} />
					<ProductSection title={"Products Physical"} id={"py"} />
					<ProductSection title={"Products Digital"} id={"pd"} />
					<TeamSection />
				</div>
			</div>
		</React.Fragment>
	);
}

export default HomeSection;
