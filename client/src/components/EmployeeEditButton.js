import React from 'react';
import Popup from './Popup';

class EmployeeEditButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showEditModal: false,
      editEmpNo: this.props.emp.emp_no,
      editSalary: this.props.emp.salary,
      editFromDate: this.props.emp.from_date.substring(0,10),
      editToDate: this.props.emp.to_date.substring(0,10),
      editTitle: this.props.emp.title,
      editDeptNo: this.props.emp.dept_no,
      isDepartment: this.props.isDepartment,
      currentDept: this.props.currentDept
    }
    this.openEditModal = this.openEditModal.bind(this);
    this.closeEditModal = this.closeEditModal.bind(this);
    this.logChange = this.logChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  openEditModal(){
    this.setState({
      showEditModal: true,
    });
  }

  closeEditModal(){
    this.setState({
      showEditModal: false,
    })
  }

  handleEdit() {
  	let data = { 
  		emp_no: this.state.editEmpNo,
  		salary: parseInt(this.state.editSalary),
  		from_date: this.state.editFromDate,
  		to_date: this.state.editToDate,
  		title: this.state.editTitle,
  		dept_no: this.state.editDeptNo
  	}
  	let url;
    if (this.state.isDepartment)
      url = "/departments/" + this.state.currentDept + "/edit";
    else
      url = "/dashboard/edit";
  	console.log(url);
    fetch(url, { 
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
    .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        window.location.reload();
    }).catch((err) => {
        console.log(err)
    }); 
  }

  logChange(e) {
    let stateObj = { [e.target.name]: e.target.value }
    this.setState(stateObj);
  }

  render(){
    var editForm = (
      <form style={{fontSize: '16px', fontWeight: '400', padding:"1em", margin:"0 0 0 -1.5em"}}>
        <div className="input-group mb-3" style={{margin:"0 0 0 14px"}}>
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
          <input type="number" className="form-control" 
          	style={{margin:"0 0 0 0"}} 
          	name="editSalary" 
          	placeholder={this.state.editSalary}
            onChange={this.logChange}
          />
        </div>
        <div className="form-row" >
          <div className="form-group col-md-4">
            <label style={{margin:"0 0 0 18px"}}>From:</label>
            <input type="date" className="form-control" 
              name="editFromDate" 
              value={this.state.editFromDate}
              onChange={this.logChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label style={{margin:"0 0 0 16px"}}>To:</label>
            <input type="date" className="form-control" 
              name="editToDate" 
              value={this.state.editToDate}
              onChange={this.logChange}
            />
          </div>
        </div>
        <div className="form-row" >
          <div className="form-group col-md-5">
            <label style={{margin:"0 0 0 18px"}}>Employee Title:</label>
            <input type="text" className="form-control" 
              name="editTitle" 
              placeholder={this.state.editTitle}
              onChange={this.logChange}
            />
          </div>
          <div className="form-group col-md-3">
            <label style={{margin:"0 0 0 16px"}}>Dept #:</label>
            <select className="form-control" style={{margin:"1em 0 0 1em"}} 
              name="editDeptNo" 
              value={this.state.editDeptNo}
              onChange={this.logChange}
            >
              <option value="d001">Marketing</option>
              <option value="d002">Finance</option>
              <option value="d003">Human Resources</option>
              <option value="d004">Production</option>
              <option value="d005">Development</option>
              <option value="d006">Quality Management</option>
              <option value="d007">Sales</option>
              <option value="d008">Research</option>
              <option value="d009">Customer Service</option>
            </select>
          </div>
        </div>
        <button className="btn btn-success" type="button"
          style={{bottom:"0", right:"0", position:"absolute", margin:"1em"}}
          onClick={() => this.handleEdit()}
		>Submit</button>
      </form>

    )
    return(
      <div>
        <button className="btn btn-sm btn-outline-secondary" style={{margin:"0 1em 0 0"}} onClick={this.openEditModal}>
          Edit
        </button>
        {
          this.state.showEditModal ?
            (
              <Popup
                title = {"Edit: "+String(this.props.emp.first_name + " " + this.props.emp.last_name)}
                text = {editForm}
                close = {this.closeEditModal}
              />
            )
            :
            null
        }

      </div>
    );
  }
}

export default EmployeeEditButton;
