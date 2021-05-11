import React from 'react'

const styles = {
	button: {
		margin: 5
	}
}

function filters(props) {
	return (
		<div className="btn-group" role="group">
			<button type="button" style={styles.button} onClick={() => props.handleSort("first", 1)}>Sort by First Name</button>
			<br />
			<button type="button" style={styles.button} onClick={() => props.handleSort("last", 1)}>Sort by Last Name</button>
		</div>
	)
}

export default filters;