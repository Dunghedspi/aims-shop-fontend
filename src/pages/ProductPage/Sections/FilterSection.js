import React from "react";
import {
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
} from "@material-ui/core";
import MenuBookTwoToneIcon from "@material-ui/icons/MenuBookTwoTone";
import AlbumOutlinedIcon from "@material-ui/icons/AlbumOutlined";
import { useNavigate } from "react-router-dom";
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
	const navigate = useNavigate();
	const handleClick = (category) => {
		navigate(`/products/category?name=${category}`);
	};
	return (
		<div className={classes.root}>
			<List component="nav" aria-label="main mailbox folders">
				<ListItem button className={classes.item}>
					<ListItemIcon>
						<MenuBookTwoToneIcon />
					</ListItemIcon>
					<ListItemText
						className={classes.itemText}
						primary="BOOK"
						onClick={() => handleClick("bookPhy")}
					/>
				</ListItem>
				<ListItem button className={classes.item}>
					<ListItemIcon>
						<AlbumOutlinedIcon />
					</ListItemIcon>
					<ListItemText
						className={classes.itemText}
						primary="DVD"
						onClick={() => handleClick("dvdPhy")}
					/>
				</ListItem>
				<ListItem button className={classes.item}>
					<ListItemIcon>
						<AlbumOutlinedIcon />
					</ListItemIcon>
					<ListItemText
						className={classes.itemText}
						primary="CD"
						onClick={() => handleClick("cdPhy")}
					/>
				</ListItem>
				<ListItem button className={classes.item}>
					<ListItemIcon>
						<AlbumOutlinedIcon />
					</ListItemIcon>
					<ListItemText
						className={classes.itemText}
						primary="LP"
						onClick={() => handleClick("lpPhy")}
					/>
				</ListItem>
			</List>
			<Divider />
			<FilterItem />
		</div>
	);
}

export default FilterSection;
