import { createSelector } from "reselect";

export const getMainReducer = (state) =>
	console.log(state) || (state, "mainReducer", {});

export const getPosts = createSelector([getMainReducer], (mainReducer) => 
	(mainReducer, "posts", []) || ' '
);