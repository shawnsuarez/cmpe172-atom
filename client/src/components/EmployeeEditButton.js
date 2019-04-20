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
      {/*
      <form>
          <div className="form-group" style={{margin:"1em 0"}}>
            First name:
            <input type="text" name="firstName" placeholder={this.props.emp.firstName} className="form-control" style={{margin: "0 0"}}/>
          </div>

          <div className="form-group" style={{margin:"1em 0"}}>
            Last name:
            <input type="text" name="lastName" placeholder={this.props.emp.lastName} className="form-control" style={{margin: "0 0"}}/>
          </div>

          <div className="form-group" style={{margin:"1em 0"}}>
            Email:
            <input type="text" name="email" placeholder={this.props.emp.email} className="form-control" style={{margin: "0 0"}}/>
          </div>

          <div className="form-group" style={{margin:"1em 0"}}>
            Hire Date:
            <input type="text" name="hireDate" placeholder={this.props.emp.hireDate} className="form-control" style={{margin: "0 0"}}/>
          </div>

          <div className="form-group" style={{margin:"1em 0"}}>
            Salary:
            <input type="text" name="salary" placeholder={this.props.emp.salary} className="form-control" style={{margin: "0 0"}}/>
          </div>

          <div className="form-group" style={{margin:"1em 0"}}>
            To:
            <input type="text" name="to" placeholder={this.props.emp.to} className="form-control" style={{margin: "0 0"}}/>
          </div>

          <div className="form-group" style={{margin:"1em 0"}}>
            From:
            <input type="text" name="from" placeholder={this.props.emp.from} className="form-control" style={{margin: "0 0"}}/>
          </div>

          <button className="btn btn-success" style={{bottom:"0", right:"0", position:"absolute", margin:"1em"}}>Submit</button>
       </form>
      */},
      <form style={{fontSize: '16px', fontWeight: '400', padding:"1em", margin:"0 0 0 -1.5em"}}>
        <div class="form-row">
          <div class="col">
            <input type="text" class="form-control" placeholder={this.props.emp.firstName} />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder={this.props.emp.lastName}/>
          </div>
        </div>
        <div class="form-group" style={{margin:"-14px 0 0 0"}}>
          <input type="email" class="form-control" id="email" placeholder={this.props.emp.email}/>
        </div>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label style={{margin:"0 0 0 18px"}}>Hire Date:</label>
            <input type="date" class="form-control" name="hireDare" />
          </div>
        </div>
        <div class="input-group mb-3" style={{margin:"0 0 0 14px"}}>
          <div class="input-group-prepend">
            <span class="input-group-text">$</span>
          </div>
          <input type="number" class="form-control" min="1" step="100" style={{margin:"0 0 0 0"}} placeholder={this.props.emp.salary}/>
        </div>
        <div class="form-row" >
          <div class="form-group col-md-4">
            <label style={{margin:"0 0 0 18px"}}>From:</label>
            <input type="date" class="form-control" name="from"/>
          </div>
          <div class="form-group col-md-4">
            <label style={{margin:"0 0 0 16px"}}>To:</label>
            <input type="date" class="form-control" name="to"/>
          </div>
        </div>
        <div class="form-row" >
          <div class="form-group col-md-5">
            <label style={{margin:"0 0 0 18px"}}>Employee Title:</label>
            <input type="text" class="form-control" name="empTitle" placeholder={this.props.emp.empTitle}/>
          </div>
          <div class="form-group col-md-4">
            <label style={{margin:"0 0 0 16px"}}>Employee ID:</label>
            <input type="number" class="form-control" name="empID" placeholder={this.props.emp.empID}/>
          </div>
          <div class="form-group col-md-3">
            <label style={{margin:"0 0 0 16px"}}>Dept #:</label>
            <select class="form-control" style={{margin:"1em 0 0 1em"}} placeholder={this.props.emp.deptNum}>
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
                title = {"Edit: "+String(this.props.emp.firstName + " " + this.props.emp.lastName)}
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
