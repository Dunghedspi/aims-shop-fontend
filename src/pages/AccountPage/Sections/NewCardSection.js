/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import FormInput from "components/ControlCustom/input";
import React from "react";
import { useForm } from "react-hook-form";
// import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
	paper: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	container: {
		backgroundColor: "#FFFFFF",
		padding: "20px 10px",
		borderRadius: "9px",
	},
}));

//Validate schema
// const schema = yup.object().shape({
// 	email: yup.string().email(),
// 	password: yup.string().required(),
// });

const NewCardSection = () => {
	const onSubmit = async (data) => {
		try {
			console.log(data);
		} catch (error) {
			console.error(error);
		}
	};
	const onError = (error, e) => console.log(error, e);
	const classes = useStyles();
	const methods = useForm();
	const { handleSubmit, errors, register, control } = methods;
	return (
		<Container component="main" maxWidth="xs" className={classes.container}>
			<div className={classes.paper}>
				<Typography component="h1" variant="h5">
					Add New Card
				</Typography>
				<form
					className={classes.form}
					onSubmit={handleSubmit(onSubmit, onError)}
				>
					<FormInput
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="bankname"
						label="Bank Name"
						type="text"
						id="bankname"
						autoFocus
						errorobj={errors}
						inputRef={register}
						control={control}
					/>
					<FormInput
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="fullname"
						label="Full Name"
						type="text"
						id="fullname"
						errorobj={errors}
						inputRef={register}
						control={control}
					/>
					<FormInput
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="date"
						label=""
						type="date"
						id="date"
						errorobj={errors}
						inputRef={register}
						control={control}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Save
					</Button>
				</form>
			</div>
		</Container>
	);
};
export default NewCardSection;
