import React from 'react';
import { Image, Item, Button } from 'semantic-ui-react';

class Itemdetails extends React.Component {
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
	}

	render() {
		let display = this.props.canEdit ? (
			<div style={{ 'text-align': 'right' }}>
				<Button color="blue" onClick={() => this.props.updateClick(this.state.id)}>
					Update
				</Button>
				<Button color="blue" onClick={() => this.props.deleteClick(this.state.id)}>
					Delete
				</Button>
			</div>
		) : (
			''
		);
		return (
			<Item>
				<div className="one">
					{display}
					<h1>
						{this.state.category} <br />
						{this.state.title}
					</h1>
					<Item.Image size="large" src={this.state.picture} />
				</div>

				<Item.Content>
					<h3>Description: {this.state.description}</h3>
					<Item.Meta>Condition: {this.state.condition}</Item.Meta>
				</Item.Content>
			</Item>
		);
	}
}

export default Itemdetails;
