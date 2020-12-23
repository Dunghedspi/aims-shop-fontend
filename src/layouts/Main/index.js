import { makeStyles } from "@material-ui/core";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/index";
import { UserApi } from "apis/UserApi";
import { useDispatch } from "react-redux";
import { SetInfo } from "actions/UserAction";
const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.dark,
		display: "flex",
		height: "100%",
		overflow: "hidden",
		width: "100%",
		flexFlow: "column nowrap",
		margin: 0,
	},
	content: {
		flex: "1 1 auto",
		height: "100%",
		marginTop: "64px",
	},
	footer: {
		marginTop: theme.spacing(2),
	},
}));

const UserLayout = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	React.useEffect(() => {
		const getUser = async () => {
			const response = await UserApi.getUserInfo();
			if (response) {
				dispatch(SetInfo(response));
			}
		};
		getUser();
	}, []);
	return (
		<div className={classes.root}>
			<Header />
			<div className={classes.content}>
				<Outlet />
			</div>
			<div className={classes.footer}>
				<Footer />
			</div>
		</div>
	);
};

export default UserLayout;
