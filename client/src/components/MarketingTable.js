import React from 'react';

import {AuthConsumer} from '../authContext';
import Can from './Can';
import Popup from './Popup';
import EmployeeEditButton from './EmployeeEditButton';
import EmployeeDeleteButton from './EmployeeDeleteButton';
import { Pagination } from 'semantic-ui-react';
import Employees from '../employees'
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
      employees: Employees,

      sortedByID: false,
      sortedByName: false,
      sortedByTitle: false,
      sortedByHireDate: false,
      sortedBySalary: false,
      sortedByFrom: false,
      sortedByTo: false,

      sortedByIDReversed: false,
      sortedByNameReversed: false,
      sortedByTitleReversed: false,
      sortedByHireDateReversed: false,
      sortedBySalaryReversed: false,
      sortedByFromReversed: false,
      sortedByToReversed: false,
    }
    this.openAddEmployeeModal = this.openAddEmployeeModal.bind(this);
    this.closeAddEmployeeModal = this.closeAddEmployeeModal.bind(this);
    this.sortByID = this.sortByID.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.compareByName = this.compareByName.bind(this);
    this.sortByTitle = this.sortByTitle.bind(this);
    this.sortByHireDate = this.sortByHireDate.bind(this);
    this.sortBySalary = this.sortBySalary.bind(this);
    this.sortByFrom = this.sortByFrom.bind(this);
    this.sortByTo = this.sortByTo.bind(this);
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

  // ---------- Sort By ID -----------
  compareByID(a, b){
    if(a.emp_no > b.emp_no){
      return 1
    }
    if(a.emp_no < b.emp_no){
      return -1
    }
    return 0
  }

  sortByID(){
    if(!this.state.sortedByID){
      this.setState({
        employees: this.state.employees.sort(this.compareByID),
        sortedByID: true,
        sortedByName: false,
        sortedByTitle: false,
        sortedByHireDate: false,
        sortedBySalary: false,
        sortedByFrom: false,
        sortedByTo: false,

        sortedByIDReversed: false,
        sortedByNameReversed: false,
        sortedByTitleReversed: false,
        sortedByHireDateReversed: false,
        sortedBySalaryReversed: false,
        sortedByFromReversed: false,
        sortedByToReversed: false,

      });
    }
    else{
      this.setState({
        employees: this.state.employees.reverse(),
        sortedByIDReversed: true,
        sortedByNameReversed: false,
        sortedByTitleReversed: false,
        sortedByHireDateReversed: false,
        sortedBySalaryReversed: false,
        sortedByFromReversed: false,
        sortedByToReversed: false,

        sortedByID: false,
        sortedByName: false,
        sortedByTitle: false,
        sortedByHireDate: false,
        sortedBySalary: false,
        sortedByFrom: false,
        sortedByTo: false,
      })
    }
  }


  // ---------- Sort By Name -----------
  compareByName(a, b){
    if(a.first_name > b.first_name){
      return 1
    }
    if(a.first_name < b.first_name){
      return -1
    }
    return 0
  }

  sortByName(){
    if(!this.state.sortedByName){
      this.setState({
        employees: this.state.employees.sort(this.compareByName),
        sortedByID: false,
        sortedByName: true,
        sortedByTitle: false,
        sortedByHireDate: false,
        sortedBySalary: false,
        sortedByFrom: false,
        sortedByTo: false,

        sortedByIDReversed: false,
        sortedByNameReversed: false,
        sortedByTitleReversed: false,
        sortedByHireDateReversed: false,
        sortedBySalaryReversed: false,
        sortedByFromReversed: false,
        sortedByToReversed: false,
      });
    }
    else{
      this.setState({
        employees: this.state.employees.reverse(),
        sortedByIDReversed: false,
        sortedByNameReversed: true,
        sortedByTitleReversed: false,
        sortedByHireDateReversed: false,
        sortedBySalaryReversed: false,
        sortedByFromReversed: false,
        sortedByToReversed: false,

        sortedByID: false,
        sortedByName: false,
        sortedByTitle: false,
        sortedByHireDate: false,
        sortedBySalary: false,
        sortedByFrom: false,
        sortedByTo: false,
      })
    }
  }

  // ---------- Sort By Title -----------
  compareByTitle(a, b){
    if(a.title > b.title){
      return 1
    }
    if(a.title < b.title){
      return -1
    }
    return 0
  }

  sortByTitle(){
    if(!this.state.sortedByTitle){
      this.setState({
        employees: this.state.employees.sort(this.compareByTitle),
        sortedByID: false,
        sortedByName: false,
        sortedByTitle: true,
        sortedByHireDate: false,
        sortedBySalary: false,
        sortedByFrom: false,
        sortedByTo: false,

        sortedByIDReversed: false,
        sortedByNameReversed: false,
        sortedByTitleReversed: false,
        sortedByHireDateReversed: false,
        sortedBySalaryReversed: false,
        sortedByFromReversed: false,
        sortedByToReversed: false,
      });
    }
    else{
      this.setState({
        employees: this.state.employees.reverse(),
        sortedByIDReversed: false,
        sortedByNameReversed: false,
        sortedByTitleReversed: true,
        sortedByHireDateReversed: false,
        sortedBySalaryReversed: false,
        sortedByFromReversed: false,
        sortedByToReversed: false,

        sortedByID: false,
        sortedByName: false,
        sortedByTitle: false,
        sortedByHireDate: false,
        sortedBySalary: false,
        sortedByFrom: false,
        sortedByTo: false,
      })
    }
  }

  // ---------- Sort By Hire Date -----------
  compareByHireDate(a, b){
    if(a.hire_date > b.hire_date){
      return 1
    }
    if(a.hire_date < b.hire_date){
      return -1
    }
    return 0
  }

  sortByHireDate(){
    if(!this.state.sortedByHireDate){
      this.setState({
        employees: this.state.employees.sort(this.compareByHireDate),
        sortedByID: false,
        sortedByName: false,
        sortedByTitle: false,
        sortedByHireDate: true,
        sortedBySalary: false,
        sortedByFrom: false,
        sortedByTo: false,

        sortedByIDReversed: false,
        sortedByNameReversed: false,
        sortedByTitleReversed: false,
        sortedByHireDateReversed: false,
        sortedBySalaryReversed: false,
        sortedByFromReversed: false,
        sortedByToReversed: false,
      });
    }
    else{
      this.setState({
        employees: this.state.employees.reverse(),
        sortedByIDReversed: false,
        sortedByNameReversed: false,
        sortedByTitleReversed: false,
        sortedByHireDateReversed: true,
        sortedBySalaryReversed: false,
        sortedByFromReversed: false,
        sortedByToReversed: false,

        sortedByID: false,
        sortedByName: false,
        sortedByTitle: false,
        sortedByHireDate: false,
        sortedBySalary: false,
        sortedByFrom: false,
        sortedByTo: false,
      })
    }
  }

  // ---------- Sort By Salary -----------
  compareBySalary(a, b){
    if(a.salary > b.salary){
      return 1
    }
    if(a.salary < b.salary){
      return -1
    }
    return 0
  }

  sortBySalary(){
    if(!this.state.sortedBySalary){
      this.setState({
        employees: this.state.employees.sort(this.compareBySalary),
        sortedByID: false,
        sortedByName: false,
        sortedByTitle: false,
        sortedByHireDate: false,
        sortedBySalary: true,
        sortedByFrom: false,
        sortedByTo: false,

        sortedByIDReversed: false,
        sortedByNameReversed: false,
        sortedByTitleReversed: false,
        sortedByHireDateReversed: false,
        sortedBySalaryReversed: false,
        sortedByFromReversed: false,
        sortedByToReversed: false,
      });
    }
    else{
      this.setState({
        employees: this.state.employees.reverse(),
        sortedByIDReversed: false,
        sortedByNameReversed: false,
        sortedByTitleReversed: false,
        sortedByHireDateReversed: false,
        sortedBySalaryReversed: true,
        sortedByFromReversed: false,
        sortedByToReversed: false,

        sortedByID: false,
        sortedByName: false,
        sortedByTitle: false,
        sortedByHireDate: false,
        sortedBySalary: false,
        sortedByFrom: false,
        sortedByTo: false,
      })
    }
  }

  // ---------- Sort By From Date -----------
  compareByFrom(a, b){
    if(a.from_date > b.from_date){
      return 1
    }
    if(a.from_date < b.from_date){
      return -1
    }
    return 0
  }

  sortByFrom(){
    if(!this.state.sortedByFrom){
      this.setState({
        employees: this.state.employees.sort(this.compareByFrom),
        sortedByID: false,
        sortedByName: false,
        sortedByTitle: false,
        sortedByHireDate: false,
        sortedBySalary: false,
        sortedByFrom: true,
        sortedByTo: false,

        sortedByIDReversed: false,
        sortedByNameReversed: false,
        sortedByTitleReversed: false,
        sortedByHireDateReversed: false,
        sortedBySalaryReversed: false,
        sortedByFromReversed: false,
        sortedByToReversed: false,
      });
    }
    else{
      this.setState({
        employees: this.state.employees.reverse(),
        sortedByIDReversed: false,
        sortedByNameReversed: false,
        sortedByTitleReversed: false,
        sortedByHireDateReversed: false,
        sortedBySalaryReversed: false,
        sortedByFromReversed: true,
        sortedByToReversed: false,

        sortedByID: false,
        sortedByName: false,
        sortedByTitle: false,
        sortedByHireDate: false,
        sortedBySalary: false,
        sortedByFrom: false,
        sortedByTo: false,
      })
    }
  }

  // ---------- Sort By To Date -----------
  compareByTo(a, b){
    if(a.to_date > b.to_date){
      return 1
    }
    if(a.to_date < b.to_date){
      return -1
    }
    return 0
  }

  sortByTo(){
    if(!this.state.sortedByTo){
      this.setState({
        employees: this.state.employees.sort(this.compareByTo),
        sortedByID: false,
        sortedByName: false,
        sortedByTitle: false,
        sortedByHireDate: false,
        sortedBySalary: false,
        sortedByFrom: false,
        sortedByTo: true,

        sortedByIDReversed: false,
        sortedByNameReversed: false,
        sortedByTitleReversed: false,
        sortedByHireDateReversed: false,
        sortedBySalaryReversed: false,
        sortedByFromReversed: false,
        sortedByToReversed: false,
      });
    }
    else{
      this.setState({
        employees: this.state.employees.reverse(),
        sortedByIDReversed: false,
        sortedByNameReversed: false,
        sortedByTitleReversed: false,
        sortedByHireDateReversed: false,
        sortedBySalaryReversed: false,
        sortedByFromReversed: false,
        sortedByToReversed: true,

        sortedByID: false,
        sortedByName: false,
        sortedByTitle: false,
        sortedByHireDate: false,
        sortedBySalary: false,
        sortedByFrom: false,
        sortedByTo: false,
      })
    }
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
        <div className="form-row">
          <div className="col">
            <input type="text" className="form-control" placeholder="First name" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Last name" />
          </div>
        </div>
        <div className="form-group" style={{margin:"-14px 0 0 0"}}>
          <input type="email" className="form-control" id="email" placeholder="email"/>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label style={{margin:"0 0 0 18px"}}>Hire Date:</label>
            <input type="date" className="form-control" name="hire_date" />
          </div>
        </div>
        <div className="input-group mb-3" style={{margin:"0 0 0 14px"}}>
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
          <input type="number" className="form-control" min="1" step="100" style={{margin:"0 0 0 0"}} placeholder="Salary"/>
        </div>
        <div className="form-row" >
          <div className="form-group col-md-4">
            <label style={{margin:"0 0 0 18px"}}>From:</label>
            <input type="date" className="form-control" name="from_date"/>
          </div>
          <div className="form-group col-md-4">
            <label style={{margin:"0 0 0 16px"}}>To:</label>
            <input type="date" className="form-control" name="to_date"/>
          </div>
        </div>
        <div className="form-row" >
          <div className="form-group col-md-5">
            <label style={{margin:"0 0 0 18px"}}>Employee Title:</label>
            <input type="text" className="form-control" name="empTitle"/>
          </div>
          <div className="form-group col-md-4">
            <label style={{margin:"0 0 0 16px"}}>Employee ID:</label>
            <input type="number" className="form-control" name="emp_no"/>
          </div>
          <div className="form-group col-md-3">
            <label style={{margin:"0 0 0 16px"}}>Dept #:</label>
            <select className="form-control" style={{margin:"1em 0 0 1em"}}>
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
                  <th scope="col">
                    <button className="btn btn-light" onClick={this.sortByID}>
                      {
                        this.state.sortedByID ?
                        "ID ↓"
                        :
                        this.state.sortedByIDReversed ?
                        "ID ↑"
                        :
                        "ID"
                      }
                    </button>
                  </th>
                  <th scope="col">
                    <button className="btn btn-light" onClick={this.sortByName}>
                    {
                      this.state.sortedByName ?
                      "Name ↓"
                      :
                      this.state.sortedByNameReversed ?
                      "Name ↑"
                      :
                      "Name"
                    }
                    </button>
                  </th>
                  <Can
                    role={user.role}
                    perform="employee:edit"
                    yes={() => (
                      <th scope="col">
                        <button className="btn btn-light" onClick={this.sortByHireDate}>
                        {
                          this.state.sortedByHireDate ?
                          "Hire Date ↓"
                          :
                          this.state.sortedByHireDateReversed ?
                          "Hire Date ↑"
                          :
                          "Hire Date"
                        }
                        </button>
                      </th>
                    )}
                  />
                  <Can
                    role={user.role}
                    perform="employee:edit"
                    yes={() => (
                      <th scope="col">
                        <button className="btn btn-light" onClick={this.sortBySalary}>
                        {
                          this.state.sortedBySalary ?
                          "Salary ↓"
                          :
                          this.state.sortedBySalaryReversed ?
                          "Salary ↑"
                          :
                          "Salary"
                        }
                        </button>
                      </th>
                    )}
                  />
                  <Can
                    role={user.role}
                    perform="employee:edit"
                    yes={() => (
                      <th scope="col">
                        <button className="btn btn-light" onClick={this.sortByFrom}>
                        {
                          this.state.sortedByFrom ?
                          "From ↓"
                          :
                          this.state.sortedByFromReversed ?
                          "From ↑"
                          :
                          "From"
                        }
                        </button>
                      </th>
                    )}
                  />
                  <Can
                    role={user.role}
                    perform="employee:edit"
                    yes={() => (
                      <th scope="col">
                        <button className="btn btn-light" onClick={this.sortByTo}>
                        {
                          this.state.sortedByTo ?
                          "To ↓"
                          :
                          this.state.sortedByToReversed ?
                          "To ↑"
                          :
                          "To"
                        }
                        </button>
                      </th>
                    )}
                  />

                  <Can
                    role={user.role}
                    perform="employee:edit"
                    yes={() => (
                      <th scope="col">
                        <button className="btn btn-light">
                          Edit
                        </button>
                      </th>
                    )}
                  />
                  <Can
                    role={user.role}
                    perform="employee:delete"
                    yes={() => (
                      <th scope="col">
                        <button className="btn btn-light">
                          Delete
                        </button>
                      </th>
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
                              "$"+employee.salary
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
          </div>
        )}
      </AuthConsumer>
    );
  }

}
