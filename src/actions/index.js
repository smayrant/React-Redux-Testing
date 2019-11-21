import { types } from "./types";
import axios from "axios";

export const fetchPosts = () => {
	return async dispatch => {
		try {
			const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10");

			dispatch({
				type: types.GET_POSTS,
				payload: response.data
			});
		} catch (error) {
			console.log(error);
		}
	};
};
