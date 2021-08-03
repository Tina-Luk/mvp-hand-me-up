import React from 'react';
import { Menu } from 'semantic-ui-react';

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: '',
		};
		this.handleItemClick = this.handleItemClick.bind(this);
	}
	handleItemClick(e, { name }) {
		this.setState({ activeItem: name });
		this.props.onClick(name);
	}

	render() {
		return (
			<Menu pointing secondary>
				<Menu.Item name="browse" active={this.state.activeItem === 'browse'} onClick={this.handleItemClick}>
					Browse All
				</Menu.Item>

				<Menu.Item name="submit" active={this.state.activeItem === 'submit'} onClick={this.handleItemClick}>
					Submit
				</Menu.Item>
				<Menu.Menu position="right">
					{this.props.userId ? (
						<React.Fragment>
							<Menu.Item name="yourpost" active={this.state.activeItem === 'yourpost'} onClick={this.handleItemClick}>
								Your Post's
							</Menu.Item>
							<Menu.Item name="logout" active={this.state.activeItem === 'logout'} onClick={this.handleItemClick}>
								Logout
							</Menu.Item>
						</React.Fragment>
					) : (
						<Menu.Item name="signup" active={this.state.activeItem === 'signup'} onClick={this.handleItemClick}>
							Login/Sign Up
						</Menu.Item>
					)}

					<Menu.Item name="help" active={this.state.activeItem === 'help'} onClick={this.handleItemClick}>
						Help
					</Menu.Item>
				</Menu.Menu>
			</Menu>
		);
	}
}

export default Navigation;
