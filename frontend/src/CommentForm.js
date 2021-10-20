import React, { useState } from "react";
import { Container, Form, FormGroup, Input, Button } from "reactstrap";

function CommentForm({ submitCommentForm }) {
	const [text, setText] = useState();

	function handleSubmit(evt) {
		evt.preventDefault();
		submitCommentForm(text);
		setText("");
	}

	function handleChange(evt) {
		setText(evt.target.value);
	}

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<Input
						onChange={handleChange}
						id='comment'
						name='text'
						placeholder='New Comment'
						value={text}
					/>
				</FormGroup>
				<Button color='primary' type='submit'>
					Add
				</Button>
			</Form>
		</Container>
	);
}

export default CommentForm;
