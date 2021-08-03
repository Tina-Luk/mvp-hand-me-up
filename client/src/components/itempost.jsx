import React from 'react';
import { Image, Item } from 'semantic-ui-react';

class Itempost extends React.Component {
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
		let display = this.props.editOrDelete ? true : false;
		return (
			<Item>
				<Item.Image size="small" src={this.state.picture} />

				<Item.Content>
					<Item.Header as="a" onClick={() => this.props.onClick(this.state.id, display)}>
						{this.state.category} <br />
						{this.state.title}
					</Item.Header>
					<Item.Meta>{this.state.description}</Item.Meta>
					<Item.Extra>{this.state.condition}</Item.Extra>
				</Item.Content>
			</Item>
		);
	}
}

export default Itempost;
