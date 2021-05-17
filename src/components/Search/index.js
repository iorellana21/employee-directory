import React from 'react';

function search(props) {
	let styles = {
		form: {
			maxWidth: "400px",
			margin: "10px auto"
		}
	}
	return (
		<form id="searchForm" style={styles.form}>
			<div className="input-group mb-3">
				<input type="text" className="form-control" placeholder="Employee Name" onChange={props.handleInputChange} />
				<div className="input-group-append">
					<button className="btn btn-dark" type="submit" style={styles.button} onClick={props.handleSubmit}>Search</button>
				</div>
			</div>
		</form>
	)
}

export default search;