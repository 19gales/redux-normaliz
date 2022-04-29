import { normalize } from "normalizr";
import { responce } from "../schemas/posts-schema";
import { actions } from "../action-types";

const initialState = ({
	posts: [],
	comments: [],
	authors: []
});

export const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.DESERIALIZE_POST:
			const normalizedOrder = normalize(action.payload, responce);
			return normalizedOrder.entities;
		default:
			return state;
	}
}