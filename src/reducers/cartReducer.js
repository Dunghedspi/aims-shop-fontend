/* eslint-disable indent */
const initState = {
	total: 0,
};
const UserReducers = (state = initState, action) => {
	switch (action.type) {
		case "ADD_PRODUCT": {
			const { total } = state;
			return {
				...state,
				total: total + action.payload,
			};
		}
		case "DELETE_PRODUCT": {
			const { total } = state;
			return {
				...state,
				total: total - action.payload,
			};
		}
		default:
			return {
				...state,
			};
	}
};
export default UserReducers;
