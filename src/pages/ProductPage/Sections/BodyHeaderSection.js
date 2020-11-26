/* eslint-disable react/prop-types */
import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import CustomDropdown from "components/CustomDropdown/CustomDropdown";
const useStyles = makeStyles(() => ({
	root: {
		display: "flex",
		flexFlow: "row nowrap",
		justifyContent: "space-between",
		alignItems: "center",
	},
	toggleFilter: {
		display: "flex",
		flexFlow: "row nowrap",
		justifyContent: "space-between",
		alignItems: "center",
	},
	title: {
		fontSize: "20px",
	},
	"@media(max-width:800px)": {
		title: {
			fontSize: "16px",
		},
		button: {
			fontSize: "12px",
		},
	},
}));
function BodyHeaderSection(props) {
	const { showFilter, setShowFilter } = props;
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.title}>New Mens Shoes(62)</div>
			<div className={classes.toggleFilter}>
				<div className={classes.filter}>
					<Button
						className={classes.button}
						endIcon={<MenuOpenIcon />}
						onClick={() => setShowFilter(!showFilter)}
					>
						Hidden filter
					</Button>
				</div>
				<div className={classes.sortBy}>
					<CustomDropdown
						buttonText="Sort By"
						dropdownHeader="Sort By"
						buttonProps={{
							className: classes.navLink,
							color: "transparent",
						}}
						dropdownList={[
							"Newest",
							"Sale",
							"Price: Low - Hight",
							"Price: Hight - Low",
						]}
					/>
				</div>
			</div>
		</div>
	);
}

export default BodyHeaderSection;
