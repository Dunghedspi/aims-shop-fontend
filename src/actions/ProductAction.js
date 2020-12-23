import { ProductApi } from "apis/ProductApi";
export const getCart = async () => {
	let data = null;
	const response = await ProductApi.GetProductsTrending();
	if (response && response.status === 200) {
		data = response.data;
	}
	return {
		type: "SET_CART",
		payload: data,
	};
};
