import { deserializePost } from "../../action-types/action-types";

import { data } from "./app-data";

export const getAllData = () => (dispatch) =>
	dispatch(deserializePost(data));
