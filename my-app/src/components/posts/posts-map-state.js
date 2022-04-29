import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { getPosts } from "./posts-selectors";
import { PostsComponent } from "./posts-component";

const mapStateProps = createStructuredSelector({
	posts: getPosts
});

export const Posts = connect(mapStateProps)(PostsComponent);
