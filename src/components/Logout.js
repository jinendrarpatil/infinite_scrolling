import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class logout extends Component {
	render() {
		return (
			<div className="jumbotron">
				<h1 className="display-4" style={{ fontFamily: 'Courgette' }}>
					Thank you for visiting Shadi.com
				</h1>
				<p className="lead"> You have been LoggedOut</p>

				<Link className="btn btn-primary btn-lg" to="/login" role="button">
					Login Again
				</Link>
			</div>
		);
	}
}
