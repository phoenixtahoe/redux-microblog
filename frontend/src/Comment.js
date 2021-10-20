import React from "react";
import { Button, Card, CardBody, CardFooter } from "reactstrap";

function Comment({ deleteComment, text, id }) {
	function handleDelete(evt) {
		deleteComment(id);
	}
	return (
		<Card className='m-5'>
			<CardBody>{text}</CardBody>
			<CardFooter>
				{deleteComment && (
					<Button color='danger' className='' onClick={handleDelete}>
						Remove
					</Button>
				)}
			</CardFooter>
		</Card>
	);
}

export default Comment;
