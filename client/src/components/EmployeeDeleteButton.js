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

  render(){
    var empInfo = (
      <div>
        <ul class="list-group" style={{margin:"1em 0"}}>
          <li class="list-group-item"> <b>Name:</b> {this.props.emp.firstName + " " + this.props.emp.lastName}</li>
          <li class="list-group-item"> <b>email:</b> {this.props.emp.email}</li>
          <li class="list-group-item"> <b>Hire Date:</b> {this.props.emp.hireDate}</li>
          <li class="list-group-item"> <b>Salary::</b> {this.props.emp.salary}</li>
          <li class="list-group-item"> <b>From - To:</b> {this.props.emp.from + " " + this.props.emp.to}</li>
        </ul>
        <button className="btn btn-danger" style={{bottom:"0", right:"0", position:"absolute", margin:"1em"}}>Delete</button>
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
            title = {"Delete "+String(this.props.emp.firstName + " " + this.props.emp.lastName)+"?"}
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
