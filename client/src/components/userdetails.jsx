import React from 'react';
import axios from 'axios';
import { Rating } from 'semantic-ui-react';
import MapContainer from './googleMaps.jsx';

class Userdetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
		this.getUserData = this.getUserData.bind(this);
	}

	componentDidMount() {
		this.getUserData();
	}

	getUserData() {
		axios
			.get(`http://localhost:3000/user/${this.props.userId}`)
			.then((response) => {
				this.setState({
					data: response.data[0],
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<div>
				<br />
				<h4>Please Contact</h4>
				<p>
					Name: <br /> {this.state.data.name || ''}
				</p>
				<p>
					Email: <br /> {this.state.data.email}
				</p>
				<p>
					Phone: <br /> {this.state.data.phoneNumber}
				</p>
				<p>
					ZipCode: <br /> {this.state.data.zip}
				</p>
				<div style={{ height: '140px' }}>
					<MapContainer zip={this.state.data.zip} />
				</div>
				<br />
				<h4>{this.state.data.name}'s Rating</h4>
				<Rating icon="star" defaultRating={4} maxRating={4} />
			</div>
		);
	}
}

export default Userdetails;
