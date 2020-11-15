import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import SearchIcon from "@material-ui/icons/Search";
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/components/headerLinksStyle.js";
import { InputBase } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function HeaderLinks() {
	const classes = useStyles();
	return (
		<List className={classes.list}>
			<ListItem className={classes.listItem}>
				<CustomDropdown
					noLiPadding
					buttonText="Products Physical"
					buttonProps={{
						className: classes.navLink,
						color: "transparent",
					}}
					dropdownList={[
						<Link to="/" key={1} className={classes.dropdownLink}>
							BOOK
						</Link>,
						<Link to="/" key={2} className={classes.dropdownLink}>
							DVD
						</Link>,
						<Link to="/" key={3} className={classes.dropdownLink}>
							CD
						</Link>,
						<Link to="/" key={3} className={classes.dropdownLink}>
							LP
						</Link>,
					]}
				/>
			</ListItem>
			<ListItem className={classes.listItem}>
				<CustomDropdown
					noLiPadding
					buttonText="Products Digital"
					buttonProps={{
						className: classes.navLink,
						color: "transparent",
					}}
					dropdownList={[
						<Link to="/" key={1} className={classes.dropdownLink}>
							MOVIE
						</Link>,
						<Link to="/" key={2} className={classes.dropdownLink}>
							BOOK
						</Link>,
						<Link to="/" key={3} className={classes.dropdownLink}>
							ALBUM
						</Link>,
						<Link to="/" key={4} className={classes.dropdownLink}>
							LP
						</Link>,
					]}
				/>
			</ListItem>
			<ListItem className={classes.listItem}>
				<div className={classes.search}>
					<div className={classes.searchIcon}>
						<SearchIcon />
					</div>
					<InputBase
						placeholder="Search…"
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput,
						}}
						inputProps={{ "aria-label": "search" }}
					/>
				</div>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Tooltip
					id="instagram-twitter"
					title="Follow us on twitter"
					placement={window.innerWidth > 959 ? "top" : "left"}
					classes={{ tooltip: classes.tooltip }}
				>
					<Button
						href="https://twitter.com/CreativeTim?ref=creativetim"
						target="_blank"
						color="transparent"
						className={classes.navLink}
					>
						<i
							className={classes.socialIcons + " fab fa-twitter"}
						/>
					</Button>
				</Tooltip>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Tooltip
					id="instagram-facebook"
					title="Follow us on facebook"
					placement={window.innerWidth > 959 ? "top" : "left"}
					classes={{ tooltip: classes.tooltip }}
				>
					<Button
						color="transparent"
						href="https://www.facebook.com/CreativeTim?ref=creativetim"
						target="_blank"
						className={classes.navLink}
					>
						<i
							className={classes.socialIcons + " fab fa-facebook"}
						/>
					</Button>
				</Tooltip>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Tooltip
					id="instagram-tooltip"
					title="Follow us on instagram"
					placement={window.innerWidth > 959 ? "top" : "left"}
					classes={{ tooltip: classes.tooltip }}
				>
					<Button
						color="transparent"
						href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
						target="_blank"
						className={classes.navLink}
					>
						<i
							className={
								classes.socialIcons + " fab fa-instagram"
							}
						/>
					</Button>
				</Tooltip>
			</ListItem>
		</List>
	);
}
