import React from 'react';

function Row(props) {
	return (
		<tr>
			<td><img src={props.picture.thumbnail} /></td>
			<td>{props.name.first}</td>
			<td>{props.name.last}</td>
			<td>{props.location.city}</td>
			<td>{props.location.state}</td>

		</tr>
	)
}

export default Row;