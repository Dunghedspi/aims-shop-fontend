import axiosCustom from "../Plugins/axios";
export const ProductApi = {
	GetProductsTrending: async () => {
		let trendingProducts = null;
		const response = await axiosCustom
			.callApi("GET", "/api/products/getProductTrending")
			.catch((error) => console.error(error));
		if (response && response.status === 200) {
			trendingProducts = response.data;
		}
		return trendingProducts;
	},
	GetProductsSale: async () => {
		let trendingProducts = null;
		const response = await axiosCustom
			.callApi("GET", "/api/products/sale")
			.catch((error) => console.error(error));
		if (response && response.status === 200) {
			trendingProducts = response.data;
		}
		return trendingProducts;
	},
	GetProductsRelate: async (payload) => {
		let relateProducts = null;
		const response = await axiosCustom
			.callApi("GET", "/api/product/getProductByCategory/" + payload)
			.catch((error) => console.error(error));
		if (response && response.status === 200) {
			relateProducts = response.data;
		}
		return relateProducts;
	},
	GetProductsByCategory: async (payload) => {
		let products = null;
		const response = await axiosCustom
			.callApi(
				"GET",
				"/api/products/get-products-by-category",
				null,
				payload
			)
			.catch((error) => console.error(error));
		if (response && response.status === 200) {
			products = response.data;
		}
		return products;
	},
	GetDetailsProducts: async (payload) => {
		let products = null;
		const response = await axiosCustom
			.callApi("GET", "/api/products/get-details-products", null, payload)
			.catch((error) => console.error(error));
		if (response && response.status === 200) {
			products = response.data;
		}
		return products;
	},
	GetProductsByFilter: async (payload) => {
		let products = null;
		const response = await axiosCustom
			.callApi(
				"GET",
				"/api/products/get-products-by-filter",
				null,
				payload
			)
			.catch((error) => console.error(error));
		if (response && response.status === 200) {
			products = response.data;
		}
		return products;
	},
	GetProductRandom: async () => {
		let products = null;
		const response = await axiosCustom
			.callApi("GET", "/api/product/getProductRandom")
			.catch((error) => console.error(error));
		if (response && response.status === 200) {
			products = response.data;
		}
		return products;
	},
	GetProductDetails: async (payload) => {
		let product = {};
		const response = await axiosCustom
			.callApi("GET", "/api/product/getProductById/" + payload)
			.catch((error) => console.error(error));
		if (response && response.status === 200) {
			product = response.data;
		}
		return product;
	},
};
