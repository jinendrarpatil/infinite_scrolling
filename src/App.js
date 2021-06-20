import React, { Component } from 'react';
import Profiles from './components/Profiles';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Logout from './components/Logout';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default class App extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/profiles" component={Profiles} />
					<Route exact path="/login" component={Login} />
					<Route path="/logout" component={Logout} />
					<Redirect to="/" />
				</Switch>
				<Footer />
			</div>
		);
	}
}
