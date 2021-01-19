import React from "react";
import { makeStyles } from "@material-ui/core";
import ShippingSection from "./Sections/ShippingSection";
import PaymenSection from "./Sections/PaymenSection";
import SummarySection from "./Sections/SummarySection";
import CartSection from "./Sections/CartSection";
import { useSelector } from "react-redux";
import { CartApi } from "apis/CartApi";
const useStyles = makeStyles(() => ({
	root: {
		display: "flex",
		flexFlow: "row nowrap",
		justifyContent: "center",
	},
	container: {
		width: "75%",
		display: "flex",
		flexFlow: "row wrap",
		justifyContent: "space-between",
		padding: "20px 10px",
	},
	leftBox: {
		flex: "50%",
	},
	rightBox: {
		flex: "15%",
		marginLeft: "20px",
	},
	"@media(max-width:600px)": {
		rightBox: {
			margin: "10px 0 0 0",
		},
	},
}));
const cards = [
	{
		name: "Bank A",
	},
	{
		name: "Bank B",
	},
	{
		name: "Bank C",
	},
	{
		name: "Bank D",
	},
];
const totalPrice = (products) => {
	return products.reduce(
		(sum, item) => sum + item.productModel.price * item.quantity,
		0
	);
};
function OrderPage() {
	const classes = useStyles();
	const [cardId, setCardId] = React.useState(-1);
	const [isPlace, setIsPlace] = React.useState(false);
	const user = useSelector((state) => state.UserReducers);
	const [products, setProducts] = React.useState([]);
	const [sum, setSum] = React.useState(0);
	const [shippingData, setShippingData] = React.useState("");
	const [shipping, setShipping] = React.useState(0);
	React.useEffect(() => {
		const getCart = async () => {
			const response = await CartApi.GetCart();
			if (response) {
				console.log(response);
				setProducts(response);
				setSum(totalPrice(response));
			}
		};
		getCart();
	}, []);
	const handleCheckShipping = async (data) => {
		console.log(data);
		const formData = {
			provinceId: data.province,
			cartId: products[0].cartId,
		};
		const response = await CartApi.GetShipping(formData);
		if (response) {
			setShipping(response);
		}
		setShippingData(data);
	};
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<div className={classes.leftBox}>
					<ShippingSection
						isPlace={isPlace}
						setIsPlace={setIsPlace}
						user={user}
						shippingData={shippingData}
						setShippingData={handleCheckShipping}
					/>
					<PaymenSection
						setCardId={setCardId}
						cardId={cardId}
						cards={cards}
						isPlace={isPlace}
					/>
				</div>
				<div className={classes.rightBox}>
					<div className={classes.summary}>
						<SummarySection sum={sum} ship={shipping} />
					</div>
					<div className={classes.cartBox}>
						<CartSection carts={products} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default OrderPage;
