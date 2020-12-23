import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Fade,
	makeStyles,
	Modal,
	Slide,
} from "@material-ui/core";
import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import shoes from "assets/img/faces/shoes.jpeg";
import classnames from "classnames";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import FormEditSection from "../Sections/FormEditSection";
import Backdrop from "@material-ui/core/Backdrop";
import { Link } from "react-router-dom";
const useStyleProduct = makeStyles(() => ({
	container: {
		display: "flex",
		flexFlow: "row nowrap",
	},
	img: {
		width: "100px",
		height: "auto",
		marginRight: "20px",
	},
	imageProduct: {
		width: "100%",
		height: "auto",
	},
}));
const RenderProductItem = (products) => {
	const classes = useStyleProduct();
	return products.map((product, index) => {
		return (
			<TableRow key={index}>
				<TableCell align="left" className={classes.container}>
					<div className={classes.img}>
						<img
							src={shoes}
							alt={"products"}
							className={classes.imageProduct}
						/>
					</div>
					<div className={classes.nameProducts}>
						{"Bếp Gas Dương Đơn Mặt Kính Sunhouse SHB212KT"}
					</div>
				</TableCell>
				<TableCell align="left">{12345}</TableCell>
				<TableCell align="left">{2}</TableCell>
				<TableCell align="left">{12255}</TableCell>
			</TableRow>
		);
	});
};

const useStyles = makeStyles(() => ({
	container: {
		padding: "30px",
	},
	headerBox: {
		display: "flex",
		flexFlow: "row wrap",
		alignItems: "baseline",
		justifyContent: "space-between",
	},
	orderInfo: {
		display: "flex",
		flexFlow: "row wrap",
		justifyContent: "space-around",
		marginBottom: "20px",
	},
	item: {
		flex: "30%",
		display: "flex",
		flexFlow: "column nowrap",
		minHeight: "200px",
	},
	content: {
		marginTop: "10px",
		display: "flex",
		flexFlow: "column nowrap",
		backgroundColor: "#FFFFFF",
		padding: "20px 10px",
		height: "100%",
		"&>*": {
			marginBottom: "5px",
		},
	},
	marginL: {
		marginLeft: "10px",
	},
	btnGroup: {
		display: "flex",
		flexFlow: "row nowrap",
		justifyContent: "space-between",
		marginTop: "10px",
	},
	btnDelete: {
		backgroundColor: "red",
		marginLeft: "10px",
	},
	linkOrder: {
		color: "#3B8BF1",
	},
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
}));
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});
function OrderDetails() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const [openDiaLog, setOpenDiaLog] = React.useState(false);

	const handleClickOpenDiaLog = () => {
		setOpenDiaLog(true);
	};

	const handleCloseDiaLog = () => {
		setOpenDiaLog(false);
	};
	//const { id, status, date } = props;
	return (
		<div className={classes.container}>
			<Dialog
				open={openDiaLog}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleCloseDiaLog}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle id="alert-dialog-slide-title">
					{"Confirm?"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						Xác nhận xóa đơn hàng đã đặt
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseDiaLog} color="primary">
						Disagree
					</Button>
					<Button onClick={handleCloseDiaLog} color="primary">
						Agree
					</Button>
				</DialogActions>
			</Dialog>
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
						<FormEditSection />
					</div>
				</Fade>
			</Modal>
			<div className={classes.headerBox}>
				<div className={classes.header}>
					<h3>{`Chi tiết đơn hàng #${1111} - Da Giao`}</h3>
				</div>
				<div className={classes.date}>
					{"Ngày đặt hàng: 29/12/2016"}
				</div>
			</div>
			<div className={classes.orderInfo}>
				<div className={classes.item}>
					<div className={classes.title}>Địa chỉ người nhận</div>
					<div className={classes.content}>
						<h3>Nguyễn Văn Dũng</h3>
						<span>
							<strong>Address: </strong>
							{
								"Số 1 Hem 5 Ngach 43 Ngo 101 Thanh Nhan, P.Thanh Nhan, Q.Hai Ba Trung, Ha Noi, Phường Thanh Nhàn, Quận Hai Bà Trưng, Hà Nội, Việt Nam"
							}
						</span>
						<span>
							<strong>Phone: </strong>
							0983567927
						</span>
					</div>
				</div>
				<div className={classnames(classes.item, classes.marginL)}>
					<div className={classes.title}>Thời gian nhận hàng</div>
					<div className={classes.content}>
						<span>Giao hàng vào thứ 7</span>
					</div>
				</div>
				<div className={classnames(classes.item, classes.marginL)}>
					<div className={classes.title}>Hình thức thanh toán</div>
					<div className={classes.content}>
						<span>
							<strong>Ngân hàng: </strong>Viettinbank
						</span>
						<span>
							<strong>Card Number: </strong>12222222****
						</span>
						<h4>Total: 12345</h4>
					</div>
				</div>
			</div>
			<div className={classes.products}>
				<TableContainer component={Paper}>
					<Table
						className={classes.table}
						aria-label="spanning table"
					>
						<TableHead>
							<TableRow>
								<TableCell align="left">Products</TableCell>
								<TableCell align="left">Price</TableCell>
								<TableCell align="left">Quantity</TableCell>
								<TableCell align="left">Sum</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>{RenderProductItem([1, 2, 3])}</TableBody>
					</Table>
				</TableContainer>
			</div>
			<div className={classes.btnGroup}>
				<div className={classes.left}>
					<Link to="/orders" className={classes.linkOrder}>
						{"<< Quay lại đơn hàng của tôi"}
					</Link>
				</div>
				<div className={classes.right}>
					<Button
						variant="outlined"
						className={classes.btnEdit}
						startIcon={<EditOutlinedIcon />}
						onClick={handleOpen}
					>
						{"Edit"}
					</Button>
					<Button
						variant="outlined"
						className={classes.btnDelete}
						startIcon={<DeleteOutlineIcon />}
						onClick={handleClickOpenDiaLog}
					>
						{"Delete"}
					</Button>
				</div>
			</div>
		</div>
	);
}

export default OrderDetails;
