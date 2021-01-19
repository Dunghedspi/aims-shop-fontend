import { toastifyError } from "helpers/toastify";
import { toastifySuccess } from "helpers/toastify";
import axiosCustom from "../Plugins/axios";
export const CartApi = {
	GetCart: async () => {
		let carts = [];
		const response = await axiosCustom
			.callApi("GET", "/api/cart/getCart")
			.catch((error) => console.error(error));
		if (response && response.status === 200) {
			carts = response.data;
		}
		return carts;
	},
	AddProductToCart: async (payload) => {
		let product = null;
		const response = await axiosCustom
			.callApi("POST", "/api/cart/addProductToCart", payload)
			.catch((error) => console.error(error));
		if (response && response.status === 200) {
			product = response.data;
			console.log(response);
			toastifySuccess("Add products to cart successfully");
		} else {
			toastifyError(
				"Quantity of products requested is more than quantity in stock!"
			);
		}
		return product;
	},
	DeleteProductToCart: async (payload) => {
		let isDelete = false;
		const response = await axiosCustom
			.callApi("POST", "/api/cart/deleteProductInCartDetail", payload)
			.catch((error) => console.error(error));
		if (response && response.status === 200) {
			toastifySuccess("Successfully deleted the product from the cart");
			isDelete = true;
		} else {
			toastifyError("Unsuccessful deletion of product from cart");
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
	GetTotalByUserToken: async () => {
		let total = 0;
		const response = await axiosCustom
			.callApi("GET", "/api/cart/getTotalProduct")
			.catch((error) => console.log(error));
		if (response && response.status === 200) {
			console.log(response);
			total = Number.parseInt(response.data);
		}
		return total;
	},
	GetShipping: async (payload) => {
		let total = 0;
		const response = await axiosCustom
			.callApi("POST", "/api/order/checkShipping", payload)
			.catch((error) => console.log(error));
		if (response && response.status === 200) {
			total = Number.parseInt(response.data);
		}
		return total;
	},
};
