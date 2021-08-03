import React from 'react';
import Itempost from './itempost.jsx';
import { Image, Item } from 'semantic-ui-react';

function YourPost(props) {
	let yourData = props.data.filter((item) => {
		return item.userId === props.userId;
	});
	return (
		<Item.Group>
			{yourData.map((item) => (
				<Itempost item={item} onClick={props.onClick} editOrDelete={true} />
			))}
		</Item.Group>
	);
}

export default YourPost;
