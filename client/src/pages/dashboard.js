import React from "react";
import { Redirect } from "react-router-dom";

import Navbar from '../components/Navbar';
import {AuthConsumer} from '../authContext';
import Can from '../components/Can';
import EmployeeTable from '../components/EmployeeTable';

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: parseInt(this.props.match.params.page),
      maxPage: 5
    }
  }

  render() {
    let prevPage = this.state.page > 1 ? this.state.page - 1 : 1;
    let nextPage = this.state.page < this.state.maxPage ? this.state.page + 1 : this.state.maxPage;
    return (
      <AuthConsumer>
        {({ user }) => (
          <Can
            role={user.role}
            perform="dashboard-page:visit"
            yes={() => (
              <div>
                <Navbar user={user}/>
                <div style={{padding:"1em"}}>
                  <div>
                    <EmployeeTable />
                    {console.log(user.role)}
                  </div>
                </div>
              </div>
            )}
            no={() => <Redirect to="/" />}
          />
        )}
      </AuthConsumer>
  )
}

}

export default DashboardPage;

/*<AuthConsumer>
    {({ user }) => (
      <Can
        role={user.role}
        perform="dashboard-page:visit"
        yes={() => (
          <div>
            <Navbar user={user}/>
            <div style={{padding:"1em"}}>
              <div>
                <EmployeeTable />
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="/dashboard/1">1</a></li>
                    <li className="page-item"><a className="page-link" href="/dashboard/2">2</a></li>
                    <li className="page-item"><a className="page-link" href="/dashboard/3">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        )}
        no={() => <Redirect to="/" />}
      />
    )}
  </AuthConsumer>*/
