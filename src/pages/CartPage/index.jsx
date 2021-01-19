/* eslint-disable no-unused-vars */
import React from "react";
import {
	Backdrop,
	Box,
	Button,
	Container,
	Fade,
	InputBase,
	makeStyles,
	Modal,
	Typography,
} from "@material-ui/core";
import ProductSection from "./Sections/Product";
import BillSection from "./Sections/BillSection";
import SearchIcon from "@material-ui/icons/Search";
import { CartApi } from "apis/CartApi";
import { useSelector, useDispatch } from "react-redux";
import LoginSection from "./Sections/LoginSection";
import { deleteProductToCart } from "actions/CartAction";
import image from "assets/img/mascot@2x.png";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
	cartBox: {
		display: "flex",
		flexFlow: "row warp",
		padding: "5% 10%",
	},
	products: {
		display: "flex",
		flexFlow: "column nowrap",
		flex: "70%",
	},
	bill: {
		flex: "30%",
		alignSelf: "top",
	},
	search: {
		display: "flex",
		flexFlow: "row wrap",
		justifyContent: "space-between",
		alignItems: "center",
	},
	searchBox: {
		display: "flex",
		flexFlow: "row wrap",
		alignItems: "center",
		position: "relative",
		"&:hover": {
			backgroundColor: "#e5e5e5",
		},
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(1),
			width: "auto",
		},
		backgroundColor: "#f5f5f5",
		borderRadius: "45px",
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		position: "absolute",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		color: "black",
		cursor: "pointer",
		zIndex: "100",
		maxWidth: "25px",
		borderRadius: "50%",
	},
	inputRoot: {
		color: "black",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "14ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
	"@media (max-width: 900px)": {
		cartBox: {
			flexFlow: "column nowrap",
		},
		bill: {
			marginTop: "50px",
		},
	},
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));
const renderProducts = (products, handleDeleteProducts, handleChange) => {
	return products.map((item, index) => {
		return (
			<ProductSection
				product={item}
				key={index}
				handleDeleteProducts={handleDeleteProducts}
				handleChange={handleChange}
			/>
		);
	});
};
const totalPrice = (products) => {
	return products.reduce(
		(sum, item) => sum + item.productModel.price * item.quantity,
		0
	);
};
function CartPage() {
	const classes = useStyles();
	const [products, setProducts] = React.useState([]);
	const { total } = useSelector((state) => state.CartReducers);
	const dispatch = useDispatch();
	const [sum, setSum] = React.useState(0);
	React.useEffect(() => {
		const getCart = async () => {
			const response = await CartApi.GetCart();
			if (response) {
				setProducts(response);
				setSum(totalPrice(response));
			}
		};
		getCart();
	}, []);
	const [search, setSearch] = React.useState("");
	const [open, setOpen] = React.useState(false);
	const user = useSelector((state) => state.UserReducers);
	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const handleClickPayment = () => {
		if (!user.isLogin) {
			handleOpen();
		}
	};
	const handleDeleteProducts = (product) => {
		const index = products.findIndex((item) => item.id === product.id);
		if (index != -1) {
			products.splice(index, 1);
			setProducts([...products]);
			setSum(totalPrice(products));
			dispatch(deleteProductToCart(product.quantity));
		}
	};
	const handleChange = (product, quantity) => {
		const index = products.findIndex((item) => item.id === product.id);
		if (index != -1) {
			products.splice(index, 1, product);
			setProducts([...products]);
			setSum(totalPrice(products));
		}
	};
	const EmTyCart = () => {
		return (
			<Box
				display="flex"
				flexDirection="column"
				height="100%"
				justifyContent="center"
				alignItems="center"
				marginTop="20px"
			>
				<img src={image} />
				<Typography align="center" color="textPrimary" variant="h5">
					{"Không có sản phẩm nào trong giỏ hàng của bạn"}
				</Typography>
				<Link to="/">{"Tiếp tục mua sắm"}</Link>
			</Box>
		);
	};
	return total === 0 ? (
		<EmTyCart />
	) : (
		<>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<div className={classes.paper}>
						<LoginSection handleClose={handleClose} />
					</div>
				</Fade>
			</Modal>
			<div className={classes.cartBox}>
				<div className={classes.products}>
					<div className={classes.search}>
						<Typography variant="h5">
							Cart ({total} Products)
						</Typography>
						<div className={classes.searchBox}>
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
								value={search}
								onChange={(event) =>
									setSearch(event.target.value)
								}
							/>
						</div>
					</div>
					{renderProducts(
						products.filter(
							(item) =>
								item.productModel.name
									.toLowerCase()
									.indexOf(search.toLowerCase()) !== -1
						),
						handleDeleteProducts,
						handleChange
					)}
				</div>
				<div className={classes.bill}>
					<BillSection
						totalPrice={sum}
						handleClickPayment={handleClickPayment}
					/>
				</div>
			</div>
		</>
	);
}

export default CartPage;
