import React, { Component } from "react";

class TestPayrollPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			page: this.props.match.params.page,
			employees: []
		}
	}

	componentDidMount(){
		this.getResults();
		/*let newState = Object.assign({}, this.state);
		newState.page = this.props.match.params.page;
		this.setState(newState);
		console.log(newState);*/
	}

	getResults = _ => {
		let url = window.location.href;
		fetch(url)
			.then(response => response.json())
			//.then(response => response.text())
			//.then(text => console.log(text))
			.then(employees => this.setState({employees}))
			.catch(error => console.log(error));
	}

	render() {
		return (
			<div>
				<h1>TestPayrollPage</h1>
				<table>
					<thead>
						<tr>
							<th scope="col">#</th>
		              		<th scope="col">Name</th>
		              		<th scope="col">Title</th>
		              		<th scope="col">Salary</th>
		              		<th scope="col">From</th>
		              		<th scope="col">To</th>
	              		</tr>
					</thead>
					<tbody>
						{this.state.employees.map(employee =>
							<tr key={employee.emp_no}>
								<td>{employee.emp_no}</td>
								<td>{employee.first_name} {employee.last_name}</td>
								<td>{employee.title}</td>
								<td>{employee.salary}</td>
								<td>{employee.from_date.substring(0, 10)}</td>
								<td>{employee.to_date.substring(0, 10)}</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		);
	}
}

export default TestPayrollPage;
