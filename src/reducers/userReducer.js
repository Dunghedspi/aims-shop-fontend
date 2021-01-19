/* eslint-disable indent */
const initState = {
	username: "",
	email: "",
	avatar: "",
	role: "",
	address: {},
	isLogin: false,
};

const UserReducers = (state = initState, action) => {
	switch (action.type) {
		case "SET_INFO":
			return {
				...state,
				...action.payload,
				isLogin: true,
			};
		case "RESET_INFO":
			return {
				...state,
				...initState,
			};
		default:
			return {
				...state,
			};
	}
};
export default UserReducers;
