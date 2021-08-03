import React from 'react';
import { Button, Select, Message } from 'semantic-ui-react';

class Logout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			confirm: false,
		};
		this.handleclick = this.handleclick.bind(this);
	}

	handleclick() {
		this.setState({
			confirm: true,
		});
		this.props.logout();
	}

	render() {
		return this.state.confirm ? (
			<Message success header="You have succesfully logged out!" content="Thank you for handing me up!" />
		) : (
			<div>
				Are you sure you would like to logout? <br />
				<Button onClick={this.handleclick}>Logout</Button>
			</div>
		);
	}
}

export default Logout;
