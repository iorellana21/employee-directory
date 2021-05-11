import React from 'react';

function Header(props) {

	return (
		<nav className="navbar navbar-expand-lar navbar-dark bg-dark">
			<a className="navbar-brand" href="#">Employee Directory</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbar3">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Link</a>
					</li>
					<li className="nav-item">
						<a className="nav-link disabled" href="#">Disabled</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Header;