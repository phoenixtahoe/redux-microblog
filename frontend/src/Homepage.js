import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchTitlesFromAPI, sendVoteToAPI } from "./actions";

import {
	Container,
	Card,
	CardBody,
	CardFooter,
	CardTitle,
	Button,
} from "reactstrap";

function Homepage() {
	const posts = useSelector((st) => st);
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(
		function () {
			async function fetchTitle() {
				await dispatch(fetchTitlesFromAPI());
				setIsLoading(false);
			}

			if (isLoading) {
				fetchTitle();
			}
		},
		[dispatch, isLoading]
	);


	function vote(direction, id) {
		dispatch(sendVoteToAPI(id, direction));
	}

	if (isLoading) {
		return <p className='text-center'>Loading</p>;
	}

	if (!isLoading && posts.length === 0) {
		return <p className='text-center'>Please add a post!</p>;
	}

	return (
		<Container>
			<div className='m-5'>
				<p className='lead'>
					Welcome to <strong>Mircoblog</strong>, our inovative site
					for communicating on the information superhighway
				</p>
			</div>
			{posts.map((e) => (
				<Card className='m-5 text-center'>
					<Link to={"/post/" + e.id}>{e.title}</Link>
					<br />
					<CardTitle>{e.description}</CardTitle>
					<CardBody>Votes: {e.votes}</CardBody>
					<CardFooter>
						<Button
							className='mx-2'
							color='primary'
							onClick={(evt) => vote("up", e.id)}
						>
							Up
						</Button>
						<Button
							className='mx-2'
							color='danger'
							onClick={(evt) => vote("down", e.id)}
						>
							Down
						</Button>
					</CardFooter>
				</Card>
			))}
		</Container>
	);
}

export default Homepage;
