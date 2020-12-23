import React from "react";
import { Button, makeStyles, Tooltip } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import CreditCardOutlinedIcon from "@material-ui/icons/CreditCardOutlined";
import profileImage from "assets/img/faces/avatar.jpg";
import { useForm } from "react-hook-form";
const useStyles = makeStyles(() => ({
	container: {
		display: "flex",
		flexFlow: "column nowrap",
		padding: "5px 10px",
	},
	selected: {
		textDecoration: "revert !important",
	},
	nav: {
		margin: "10px 0 0 0",
		textDecoration: "none",
		padding: "5px 1px",
	},
	btn: {
		padding: "10px 10px",
	},
	title: {
		fontSize: "20px",
	},
	userInfo: {
		display: "flex",
		flexFlow: "column wrap",
		justifyContent: "center",
	},
	name: {
		marginTop: "5px",
		flex: "70%",
		display: "flex",
		flexFlow: "column nowrap",
		justifyContent: "center",
		alignItems: "center",
	},
	avatar: {
		width: "100px",
		height: "auto",
		borderRadius: "50%",
		cursor: "pointer",
	},
	avatarBox: {
		display: "flex",
		flexFlow: "row nowrap",
		justifyContent: "center",
	},
	reset: {
		margin: 0,
	},
}));
function SideBarSection() {
	const classes = useStyles();
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};
	const onError = (data) => {
		console.log(data);
	};
	return (
		<div className={classes.container}>
			<h3 className={classes.title}>Settings</h3>
			<div className={classes.userInfo}>
				<div className={classes.avatarBox}>
					<label htmlFor={"avatar"} style={{ borderRadius: "50%" }}>
						<Tooltip
							title="Change Avatar"
							placement="right-start"
							arrow
						>
							<img
								src={profileImage}
								className={classes.avatar}
								alt="avatar"
							/>
						</Tooltip>
					</label>
					<form onSubmit={handleSubmit(onSubmit, onError)}>
						<input
							id={"avatar"}
							ref={register}
							type="file"
							style={{ display: "none" }}
							name="avatar"
							onChange={handleSubmit(onSubmit, onError)}
						/>
					</form>
				</div>
				<div className={classes.name}>
					<h4 className={classes.reset}>Xin Chào</h4>
					<h3 className={classes.reset}>Nguyễn Văn Dũng</h3>
				</div>
			</div>
			<NavLink
				to="/user/setting"
				activeClassName={classes.selected}
				className={classes.nav}
				exact={true}
			>
				<Button
					startIcon={<PersonOutlineOutlinedIcon />}
					className={classes.btn}
				>
					Account Setting
				</Button>
			</NavLink>
			<NavLink
				to="/user/setting/payment-method"
				activeClassName={classes.selected}
				className={classes.nav}
				exact={true}
			>
				<Button
					startIcon={<CreditCardOutlinedIcon />}
					className={classes.btn}
				>
					Payment Method
				</Button>
			</NavLink>
		</div>
	);
}

export default SideBarSection;
