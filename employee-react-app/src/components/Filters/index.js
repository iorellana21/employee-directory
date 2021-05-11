import React from 'react'

function filters(props){
	return (
		<div className="btn-group" role="group">
  			<button type="button" className="btn btn-dark" onClick={() => props.handleSort("first", 1)}>First Name</button>
  			<button type="button" className="btn btn-dark" onClick={() => props.handleSort("last", 1)}>Last Name</button>
		</div>
	)
}

export default filters;