import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Container, Button } from "reactstrap";

import {
	getPostFromAPI,
	updatePostInAPI,
	removePostFromAPI,
	sendCommentToAPI,
	removeCommentFromAPI,
	sendVoteToAPI,
} from "./actions";

import PostForm from "./PostForm";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

function Post() {
	const [isEditing, setIsEditing] = useState(false);
	const { id } = useParams();
	const history = useHistory();
	const post = useSelector((st) => st[id]);
	const dispatch = useDispatch();

	useEffect(
		function loadPostWhenPostOrIdChanges() {
			async function getPost() {
				dispatch(getPostFromAPI(id));
			}
			if (!post) {
				getPost();
			}
		},
		[dispatch, id, post]
	);

	function toggleEdit() {
		setIsEditing((edit) => !edit);
	}

	function edit({ title, description, body }) {
		dispatch(updatePostInAPI(id, title, description, body));
		toggleEdit();
	}

	const handleDelete = (e) => {
		e.preventDefault();
		dispatch(removePostFromAPI(id));
		history.push(`/`);
	};

	function addComment(text) {
		dispatch(sendCommentToAPI(id, text));
	}

	function deleteComment(commentId) {
		dispatch(removeCommentFromAPI(id, commentId));
	}

	if (!post) return <p className='text-center'>Loading</p>;

	return (
		<div>
			{isEditing ? (
				<PostForm post={post} save={edit} cancel={toggleEdit} />
			) : (
				<Container className='my-5'>
					<h1>{post.title}</h1>
					<ul>
						<em>{post.description}</em>
					</ul>
					<p className='lead'>{post.body}</p>
					<div>Votes: {post.votes}</div>
					<br />
					<Button
						color='primary'
						className='mx-2'
						onClick={toggleEdit}
					>
						Edit
					</Button>
					<Button
						color='danger'
						className='mx-2'
						onClick={handleDelete}
					>
						Delete
					</Button>
					<div className='mt-5'>
						<CommentList
							comments={post.comments}
							deleteComment={deleteComment}
						/>
						<CommentForm submitCommentForm={addComment} />
					</div>
				</Container>
			)}
		</div>
	);
}

export default Post;
