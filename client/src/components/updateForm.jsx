import React from 'react';
import axios from 'axios';
import { Image, Item, Form, Checkbox, Input, TextArea, Button, Select, Message } from 'semantic-ui-react';

class UpdateForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.item.id,
			category: this.props.item.category,
			title: this.props.item.title,
			description: this.props.item.description,
			condition: this.props.item.itemCondition,
			picture: this.props.item.picture,
			userId: this.props.item.userId,
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		const value = event.target.value;
		const name = event.target.name;
		this.setState({
			[name]: value,
		});
	}

	handleSubmit(e) {
		const options = this.state;
		axios
			.put(`http://localhost:3000/posts/${this.state.id}`, { options })
			.then((response) => {
				this.props.updatePost();
				this.props.updateConfirmed();
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<Form>
				<Form.Field label="Category" control="select" value={this.state.category} name="category" onChange={this.handleInputChange}>
					<option value="Play & Learn">Play & Learn</option>
					<option value="Clothing">Clothing</option>
					<option value="Nursery">Nursery</option>
					<option value="Out & About">Out & About</option>
					<option value="Diapering">Diapering</option>
					<option value="Feeding">Feeding</option>
					<option value="Other">Other</option>
				</Form.Field>
				<Form.Field label="Title" control="input" name="title" value={this.state.title} onChange={this.handleInputChange} />
				<Form.Field label="Description" control="textarea" rows="4" value={this.state.description} name="description" onChange={this.handleInputChange} />
				<Form.Group grouped>
					<label>Condition (must be good or better)</label>
					<Form.Field label="New" control="input" type="radio" name="condition" value="New" onChange={this.handleInputChange} checked={this.state.condition === 'New'} />
					<Form.Field label="Very Good" control="input" type="radio" name="condition" value="Very good" onChange={this.handleInputChange} checked={this.state.condition === 'Very good'} />
					<Form.Field label="Good" control="input" type="radio" name="condition" value="Good" onChange={this.handleInputChange} checked={this.state.condition === 'Good'} />
				</Form.Group>
				<Form.Field label="URL of item photo" control="input" name="picture" value={this.state.picture} onChange={this.handleInputChange} />
				<Button type="submit" onClick={this.handleSubmit}>
					Update
				</Button>
			</Form>
		);
	}
}

export default UpdateForm;
