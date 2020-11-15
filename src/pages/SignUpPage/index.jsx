/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import FormInput from "../../components/ControlCustom/input/index.js";
import LinkControl from "../../components/ControlCustom/Link";
import FormRadio from "../../components/ControlCustom/radio/index.js";
import { radioGroupOptions } from "../../constansts/gender";
import { useStyles } from "./styles.js";

const schema = yup.object().shape({
	email: yup.string().required().email(),
	password: yup
		.string()
		.matches(/^(?=.*[a-zA-Z1-9]).{8,}$/, "Password more than 8 characters"),
	phonenumber: yup
		.string()
		.matches(
			/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
			"Invalid phone number"
		),
	gender: yup.string().required(),
});

const SignUp = () => {
	const classes = useStyles();
	const { register, control, handleSubmit, errors } = useForm({
		validationSchema: schema,
		mode: "onBlur",
	});
	const onSubmit = (data, e) => console.log(data, e, 1);
	const onError = (error, e) => console.log(error, e);
	return (
		<Container component="main" maxWidth="xs">
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign Up
				</Typography>
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
						autoFocus
						size="small"
						errorobj={errors}
						inputRef={register}
						control={control}
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
						size="small"
						errorobj={errors}
						inputRef={register}
						control={control}
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
						size="small"
						errorobj={errors}
						inputRef={register}
						control={control}
					/>

					<FormInput
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						size="small"
						errorobj={errors}
						inputRef={register}
						control={control}
					/>
					<Grid container>
						<Grid item sm={6}>
							<FormRadio
								name="gender"
								label="Gender"
								options={radioGroupOptions}
								control={control}
								errorobj={errors}
							/>
						</Grid>
						<Grid item md={6}>
							<FormInput
								name="birthday"
								id="date"
								label="Birthday"
								type="date"
								defaultValue="2016-12-29"
								className={classes.textField}
								InputLabelProps={{
									shrink: true,
								}}
								inputRef={register}
								control={control}
								errorobj={errors}
							/>
						</Grid>
					</Grid>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Sign Up
					</Button>
					<Grid container>
						<Grid item md={6}>
							<LinkControl
								path={"/signin"}
								label={"Do have an account? Sign In"}
							/>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
};
export default SignUp;
