import { Button, Divider, makeStyles } from "@material-ui/core";
import React from "react";
import ProductSliderSection from "pages/components/Sections/ProductSliderSection";
import { useLocation } from "react-router";
import { ProductApi } from "apis/ProductApi";
import fomatPrice from "helpers/convertPrice";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch } from "react-redux";
import { addProduct } from "actions/CartAction";
const useStyles = makeStyles(() => ({
	root: {
		display: "flex",
		flexFlow: "column nowrap",
		padding: "3% 3%",
	},
	quantity: {
		border: "#ced4da 1px solid",
		borderRadius: "5px",
		maxHeight: "33px",
	},
	productDetail: {
		display: "flex",
		flexFlow: "row wrap",
	},
	imgBox: {
		flex: "50%",
	},
	img: {
		width: "100%",
		height: "auto",
	},
	description: {
		flex: "40%",
		display: "flex",
		flexFlow: "column nowrap",
		padding: "0 0 0 2%",
	},
	titleBox: {
		display: "flex",
		flexFlow: "row nowrap",
		justifyContent: "space-between",
	},
	buttonGroup: {
		display: "flex",
		flexFlow: "row nowrap",
		marginTop: "3%",
		justifyContent: "space-around",
		alignItems: "baseline",
	},
	addCart: {
		width: "50%",
		padding: "4% 7%",
		borderRadius: "30px",
		backgroundColor: "black",
		color: "#FFFFFF",
		"&:hover": {
			backgroundColor: "black",
		},
	},
	context: {
		marginTop: "2%",
	},
	relatedProductsBox: {
		marginTop: "5%",
		display: "flex",
		flexFlow: "column nowrap",
	},
	slider: {
		display: "grid",
		gridTemplateColumns:
			"repeat( 12, calc(33.3333% - var(--grid-gap,16px)) )",
		gridGap: "var(--grid-gap,16px)",
		transition: "all 350ms ease-in-out 0s",
	},
	prevBtn: {
		listStyle: "none",
		overflow: "visible",
		position: "absolute",
		width: "106px",
		background: "none",
		transition: "all 0.25s ease-in 0s",
		opacity: 0.4,
		border: "0px",
		color: "var(--palette-actionable,#333)",
		fontSize: "16px",
		cursor: "pointer",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		outline: 0,
		top: 0,
		bottom: 0,
		marginTop: 0,
		left: 0,
	},
	box: {
		position: "relative",
		overflowX: "hidden",
	},
	silde: {
		display: "inline-block",
		listStyle: "none",
	},
	nextBtn: {
		listStyle: "none",
		overflow: "visible",
		position: "absolute",
		width: "106px",
		background: "none",
		transition: "all 0.25s ease-in 0s",
		opacity: 0.4,
		border: "0px",
		color: "var(--palette-actionable,#333)",
		fontSize: "16px",
		cursor: "pointer",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		outline: 0,
		top: 0,
		bottom: 0,
		marginTop: 0,
		right: 0,
	},
	icon: {
		color: "var(--palette-actionable,#333)",
		cursor: "pointer",
		margin: 0,
		padding: 0,
		border: 0,
		fontSize: "100%",
		font: "inherit",
		verticalAlign: "baseline",
		height: "40px",
		width: "40px",
		backgroundColor: "rgb(255, 255, 255)",
		borderRadius: "20px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		"&>svg": {
			width: "14px",
			height: "14px",
		},
		"&>svg:hover": {
			width: "18px",
			height: "18px",
		},
		"&:hover": {
			color: "black",
		},
	},
	"@media(max-width:800px)": {
		nextBtn: {
			width: "40px",
		},
		prevBtn: {
			width: "40px",
		},
	},
	"@media(max-width:600px)": {
		slider: {
			display: "grid",
			gridTemplateColumns:
				"repeat( 12, calc(100% - var(--grid-gap,16px)) )",
			gridGap: "var(--grid-gap,16px)",
			transition: "all 350ms ease-in-out 0s",
		},
	},
}));
function useQuery() {
	return new URLSearchParams(useLocation().search);
}

function ProductDetailPage() {
	const params = useQuery();
	const [product, setProduct] = React.useState({});
	const [related, setRelated] = React.useState([]);
	const dispatch = useDispatch();
	React.useEffect(() => {
		const getProduct = async () => {
			const response = await ProductApi.GetProductDetails(
				params.get("id")
			);
			if (response) {
				console.log(response);
				setProduct(response);
			}
			const data = await ProductApi.GetProductsRelate(
				response.codeCategory
			);
			if (data) {
				setRelated(data.splice(0, 10));
			}
		};
		getProduct();
	}, [params.get("id")]);
	const handleClick = () => {
		dispatch(
			addProduct({ productId: params.get("id"), quantity: quantity })
		);
		setQuantity(1);
	};
	const [quantity, setQuantity] = React.useState(1);
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.productDetail}>
				<div className={classes.imgBox}>
					<img
						alt={"productDetail"}
						src={product.imageUrl}
						className={classes.img}
					/>
				</div>
				<div className={classes.description}>
					<div className={classes.titleBox}>
						<div className={classes.title}>
							<h4></h4>
							<h1>{product.name}</h1>
						</div>
						<div className={classes.price}>
							<h4>{fomatPrice(product.price) + " VND"}</h4>
						</div>
					</div>
					<Divider />
					<div className={classes.context}>
						<h4>{product.description}</h4>
					</div>
					<Divider />
					<div className={classes.buttonGroup}>
						<div className={classes.quantity}>
							<Button
								size="small"
								color="primary"
								className={classes.margin}
								onClick={() =>
									setQuantity((quantity) => {
										if (quantity >= 2) return quantity - 1;
										return 1;
									})
								}
							>
								<RemoveIcon />
							</Button>
							<span className={classes.qty}>{quantity}</span>
							<Button
								size="small"
								color="primary"
								fullWidth={false}
								className={classes.margin}
								onClick={() => setQuantity(quantity + 1)}
							>
								<AddIcon />
							</Button>
						</div>
						<Button
							variant="contained"
							color="primary"
							disableElevation
							className={classes.addCart}
							onClick={handleClick}
						>
							Add To Cart
						</Button>
					</div>
				</div>
			</div>
			<div className={classes.relatedProductsBox}>
				<div className={classes.relatedTitle}>
					<h4>YOU MIGHT ALSO LIKE</h4>
				</div>
				<ProductSliderSection products={related} id={"productRated"} />
			</div>
		</div>
	);
}

export default ProductDetailPage;
