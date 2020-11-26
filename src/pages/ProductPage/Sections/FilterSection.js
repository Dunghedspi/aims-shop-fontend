import React from "react";
import {
	Divider,
	List,
	ListItem,
	// ListItemIcon,
	ListItemText,
	makeStyles,
} from "@material-ui/core";
// import MenuBookTwoToneIcon from "@material-ui/icons/MenuBookTwoTone";
const useStyles = makeStyles(() => ({
	item: {
		paddingLeft: "0!important",
		paddingTop: "0!important",
	},
	"@media(max-width:800px)": {
		itemText: {
			"&>span": {
				fontSize: "12px",
			},
		},
	},
}));
const FilterItem = () => {
	return <div></div>;
};

function FilterSection() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<List component="nav" aria-label="main mailbox folders">
				<ListItem button className={classes.item}>
					{/* <ListItemIcon>
						<MenuBookTwoToneIcon />
					</ListItemIcon> */}
					<ListItemText className={classes.itemText} primary="BOOK" />
				</ListItem>
				<ListItem button className={classes.item}>
					<ListItemText className={classes.itemText} primary="DVD" />
				</ListItem>
				<ListItem button className={classes.item}>
					<ListItemText className={classes.itemText} primary="CD" />
				</ListItem>
				<ListItem button className={classes.item}>
					<ListItemText className={classes.itemText} primary="LP" />
				</ListItem>
			</List>
			<Divider />
			<FilterItem />
		</div>
	);
}

export default FilterSection;
