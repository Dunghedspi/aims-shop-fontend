import React from "react";
import { makeStyles } from "@material-ui/core";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import OrderItemSection from "./Sections/OrderItemSection";
import OrderListSections from "./Sections/OrderListSection";
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
					//exact={true}
				/>
				<Route
					path={`${match.url}/m`}
					component={() => <OrderItemSection />}
					exact={true}
				/>
				<Route />
			</Switch>
		</div>
	);
}

export default index;
