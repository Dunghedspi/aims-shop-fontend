/* eslint-disable react/prop-types */
import React from "react";
import { Controller } from "react-hook-form";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const MuiRadio = (props) => {
	const { label, name, options } = props;
	return (
		<FormControl component="fieldset">
			<FormLabel component="legend">{label}</FormLabel>
			<RadioGroup row name={name} {...props}>
				{options.map((item) => (
					<FormControlLabel
						key={item.value}
						value={item.value}
						control={<Radio size="small" />}
						label={item.label}
					/>
				))}
			</RadioGroup>
		</FormControl>
	);
};

function FormRadio(props) {
	const { name, label, control } = props;
	return (
		<Controller
			as={MuiRadio}
			name={name}
			control={control}
			defaultValue=""
			label={label}
			{...props}
		/>
	);
}

export default FormRadio;
