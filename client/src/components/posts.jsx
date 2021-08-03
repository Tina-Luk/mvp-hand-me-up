import React from 'react';
import Itempost from './itempost.jsx';
import { Image, Item } from 'semantic-ui-react';

function Posts(props) {
	return (
		<Item.Group>
			{props.data.map((item) => (
				<Itempost item={item} onClick={props.onClick} />
			))}
		</Item.Group>
	);
}

export default Posts;
