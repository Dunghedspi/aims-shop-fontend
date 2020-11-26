/* eslint-disable no-undef */
import { Fade } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Modal from "@material-ui/core/Modal";
import styles from "assets/jss/pages/HomePage.js";
// @material-ui/icons
import Footer from "components/Footer/Footer.js";
import React, { useState } from "react";
import SectionNavbars from "../components/Sections/AppBarSection";
import SignInPage from "../SignInPage";
import { Switch, Route } from "react-router-dom";
import { HomeRouter } from "routes";
const renderRoute = (routes) => {
	return routes.map((item, index) => (
		<Route
			key={index}
			path={item.path}
			name={item.name}
			exact={item.exact}
			component={item.component}
		/>
	));
};

export default function HomePage() {
	const [isLogin, setIsLogin] = useState(true);
	const [open, setOpen] = React.useState(false);
	// const handleOpen = () => {
	// 	setOpen(true);
	// };
	const handleClose = () => {
		setOpen(false);
	};
	const classes = styles();
	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<div className={classes.paper}>
						<SignInPage />
					</div>
				</Fade>
			</Modal>
			<div className={classes.headerBox}>
				<SectionNavbars
					color="white"
					fixed
					changeColorOnScroll={{
						height: 400,
						color: "white",
					}}
					login={{
						isLogin,
						setIsLogin,
					}}
				/>
			</div>
			<div className={classes.body}>
				<Switch>{renderRoute(HomeRouter)}</Switch>
			</div>

			<Footer />
		</div>
	);
}
