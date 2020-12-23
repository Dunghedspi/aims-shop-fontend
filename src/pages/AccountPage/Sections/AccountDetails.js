import { Button, Divider, Fade, makeStyles, Modal } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import FormInput from "components/ControlCustom/input";
import React from "react";
import { useForm } from "react-hook-form";
import EditPassWordSection from "./EditPassWordSection";
const useStyles = makeStyles(() => ({
	container: {
		padding: "10px 20px",
	},
	passwordBox: {
		display: "flex",
		flexFlow: "column nowrap",
		marginTop: "10px",
	},
	password: {
		marginBottom: "20px",
	},
	btnBox: {
		display: "flex",
		flexFlow: "row nowrap",
		justifyContent: "space-between",
		"&>button": {
			backgroundColor: "#EEEEEE",
		},
	},
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	btnBoxSave: {
		marginTop: "10px",
		display: "flex",
		flexFlow: "row wrap",
		justifyContent: "flex-end",
	},
	btn: {
		padding: "10px 20px",
		borderRadius: "10px",
		backgroundColor: "black",
		color: "#FFFFFF",
		"&:hover": {
			backgroundColor: "black",
		},
	},
}));
function AccountDetails() {
	const { register, control, handleSubmit, errors } = useForm();
	const onSubmit = (data) => console.log(data);
	const onError = (error) => console.log(error);
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const classes = useStyles();
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
						<EditPassWordSection />
					</div>
				</Fade>
			</Modal>
			<div className={classes.header}>
				<h3>Account Details</h3>
			</div>
			<div className={classes.body}>
				<form
					className={classes.form}
					onSubmit={handleSubmit(onSubmit, onError)}
					name="signUpForm"
				>
					<FormInput
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="fullname"
						label="Full Name"
						name="name"
						autoComplete="name"
						errorobj={errors}
						inputRef={null}
						control={control}
						defaultValue={"Nguyễn Văn Dũng"}
						disabled
					/>
					<FormInput
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						errorobj={errors}
						control={control}
						defaultValue={"dung.nv.soict@gmail.com"}
						disabled
					/>
					<FormInput
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="phonenumber"
						label="Phone Number"
						name="phonenumber"
						autoComplete="phonenumber"
						errorobj={errors}
						inputRef={register}
						control={control}
						defaultValue={"0983567927"}
					/>
					<div className={classes.passwordBox}>
						<div className={classes.password}>
							<span style={{ fontSize: "16px" }}>Password</span>
						</div>
						<div className={classes.btnBox}>
							<span>••••••••••••••••</span>
							<Button onClick={handleOpen}>Edit</Button>
						</div>
					</div>
					<FormInput
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="date"
						label="Date of birthday"
						name="date"
						errorobj={errors}
						control={control}
						defaultValue="29-12-2016"
						disabled
						type="date-local"
					/>
					<h4>Address</h4>
					<FormInput
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="country"
						label="Country"
						name="country"
						errorobj={errors}
						control={control}
						defaultValue={"Việt Nam"}
						disabled
					/>
					<FormInput
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="city"
						label="City"
						name="city"
						errorobj={errors}
						inputRef={register}
						control={control}
						defaultValue={"Hà Nội"}
					/>
					<FormInput
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="district"
						label="District"
						name="district"
						errorobj={errors}
						inputRef={register}
						control={control}
						defaultValue={"Hai Bà Trưng"}
					/>
					<FormInput
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="village"
						label="Village"
						name="village"
						errorobj={errors}
						inputRef={register}
						control={control}
						defaultValue={"Thanh Nhàn"}
					/>
					<FormInput
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="street"
						label="Street"
						name="street"
						errorobj={errors}
						inputRef={register}
						control={control}
						defaultValue={"Số 1, hẻm 5/101"}
					/>
					<Divider />
					<div className={classes.btnBoxSave}>
						<Button className={classes.btn} type={"submit"}>
							Save
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default AccountDetails;
