import { normalize, schema } from "normalizr";
import { DATA } from "../components/app/app-constants";

export const author = new schema.Entity("authors");
export const comment = new schema.Entity("comments", {
	author: author
});
export const post = new schema.Entity("posts", {
	author: author,
	comments: [comment]
});
export const responce = new schema.Array(post);

const normalizedData = normalize(DATA, responce);
console.log(normalizedData);