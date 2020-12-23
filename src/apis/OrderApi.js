import axiosCustom from "../Plugins/axios";
export const OrderApi = {
	GetOrderList: async () => {
		let orders = null;
		const response = await axiosCustom
			.callApi("GET", "/api/orders/getorders")
			.catch((error) => console.error(error));
		if (response && response.status === 200) {
			orders = response.data;
		}
		return orders;
	},
	Checkout: async (payload) => {
		let product = null;
		const response = await axiosCustom
			.callApi("GET", "/api/cart/addproduct", null, payload)
			.catch((error) => console.error(error));
		if (response && response.status === 200) {
			product = response.data;
		}
		return product;
	},
	DeleteOrders: async (payload) => {
		let isDelete = false;
		const response = await axiosCustom
			.callApi("POST", "/api/orders/delete", null, payload)
			.catch((error) => console.error(error));
		if (response && response.status === 200) {
			isDelete = true;
		}
		return isDelete;
	},
	GetOrdersProducts: async (payload) => {
		let order = null;
		const response = await axiosCustom
			.callApi("GET", "/api/order/get-details-order", null, payload)
			.catch((error) => console.error(error));
		if (response && response.status === 200) {
			order = response.data;
		}
		return order;
	},
	UpdateAddress: async (payload) => {
		let isUpdate = false;
		const response = await axiosCustom
			.callApi("POST", "/api/order/update-address-order", payload, null)
			.catch((error) => console.error(error));
		if (response && response.status === 200) {
			isUpdate = true;
		}
		return isUpdate;
	},
	updateCard: async (payload) => {
		let isUpdate = false;
		const response = await axiosCustom
			.callApi("POST", "/api/order/update-card-order", payload, null)
			.catch((error) => console.error(error));
		if (response && response.status === 200) {
			isUpdate = true;
		}
		return isUpdate;
	},
};
