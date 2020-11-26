import { Button, makeStyles } from "@material-ui/core";
import shoes from "assets/img/faces/shoes.jpeg";
import LinkControl from "components/ControlCustom/Link";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import React from "react";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexFlow: "row wrap",
		justifyContent: "flex-start",
		width: "100%",
		padding: "2%",
		borderBottom: "#ced4da 1px solid",
		height: "auto",
	},
	rightBox: {
		display: "flex",
		flexFlow: "column nowrap",
		padding: "0 0 0 3%",
		flex: "75%",
	},
	topBox: {
		display: "flex",
		flexFlow: "row wrap",
		justifyContent: "space-between",
	},
	margin: {
		"&>span": {
			padding: "0!important",
		},
	},
	roleBox: {
		fontSize: "16px",
	},
	roleButton: {
		margin: theme.spacing(1),
	},
	quantity: {
		border: "#ced4da 1px solid",
		borderRadius: "5px",
		maxHeight: "33px",
	},
	bottomBox: {
		display: "flex",
		flexFlow: "row nowrap",
		justifyContent: "space-between",
		alignItems: "center",
	},
	imageProduct: {
		maxWidth: "150px",
		height: "auto",
	},
	link: {
		margin: "0!important",
		color: "black",
	},
	button: {
		paddingLeft: "0",
	},
	"@media (max-width: 600px)": {
		imageProduct: {
			maxWidth: "100px",
			height: "auto",
		},
		rightBox: {
			fontSize: "12px",
		},
		button: {
			fontSize: "12px",
		},
		leftBox: {
			width: "100%",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},
	},
}));
function Product() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.leftBox}>
				<LinkControl
					path=""
					label={
						<img
							src={shoes}
							alt={"products"}
							className={classes.imageProduct}
						/>
					}
				/>
			</div>
			<div className={classes.rightBox}>
				<div className={classes.topBox}>
					<div className={classes.description}>
						<LinkControl
							path=""
							label={<h4 className={classes.link}>Shoes</h4>}
						/>
						<p>Shirt - blue</p>
						<p>Color: blue</p>
						<p>Size: M</p>
					</div>
					<div className={classes.quantity}>
						<Button
							size="small"
							color="primary"
							className={classes.margin}
						>
							<RemoveIcon />
						</Button>
						<span className={classes.qty}>2</span>
						<Button
							size="small"
							color="primary"
							fullWidth={false}
							className={classes.margin}
						>
							<AddIcon />
						</Button>
					</div>
				</div>
				<div className={classes.bottomBox}>
					<div className={classes.roleBox}>
						<Button
							className={classes.button}
							startIcon={<DeleteOutlineIcon />}
						>
							Remove Product
						</Button>
					</div>
					<div className={classes.priceBox}>
						<span>¥17</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product;
