import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";

class Navbar extends Component {
  state = {
    activeItem: this.props.activeItem,
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  };

  logout() {
    console.log("auth in navbar is null = ",this.props.auth==null);
    this.props.auth.logout();
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          href="/home"
          onClick = {this.handleItemClick}
        />
        <Menu.Item
          name="teams"
          active={activeItem === "teams"}
          href="/teams"
          onClick = {this.handleItemClick}
        />
        <Menu.Item
          name="payroll"
          active={activeItem === "payroll"}
          href="/payroll"
          onClick = {this.handleItemClick}
        />

        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            name="logout"
            active={activeItem === "logout"}
            onClick={this.logout.bind(this)}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Navbar;
