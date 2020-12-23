import { SvgIcon } from "@material-ui/core";
import React from "react";
import happyIcon from "assets/img/emoji/happy.svg";
function index(props) {
	return (
		<div>
			<SvgIcon component={happyIcon} />
			<span>{props.message}</span>
		</div>
	);
}

export default index;
