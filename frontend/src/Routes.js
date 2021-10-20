import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Homepage from "./Homepage";
import NewPostForm from "./NewPostForm";
import Post from "./Post";

function Routes() {
	return (
		<Switch>
			<Route exact path='/'>
				<Homepage />
			</Route>
			<Route exact path='/create'>
				<NewPostForm />
			</Route>
			<Route exact path='/post/:id'>
				<Post />
			</Route>
			<Redirect to='/' />
		</Switch>
	);
}

export default Routes;
