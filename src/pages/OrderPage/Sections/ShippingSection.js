/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import axios from "axios";
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
		width: "75%",
		"&>input": {
			padding: "8px 12px",
			outline: "none",
			border: "#DDDDDD 1px solid",
		},
		"&>input:focus": {
			border: "black 1px solid",
		},
		"&>select": {
			padding: "10px 19px",
			outline: "none",
			width: "39%",
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
	textarea: {
		margin: "14px 0px 0px 14px",
		padding: "6px",
		resize: "none",
		border: "2px solid #c0c0c0",
		borderRadius: "4px",
		transition: ".4s",
		outline: "none",
		"&:hover": {
			border: "2px solid #a0a0a0",
		},
		"&:focus": {
			border: "2px solid #6600ff",
		},
	},
}));
import { useForm } from "react-hook-form";

function ShippingSection(props) {
	const { isPlace, setIsPlace, user, shippingData, setShippingData } = props;
	const classes = useStyles();
	const methods = useForm();
	const [provinceList, setProvinceList] = React.useState([]);
	const [provinceId, setProvinceId] = React.useState("01");
	const [districtList, setDistrictList] = React.useState([]);
	const [districtId, setDistrictId] = React.useState("007");
	const [villageList, setVillageList] = React.useState([]);
	const [villageId, setVillageId] = React.useState([]);
	const { handleSubmit, register } = methods;
	const [dataForm, setDataForm] = React.useState("");
	const onSubmit = (data) => {
		console.log(data);
		setIsPlace(true);
		setDataForm(data);
		setShippingData(data);
	};
	React.useEffect(() => {
		const getProvinces = async () => {
			const response = await axios.get(
				"https://vapi.vnappmob.com/api/province/"
			);
			if (response && response.status === 200) {
				setProvinceList(response.data.results);
			}
		};
		getProvinces();
	}, []);
	React.useEffect(() => {
		const getProvinces = async () => {
			const response = await axios.get(
				`https://vapi.vnappmob.com/api/province/district/${provinceId}`
			);
			if (response && response.status === 200) {
				setDistrictList(response.data.results);
			}
		};
		getProvinces();
	}, [provinceId]);
	React.useEffect(() => {
		const getProvinces = async () => {
			const response = await axios.get(
				`https://vapi.vnappmob.com/api/province/ward/${districtId}`
			);
			if (response && response.status === 200) {
				setVillageList(response.data.results);
			}
		};
		getProvinces();
	}, [districtId]);
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
	const SelectProvince = React.forwardRef((props, ref) => {
		const { label, name, data } = props;
		return (
			<div className={classes.item}>
				<div className={classes.label}>
					<label htmlFor={name}>{label}</label>
					<span>{"*"}</span>
				</div>
				<div className={classes.inputBox}>
					<select
						defaultValue={provinceId}
						onChange={(event) => {
							setProvinceId(event.target.value);
						}}
						name={name}
						ref={ref}
					>
						{data.map((item, index) => {
							return (
								<option value={item.province_id} key={index}>
									{item.province_name}
								</option>
							);
						})}
					</select>
				</div>
			</div>
		);
	});
	const SelectDistrict = React.forwardRef((props, ref) => {
		const { label, name, data } = props;
		return (
			<div className={classes.item}>
				<div className={classes.label}>
					<label htmlFor={name}>{label}</label>
					<span>{"*"}</span>
				</div>
				<div className={classes.inputBox}>
					<select
						onChange={(event) => {
							setDistrictId(event.target.value);
						}}
						ref={ref}
						name={name}
					>
						{data.map((item, index) => {
							return (
								<option value={item.district_id} key={index}>
									{item.district_name}
								</option>
							);
						})}
					</select>
				</div>
			</div>
		);
	});
	const SelectVillage = React.forwardRef((props, ref) => {
		const { label, name, data } = props;
		return (
			<div className={classes.item}>
				<div className={classes.label}>
					<label htmlFor={name}>{label}</label>
					<span>{"*"}</span>
				</div>
				<div className={classes.inputBox}>
					<select
						value={villageId}
						onChange={(event) => {
							setVillageId(event.target.value);
						}}
						ref={ref}
						name={name}
					>
						{data.map((item, index) => {
							return (
								<option value={item.ward_id} key={index}>
									{item.ward_name}
								</option>
							);
						})}
					</select>
				</div>
			</div>
		);
	});
	const getProvince = () => {
		const index = provinceList.findIndex(
			(item) => item.province_id === provinceId
		);
		return provinceList[index]["province_name"];
	};
	const getDistrict = () => {
		const index = districtList.findIndex(
			(item) => item.district_id === districtId
		);
		return districtList[index]["district_name"];
	};
	const getVillage = () => {
		const index = villageList.findIndex(
			(item) => item.ward_id === villageId
		);
		return villageList[index]["ward_name"];
	};
	const renderInfo = (data) => {
		return (
			<div className={classes.body}>
				<div className={classes.formBox}>
					<span>Full Name: {data.name} </span>
					<span>Shipping Phone: {data.phone} </span>
					<span>
						{`Address: ${
							data.street
						}, ${getVillage()}, ${getDistrict()}, ${getProvince()}, ${
							data.country
						}`}
					</span>
					<span>{`Delivery instructions: ${data.memo}`}</span>
				</div>
			</div>
		);
	};
	return (
		<div className={classes.container}>
			<div className={classes.header}>
				<h3>1. SHIPPING</h3>
				{isPlace ? (
					<Button
						onClick={() => setIsPlace(false)}
						className={classes.editBtn}
					>
						Edit
					</Button>
				) : (
					""
				)}
			</div>
			{isPlace ? (
				renderInfo(dataForm)
			) : (
				<div className={classes.body}>
					<form
						onSubmit={handleSubmit(onSubmit, onError)}
						className={classes.formBox}
						id={"shipping"}
					>
						<InputCustomer
							name={"name"}
							ref={register}
							label={"Full Name"}
							type={"text"}
							defaultValue={
								shippingData ? shippingData.name : user.fullName
							}
						/>
						<InputCustomer
							name={"phone"}
							ref={register}
							label={"Shipping Phone"}
							defaultValue={
								shippingData ? shippingData.phone : user.phone
							}
						/>
						{/* <InputCustomer
							name={"province"}
							ref={register}
							label={"Province"}
							defaultValue={
								shippingData
									? shippingData.province
									: user.province
							}
						/> */}
						<SelectProvince
							name={"province"}
							ref={register}
							label={"Province"}
							data={provinceList}
						/>
						<SelectDistrict
							name={"district"}
							ref={register}
							label={"District"}
							data={districtList}
						/>
						{/* <InputCustomer
							name={"district"}
							ref={register}
							label={"District"}
							defaultValue={
								shippingData
									? shippingData.district
									: user.district
							}
						/> */}
						{/* <InputCustomer
							name={"village"}
							ref={register}
							label={"Village"}
							defaultValue={
								shippingData
									? shippingData.village
									: user.village
							}
						/> */}
						<SelectVillage
							name={"village"}
							ref={register}
							label={"Village"}
							data={villageList}
						/>
						<InputCustomer
							name={"street"}
							ref={register}
							label={"Street"}
							defaultValue={
								shippingData ? shippingData.street : user.street
							}
						/>
						<InputCustomer
							name={"country"}
							ref={register}
							label={"Country"}
							value={"Viet Nam"}
							disabled
						/>
						<textarea
							cols="80"
							rows="5"
							ref={register}
							name="memo"
							className={classes.textarea}
							placeholder="Delivery instructions"
							defaultValue={shippingData ? shippingData.memo : ""}
						></textarea>
					</form>
					<div className={classes.buttonBox}>
						<Button
							type={"submit"}
							form={"shipping"}
							className={classes.button}
						>
							{"Continue to payment"}
						</Button>
					</div>
				</div>
			)}
		</div>
	);
}

export default ShippingSection;
