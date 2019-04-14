import React, { Component } from "react";

class TestEmployeePage extends Component {
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
		let url = `${this.state.page}`;
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
				<h1>TestEmployeePage</h1>
				<table>
					<thead>
						<tr>
							<th scope="col">#</th>
		              		<th scope="col">Name</th>
	              		</tr>
					</thead>
					<tbody>
						{this.state.employees.map(employee =>
							<tr key={employee.emp_no}>
								<td>{employee.emp_no}</td>
								<td>{employee.first_name} {employee.last_name}</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		);
	}
}

export default TestEmployeePage;
