import React from "react";
import { makeStyles } from "@material-ui/core";
import ShippingSection from "./Sections/ShippingSection";
import PaymenSection from "./Sections/PaymenSection";
import SummarySection from "./Sections/SummarySection";
import CartSection from "./Sections/CartSection";
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
function OrderPage() {
	const classes = useStyles();
	const [cardId, setCardId] = React.useState(-1);
	const [isPlace, setIsPlace] = React.useState(false);
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<div className={classes.leftBox}>
					<ShippingSection
						isPlace={isPlace}
						setIsPlace={setIsPlace}
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
						<SummarySection />
					</div>
					<div className={classes.cartBox}>
						<CartSection carts={cards} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default OrderPage;
