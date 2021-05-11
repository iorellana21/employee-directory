import React from 'react';

const styles = {
	nav: {
		background: "black",
	},
	a:{
		color:"orange",
		padding: "10px 20px"
	}
}

function Header(props) {

	return (
		<nav className="navbar navbar-expand-lar" style={styles.nav}>
			<a className="navbar-brand" href="/" style={styles.a}>Employee Directory</a>
		</nav>
	)
}

export default Header;