import React from "react";
import { makeStyles } from "@material-ui/core";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import OrderListSections from "./Sections/OrderListSection";
import OrderDetails from "./Sections/OrderDetailsSection";
const useStyles = makeStyles(() => ({}));
function index() {
	const classes = useStyles();
	const match = useRouteMatch();
	console.log(match);
	return (
		<div className={classes.root}>
			<Switch>
				<Route
					path={`${match.url}/`}
					component={() => <OrderListSections />}
					exact={true}
				/>
				<Route
					path={`${match.url}/:id`}
					component={() => <OrderDetails />}
					exact={true}
				/>
			</Switch>
		</div>
	);
}

export default index;
