import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import { Jumbotron, Container } from "reactstrap";

import "./Navbar.css";

function NavBar() {
	return (
		<div>
			<Jumbotron fluid>
				<Container className='m-5' fluid>
					<h1 className='display-3'>Mircoblog</h1>
					<ul>
						<p className='lead'>Get blogging!</p>
						<Navbar className='' expand=''>
							<Nav className='' navbar>
								<NavItem>
									<NavLink to='/'>Home</NavLink>
								</NavItem>

								<NavItem>
									<NavLink to='/create'>
										Create Blog Post
									</NavLink>
								</NavItem>
							</Nav>
						</Navbar>
					</ul>
				</Container>
			</Jumbotron>
		</div>
	);
}

export default NavBar;
