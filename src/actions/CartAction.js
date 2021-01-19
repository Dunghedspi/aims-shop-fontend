import { CartApi } from "apis/CartApi";
export const addProduct = (payload) => {
	return async (dispatch) => {
		const response = await CartApi.AddProductToCart(payload);
		if (response) {
			dispatch({
				type: "ADD_PRODUCT",
				payload: payload.quantity,
			});
		}
	};
};

export const getTotalProduct = () => {
	return async (dispatch) => {
		const response = await CartApi.GetTotalByUserToken();
		if (response) {
			dispatch({
				type: "ADD_PRODUCT",
				payload: response,
			});
		}
	};
};

export const deleteProductToCart = (payload) => {
	return {
		type: "DELETE_PRODUCT",
		payload: payload,
	};
};

export const addNumberProduct = (payload) => {
	return {
		type: "ADD_PRODUCT",
		payload: payload,
	};
};
