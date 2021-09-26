import React from "react";
import Banner, { BannerProps } from "../sections/Banner";
import NavigationMenu from "../sections/NavigationMenu";
import Projects, { ProjectsProps } from "../sections/Projects";

export interface HomeProps {
  banner_props: BannerProps;
  projects_props: ProjectsProps;
}
const Home: React.FC<HomeProps> = ({ banner_props, projects_props }) => (
  <div>
    <div style={{ height: "100vh" }}>
      <NavigationMenu></NavigationMenu>
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <Banner {...banner_props} />
      </div>
    </div>
    <Projects {...projects_props} />
  </div>
);

export default Home;
