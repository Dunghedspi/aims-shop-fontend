import { toastifySuccess } from "helpers/toastify";
import { toastifyError } from "helpers/toastify";
import axiosCustom from "../Plugins/axios";
export const UserApi = {
	SignIn: async (payload) => {
		let userInfo = null;
		const response = await axiosCustom
			.callApi("POST", "/api/auth/login", payload)
			.catch((error) => console.error(error));
		if (response && response.status === 200) {
			userInfo = response.data;
		}
		return userInfo;
	},
	SignUp: async (payload) => {
		console.log(payload);
		let isSignUp = false;
		const response = await axiosCustom
			.callApi("POST", "/api/auth/register", payload)
			.catch((error) => console.error(error));
		if (response && response.status === 201) {
			isSignUp = true;
			toastifySuccess("Tạo tài khoản thành công");
		} else {
			toastifyError("Email đã được sử dụng!");
		}
		return isSignUp;
	},
	EditInfo: async (payload) => {
		let userInfo = null;
		const response = await axiosCustom
			.callApi("POST", "/api/user/edit", payload)
			.catch((error) => console.error(error));
		if (response && response.status === 200) {
			userInfo = response.data;
		}
		return userInfo;
	},
	getTokenUser: async () => {
		const response = await axiosCustom
			.callApi("GET", "/api/auth/createUserToken")
			.catch((error) => console.log(error));
		if (response && response.status === 200) {
			console.log(response);
		}
	},
	resetPassword: async (payload) => {
		const response = await axiosCustom
			.callApi("PUT", "/api/auth/applyNewPassword", payload)
			.catch((error) => console.log(error));
		if (response && response.status === 200) {
			console.log(response);
		}
		console.log(response);
	},
	getUserInfo: async () => {
		let data = null;
		const response = await axiosCustom
			.callApi("GET", "/api/user/getUserInfo")
			.catch((error) => console.log(error));
		if (response && response.status === 200) {
			data = response.data;
		}
		return data;
	},
	Logout: async () => {
		const response = await axiosCustom
			.callApi("GET", "/api/auth/logout")
			.catch((error) => console.log(error));
		if (response && response.status === 200) {
			console.log("OK");
		}
	},
};
