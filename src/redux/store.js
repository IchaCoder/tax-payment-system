/** @format */
import { combineReducers, createStore } from "redux";

const initialState = {
	products: [],
	singleProduct: {},
	loading: false,
	quantity: 0,
	cart: [],
};

const showProductsReducer = (state = initialState, { type, payload }) => {
	if (type === "SHOW_PRODUCTS") {
		return { ...state, products: payload };
	}

	if (type === "SHOW_SINGLE_PRODUCT") {
		return { ...state, singleProduct: payload };
	}

	if (type === "SET_LOADING_TRUE") {
		return { ...state, loading: true };
	}

	if (type === "SET_LOADING_FALSE") {
		return { ...state, loading: false };
	}

	if (type === "INCREASE_QUANTITY") {
		return { ...state, quantity: state.quantity + 1 };
	}

	if (type === "DECREASE_QUANTITY") {
		return { ...state, quantity: state.quantity - 1 };
	}

	if (type === "RESET_QUANTITY") {
		return { ...state, quantity: 0 };
	}
	if (type === "ADD_ITEM") {
		const itemExist = state.cart.find((item) => item.id == payload.id);
		if (itemExist) {
			return { ...state };
		} else {
			return {
				...state,
				cart: [...state.cart, payload],
			};
		}
	}

	if (type === "DELETE_ITEM") {
		const filteredItem = state.cart.filter((item) => item.id !== payload);

		return {
			...state,
			cart: filteredItem,
		};
	}
	return state;
};

const modalBool = {
	showModal: true,
};

const modalReducer = (state = modalBool, { type }) => {
	if (type === "SHOW_MODAL") {
		return { ...state, showModal: false };
	}

	if (type === "HIDE_MODAL") {
		return { ...state, showModal: true };
	}
	return state;
};

const reducers = combineReducers({
	showProducts: showProductsReducer,
	showModal: modalReducer,
});

const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
