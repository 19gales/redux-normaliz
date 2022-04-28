import { createAction } from "@reduxjs/toolkit";

export const FETCH_DATA = "FETCH_DATA";
export const DESERIALIZE_POST = "DESERIALIZE_POST";

export const deserializePost = createAction("DESERIALIZE_POST");
