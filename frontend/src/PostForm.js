import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {useHistory} from "react-router-dom"

import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { sendPostToAPI } from "./actions";

function PostForm({post, save, cancel}) {

	const [data, setPostData] = useState({
		title: post.title,
		description: post.description,
		body: post.body,
	  });
	
	  function handleChange(evt) {
		const {name, value} = evt.target;
		setPostData(data => ({
		  ...data,
		  [name]: value
		}));
	  }
	
	  function handleSubmit(evt) {
		evt.preventDefault();
		save(data);
	  }

	return (
		<Container className='my-5 text-center'>
			<h3>Create a new blog post!</h3>
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<Label htmlFor='title'>Title</Label>
					<Input
						name='title'
						onChange={handleChange}
						value={data.title}
					/>
				</FormGroup>
                <FormGroup>
					<Label htmlFor='description'>Description</Label>
					<Input
						name='description'
						onChange={handleChange}
						value={data.description}
					/>
				</FormGroup>
                <FormGroup>
                    <Label htmlFor='body'>Body</Label>
                    <Input type="textarea" name="body" onChange={handleChange} value={data.body}/>
                </FormGroup>
                <Button color="primary" className="mx-2" type="submit">Create</Button>
                <Button color="danger" className="mx-2" onClick={cancel}>Cancel</Button>
			</Form>
		</Container>
	);
}

PostForm.defaultProps = {
  post: { title: "", description: "", body: "" },
};

export default PostForm;
