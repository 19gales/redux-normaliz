import { map } from "lodash";
import React from "react";
import { ListGroup } from "react-bootstrap";
import { Post } from "./post";

export const PostsComponent =(props)=>{
	const { posts } = props;
	return (
		<>
			<ListGroup>
				{map(posts, (item, index) => {
					return <Post key={index} item={item} />;
				})}
			</ListGroup>
		</>
	);
}