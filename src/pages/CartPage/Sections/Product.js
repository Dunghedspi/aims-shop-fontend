/* eslint-disable react/prop-types */
import { Button, makeStyles } from "@material-ui/core";
import LinkControl from "components/ControlCustom/Link";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import React from "react";
import fomatPrice from "helpers/convertPrice";
import { CartApi } from "apis/CartApi";
import { addNumberProduct } from "actions/CartAction";
import { useDispatch } from "react-redux";
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
		justifyContent: "space-between",
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

function Product(props) {
	const { product, handleDeleteProducts, handleChange } = props;
	const { quantity, productModel } = product;
	const dispatch = useDispatch();
	const classes = useStyles();
	const handleClick = async () => {
		const response = await CartApi.DeleteProductToCart({
			productId: productModel.id,
			cartId: product.cartId,
		});
		if (response) {
			handleDeleteProducts(product);
		}
	};
	const handleClickAdd = async (product) => {
		const formData = { quantity: 1, productId: product.productModel.id };
		const response = await CartApi.AddProductToCart(formData);
		if (response) {
			dispatch(addNumberProduct(1));
			handleChange({ ...product, quantity: product.quantity + 1 }, 1);
		}
	};
	const handleClickDelete = async (product) => {
		if (product.quantity === 1) {
			handleClick();
		} else {
			const formData = {
				quantity: -1,
				productId: product.productModel.id,
			};
			const response = await CartApi.AddProductToCart(formData);
			if (response) {
				dispatch(addNumberProduct(-1));
				handleChange(
					{ ...product, quantity: product.quantity - 1 },
					-1
				);
			}
		}
	};
	return (
		<div className={classes.root}>
			<div className={classes.leftBox}>
				<LinkControl
					path=""
					label={
						<img
							src={productModel.imageUrl}
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
							label={
								<h4 className={classes.link}>
									{productModel.name}
								</h4>
							}
						/>
					</div>
					<div className={classes.quantity}>
						<Button
							size="small"
							color="primary"
							className={classes.margin}
							onClick={() => handleClickDelete(product)}
						>
							<RemoveIcon />
						</Button>
						<span className={classes.qty}>{quantity}</span>
						<Button
							size="small"
							color="primary"
							fullWidth={false}
							className={classes.margin}
							onClick={() => handleClickAdd(product)}
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
							onClick={() => handleClick()}
						>
							Remove Product
						</Button>
					</div>
					<div className={classes.priceBox}>
						<span style={{ fontWeight: 200 }}>
							{fomatPrice(productModel.price) + " VND"}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product;
