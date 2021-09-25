import React, { FC } from "react";
import { Button } from "antd";
import "./App.less";

import { Layout } from "antd";

import { Menu, Row, Col, Avatar } from "antd";
import { HomeOutlined } from "@ant-design/icons";

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
      <Header>
        <Row justify="space-between">
          <Col>
            <Avatar icon={<HomeOutlined />} />
          </Col>
          <Col>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[current]}
              mode="horizontal"
              theme="dark"
              style={{ marginLeft: "auto" }}
            >
              <Menu.Item key="home">Home</Menu.Item>
              <Menu.Item key="projects">Projects</Menu.Item>
              <Menu.Item key="resume">Resume</Menu.Item>
              <Menu.Item key="Testmonials">Testmonials</Menu.Item>
              <Menu.Item key="contact">Contact</Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
    );
  }
}

const { Header, Footer, Content } = Layout;

const App: FC = () => (
  <div className="App">
    <Layout>
      <NavigationMenu />

      <Content>
        <Button type="primary">Button</Button>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </div>
);

export default App;
