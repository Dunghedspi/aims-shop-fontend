import axiosCustom from "../Plugins/axios";
export const UserApi = {
	GetCart: async () => {
		let carts = null;
		const response = await axiosCustom
			.callApi("GET", "/api/cart/getcart")
			.catch((error) => console.error(error));
		if (response && response.status === 200) {
			carts = response.data;
		}
		return carts;
	},
	AddProductToCart: async (payload) => {
		let product = null;
		const response = await axiosCustom
			.callApi("GET", "/api/cart/addproduct", null, payload)
			.catch((error) => console.error(error));
		if (response && response.status === 200) {
			product = response.data;
		}
		return product;
	},
	DeleteProductToCart: async (payload) => {
		let isDelete = false;
		const response = await axiosCustom
			.callApi("GET", "/api/cart/delete", null, payload)
			.catch((error) => console.error(error));
		if (response && response.status === 200) {
			isDelete = true;
		}
		return isDelete;
	},
	AddProductToCartWithNumber: async (payload) => {
		let product = null;
		const response = await axiosCustom
			.callApi("POST", "/api/cart/add-product-with-number", null, payload)
			.catch((error) => console.error(error));
		if (response && response.status === 200) {
			product = response.data;
		}
		return product;
	},
};
