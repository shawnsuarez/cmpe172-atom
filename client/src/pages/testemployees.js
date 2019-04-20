import React, { Component } from "react";

class TestEmployeePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			page: parseInt(this.props.match.params.page),
			maxPage: 5,
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

	handleDelete(emp_no) {
		let data = { emp_no : emp_no }
		let url = "./delete";

		fetch(url, { 
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(data) })
		.then((response) => {
			if (response.status >= 400) {
				throw new Error("Bad response from server");
			} 
			return response.json()
		}).catch(function(err) {
			console.log(err)
		});
		window.location.reload();
	}

	render() {
		let prevPage = this.state.page > 1 ? this.state.page - 1 : 1;
    	let nextPage = this.state.page < this.state.maxPage ? this.state.page + 1 : this.state.maxPage;
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
								<td><button className="btn btn-danger" onClick={() => this.handleDelete(employee.emp_no)}>Delete</button></td>
							</tr>
						)}
					</tbody>
				</table>
				<nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item"><a className="page-link" href={"/employeestest/" + prevPage}>Previous</a></li>
                        <li className="page-item"><a className="page-link" href="/employeestest/1">1</a></li>
                        <li className="page-item"><a className="page-link" href="/employeestest/2">2</a></li>
                        <li className="page-item"><a className="page-link" href="/employeestest/3">3</a></li>
                        <li className="page-item"><a className="page-link" href={"/employeestest/" + nextPage}>Next</a></li>
                  </ul>
                </nav>
                <button className="btn btn-danger" onClick={() => this.handleDelete("10005")}>Delete</button>
			</div>
		);
	}
}

export default TestEmployeePage;
