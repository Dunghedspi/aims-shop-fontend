import { CartApi } from "apis/CartApi";
export const getCart = async () => {
	let data = null;
	const response = await CartApi.GetCart();
	if (response && response.status === 200) {
		data = response.data;
	}
	return {
		type: "SET_CART",
		payload: data,
	};
};

export const updateProductCart = async (payload) => {
	let data = null;
	const response = await CartApi.AddProductToCart(payload);
	if (response && response.status === 200) {
		data = response.data;
	}
	return {
		type: "UPDATE_CART",
		payload: data,
	};
};

export const deleteProductCart = async (payload) => {
	let isDelete = false;
	const response = await CartApi.DeleteProductToCart(payload);
	if (response && response.status === 200) {
		isDelete = true;
	}
	console.log(isDelete);
	return {
		type: "DELETE_PRODUCT",
		payload,
	};
};
