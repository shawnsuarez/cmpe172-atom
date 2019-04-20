import React from 'react';
import Popup from './Popup';

class EmployeeEditButton extends React.Component {
  constructor(){
    super();
    this.state = {
      showEditModal: false,
    }
    this.openEditModal = this.openEditModal.bind(this);
    this.closeEditModal = this.closeEditModal.bind(this);
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

  render(){
    var editForm = (
      <form>
          <div className="form-group" style={{margin:"1em 0"}}>
            First name:
            <input type="text" name="first_name" placeholder={this.props.emp.first_name} className="form-control" style={{margin: "0 0"}}/>
          </div>

          <div className="form-group" style={{margin:"1em 0"}}>
            Last name:
            <input type="text" name="last_name" placeholder={this.props.emp.last_name} className="form-control" style={{margin: "0 0"}}/>
          </div>

          <div className="form-group" style={{margin:"1em 0"}}>
            Email:
            <input type="text" name="email" placeholder={this.props.emp.email} className="form-control" style={{margin: "0 0"}}/>
          </div>

          <div className="form-group" style={{margin:"1em 0"}}>
            Hire Date:
            <input type="text" name="hire_date" placeholder={this.props.emp.hire_date} className="form-control" style={{margin: "0 0"}}/>
          </div>

          <div className="form-group" style={{margin:"1em 0"}}>
            Salary:
            <input type="text" name="salary" placeholder={this.props.emp.salary} className="form-control" style={{margin: "0 0"}}/>
          </div>

          <div className="form-group" style={{margin:"1em 0"}}>
            From:
            <input type="text" name="from_date" placeholder={this.props.emp.from_date} className="form-control" style={{margin: "0 0"}}/>
          </div>

          <div className="form-group" style={{margin:"1em 0"}}>
            To:
            <input type="text" name="to_date" placeholder={this.props.emp.to_date} className="form-control" style={{margin: "0 0"}}/>
          </div>

          <button className="btn btn-success" style={{bottom:"0", right:"0", position:"absolute", margin:"1em"}}>Submit</button>
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
