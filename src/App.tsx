import React, { FC } from "react";
import "./App.less";

import { Layout } from "antd";

import { Menu, Row, Col, Avatar, Typography } from "antd";
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

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

const App: FC = () => (
  <div className="App">
    <Layout>
      <NavigationMenu />

      <Content>
        <div style={{ position: "relative", width: "100%" }}>
          <img
            alt=""
            src="https://backgroundcheckall.com/wp-content/uploads/2017/12/web-development-background-8.jpg"
          ></img>
          <Title
            style={{
              position: "absolute",
              top: "50%",
              alignContent: "center",
              width: "100%",
              color: "white",
            }}
          >
            Hi, I'm Amr
          </Title>
        </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </div>
);

export default App;
