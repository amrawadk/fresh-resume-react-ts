import { FC } from "react";
import "./App.less";

import { Typography, Layout } from "antd";

import NavigationMenu from "./components/NavigationMenu";

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
      <Content>Test this</Content>
      <Footer>Footer</Footer>
    </Layout>
  </div>
);

export default App;
