import { normalize, schema } from "normalizr";
import { data } from "../components/app/app-data";

export const author = new schema.Entity("authors");
export const comment = new schema.Entity("comments", {
	author: author
});
export const post = new schema.Entity("posts", {
	author: author,
	comments: [comment]
});
export const responce = new schema.Array(post);

const normalizedData = normalize(data, responce);
console.log(normalizedData);