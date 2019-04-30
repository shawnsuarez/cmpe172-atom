import React, { Component } from "react";
import { Pagination } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class TestEmployeePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			maxPage: 5,
			activePage: 1,
		    boundaryRange: 1,
		    siblingRange: 1,
		    showEllipsis: true,
		    showFirstAndLastNav: true,
		    showPreviousAndNextNav: true,
		    totalPages: 50,
			employees: []
		}
	}

  	handlePaginationChange = (e, { activePage }) => {
  		this.setState({ activePage })
  		this.getResults(activePage);
  	}

	componentDidMount(){
		this.getResults(this.state.activePage);
		/*let newState = Object.assign({}, this.state);
		newState.page = this.props.match.params.page;
		this.setState(newState);
		console.log(newState);*/
	}

	getResults = (page) => {
		let url = "./employeestest/" + page;
		fetch(url, { method: "GET" })
		.then(response => response.json())
		//.then(response => response.text())
		//.then(text => console.log(text))
		.then(employees => {
			this.setState({employees})
		})
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

	checkEmps() {
		console.log(this.state.employees[0]);
		console.log(this.state);
	}

	handleDelete(emp_no) {
		let data = { emp_no : emp_no }
		let url = "/employeestest/delete";
		fetch(url, { 
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(data) })
		.then((response) => {
			console.log(response);
			if (response.status >= 400) {
				throw new Error("Bad response from server");
			} 
			return response.json()
		}).catch(function(err) {
			console.log(err)
		});
		//window.location.reload();
	}

	render() {
		const {
	      activePage,
	      boundaryRange,
	      siblingRange,
	      showEllipsis,
	      showFirstAndLastNav,
	      showPreviousAndNextNav,
	      totalPages,
	    } = this.state

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
                <button className="btn btn-danger" onClick={() => this.checkEmps()}>Check</button>
				
				<Pagination
					activePage={activePage}
					boundaryRange={boundaryRange}
					onPageChange={this.handlePaginationChange}
					siblingRange={siblingRange}
					totalPages={totalPages}
					
					firstItem={showFirstAndLastNav ? undefined : null}
					lastItem={showFirstAndLastNav ? undefined : null}
					prevItem={showPreviousAndNextNav ? undefined : null}
					nextItem={showPreviousAndNextNav ? undefined : null}
				/>
				
			</div>
		);
	}
}

export default TestEmployeePage;
