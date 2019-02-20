import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";

class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  };

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item 
          name="home" 
          active={activeItem === "home"} 
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="teams"
          active={activeItem === "teams"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="payroll"
          active={activeItem === "payroll"}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            name="sign in"
            active={activeItem === "sign in"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="logout"
            active={activeItem === "logout"}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Navbar;