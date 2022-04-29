import React from "react";

export const Post = ({ item }) => {
	const { title, body } = item;
	return (
		<>
			<h6 style={{ textAlign: "center" }}>{title}</h6>
			<p>{body}</p>
		</>
	);
};
