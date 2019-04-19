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
		let url = window.location.href;
		fetch(url, { method: "GET" })
			.then(response => response.json())
			//.then(response => response.text())
			//.then(text => console.log(text))
			.then(employees => this.setState({employees}))
			.catch(error => console.log(error));
		/*fetch(url)
			.then(response => {
				const contentType = response.headers.get("content-type");
				if (contentType && contentType.indexOf("application/json") !== -1) {
					return response.json().then(employees => {
					// process your JSON data further
						this.setState({employees});
					});
				} else {
					return response.text().then(text => {
					// this is text, do something with it
						console.log(text);
					});
				}
			});*/
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
		              		<th scope="col">Title</th>
		              		<th scope="col">Email</th>
	              		</tr>
					</thead>
					<tbody>
						{this.state.employees.map(employee =>
							<tr key={employee.emp_no}>
								<td>{employee.emp_no}</td>
								<td>{employee.first_name} {employee.last_name}</td>
								<td>{employee.title}</td>
								<td>{employee.first_name.toLowerCase() + employee.last_name.toLowerCase()}@atompayroll.com</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		);
	}
}

export default TestEmployeePage;
