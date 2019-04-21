import React from 'react';

import {AuthConsumer} from '../authContext';
import Can from './Can';
import Popup from './Popup';
import EmployeeEditButton from './EmployeeEditButton';
import EmployeeDeleteButton from './EmployeeDeleteButton';
import { Pagination } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default class EmployeeTable extends React.Component {
  constructor(){
    super();
    this.state = {
      showAddModal: false,
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
    this.openAddEmployeeModal = this.openAddEmployeeModal.bind(this);
    this.closeAddEmployeeModal = this.closeAddEmployeeModal.bind(this);
  }

  componentDidMount(){
	 this.getResults(this.state.activePage);
  }

  handlePaginationChange = (e, { activePage }) => {
      this.setState({ activePage })
      this.getResults(activePage);
    }

  openAddEmployeeModal(){
    this.setState({
      showAddModal: true,
    });
  }

  closeAddEmployeeModal(){
    this.setState({
      showAddModal: false,
    })
  }

	getResults = (page) => {
		let url = "./dashboard/" + page;
		fetch(url, { method: "GET" })
			.then(response => response.json())
			//.then(response => response.text())
			//.then(text => console.log(text))
			.then(employees => {
        this.setState({showAddModal: false,employees})
        console.log(employees[0])
      })
			.catch(error => console.log(error));
	}

  render(){
    const {
        activePage,
        boundaryRange,
        siblingRange,
        showEllipsis,
        showFirstAndLastNav,
        showPreviousAndNextNav,
        totalPages,
      } = this.state

    var addEmployeeForm = (
      <form style={{fontSize: '16px', fontWeight: '400', padding:"1em", margin:"0 0 0 -1.5em"}}>
        <div class="form-row">
          <div class="col">
            <input type="text" class="form-control" placeholder="First name" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Last name" />
          </div>
        </div>
        <div class="form-group" style={{margin:"-14px 0 0 0"}}>
          <input type="email" class="form-control" id="email" placeholder="email"/>
        </div>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label style={{margin:"0 0 0 18px"}}>Hire Date:</label>
            <input type="date" class="form-control" name="hire_date" />
          </div>
        </div>
        <div class="input-group mb-3" style={{margin:"0 0 0 14px"}}>
          <div class="input-group-prepend">
            <span class="input-group-text">$</span>
          </div>
          <input type="number" class="form-control" min="1" step="100" style={{margin:"0 0 0 0"}} placeholder="Salary"/>
        </div>
        <div class="form-row" >
          <div class="form-group col-md-4">
            <label style={{margin:"0 0 0 18px"}}>From:</label>
            <input type="date" class="form-control" name="from_date"/>
          </div>
          <div class="form-group col-md-4">
            <label style={{margin:"0 0 0 16px"}}>To:</label>
            <input type="date" class="form-control" name="to_date"/>
          </div>
        </div>
        <div class="form-row" >
          <div class="form-group col-md-5">
            <label style={{margin:"0 0 0 18px"}}>Employee Title:</label>
            <input type="text" class="form-control" name="empTitle"/>
          </div>
          <div class="form-group col-md-4">
            <label style={{margin:"0 0 0 16px"}}>Employee ID:</label>
            <input type="number" class="form-control" name="emp_no"/>
          </div>
          <div class="form-group col-md-3">
            <label style={{margin:"0 0 0 16px"}}>Dept #:</label>
            <select class="form-control" style={{margin:"1em 0 0 1em"}}>
              <option>d001</option>
              <option>d002</option>
              <option>d003</option>
              <option>d004</option>
              <option>d005</option>
              <option>d006</option>
              <option>d007</option>
              <option>d008</option>
              <option>d009</option>
            </select>
          </div>
        </div>
        <button className="btn btn-success" style={{bottom:"0", right:"0", position:"absolute", margin:"1em"}}>Create</button>
      </form>

     );

    return(
      <AuthConsumer>
        {({user}) => (
          <div>
            <div>
              <h2>
                Employees
                <Can
                  role={user.role}
                  perform="employee:delete"
                  yes={() => (
                    <button className="btn btn-light" style={{float:"right", border:"2px solid #333"}} onClick={this.openAddEmployeeModal}>
                      + Add Employee
                    </button>
                  )}
                />
                {
                  this.state.showAddModal ?
                  <Popup
                    title="Add New Employee"
                    text={addEmployeeForm}
                    close={this.closeAddEmployeeModal}
                  />
                  :
                  null
                }
              </h2>

            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Title</th>
                  <Can
                    role={user.role}
                    perform="employee:edit"
                    yes={() => (
                      <th scope="col">Hire Date</th>
                    )}
                  />
                  <Can
                    role={user.role}
                    perform="employee:edit"
                    yes={() => (
                      <th scope="col">Salary</th>
                    )}
                  />
                  <Can
                    role={user.role}
                    perform="employee:edit"
                    yes={() => (
                      <th scope="col">From</th>
                    )}
                  />
                  <Can
                    role={user.role}
                    perform="employee:edit"
                    yes={() => (
                      <th scope="col">To</th>
                    )}
                  />

                  <Can
                    role={user.role}
                    perform="employee:edit"
                    yes={() => (
                      <th scope="col">Edit</th>
                    )}
                  />
                  <Can
                    role={user.role}
                    perform="employee:delete"
                    yes={() => (
                      <th scope="col">Delete</th>
                    )}
                  />
                </tr>
              </thead>
                <tbody>
                  {
                    this.state.employees.map((employee, index) => (
                      <tr key={employee.emp_no}>
                        <td>{employee.emp_no}</td>
                        <td>{employee.first_name +" "+ employee.last_name}</td>
                        <td>
                        	{employee.email == null ? employee.first_name.toLowerCase() 
                        	+ employee.last_name.toLowerCase() + "@atompayroll.com" : null}
                        </td>
                        <td>{employee.title}</td>
                        <td>
                          <Can
                            role={user.role}
                            perform="employee:edit"
                            yes={() => (
                              employee.hire_date.substring(0,10)
                            )}
                          />
                        </td>
                        <td>
                          <Can
                            role={user.role}
                            perform="employee:edit"
                            yes={() => (
                              employee.salary
                            )}
                          />
                        </td>
                        <td>
                          <Can
                            role={user.role}
                            perform="employee:edit"
                            yes={() => (
                              employee.from_date.substring(0,10)
                            )}
                          />
                        </td>
                        <td>
                          <Can
                            role={user.role}
                            perform="employee:edit"
                            yes={() => (
                              employee.to_date.substring(0,10)
                            )}
                          />
                        </td>
                        <td>
                          <Can
                            role={user.role}
                            perform="employee:edit"
                            yes={() => (
                              <EmployeeEditButton emp={employee}/>
                            )}
                          />
                        </td>
                        <td>
                          <Can
                            role={user.role}
                            perform="employee:delete"
                            yes={() => (
                              <EmployeeDeleteButton emp={employee}/>
                            )}
                          />
                        </td>
                      </tr>
                    ))
                  }
              </tbody>

            </table>
            <div className="container" style={{ padding: "0px 15%"}}>
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
          </div>
        )}
      </AuthConsumer>
    );
  }

}
