import { ActionTypes } from "../const/action-types";
import axios from "axios";


export const fetchProducts = () => async (dispatch) => {
	const response = await axios.get("/api/products");

	dispatch({
		type: ActionTypes.FETCH_PRODUCTS,
		payload: response.data.products,
	});
};

export const AddProduct = (product) => {
	return { type: ActionTypes.ADD_PRODUCT, payload: product };
};

export const deleteProduct = (id) => async (dispatch) => {
	const response = fetch(`/api/products/${id}`, { method: "DELETE" });
	dispatch({ type: ActionTypes.REMOVE_SELECTED_PRODUCT, payload: id });
};
