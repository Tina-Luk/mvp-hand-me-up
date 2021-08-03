import React from 'react';
import API_KEY from '../../api.js';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends React.Component {
	constructor(props) {
		super(props);
		this.calcLatLng = this.calcLatLng.bind(this);
	}

	calcLatLng(zip) {
		var lat = '';
		var lng = '';
		var address = zip;
		var geocoder = new google.maps.Geocoder();
		geocoder.geocode({ address: address }, function (results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				lat = results[0].geometry.location.lat();
				lng = results[0].geometry.location.lng();
			} else {
				console.log('Geocode was not successful for the following reason: ' + status);
			}
		});
		return [lat, lng];
	}

	render() {
		let zip = this.props.zip + '';
		const mapStyles = {
			width: '25%',
			height: '25%',
		};
		return <Map google={this.props.google} zoom={8} style={mapStyles} initialCenter={{ lat: 47.44, lng: -122.176 }} />;
	}
}

export default GoogleApiWrapper({
	apiKey: API_KEY,
})(MapContainer);
