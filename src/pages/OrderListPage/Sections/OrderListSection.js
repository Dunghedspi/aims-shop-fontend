import {
	Input,
	makeStyles,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import "date-fns";
import React from "react";
import OrderItemSection from "./OrderItemSection";
const useStyles = makeStyles(() => ({
	root: {
		padding: "20px",
	},
	titleBox: {
		display: "flex",
		flexFlow: "row nowrap",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
	},
	inputDateFrom: {
		marginRight: "10px",
	},
	inputDateTo: {
		marginLeft: "10px",
	},
	date: {
		display: "flex",
		flexFlow: "row nowrap",
		alignItems: "baseline",
	},
}));

const orders = [
	{
		id: 1111111,
		date: "29/12/16",
		address: "Thanh Nhàn, Hai Bà Trưng, Hà Nội, Việt Nam",
		products:
			"Balo Nam Phát Sáng Có Sạc USB, Khóa Chống Chộm, Chống Nước Balo Đi Học Hot Trend 2019 - Đen - BALO 01",
		status: "Da giao",
		total: 123,
	},
	{
		id: 1111111,
		date: "29/12/16",
		address: "Thanh Nhàn, Hai Bà Trưng, Hà Nội, Việt Nam",
		products:
			"Balo Nam Phát Sáng Có Sạc USB, Khóa Chống Chộm, Chống Nước Balo Đi Học Hot Trend 2019 - Đen - BALO 01",
		status: "Da giao",
		total: 123,
	},
	{
		id: 1111111,
		date: "29/12/16",
		address: "Thanh Nhàn, Hai Bà Trưng, Hà Nội, Việt Nam",
		products:
			"Balo Nam Phát Sáng Có Sạc USB, Khóa Chống Chộm, Chống Nước Balo Đi Học Hot Trend 2019 - Đen - BALO 01",
		status: "Da giao",
		total: 123,
	},
	{
		id: 1111111,
		date: "29/12/16",
		address: "Thanh Nhàn, Hai Bà Trưng, Hà Nội, Việt Nam",
		products:
			"Balo Nam Phát Sáng Có Sạc USB, Khóa Chống Chộm, Chống Nước Balo Đi Học Hot Trend 2019 - Đen - BALO 01",
		status: "Da giao",
		total: 123,
	},
	{
		id: 1111111,
		date: "29/12/16",
		address: "Thanh Nhàn, Hai Bà Trưng, Hà Nội, Việt Nam",
		products:
			"Balo Nam Phát Sáng Có Sạc USB, Khóa Chống Chộm, Chống Nước Balo Đi Học Hot Trend 2019 - Đen - BALO 01",
		status: "Da giao",
		total: 123,
	},
	{
		id: 1111111,
		date: "29/12/16",
		address: "Thanh Nhàn, Hai Bà Trưng, Hà Nội, Việt Nam",
		products:
			"Balo Nam Phát Sáng Có Sạc USB, Khóa Chống Chộm, Chống Nước Balo Đi Học Hot Trend 2019 - Đen - BALO 01",
		status: "Da giao",
		total: 123,
	},
];

const renderOrderItem = (orders) => {
	return orders.map((order, index) => {
		return <OrderItemSection {...order} key={index} />;
	});
};
function OrderListSections() {
	const [dateFrom, setDateFrom] = React.useState();
	const [dateTo, setDateTo] = React.useState();
	const handleDateFrom = (date) => {
		setDateFrom(date);
	};
	const handleDateTo = (date) => {
		setDateTo(date);
	};
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.titleBox}>
				<div>
					<h2>Orders</h2>
				</div>
				<div className={classes.date}>
					<Input
						type="date"
						value={dateFrom}
						onChange={() => handleDateFrom}
						className={classes.inputDateFrom}
					/>
					{"_ "}
					<Input
						type="date"
						value={dateTo}
						onChange={() => handleDateTo}
						className={classes.inputDateTo}
					/>
				</div>
			</div>
			<div className={classes.body}>
				<TableContainer component={Paper}>
					<Table aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell align="left" width="5%">
									{"Code"}
								</TableCell>
								<TableCell align="left" width="10%">
									{"Date"}
								</TableCell>
								<TableCell align="left" width="20%">
									{"Address"}
								</TableCell>
								<TableCell align="left" width="40%">
									{"Products"}
								</TableCell>
								<TableCell align="left" width="10%">
									{"Total"}
								</TableCell>
								<TableCell align="left" width="10%">
									{"Status"}
								</TableCell>
								<TableCell align="right">{""}</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>{renderOrderItem(orders)}</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	);
}

export default OrderListSections;
