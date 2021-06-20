import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<NavLink style={{ fontFamily: 'Courgette', color: '#3498db' }} className="navbar-brand" to="/">
				Shadi.com
			</NavLink>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav ml-auto">
					<NavLink className="nav-link l-5" to="/login">
						Profiles
					</NavLink>
					<NavLink className="nav-link" to="/login">
						LogIn
					</NavLink>
					<NavLink className="nav-link" to="/logout">
						LogOut
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
