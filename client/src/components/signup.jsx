import React from 'react';
import axios from 'axios';
import { Form, Checkbox, Input, TextArea, Button, Select, Message } from 'semantic-ui-react';

class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			streetAddress: '',
			streetAddress2: '',
			cityState: '',
			zip: 0,
			phoneNumber: '',
			insertId: null,
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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
			.post('http://localhost:3000/user', { options })
			.then((response) => {
				this.props.updateUserId(response.data.insertId);
				this.setState({
					insertId: response.data.insertId,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return this.state.insertId ? (
			<Message success header="You have succesfully signed up!" content="Welcome - You may now click browse to see all postings or submit a post yourself!" />
		) : (
			<Form>
				<Form.Field label="First Name" control="input" name="firstName" placeholder="First Name" onChange={this.handleInputChange} />
				<Form.Field label="Last Name" control="input" name="lastName" placeholder="Last Name" onChange={this.handleInputChange} />
				<Form.Field label="Email" control="input" name="email" placeholder="abcd@efg.com" onChange={this.handleInputChange} />
				<Form.Field label="Password" control="input" type="password" name="password" placeholder="password" onChange={this.handleInputChange} />
				<Form.Field>
					<label>Address</label>
					<input placeholder="1234 Some St." name="streetAddress" onChange={this.handleInputChange} />
					<input placeholder="" name="streetAddress2" onChange={this.handleInputChange} />
					<input placeholder="City, State" name="cityState" onChange={this.handleInputChange} />
					<input placeholder="Zip" name="zip" onChange={this.handleInputChange} />
				</Form.Field>
				<Form.Field label="Phone Number" control="input" name="phoneNumber" placeholder="(123)-123-4567" onChange={this.handleInputChange} />
				<Form.Field>
					<Checkbox label="I agree to the Terms and Conditions" />
				</Form.Field>
				<Button type="submit" onClick={this.handleSubmit}>
					Submit
				</Button>
			</Form>
		);
	}
}

export default Signup;
