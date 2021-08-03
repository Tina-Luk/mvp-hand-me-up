import React from 'react';
import axios from 'axios';
import { Form, Checkbox, Input, TextArea, Button, Select, Message } from 'semantic-ui-react';

class FormToSubmitPost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userId: this.props.userId,
			category: '',
			title: '',
			description: '',
			condition: '',
			picture: '',
			confirm: false,
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
		if (this.state.userId) {
			const options = this.state;
			axios
				.post('http://localhost:3000/posts', { options })
				.then((response) => {
					this.setState({
						confirm: true,
					});
					this.props.updatePost();
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}

	render() {
		return this.state.confirm ? (
			<Message success header="Your posting was successful!" content="You may now click browse to see all posting or submit to create a new posting" />
		) : (
			<Form>
				<p className="error">{this.state.userId === null ? '*** Sorry, please sign up or login first. ***' : ''}</p>
				<Form.Field label="Category" control="select" placeholder="Select Category" name="category" onChange={this.handleInputChange}>
					<option value="Play & Learn">Play & Learn</option>
					<option value="Clothing">Clothing</option>
					<option value="Nursery">Nursery</option>
					<option value="Out & About">Out & About</option>
					<option value="Diapering">Diapering</option>
					<option value="Feeding">Feeding</option>
					<option value="Other">Other</option>
				</Form.Field>
				<Form.Field label="Title" control="input" placeholder="Title of Posting" name="title" onChange={this.handleInputChange} />
				<Form.Field label="Description" control="textarea" rows="4" placeholder="Tell us more about the item..." name="description" onChange={this.handleInputChange} />
				<Form.Group grouped>
					<label>Condition (must be good or better)</label>
					<Form.Field label="New" control="input" type="radio" name="condition" value="New" onChange={this.handleInputChange} />
					<Form.Field label="Very Good" control="input" type="radio" name="condition" value="Very good" onChange={this.handleInputChange} />
					<Form.Field label="Good" control="input" type="radio" name="condition" value="Good" onChange={this.handleInputChange} />
				</Form.Group>
				<Form.Field label="URL of item photo" control="input" placeholder="http://...." name="picture" onChange={this.handleInputChange} />
				<Button type="submit" onClick={this.handleSubmit}>
					Submit
				</Button>
			</Form>
		);
	}
}

export default FormToSubmitPost;
