/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import PaymentIcon from "@material-ui/icons/Payment";
import classname from "classnames";
import { useForm } from "react-hook-form";
const useStyles = makeStyles(() => ({
	header: {
		width: "100%",
		paddingLeft: "20px",
		display: "flex",
		flexFlow: "row nowrap",
		alignItems: "center",
		backgroundColor: "#333333",
		"&>h3": {
			color: "#FFFFFF",
		},
	},
	item: {
		display: "flex",
		flexFlow: "row nowrap",
		justifyContent: "flex-start",
		marginTop: "2%",
	},
	label: {
		flex: "25%",
		"&>span": {
			color: "red",
		},
	},
	inputBox: {
		flex: "75%",
		"&>input": {
			padding: "8px 12px",
			outline: "none",
			border: "#DDDDDD 1px solid",
		},
		"&>input:focus": {
			border: "black 1px solid",
		},
	},
	body: {
		display: "flex",
		flexFlow: "column nowrap",
		padding: "20px 20px 10px 10px",
		backgroundColor: "#EEEEEE",
	},
	cardBox: {
		backgroundColor: "#FFFFFF",
		display: "flex",
		flexFlow: "column nowrap",
		padding: "10px 60px",
	},
	button: {
		marginTop: "10px",
		padding: "20px 15px",
		display: "flex",
		flexFlow: "row nowrap",
		justifyContent: "flex-start",
		opacity: 0.5,
	},
	select: {
		opacity: 1,
		border: "black 1px solid",
	},
	success: {
		marginTop: "10px",
		display: "flex",
		justifyContent: "center",
	},
	placeBtn: {
		width: "75%",
		minHeight: "50px",
		borderRadius: "22px",
	},
	changeBg: {
		backgroundColor: "#333333",
		"&>*": {
			color: "#FFFFFF",
		},
		"&:hover": {
			backgroundColor: "#333333",
		},
	},
	container: {
		marginTop: "20px",
	},
}));

function PaymenSection(props) {
	const classes = useStyles();
	const methods = useForm();
	const buttonSelect = classname(classes.button, classes.select);
	const buttonPlace = classname(classes.placeBtn, classes.changeBg);
	const { handleSubmit, register } = methods;
	const onSubmit = (data) => {
		try {
			console.log(data);
		} catch (error) {
			console.error(error);
		}
	};
	const onError = (error, e) => console.log(error, e);
	const renderCard = (props) => {
		const { cards, setCardId, cardId } = props;
		console.log(cardId);
		return cards.map((card, index) => {
			return (
				<Button
					variant="outlined"
					className={index == cardId ? buttonSelect : classes.button}
					startIcon={<PaymentIcon />}
					key={index}
					onClick={() => setCardId(index)}
				>
					{card.name}
				</Button>
			);
		});
	};
	return (
		<div className={classes.container}>
			<div className={classes.header}>
				<h3>2. PAYMENT</h3>
			</div>
			{props.isPlace ? (
				<div className={classes.body}>
					<div className={classes.cardBox}>{renderCard(props)}</div>
					<div className={classes.success}>
						<Button
							variant="outlined"
							className={
								props.cardId !== -1
									? buttonPlace
									: classes.placeBtn
							}
						>
							Place Order
						</Button>
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
}

export default PaymenSection;
