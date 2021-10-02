import React from "react";
import Banner, { BannerProps } from "../sections/Banner";
import NavigationMenu from "../sections/NavigationMenu";
import Projects, { ProjectsProps } from "../sections/Projects";
import Jobs, { JobsProps } from "../sections/jobs";

export interface HomeProps {
  banner: BannerProps;
  projects: ProjectsProps;
  jobs: JobsProps;
}
const Home: React.FC<HomeProps> = ({ banner, projects, jobs }) => (
  <div>
    <div style={{ height: "100vh" }}>
      <NavigationMenu></NavigationMenu>
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <Banner {...banner} />
      </div>
    </div>
    <Projects {...projects} />
    <Jobs {...jobs} />
  </div>
);

export default Home;
