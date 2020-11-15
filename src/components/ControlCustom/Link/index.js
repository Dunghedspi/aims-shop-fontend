/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
const LinkControl = (props) => {
	const { label, path } = props;
	return (
		<React.Fragment>
			<Link to={path}>{label}</Link>
		</React.Fragment>
	);
};

export default LinkControl;
