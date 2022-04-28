import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { getPosts } from "./posts-selectors";
import { PostsComponent } from "./posts-component";

const mapStateToProps = createStructuredSelector({
	posts: getPosts
});

export const PostsController = connect(mapStateToProps)(PostsComponent);
