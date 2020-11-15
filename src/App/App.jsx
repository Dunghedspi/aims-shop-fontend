import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MainRoute } from "../routes";

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

const App = () => {
	return (
		<React.Fragment>
			<CssBaseline />
			<Router>
				<Switch>{renderRoute(MainRoute)}</Switch>
			</Router>
		</React.Fragment>
	);
};
export default App;
