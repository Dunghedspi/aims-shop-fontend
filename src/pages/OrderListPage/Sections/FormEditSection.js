/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Button, makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
	header: {
		width: "100%",
		paddingLeft: "20px",
		display: "flex",
		flexFlow: "row nowrap",
		alignItems: "center",
		backgroundColor: "#333333",
		"&>h3": {
			color: "#FFFFFF",
		},
		justifyContent: "space-between",
	},
	item: {
		display: "flex",
		flexFlow: "row nowrap",
		justifyContent: "flex-start",
		marginTop: "2%",
	},
	label: {
		flex: "25%",
		"&>span": {
			color: "red",
		},
	},
	inputBox: {
		flex: "75%",
		"&>input": {
			padding: "8px 12px",
			outline: "none",
			border: "#DDDDDD 1px solid",
		},
		"&>input:focus": {
			border: "black 1px solid",
		},
	},
	body: {
		display: "flex",
		flexFlow: "column nowrap",
		padding: "20px 20px 10px 10px",
		backgroundColor: "#EEEEEE",
	},
	formBox: {
		backgroundColor: "#FFFFFF",
		padding: "20px 10px",
		display: "flex",
		flexFlow: "column nowrap",
	},
	buttonBox: {
		marginTop: "10px",
		display: "flex",
		justifyContent: "flex-end",
	},
	button: {
		backgroundColor: "#f45424",
		minWidth: "30%",
		"&:hover": {
			backgroundColor: "#f45424",
		},
		"&>*": {
			color: "#FFFFFF",
		},
		padding: "10px 20px",
	},
	editBtn: {
		padding: "5px 10px",
		backgroundColor: "#FFFFFF",
		marginRight: "20px",
		"&:hover": {
			backgroundColor: "#EEEEEE",
		},
	},
}));
import { useForm } from "react-hook-form";

function FormEditSection(props) {
	const classes = useStyles();
	const methods = useForm();
	const { handleSubmit, register } = methods;
	const [dataForm, setDataForm] = React.useState("");
	const onSubmit = (data) => {
		setDataForm(data);
		try {
			console.log(data);
		} catch (error) {
			console.error(error);
		}
	};
	const onError = (error, e) => console.log(error, e);

	const InputCustomer = React.forwardRef((props, ref) => {
		const { label, name } = props;
		return (
			<div className={classes.item}>
				<div className={classes.label}>
					<label htmlFor={name}>{label}</label>
					<span>{"*"}</span>
				</div>
				<div className={classes.inputBox}>
					<input name={name} id={name} ref={ref} {...props} />
				</div>
			</div>
		);
	});
	const renderInfo = (data) => {
		return (
			<div className={classes.body}>
				<div className={classes.formBox}>
					<span>Full Name: {data.fullname} </span>
					<span>Shipping Phone: {data.shippingphone} </span>
					<span>
						{`Address: ${data.street}, ${data.village}, ${data.district}, ${data.city}, ${data.country}`}
					</span>
				</div>
			</div>
		);
	};
	return (
		<div className={classes.container}>
			<div className={classes.header}>
				<h3>1. SHIPPING</h3>
			</div>
			<div className={classes.body}>
				<form
					onSubmit={handleSubmit(onSubmit, onError)}
					className={classes.formBox}
					id={"shipping"}
				>
					<InputCustomer
						name={"fullname"}
						ref={register}
						label={"Full Name"}
						type={"text"}
					/>
					<InputCustomer
						name={"shippingphone"}
						ref={register}
						label={"Shipping Phone"}
					/>
					<InputCustomer
						name={"city"}
						ref={register}
						label={"City"}
					/>
					<InputCustomer
						name={"district"}
						ref={register}
						label={"District"}
					/>
					<InputCustomer
						name={"village"}
						ref={register}
						label={"Village"}
					/>
					<InputCustomer
						name={"street"}
						ref={register}
						label={"Street"}
					/>
					<InputCustomer
						name={"country"}
						ref={register}
						label={"Country"}
						value={"Viet Nam"}
						disabled
					/>
				</form>
				<div className={classes.buttonBox}>
					<Button
						type={"submit"}
						form={"shipping"}
						className={classes.button}
					>
						{"Save"}
					</Button>
				</div>
			</div>
		</div>
	);
}

export default FormEditSection;
