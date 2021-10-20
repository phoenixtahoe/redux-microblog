import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { sendPostToAPI } from "./actions";

import PostForm from "./PostForm";

function NewPost() {
	const dispatch = useDispatch();
	const history = useHistory();

	function add({ title, description, body }) {
		dispatch(sendPostToAPI(title, description, body));
		history.push("/");
	}

	function cancel() {
		history.push("/");
	}

	return (
		<div>
			<PostForm save={add} cancel={cancel} />
		</div>
	);
}

export default NewPost;
