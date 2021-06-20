import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './login.css';

export default class Login extends Component {
	constructor(props) {
		super(props);
		let loggedIn = false;
		this.state = {
			username: '',
			password: '',
			loggedIn
		};
	}

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	submitForm = (e) => {
		e.preventDefault();
		const { username, password } = this.state;
		// this.setState({
		// 	loggedIn: true
		// });

		if (username && password) {
			this.setState({
				loggedIn: true
			});
		}
	};

	render() {
		if (this.state.loggedIn) {
			return <Redirect to="/profiles" />;
		}
		return (
			<div className="loginPage">
				<div className="form d-flex align-items-center justify-content-center">
					<form onSubmit={this.submitForm}>
						<h2>Please Login ....</h2>
						<div className="form-group ">
							<label for="exampleInputEmail1">Username</label>
							<input
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								type="text"
								placeholder="username"
								name="username"
								value={this.state.username}
								onChange={this.onChange}
							/>
							<small id="emailHelp" className="form-text text-muted">
								We'll never share your email with anyone else.
							</small>
						</div>
						<div className="form-group">
							<label for="exampleInputPassword1">Password</label>
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								placeholder="password"
								name="password"
								value={this.state.password}
								onChange={this.onChange}
							/>
						</div>
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</form>
				</div>
			</div>
		);
	}
}
