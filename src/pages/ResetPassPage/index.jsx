import { Avatar, Button, Container, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "../../components/ControlCustom/input";
import { useStyles } from "./styles";
import { UserApi } from "apis/UserApi";
import * as yup from "yup";

const schema = yup.object().shape({
	email: yup.string().email(),
});

function ResetPassPage() {
	const { handleSubmit, errors, register, control } = useForm({
		validationSchema: schema,
		mode: "onBlur",
	});
	const onSubmit = async (data) => {
		const response = await UserApi.resetPassword(data);
		if (response) {
			console.log(response);
		}
	};
	const onError = (error, e) => console.log(error, e);
	const classes = useStyles();
	return (
		<React.Fragment>
			<Container component="main" maxWidth="xs">
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Reset Password
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
							inputRef={register}
							errorobj={errors}
							control={control}
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							Reset Password
						</Button>
					</form>
				</div>
			</Container>
		</React.Fragment>
	);
}

export default ResetPassPage;
