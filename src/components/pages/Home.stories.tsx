import Home, { HomeProps } from "./Home";
import { Primary } from "../sections/Banner.stories";
import { Main } from "../sections/Projects.stories";

export default {
  component: Home,
  title: "Pages/Home",
};

const Template: Home = (args: HomeProps) => <Home {...args} />;

export const HomeMain = Template.bind({});

// TODO: fix this `project_propos`
HomeMain.args = { banner_props: Primary.args, projects_props: Main.args };
