/** @format */

export const showProducts = (products) => {
	return {
		type: "SHOW_PRODUCTS",
		payload: products,
	};
};

export const showSingleProduct = (product) => {
	return {
		type: "SHOW_SINGLE_PRODUCT",
		payload: product,
	};
};

export const setLoadingTrue = () => {
	return {
		type: "SET_LOADING_TRUE",
	};
};

export const setLoadingFalse = () => {
	return {
		type: "SET_LOADING_FALSE",
	};
};

export const showModal = () => {
	return {
		type: "SHOW_MODAL",
	};
};

export const hideModal = () => {
	return {
		type: "HIDE_MODAL",
	};
};

export const increaseQuantity = () => {
	return {
		type: "INCREASE_QUANTITY",
	};
};

export const decreaseQuantity = () => {
	return {
		type: "DECREASE_QUANTITY",
	};
};

export const resetQuantity = () => {
	return {
		type: "RESET_QUANTITY",
	};
};

export const addItem = (product) => {
	return {
		type: "ADD_ITEM",
		payload: product,
	};
};

export const deleteItem = (product) => {
	return {
		type: "DELETE_ITEM",
		payload: product,
	};
};
