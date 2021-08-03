import React from 'react';
import axios from 'axios';
import Signup from './signup.jsx';
import { Form, Checkbox, Input, TextArea, Button, Select, Message } from 'semantic-ui-react';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			confirm: false,
			error: null,
			signup: false,
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSignupClick = this.handleSignupClick.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[name]: value,
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const options = this.state;
		axios
			.get('http://localhost:3000/login', { params: { options } })
			.then((response) => {
				if (response.data.length) {
					this.props.updateUserId(response.data[0].id);
					this.setState({
						confirm: true,
					});
				} else {
					this.setState({
						error: true,
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	handleSignupClick(e) {
		e.preventDefault();
		this.setState({
			signup: true,
		});
	}

	render() {
		return this.state.signup ? (
			<Signup updateUserId={this.props.updateUserId} />
		) : this.state.confirm ? (
			<Message success header="You have succesfully logged in!" content="Welcome - You may now click browse to see all postings or your posts to edit." />
		) : (
			<Form>
				<p className="error">{this.state.error ? '*** Sorry, incorrect email or password. Or please sign up below. ***' : ''}</p>
				<Form.Field label="Email" control="input" name="email" placeholder="abcd@efg.com" onChange={this.handleInputChange} />
				<Form.Field label="Password" control="input" type="password" name="password" placeholder="password" onChange={this.handleInputChange} />

				<Button type="submit" onClick={this.handleSubmit}>
					Submit
				</Button>
				<h4>Not a registered User?</h4>
				<Button type="submit" onClick={this.handleSignupClick}>
					Sign Up!
				</Button>
			</Form>
		);
	}
}

export default Login;
