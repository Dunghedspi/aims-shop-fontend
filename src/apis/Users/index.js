/* eslint-disable prettier/prettier */
import axiosCustom from "../../config/axios";
export const UserApi = {
	SignIn: (payload) => {
		return axiosCustom.callApi("POST", "/login", payload);
	},
	SignUp: (payload) =>{
		return axiosCustom.callApi("POST", "/signup", payload);
	}
};