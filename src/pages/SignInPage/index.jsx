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
import FormCheckBox from "components/ControlCustom/checkbox";
import FormInput from "components/ControlCustom/input";
import LinkControl from "components/ControlCustom/Link";
import { useStyles } from "./styles.js";
import * as yup from "yup";
import { UserApi } from "apis/UserApi";
import { useNavigate } from "react-router-dom";
import { SetInfo } from "actions/UserAction";
import { useDispatch, useSelector } from "react-redux";
import Page from "components/Page/index.js";
import { toastifySuccess } from "helpers/toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastifyError } from "helpers/toastify.js";
// import { toast } from "react-toastify";
// toast.configure();
//Validate schema
const schema = yup.object().shape({
	email: yup.string().email(),
	password: yup.string().required(),
});

const SignInPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.UserReducers);
	React.useEffect(() => {
		if (user.isLogin) {
			navigate("/");
		}
	}, []);
	const onSubmit = async (data) => {
		try {
			const response = await UserApi.SignIn(data);
			if (response) {
				dispatch(SetInfo(response));
				navigate("/");
				toastifySuccess("Login Success");
			} else {
				toastifyError("Email or password is incorrect");
			}
		} catch (error) {
			console.error(error);
		}
	};
	const onError = (error, e) => console.log(error, e);
	const classes = useStyles();
	const methods = useForm({
		validationSchema: schema,
		mode: "onSubmit",
	});
	const { handleSubmit, errors, register, control } = methods;
	return (
		<Page title="Sign In">
			<Container component="main" maxWidth="xs">
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
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
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
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
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							errorobj={errors}
							inputRef={register}
							control={control}
						/>
						<FormCheckBox
							name="remember"
							label="Remember me"
							color={"primary"}
							inputRef={register}
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
								<LinkControl
									path={"/auth/reset-password"}
									label={"Forgot password?"}
								/>
							</Grid>
							<Grid item>
								<LinkControl
									path={"/auth/signup"}
									label={"Don't have an account? Sign Up"}
								/>
							</Grid>
						</Grid>
					</form>
				</div>
			</Container>
		</Page>
	);
};
export default SignInPage;
