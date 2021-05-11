import React, { Component } from 'react';
import Header from './components/Header';
// import Search from './components/Search';
import Table from './components/Table';
import Filters from './components/Filters';
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

	handleSort = (key, asc) => {
		let sort = [...this.state.employees];

		sort.sort((a, b) => {
			return a["name"][key] > b["name"][key] ? asc * 1 : asc * -1;
		});

		this.setState({ employees: sort })
	}

	render() {
		return (
			<>
				<Header />
				<Filters handleSort={this.handleSort} />
				<Table data={this.state.employees} />
			</>
		)
	}

}

export default App;