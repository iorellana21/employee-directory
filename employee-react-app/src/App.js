import React, { Component } from 'react';
import Header from './components/Header';
// import Search from './components/Search';
import Table from './components/Table';
// import Filters from './components/Filters';
import API from './utils/Api';

class App extends React.Component {
	state = {
		employees: [],
		searchedName: ""
	}

	componentDidMount() {
		this.getRandomEmployees();
	}

	getRandomEmployees = () => {
		API.getEmployees().then(data => {
			let employeeData = [...data.data.results]
			this.setState({ employees: employeeData })
			console.log(employeeData)

		})
	}

	render() {
		return (
			<>
				<Header />
				<Table data={this.state.employees} />
			</>
		)
	}

}

export default App;