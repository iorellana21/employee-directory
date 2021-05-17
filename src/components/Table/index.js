import React from 'react';
import Row from '../Rows'

function Table(props) {
	return (
		<table className="table">
			<thead>
				<tr>
					<th scope='col' />
					<th scope='col'>First name</th>
					<th scope='col'>Last Name</th>
					<th scope='col'>City</th>
					<th scope='col'>State</th>
				</tr>
			</thead>
			<tbody>
				{props.data.map(data => (
					<Row
						key={data.login.uuid}
						{...data} />
				))}
			</tbody>
		</table>
	)
}

export default Table;