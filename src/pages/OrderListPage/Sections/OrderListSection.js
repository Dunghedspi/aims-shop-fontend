import React from "react";
import {
	makeStyles,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import OrderItemSection from "./OrderItemSection";
const useStyles = makeStyles(() => ({}));

const orders = [
	{
		id: 1111111,
		date: "29/12/16",
		products: "shoes",
		status: "Da giao",
		total: 123,
	},
	{
		id: 2322222,
		date: "29/12/16",
		products: "shoes",
		status: "Da giao",
		total: 123,
	},
	{
		id: 3555555,
		date: "29/12/16",
		products: "shoes",
		status: "Da giao",
		total: 123,
	},
	{
		id: 4445684,
		date: "29/12/16",
		products: "shoes",
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
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.titleBox}>
				<h4>Orders</h4>
			</div>
			<div className={classes.body}>
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell align="left" size="small">
									{"Code Order"}
								</TableCell>
								<TableCell align="left">
									{"Date of Purchase"}
								</TableCell>
								<TableCell align="left">{"Products"}</TableCell>
								<TableCell align="left">{"Total"}</TableCell>
								<TableCell align="left">{"Status"}</TableCell>
								<TableCell align="center">
									{"Details"}
								</TableCell>
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
