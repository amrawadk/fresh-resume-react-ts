import "./App.less";

import { FC } from "react";

import Home, { HomeProps } from "./components/pages/Home";
import data from "./resume.json";

let args: HomeProps = {
  jobs: {
    summary: data.employment.summary,
    // @ts-ignore
    jobs: data.employment.history,
  },
  banner: {
    name: data.name,
    brief: data.info.brief,
    // @ts-ignore
    socialIcons: data.social,
  },
  projects: {
    // @ts-ignore
    projects: data.projects,
  },
};

const App: FC = () => <div className="App">{<Home {...args} />}</div>;

export default App;
