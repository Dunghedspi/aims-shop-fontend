import React from "react";
import { makeStyles } from "@material-ui/core";
import SideBarSection from "./Sections/SideBarSection";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AccountDetails from "./Sections/AccountDetails";
import PaymentMethod from "./Sections/PaymentMethod";
const useStyles = makeStyles(() => ({
	container: {
		padding: "10px 20px",
		display: "flex",
		flexFlow: "row nowrap",
	},
	sidebar: {
		flex: "18%",
	},
	body: {
		flex: "82%",
		paddingLeft: "20px",
		display: "flex",
		flexFlow: "column nowrap",
	},
	"@media(max-width:800px)": {
		container: {
			flexFlow: "column nowrap",
		},
		body: {
			paddingLeft: "0px",
		},
	},
}));
function index() {
	const classes = useStyles();
	const match = useRouteMatch();
	return (
		<div className={classes.container}>
			<div className={classes.sidebar}>
				<SideBarSection />
			</div>
			<div className={classes.body}>
				<Switch>
					<Route
						path={`${match.url}`}
						component={() => <AccountDetails />}
						exact={true}
					/>
					<Route
						path={`${match.url}/payment-method`}
						component={() => <PaymentMethod />}
						exact={true}
					/>
				</Switch>
			</div>
		</div>
	);
}

export default index;
