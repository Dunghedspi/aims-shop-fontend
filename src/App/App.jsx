import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "routes.js";
import ScrollTop from "pages/components/SrcollTop";
import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => {
	const routing = useRoutes(routes);
	console.log(routing);
	return (
		<React.Fragment>
			<CssBaseline />
			<ScrollTop />
			{routing}
		</React.Fragment>
	);
};

export default App;
