/* eslint-disable react/prop-types */
import { makeStyles, TableCell, TableRow } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import React from "react";

const useRowStyles = makeStyles(() => ({
	root: {
		"& > *": {
			borderBottom: "unset",
		},
	},
	title: {
		color: "blue",
	},
}));
function OrderItemSection(props) {
	const { products, total, status, id, date } = props;
	const [open, setOpen] = React.useState(false);
	const classes = useRowStyles();

	return (
		<React.Fragment>
			<TableRow className={classes.root}>
				<TableCell component="th" scope="row" className={classes.title}>
					{id}
				</TableCell>
				<TableCell align="left">{date}</TableCell>
				<TableCell align="left">{products}</TableCell>
				<TableCell align="left">{total}</TableCell>
				<TableCell align="left">{status}</TableCell>
				<TableCell align="center">
					<IconButton
						aria-label="expand row"
						size="small"
						onClick={() => setOpen(!open)}
					>
						{open ? (
							<KeyboardArrowUpIcon />
						) : (
							<KeyboardArrowDownIcon />
						)}
					</IconButton>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell
					style={{ paddingBottom: 0, paddingTop: 0 }}
					colSpan={6}
				>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box margin={1}>
							<Typography
								variant="h6"
								gutterBottom
								component="div"
							>
								Products
							</Typography>
							<Table size="small" aria-label="purchases">
								<TableHead>
									<TableRow>
										<TableCell>Product</TableCell>
										<TableCell>Price</TableCell>
										<TableCell align="left">
											Quantity
										</TableCell>
										<TableCell align="left">
											Total price ($)
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow>
										<TableCell component="th" scope="row">
											{"nnnn"}
										</TableCell>
										<TableCell>{"nnnn"}</TableCell>
										<TableCell align="left">
											{"amount"}
										</TableCell>
										<TableCell align="left">
											{Math.round(0.2)}
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}

export default OrderItemSection;
