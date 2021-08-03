import React from 'react';
import { Icon } from 'semantic-ui-react';
import axios from 'axios';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
		};
		this.getUserName = this.getUserName.bind(this);
	}

	componentDidUpdate(prevProps) {
		if (this.props.userId !== prevProps.userId) {
			if (this.props.userId === null) {
				this.setState({
					name: '',
				});
			} else {
				this.getUserName();
			}
		}
	}

	getUserName() {
		axios
			.get(`http://localhost:3000/user/${this.props.userId}`)
			.then((response) => {
				this.setState({
					name: response.data[0].name,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		let display =
			this.state.name.length > 0 ? (
				<p className="login">
					{this.state.name} <br />
					{'Is Logged In'}
				</p>
			) : (
				<p></p>
			);
		return (
			<div id="header">
				<div className="grid-container">
					<div>
						<h1>
							<Icon name="hand point up outline" size="big" />
							Hand Me Up
						</h1>
					</div>
					<div>{display}</div>
				</div>
				<h3>A place for hand me downs and hand me ups</h3>
				<img src="https://storage.googleapis.com/mamapedia-images/large_photos/14891061844084260865/original.jpg?1409668886"></img>
			</div>
		);
	}
}

export default Header;
