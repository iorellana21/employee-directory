import React, { Component } from 'react';
import API from './utils/Api';
import Header from './components/Header';
import Search from './components/Search';
import Table from './components/Table';
import Filters from './components/Filters';

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

	handleSubmit = (event) => {
		event.preventDefault();
		// let names = this.state.searchedName.split(' ');
		let search = this.state.searchedName.toLowerCase();
		this.setState({
			employees: this.state.employees.filter(employee => employee.name.first.toLowerCase().includes(search) ||
				employee.name.last.toLowerCase().includes(search))
		})
		console.log(search);
		// this.setState({
		// 	employees: this.state.employees.filter(employee => employee.name.first === names[0] ||
		// 		employee.name.last === names[1])
		// })
	}

	handleInputChange = event => {
		let name = (event.target.value);
		this.setState({ searchedName: name });

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
				<Search handleSubmit={this.handleSubmit}
					handleInputChange={this.handleInputChange} />
				<Filters handleSort={this.handleSort} />
				<Table data={this.state.employees} />
			</>
		)
	}

}

export default App;