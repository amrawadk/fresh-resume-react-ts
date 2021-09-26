import React from "react";
import Banner, { BannerProps } from "../sections/Banner";
import NavigationMenu from "../sections/NavigationMenu";

export interface HomeProps extends BannerProps {}
const Home: React.FC<HomeProps> = (banner_props) => (
  <div>
    <NavigationMenu></NavigationMenu>
    <Banner {...banner_props} />
  </div>
);

export default Home;
