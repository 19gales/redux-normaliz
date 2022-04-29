import React from "react";
import { Post } from "../post";

export const PostsComponent =(props)=>{
	const { posts } = props;
	return (
		<>
			{Object.entries(posts).map((item, index) => {
		 		return <Post key={index} item={item} />;
			})}
		</>
	);
}