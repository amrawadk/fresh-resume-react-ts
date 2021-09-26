import React from "react";

import { Menu } from "antd";

class NavigationMenu extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = (e: any) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        style={{ justifyContent: "center", width: "100%" }}
      >
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="projects">Projects</Menu.Item>
        <Menu.Item key="resume">Resume</Menu.Item>
        <Menu.Item key="Testmonials">Testmonials</Menu.Item>
        <Menu.Item key="contact">Contact</Menu.Item>
      </Menu>
    );
  }
}

export default NavigationMenu;
