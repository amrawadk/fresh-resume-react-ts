import React from "react";
import Banner, { BannerProps } from "../sections/Banner";
import NavigationMenu from "../sections/NavigationMenu";

export interface HomeProps extends BannerProps {}
const Home: React.FC<HomeProps> = (banner_props) => (
  <div>
    <div style={{ height: "100vh" }}>
      <NavigationMenu></NavigationMenu>
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <Banner {...banner_props} />
      </div>
    </div>
    <Banner {...banner_props} />
    <Banner {...banner_props} />
    <Banner {...banner_props} />
    <Banner {...banner_props} />
    <Banner {...banner_props} />
  </div>
);

export default Home;
