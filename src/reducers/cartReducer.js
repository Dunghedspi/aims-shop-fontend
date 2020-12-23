/* eslint-disable indent */
const initState = {
	quantity: 0,
	products: [],
	total: 0,
};

const getQuantity = (products) => {
	return products.reduce((sum, item) => {
		return (sum += item.quantity);
	}, 0);
};

const getTotal = (products) => {
	return products.reduce((sum, item) => {
		return (sum += item.price);
	}, 0);
};

const updateProducts = (products, product) => {
	return products.map((item) => {
		if (item.id === product.id) {
			return product;
		}
	});
};

const DeleteProduct = (products, product) => {
	const id = products.indexOf((item) => item.id === product.id);
	return products.splice(id, 1);
};
const UserReducers = (state = initState, action) => {
	switch (action.type) {
		case "SET_CART": {
			const quantity = getQuantity(action.products);
			const total = getTotal(action.payload);
			return {
				...state,
				...action.payload,
				quantity,
				total,
			};
		}
		case "UPDATE_CART": {
			const { products } = state;
			const UpdateProducts = updateProducts(products, action.payload);
			const quantity = getQuantity(UpdateProducts);
			const total = getTotal(UpdateProducts);
			return {
				...state,
				products: UpdateProducts,
				quantity,
				total,
			};
		}
		case "DELETE_PRODUCT": {
			const { products } = state;
			const UpdateProducts = DeleteProduct(products, action.payload);
			const quantity = getQuantity(UpdateProducts);
			const total = getTotal(UpdateProducts);
			return {
				...state,
				products: UpdateProducts,
				quantity,
				total,
			};
		}
		default:
			return {
				...state,
			};
	}
};
export default UserReducers;
