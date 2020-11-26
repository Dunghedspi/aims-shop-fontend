/* eslint-disable react/prop-types */
import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import shoes from "assets/img/faces/shoes.jpeg";
import { Link } from "react-router-dom";
const useStyles = makeStyles(() => ({
	container: {
		marginTop: "20px",
		display: "flex",
		flexFlow: "column nowrap",
		border: "#EEEEEE 2px solid",
		maxHeight: "300px",
		overflowY: "auto",
	},
	body: {
		display: "flex",
		flexFlow: "column nowrap",
		padding: "10px 20px",
	},
	item: {
		display: "flex",
		flexFlow: "row nowrap",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		marginTop: "2%",
	},
	title: {
		fontSize: "16px",
	},
	total: {
		color: "red",
	},
	header: {
		backgroundColor: "#EEEEEE",
		paddingLeft: "20px",
		display: "flex",
		flexFlow: "row nowrap",
		justifyContent: "space-between",
		alignItems: "center",
	},
	h4: {
		padding: 0,
	},
	img: {
		maxHeight: "inherit",
	},
	imageProduct: {
		width: "100px",
		height: "auto",
	},
	description: {
		display: "flex",
		flexFlow: "column nowrap",
		paddingLeft: "20px",
	},
	editBtn: {
		marginRight: "10px",
		maxHeight: "40px",
		backgroundColor: "#E4E4E4",
	},
	link: {
		textDecoration: "none",
	},
}));

function CartSection(props) {
	const classes = useStyles();
	const renderCart = (carts) => {
		return carts.map((cart, index) => {
			return (
				<div className={classes.item} key={index}>
					<div className={classes.img}>
						<img
							src={shoes}
							alt={"products"}
							className={classes.imageProduct}
						/>
					</div>
					<div className={classes.description}>
						<h4>shoes</h4>
						<span>¥17,600</span>
					</div>
				</div>
			);
		});
	};
	return (
		<div className={classes.container}>
			<div className={classes.header}>
				<h3>Cart</h3>
				<Link to={"/cart"} className={classes.link}>
					<Button className={classes.editBtn}>Edit</Button>
				</Link>
			</div>
			<div className={classes.body}>{renderCart(props.carts)}</div>
		</div>
	);
}

export default CartSection;
