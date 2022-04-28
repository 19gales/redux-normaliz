import { deserializePost } from "../../action-types/action-types";

import { DATA } from "./app-constants";

export const getAllData = () => (dispatch) =>
	dispatch(deserializePost(DATA));
