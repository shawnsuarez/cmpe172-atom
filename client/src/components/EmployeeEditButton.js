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

  handleEdit() {
  	
  }

  render(){
    var editForm = (
      {/*
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
      */},
      <form style={{fontSize: '16px', fontWeight: '400', padding:"1em", margin:"0 0 0 -1.5em"}}>
        <div className="form-row">
          <div className="col">
            <input type="text" className="form-control" placeholder={this.props.emp.first_name} />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder={this.props.emp.last_name}/>
          </div>
        </div>
        <div className="form-group" style={{margin:"-14px 0 0 0"}}>
          <input type="email" className="form-control" id="email" placeholder={this.props.emp.first_name.toLowerCase() + this.props.emp.last_name.toLowerCase() + "@atompayroll.com"}/>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label style={{margin:"0 0 0 18px"}}>Hire Date:</label>
            <input type="date" className="form-control" name="hire_date" placeholder={this.props.emp.hire_date}/>
          </div>
        </div>
        <div className="input-group mb-3" style={{margin:"0 0 0 14px"}}>
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
          <input type="number" className="form-control" min="1" step="100" style={{margin:"0 0 0 0"}} placeholder={this.props.emp.salary}/>
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
            <input type="text" className="form-control" name="empTitle" placeholder={this.props.emp.title}/>
          </div>
          <div className="form-group col-md-4">
            <label style={{margin:"0 0 0 16px"}}>Employee ID:</label>
            <input type="number" className="form-control" name="empID" placeholder={this.props.emp.emp_no}/>
          </div>
          <div className="form-group col-md-3">
            <label style={{margin:"0 0 0 16px"}}>Dept #:</label>
            <select className="form-control" style={{margin:"1em 0 0 1em"}} placeholder={this.props.emp.dept_no}>
              <option>d001 Marketing</option>
              <option>d002 Finance</option>
              <option>d003 Human Resources</option>
              <option>d004 Production</option>
              <option>d005 Development</option>
              <option>d006 Quality Management</option>
              <option>d007 Sales</option>
              <option>d008 Research</option>
              <option>d009 Sales</option>
            </select>
          </div>
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
