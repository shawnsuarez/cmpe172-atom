import React from 'react';
import Popup from './Popup';

class EmployeeDeleteButton extends React.Component{
  constructor(){
    super();
    this.state = {
      showDeleteModal: false,
    }
    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
  }

  openDeleteModal(){
    this.setState({
      showDeleteModal: true,
    });
  }

  closeDeleteModal(){
    this.setState({
      showDeleteModal: false,
    })
  }

  handleDelete(emp_no) {
    this.closeDeleteModal();
    let data = { emp_no : emp_no }
    let url = "./delete";
    fetch(url, { method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data) })
    .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        } return response.json()
    }).catch(function(err) {
        console.log(err)
    });
    window.location.reload();
  }

  render(){
    var empInfo = (
      <div>
        <ul className="list-group" style={{margin:"1em 0"}}>
          <li className="list-group-item"> <b>Name:</b> {this.props.emp.first_name + " " + this.props.emp.last_name}</li>
          <li className="list-group-item"> <b>email:</b> {this.props.emp.email}</li>
          <li className="list-group-item"> <b>Hire Date:</b> {this.props.emp.hire_date}</li>
          <li className="list-group-item"> <b>Salary:</b> {this.props.emp.salary}</li>
          <li className="list-group-item"> <b>From - To:</b> {this.props.emp.from_date.substring(0,10) + " " + this.props.emp.to_date.substring(0,10)}</li>
        </ul>
        <button className="btn btn-danger" onClick={() => this.handleDelete(this.props.emp.emp_no)} style={{bottom:"0", right:"0", position:"absolute", margin:"1em"}}>Delete</button>
      </div>
    );

    return(
      <div>
        <button className="btn btn-sm btn-danger" onClick={this.openDeleteModal}>
          Delete
        </button>
        {
          this.state.showDeleteModal ?
          <Popup
            title = {"Delete "+String(this.props.emp.first_name + " " + this.props.emp.last_name)+"?"}
            text = {empInfo}
            close = {this.closeDeleteModal}
          />
          :
          null
        }
      </div>
    );
  }
}

export default EmployeeDeleteButton;
