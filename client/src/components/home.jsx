import React from 'react';
import axios from 'axios';
import Posts from './posts.jsx';
import Navigation from './navigation.jsx';

import Form from './form.jsx';
import Login from './login.jsx';
import Details from './details.jsx';
import Header from './header.jsx';
import YourPost from './yourpost.jsx';
import Logout from './logout.jsx';
import { Icon } from 'semantic-ui-react';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			itemClicked: false,
			item: {},
			userId: null,
			canEdit: false,
		};
		this.navigationClicked = this.navigationClicked.bind(this);
		this.itemClicked = this.itemClicked.bind(this);
		this.getPostData = this.getPostData.bind(this);
		this.updateUserId = this.updateUserId.bind(this);
		this.logoutClicked = this.logoutClicked.bind(this);
	}

	componentDidMount() {
		this.getPostData();
	}

	getPostData() {
		axios
			.get('http://localhost:3000/posts')
			.then((response) => {
				this.setState({
					data: response.data.reverse(),
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	updateUserId(id) {
		this.setState({
			userId: id,
		});
	}

	navigationClicked(btn) {
		this.setState(
			{
				itemClicked: btn,
			},
			() => {
				this.getPostData();
			}
		);
	}

	itemClicked(id, addEdit = false) {
		for (let i = 0; i < this.state.data.length; i++) {
			if (this.state.data[i].id === id) {
				this.setState({
					item: this.state.data[i],
					itemClicked: true,
					canEdit: addEdit,
				});
				break;
			}
		}
	}

	logoutClicked() {
		this.setState({
			userId: null,
		});
	}

	render() {
		let display =
			this.state.itemClicked === true ? (
				<Details item={this.state.item} canEdit={this.state.canEdit} userId={this.state.item.userId} updatePost={this.getPostData} />
			) : this.state.itemClicked === 'submit' ? (
				<Form onClick={this.navigationClicked} userId={this.state.userId} updatePost={this.getPostData} />
			) : this.state.itemClicked === 'signup' ? (
				<Login updateUserId={this.updateUserId} />
			) : this.state.itemClicked === 'browse' ? (
				<Posts onClick={this.itemClicked} data={this.state.data} />
			) : this.state.itemClicked === 'yourpost' ? (
				<YourPost onClick={this.itemClicked} data={this.state.data} userId={this.state.userId} />
			) : this.state.itemClicked === 'logout' ? (
				<Logout logout={this.logoutClicked} />
			) : (
				<Posts onClick={this.itemClicked} data={this.state.data} />
			);
		return (
			<div>
				<Header userId={this.state.userId} />
				<Navigation onClick={this.navigationClicked} userId={this.state.userId} />
				{display}
				<br />
				<br />
				<div className="footer">
					<h3>A place for hand me downs and hand me ups</h3>
					<h1>
						<Icon name="hand point up outline" size="big" />
						Hand Me Up
					</h1>
				</div>
			</div>
		);
	}
}

export default Home;
