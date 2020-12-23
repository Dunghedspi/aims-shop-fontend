import {
	Button,
	Fab,
	Fade,
	makeStyles,
	Modal,
	Tooltip,
} from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import React from "react";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import AddIcon from "@material-ui/icons/Add";
import NewCardSection from "./NewCardSection";
const useStyles = makeStyles(() => ({
	container: {
		width: "50%",
		display: "flex",
		flexFlow: "column nowrap",
		justifyContent: "center",
	},
	"@media(max-width:900px)": {
		container: {
			width: "100%",
		},
	},
	addBox: {
		marginTop: "20px",
	},
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
}));
const useStylesCardItem = makeStyles(() => ({
	cardItemBox: {
		display: "flex",
		flexFlow: "row nowrap",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: "20px",
		border: "black 1px dotted",
		borderRadius: "9px",
		padding: "10px 5px",
	},
	card: {
		display: "flex",
		flexFlow: "row nowrap",
		justifyContent: "flex-end",
		alignItems: "flex-end",
	},
	reset: {
		margin: "0 0 0 10px",
	},
	btn: {
		backgroundColor: "#EEEEEE",
		borderRadius: "9px",
	},
}));
const renderCard = (cards) => {
	let cardList = [];
	const classes = useStylesCardItem();
	if (cards) {
		cardList = cards.map((card, index) => {
			return (
				<div className={classes.cardItemBox} key={index}>
					<div className={classes.card}>
						<CreditCardIcon />
						<h3 className={classes.reset}>Viettinbank</h3>
					</div>
					<div className={classes.btnDelete}>
						<Button className={classes.btn}>Delete</Button>
					</div>
				</div>
			);
		});
	}
	return cardList;
};

function PaymentMethod() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div className={classes.container}>
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
						<NewCardSection />
					</div>
				</Fade>
			</Modal>
			<h4 className={classes.title}>Bank Card</h4>
			{renderCard([1, 2, 3])}
			<div className={classes.addBox}>
				<Tooltip title="Add" aria-label="add">
					<Fab
						color="primary"
						className={classes.fab}
						size="small"
						onClick={handleOpen}
					>
						<AddIcon />
					</Fab>
				</Tooltip>
			</div>
		</div>
	);
}

export default PaymentMethod;
