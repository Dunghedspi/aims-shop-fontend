/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react";
import { Controller, useForm } from "react-hook-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const MuiCheckbox = React.forwardRef((props, ref) => {
	const { label, name } = props;
	return (
		<FormControlLabel
			control={<Checkbox name={name} {...props} />}
			label={label}
			ref={ref}
		/>
	);
});

const FormCheckBox = (props) => {
	const { control } = useForm();
	const { name, label } = props;
	return (
		<React.Fragment>
			<Controller
				as={MuiCheckbox}
				name={name}
				control={control}
				label={label}
				{...props}
			/>
		</React.Fragment>
	);
};

export default FormCheckBox;
