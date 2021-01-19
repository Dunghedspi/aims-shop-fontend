/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
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
// import FormCheckBox from "components/ControlCustom/checkbox";
import FormInput from "components/ControlCustom/input";
import { useStyles } from "assets/jss/pages/LoginPage";
import * as yup from "yup";
import CardBody from "components/Card/CardBody.js";
import Page from "components/Page";
import { UserApi } from "apis/UserApi";
// import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SetInfo } from "actions/UserAction";
import { toastifySuccess } from "helpers/toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastifyError } from "helpers/toastify";
//Validate schema
const schema = yup.object().shape({
	email: yup.string().email(),
	password: yup.string().required(),
});

const SignInPage = (props) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { handleClose } = props;
	const onSubmit = async (data) => {
		try {
			const response = await UserApi.SignIn(data);
			if (response) {
				dispatch(SetInfo(response));
				toastifySuccess("Login Success");
				handleClose();
			} else {
				toastifyError("Email or password is incorrect");
				handleClose();
			}
		} catch (error) {
			console.error(error);
		}
	};
	const onError = (error) => console.log(error);
	const classes = useStyles();
	const methods = useForm({
		validationSchema: schema,
		mode: "onBlur",
	});
	const { handleSubmit, errors, register, control } = methods;
	return (
		<Page title="Sign In">
			<Container component="main" maxWidth="sm">
				<div className={classes.paper}>
					<CardBody>
						<div className={classes.title}>
							<Avatar className={classes.avatar}>
								<LockOutlinedIcon />
							</Avatar>
							<Typography component="h1" variant="h5">
								Sign in
							</Typography>
						</div>
						<form
							className={classes.form}
							onSubmit={handleSubmit(onSubmit, onError)}
						>
							<FormInput
								variant="outlined"
								margin="normal"
								fullWidth
								required
								id="email"
								label="Email"
								name="email"
								autoFocus
								errorobj={errors}
								inputRef={register}
								control={control}
								type="Email"
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
								Sign In
							</Button>
							<Grid container>
								<Grid item xs>
									<Link
										to={"/auth/reset-password"}
										label={"Forgot password?"}
									>
										{"Forgot password?"}
									</Link>
								</Grid>
								<Grid item>
									<Link
										to={"/auth/signup"}
										label={"Don't have an account? Sign Up"}
									>
										{"Don't have an account? Sign Up"}
									</Link>
								</Grid>
							</Grid>
						</form>
					</CardBody>
				</div>
			</Container>
		</Page>
	);
};
export default SignInPage;
