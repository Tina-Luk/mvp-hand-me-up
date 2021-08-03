import React from 'react';
import axios from 'axios';
import Itemdetails from './itemDetails.jsx';
import Userdetails from './userdetails.jsx';
import UpdateForm from './updateForm.jsx';
import { Image, Item, Message } from 'semantic-ui-react';

class Details extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			deleted: false,
			update: false,
			updateConfirm: false,
		};
		this.deleteClicked = this.deleteClicked.bind(this);
		this.updateClicked = this.updateClicked.bind(this);
		this.updateConfirmed = this.updateConfirmed.bind(this);
	}

	deleteClicked(id) {
		if (window.confirm('Are you sure you wish to delete this item?')) {
			axios
				.delete(`http://localhost:3000/post/${id}`)
				.then((response) => {
					this.setState({
						deleted: true,
					});
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}

	updateClicked(id) {
		this.setState({
			update: true,
		});
	}

	updateConfirmed() {
		this.setState({
			updateConfirm: true,
		});
	}

	render() {
		return this.state.update && this.state.updateConfirm ? (
			<Message success header="Thank you for updates!" content="Your item has confirmed being updated." />
		) : this.state.update ? (
			<UpdateForm item={this.props.item} updatePost={this.props.updatePost} updateConfirmed={this.updateConfirmed} />
		) : this.state.deleted ? (
			<Message success header="Thank you for posting" content="Your item has confirmed being deleted." />
		) : (
			<div class="detail-wrapper">
				<Itemdetails item={this.props.item} canEdit={this.props.canEdit} deleteClick={this.deleteClicked} updateClick={this.updateClicked} />
				<br />
				<Userdetails userId={this.props.userId} />
			</div>
		);
	}
}

export default Details;
