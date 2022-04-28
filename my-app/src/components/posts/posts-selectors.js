import { get } from "lodash";
import { createSelector } from "reselect";

export const getMainReducer = (state) =>
	console.log(state) || get(state, "mainReducer", {});

export const getPosts = createSelector([getMainReducer], (mainReducer) =>
	get(mainReducer, "posts", [])
);
